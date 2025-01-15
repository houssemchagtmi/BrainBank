import {
  Typography,
  Card,
  Button,
  Space,
  List,
  Avatar,
  Tag,
  Modal,
  Input,
  Form,
  Select,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function WorkspaceDetailsPage() {
  const { workspaceId, organizationId } = useParams()
  const navigate = useNavigate()
  const { user, checkOrganizationRole } = useUserContext()
  const [isSettingsModalVisible, setIsSettingsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const { data: workspace, refetch } = Api.workspace.findFirst.useQuery({
    where: { id: workspaceId },
    include: {
      members: {
        include: { user: true },
      },
      ideas: {
        include: { assignedTo: true },
      },
    },
  })

  const { mutateAsync: updateWorkspace } = Api.workspace.update.useMutation()
  const { mutateAsync: addMember } = Api.workspaceMember.create.useMutation()
  const { mutateAsync: removeMember } = Api.workspaceMember.delete.useMutation()

  const isOwner = checkOrganizationRole('owner')

  const handleUpdateWorkspace = async (values: any) => {
    await updateWorkspace({
      where: { id: workspaceId },
      data: {
        name: values.name,
        description: values.description,
        privacy: values.privacy,
      },
    })
    setIsSettingsModalVisible(false)
    refetch()
  }

  const handleAddMember = async (userId: string) => {
    await addMember({
      data: {
        userId,
        workspaceId: workspaceId!,
      },
    })
    refetch()
  }

  const handleRemoveMember = async (memberId: string) => {
    await removeMember({
      where: { id: memberId },
    })
    refetch()
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Title level={2}>
              <i className="las la-project-diagram" /> {workspace?.name}
            </Title>
            {isOwner && (
              <Button
                type="primary"
                onClick={() => setIsSettingsModalVisible(true)}
              >
                <i className="las la-cog" /> Workspace Settings
              </Button>
            )}
          </div>

          <Text>{workspace?.description}</Text>

          <Card
            title={
              <>
                <i className="las la-users" /> Team Members
              </>
            }
          >
            <List
              dataSource={workspace?.members}
              renderItem={member => (
                <List.Item
                  actions={[
                    isOwner && member.user.id !== user?.id && (
                      <Button
                        danger
                        onClick={() => handleRemoveMember(member.id)}
                      >
                        Remove
                      </Button>
                    ),
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={member.user.pictureUrl} />}
                    title={member.user.name}
                    description={member.user.email}
                  />
                </List.Item>
              )}
            />
            {isOwner && (
              <Button
                type="dashed"
                onClick={() => handleAddMember}
                style={{ marginTop: 16 }}
              >
                <i className="las la-plus" /> Add Member
              </Button>
            )}
          </Card>

          <Card
            title={
              <>
                <i className="las la-lightbulb" /> Ideas
              </>
            }
          >
            <List
              dataSource={workspace?.ideas}
              renderItem={idea => (
                <List.Item
                  actions={[
                    <Button
                      onClick={() =>
                        navigate(
                          `/organizations/${organizationId}/ideas/${idea.id}`,
                        )
                      }
                    >
                      View Details
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    title={idea.title}
                    description={
                      <Space>
                        <Tag color="blue">{idea.status}</Tag>
                        {idea.assignedTo && (
                          <Tag color="green">
                            <i className="las la-user" /> {idea.assignedTo.name}
                          </Tag>
                        )}
                        <Text type="secondary">
                          Created {dayjs(idea.createdAt).format('MMM D, YYYY')}
                        </Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Space>

        <Modal
          title="Workspace Settings"
          open={isSettingsModalVisible}
          onCancel={() => setIsSettingsModalVisible(false)}
          onOk={() => form.submit()}
        >
          <Form
            form={form}
            initialValues={workspace}
            onFinish={handleUpdateWorkspace}
            layout="vertical"
          >
            <Form.Item
              name="name"
              label="Workspace Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="privacy" label="Privacy">
              <Select>
                <Select.Option value="PUBLIC">Public</Select.Option>
                <Select.Option value="PRIVATE">Private</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
