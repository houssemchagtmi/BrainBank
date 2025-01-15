import {
  Typography,
  Form,
  Input,
  Button,
  Upload,
  message,
  Card,
  Tabs,
  Row,
  Col,
  Space,
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

export default function UserProfilePage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [passwordForm] = Form.useForm()
  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const [loading, setLoading] = useState(false)

  const handleProfileUpdate = async (values: any) => {
    try {
      setLoading(true)
      await updateUser({
        where: { id: user?.id },
        data: {
          name: values.name,
          email: values.email,
        },
      })
      message.success('Profile updated successfully')
    } catch (error) {
      message.error('Failed to update profile')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordUpdate = async (values: any) => {
    try {
      setLoading(true)
      await updateUser({
        where: { id: user?.id },
        data: {
          password: values.newPassword,
        },
      })
      passwordForm.resetFields()
      message.success('Password updated successfully')
    } catch (error) {
      message.error('Failed to update password')
    } finally {
      setLoading(false)
    }
  }

  const handlePictureUpload = async (file: File) => {
    try {
      setLoading(true)
      const { url } = await uploadFile({ file })
      await updateUser({
        where: { id: user?.id },
        data: { pictureUrl: url },
      })
      message.success('Profile picture updated successfully')
    } catch (error) {
      message.error('Failed to upload picture')
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-user-circle" /> User Profile
        </Title>
        <Text type="secondary">
          Manage your personal information and account settings
        </Text>

        <Tabs
          defaultActiveKey="1"
          items={[
            {
              key: '1',
              label: (
                <span>
                  <i className="las la-user" /> Personal Information
                </span>
              ),
              children: (
                <Card>
                  <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                      <div style={{ textAlign: 'center' }}>
                        <img
                          src={user?.pictureUrl}
                          alt="Profile"
                          style={{
                            width: 200,
                            height: 200,
                            borderRadius: '50%',
                            marginBottom: 16,
                          }}
                        />
                        <Upload
                          accept="image/*"
                          showUploadList={false}
                          customRequest={({ file }: any) =>
                            handlePictureUpload(file)
                          }
                        >
                          <Button icon={<i className="las la-camera" />}>
                            Change Picture
                          </Button>
                        </Upload>
                      </div>
                    </Col>
                    <Col xs={24} md={16}>
                      <Form
                        form={form}
                        layout="vertical"
                        initialValues={{
                          name: user?.name,
                          email: user?.email,
                        }}
                        onFinish={handleProfileUpdate}
                      >
                        <Form.Item name="name" label="Name">
                          <Input prefix={<i className="las la-user" />} />
                        </Form.Item>
                        <Form.Item name="email" label="Email">
                          <Input prefix={<i className="las la-envelope" />} />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            loading={loading}
                          >
                            Update Profile
                          </Button>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Card>
              ),
            },
            {
              key: '2',
              label: (
                <span>
                  <i className="las la-lock" /> Security
                </span>
              ),
              children: (
                <Card>
                  <Form
                    form={passwordForm}
                    layout="vertical"
                    onFinish={handlePasswordUpdate}
                  >
                    <Form.Item
                      name="newPassword"
                      label="New Password"
                      rules={[{ required: true, min: 6 }]}
                    >
                      <Input.Password prefix={<i className="las la-key" />} />
                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      label="Confirm Password"
                      dependencies={['newPassword']}
                      rules={[
                        { required: true },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue('newPassword') === value
                            ) {
                              return Promise.resolve()
                            }
                            return Promise.reject('Passwords do not match!')
                          },
                        }),
                      ]}
                    >
                      <Input.Password prefix={<i className="las la-key" />} />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                      >
                        Change Password
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              ),
            },
            {
              key: '3',
              label: (
                <span>
                  <i className="las la-history" /> Account Status
                </span>
              ),
              children: (
                <Card>
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%' }}
                  >
                    <div>
                      <Text strong>Account Status: </Text>
                      <Text>{user?.status}</Text>
                    </div>
                    <div>
                      <Text strong>Account Created: </Text>
                      <Text>
                        {dayjs(user?.createdAt).format('MMMM D, YYYY')}
                      </Text>
                    </div>
                    <div>
                      <Text strong>Last Updated: </Text>
                      <Text>
                        {dayjs(user?.updatedAt).format('MMMM D, YYYY')}
                      </Text>
                    </div>
                    <div>
                      <Text strong>Global Role: </Text>
                      <Text>{user?.globalRole}</Text>
                    </div>
                  </Space>
                </Card>
              ),
            },
          ]}
        />
      </div>
    </PageLayout>
  )
}
