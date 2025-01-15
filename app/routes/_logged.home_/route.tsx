import { Typography, Card, Row, Col, Button } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { organization } = useUserContext()

  const features = [
    {
      title: 'Trending Ideas',
      description:
        'Discover and explore popular ideas from the community. Get inspired and contribute to ongoing discussions.',
      icon: 'las la-lightbulb',
      action: () => navigate(`/organizations/${organization?.id}/ideas`),
    },
    {
      title: 'Workspaces',
      description:
        'Collaborate with your team in dedicated workspaces. Organize projects and track progress efficiently.',
      icon: 'las la-project-diagram',
      action: () => navigate(`/organizations/${organization?.id}/workspaces`),
    },
    {
      title: 'AI-Powered Tools',
      description:
        'Leverage artificial intelligence to enhance your productivity and generate innovative solutions.',
      icon: 'las la-robot',
      action: () => navigate(`/organizations/${organization?.id}/ideas/create`),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Title level={1}>
            <i className="las la-rocket" style={{ marginRight: '0.5rem' }}></i>
            Welcome to Your Innovation Hub
          </Title>
          <Paragraph
            style={{ fontSize: '1.2rem', maxWidth: 800, margin: '0 auto' }}
          >
            Discover a powerful platform designed to help you collaborate,
            innovate, and bring your ideas to life. Get started by exploring our
            main features below.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                hoverable
                style={{ height: '100%' }}
                onClick={feature.action}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <i
                    className={feature.icon}
                    style={{
                      fontSize: '3rem',
                      color: '#1890ff',
                    }}
                  ></i>
                </div>
                <Title level={3} style={{ textAlign: 'center' }}>
                  {feature.title}
                </Title>
                <Paragraph style={{ textAlign: 'center' }}>
                  {feature.description}
                </Paragraph>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <Button type="primary">
                    Explore {feature.title}
                    <i
                      className="las la-arrow-right"
                      style={{ marginLeft: '0.5rem' }}
                    ></i>
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Text type="secondary">
            <i
              className="las la-info-circle"
              style={{ marginRight: '0.5rem' }}
            ></i>
            Click on any card to start exploring that feature
          </Text>
        </div>
      </div>
    </PageLayout>
  )
}
