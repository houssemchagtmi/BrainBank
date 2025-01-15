import {
  Typography,
  Card,
  List,
  Switch,
  DatePicker,
  Select,
  Button,
  Tag,
  Space,
  Input,
  Modal,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NotificationsPage() {
  const { user } = useUserContext()
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(
    null,
  )
  const [filterType, setFilterType] = useState<string>('all')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [showPreferences, setShowPreferences] = useState(false)

  // Fetch notifications
  const { data: notifications, refetch } = Api.notification.findMany.useQuery({
    where: {
      userId: user?.id,
      ...(dateRange && {
        createdAt: {
          gte: dateRange[0].toISOString(),
          lte: dateRange[1].toISOString(),
        },
      }),
      ...(filterType !== 'all' && { type: filterType }),
    },
    orderBy: { createdAt: 'desc' },
  })

  // Update notification preferences
  const { mutateAsync: updatePreferences } =
    Api.notificationPreference.update.useMutation()

  // Mark as read mutation
  const { mutateAsync: markAsRead } = Api.notification.update.useMutation()

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await markAsRead({
        where: { id: notificationId },
        data: { isRead: true },
      })
      await refetch()
      message.success('Notification marked as read')
    } catch (error) {
      message.error('Failed to mark notification as read')
    }
  }

  const notificationTypes = [
    { value: 'all', label: 'All' },
    { value: 'idea', label: 'Ideas' },
    { value: 'comment', label: 'Comments' },
    { value: 'update', label: 'Updates' },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-bell" style={{ marginRight: 8 }} />
            Notifications
          </Title>
          <Text type="secondary">
            Stay updated with your latest activities and interactions
          </Text>
        </div>

        <Card>
          <Space style={{ marginBottom: 16 }} wrap>
            <Select
              value={filterType}
              onChange={setFilterType}
              options={notificationTypes}
              style={{ width: 120 }}
            />
            <RangePicker
              onChange={dates =>
                setDateRange(dates as [dayjs.Dayjs, dayjs.Dayjs])
              }
            />
            <Input
              placeholder="Search notifications"
              prefix={<i className="las la-search" />}
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
              style={{ width: 200 }}
            />
            <Button
              type="primary"
              icon={<i className="las la-cog" />}
              onClick={() => setShowPreferences(true)}
            >
              Preferences
            </Button>
          </Space>

          <List
            dataSource={notifications?.filter(n =>
              n.content.toLowerCase().includes(searchKeyword.toLowerCase()),
            )}
            renderItem={notification => (
              <List.Item
                actions={[
                  <Button
                    key="read"
                    type="link"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    Mark as read
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <i
                      className={`las ${
                        notification.type === 'idea'
                          ? 'la-lightbulb'
                          : notification.type === 'comment'
                          ? 'la-comment'
                          : 'la-bell'
                      }`}
                      style={{ fontSize: 24 }}
                    />
                  }
                  title={
                    <Space>
                      {notification.content}
                      {notification.priority === 'high' && (
                        <Tag color="red">High Priority</Tag>
                      )}
                      {!notification.isRead && <Tag color="blue">New</Tag>}
                    </Space>
                  }
                  description={dayjs(notification.createdAt).format(
                    'MMMM D, YYYY h:mm A',
                  )}
                />
              </List.Item>
            )}
          />
        </Card>

        <Modal
          title="Notification Preferences"
          open={showPreferences}
          onCancel={() => setShowPreferences(false)}
          footer={null}
        >
          <List>
            <List.Item
              actions={[
                <Switch
                  defaultChecked
                  onChange={async checked => {
                    await updatePreferences({
                      where: { userId: user?.id },
                      data: { emailNotifications: checked },
                    })
                  }}
                />,
              ]}
            >
              <List.Item.Meta
                title="Email Notifications"
                description="Receive notifications via email"
              />
            </List.Item>
            <List.Item
              actions={[
                <Switch
                  defaultChecked
                  onChange={async checked => {
                    await updatePreferences({
                      where: { userId: user?.id },
                      data: { pushNotifications: checked },
                    })
                  }}
                />,
              ]}
            >
              <List.Item.Meta
                title="Push Notifications"
                description="Receive push notifications in browser"
              />
            </List.Item>
          </List>
        </Modal>
      </div>
    </PageLayout>
  )
}
