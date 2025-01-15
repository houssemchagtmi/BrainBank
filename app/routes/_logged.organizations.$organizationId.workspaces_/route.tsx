import {
  Typography,
  Card,
  Button,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Select,
  Statistic,
  Space,
  Table,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function WorkspacesPage() {
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false)
  const [form] = Form.useForm()

  // Fetch workspaces with related data
  const { data: workspaces, refetch } = Api.workspace.findMany.useQuery({
    where: { organizationId },
    include: {
      members: { include: { user: true } },
      tasks: true,
    },
  })

  // Create workspace mutation
  const { mutateAsync: createWorkspace } = Api.workspace.create.useMutation()

  const handleCreateWorkspace = async (values: any) => {
    try {
      await createWorkspace({
        data: {
          name: values.name,
          description: values.description,
          privacy: values.privacy,
          organizationId,
          members: {
            create: {
              userId: user!.id,
              role: 'OWNER',
            },
          },
        },
      })
      setIsCreateModalVisible(false)
      form.resetFields()
      refetch()
    } catch (error) {
      console.error('Error creating workspace:', error)
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: any) => (
        <Space>
          <i className="las la-project-diagram" />
          <a
            onClick={() =>
              navigate(
                `/organizations/${organizationId}/workspaces/${record.id}`,
              )
            }
          >
            {text}
          </a>
        </Space>
      ),
    },
    {
      title: 'Members',
      key: 'members',
      render: (_: any, record: any) => (
        <Space>
          <i className="las la-users" />
          {record.members?.length || 0}
        </Space>
      ),
    },
    {
      title: 'Tasks',
      key: 'tasks',
      render: (_: any, record: any) => (
        <Space>
          <i className="las la-tasks" />
          {record.tasks?.length || 0}
        </Space>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('MMM D, YYYY'),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Title level={2}>
              <i className="las la-folder-open" style={{ marginRight: 8 }} />
              Workspaces
            </Title>
            <Text type="secondary">
              Manage and organize your projects efficiently
            </Text>
          </Col>
          <Col>
            <Button
              type="primary"
              onClick={() => setIsCreateModalVisible(true)}
            >
              <i className="las la-plus" /> Create Workspace
            </Button>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-folder" /> Total Workspaces
                  </>
                }
                value={workspaces?.length || 0}
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-users" /> Active Members
                  </>
                }
                value={
                  workspaces?.reduce(
                    (acc, ws) => acc + (ws.members?.length || 0),
                    0,
                  ) || 0
                }
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card>
              <Statistic
                title={
                  <>
                    <i className="las la-tasks" /> Total Tasks
                  </>
                }
                value={
                  workspaces?.reduce(
                    (acc, ws) => acc + (ws.tasks?.length || 0),
                    0,
                  ) || 0
                }
              />
            </Card>
          </Col>
        </Row>

        <Card>
          <Table
            dataSource={workspaces || []}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 10 }}
          />
        </Card>

        <Modal
          title={
            <>
              <i className="las la-plus-circle" /> Create New Workspace
            </>
          }
          open={isCreateModalVisible}
          onCancel={() => setIsCreateModalVisible(false)}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleCreateWorkspace}>
            <Form.Item
              name="name"
              label="Workspace Name"
              rules={[
                { required: true, message: 'Please enter workspace name' },
              ]}
            >
              <Input prefix={<i className="las la-project-diagram" />} />
            </Form.Item>

            <Form.Item name="description" label="Description">
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="privacy"
              label="Privacy Setting"
              initialValue="PRIVATE"
            >
              <Select>
                <Option value="PRIVATE">Private</Option>
                <Option value="PUBLIC">Public</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Create Workspace
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
