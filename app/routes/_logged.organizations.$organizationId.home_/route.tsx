import { Typography, Card, Row, Col, Button, List, Space } from 'antd'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user, organizations } = useUserContext()

  // Fetch trending ideas
  const { data: trendingIdeas } = Api.socialNetworkItem.findMany.useQuery({
    take: 5,
    orderBy: { likes: { _count: 'desc' } },
    include: {
      likes: true,
      comments: true,
    },
  })

  // Fetch recent workspaces
  const { data: recentWorkspaces } = Api.organization.findMany.useQuery({
    where: { roles: { some: { userId: user?.id } } },
    take: 3,
    orderBy: { updatedAt: 'desc' },
  })

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Welcome back, {user?.name}!</Title>
        <Text type="secondary">
          Stay updated with trending ideas and your recent activities
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          {/* Quick Actions */}
          <Col xs={24} md={8}>
            <Card
              title={
                <>
                  <i className="las la-bolt"></i> Quick Actions
                </>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Button
                  type="primary"
                  block
                  icon={<i className="las la-lightbulb"></i>}
                  onClick={() =>
                    navigate(
                      `/organizations/${organizations?.[0]?.id}/ideas/create`,
                    )
                  }
                >
                  Create New Idea
                </Button>
                <Button
                  block
                  icon={<i className="las la-project-diagram"></i>}
                  onClick={() =>
                    navigate(
                      `/organizations/${organizations?.[0]?.id}/workspaces`,
                    )
                  }
                >
                  Manage Workspaces
                </Button>
                <Button
                  block
                  icon={<i className="las la-robot"></i>}
                  onClick={() =>
                    navigate(
                      `/organizations/${organizations?.[0]?.id}/ai-tools`,
                    )
                  }
                >
                  AI-Powered Tools
                </Button>
              </Space>
            </Card>
          </Col>

          {/* Trending Ideas */}
          <Col xs={24} md={8}>
            <Card
              title={
                <>
                  <i className="las la-fire"></i> Trending Ideas
                </>
              }
              extra={
                <Button
                  type="link"
                  onClick={() =>
                    navigate(`/organizations/${organizations?.[0]?.id}/ideas`)
                  }
                >
                  View All
                </Button>
              }
            >
              <List
                dataSource={trendingIdeas}
                renderItem={item => (
                  <List.Item>
                    <Space>
                      <i className="las la-lightbulb"></i>
                      <div>
                        <Text strong>Idea #{item.id.slice(0, 8)}</Text>
                        <br />
                        <Text type="secondary">
                          {item.likes.length} likes • {item.comments.length}{' '}
                          comments
                        </Text>
                      </div>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          {/* Recent Workspaces */}
          <Col xs={24} md={8}>
            <Card
              title={
                <>
                  <i className="las la-history"></i> Recent Workspaces
                </>
              }
              extra={
                <Button
                  type="link"
                  onClick={() =>
                    navigate(
                      `/organizations/${organizations?.[0]?.id}/workspaces`,
                    )
                  }
                >
                  View All
                </Button>
              }
            >
              <List
                dataSource={recentWorkspaces}
                renderItem={workspace => (
                  <List.Item>
                    <Space>
                      <i className="las la-folder"></i>
                      <div>
                        <Text strong>{workspace.name}</Text>
                        <br />
                        <Text type="secondary">
                          Last updated {dayjs(workspace.updatedAt).fromNow()}
                        </Text>
                      </div>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        {/* Features Overview */}
        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          <Col xs={24}>
            <Card>
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Space
                    direction="vertical"
                    align="center"
                    style={{ width: '100%' }}
                  >
                    <i className="las la-lightbulb la-3x"></i>
                    <Title level={4}>Trending Ideas</Title>
                    <Text type="secondary">
                      Discover popular innovations worldwide
                    </Text>
                  </Space>
                </Col>
                <Col xs={24} md={8}>
                  <Space
                    direction="vertical"
                    align="center"
                    style={{ width: '100%' }}
                  >
                    <i className="las la-project-diagram la-3x"></i>
                    <Title level={4}>Workspaces</Title>
                    <Text type="secondary">
                      Organize and collaborate on your projects
                    </Text>
                  </Space>
                </Col>
                <Col xs={24} md={8}>
                  <Space
                    direction="vertical"
                    align="center"
                    style={{ width: '100%' }}
                  >
                    <i className="las la-robot la-3x"></i>
                    <Title level={4}>AI-Powered Tools</Title>
                    <Text type="secondary">
                      Enhance your workflow with AI assistance
                    </Text>
                  </Space>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
