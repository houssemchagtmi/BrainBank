import {
  Typography,
  Input,
  Select,
  Card,
  Row,
  Col,
  Button,
  Space,
  Tag,
  Tooltip,
  notification,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { Search } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function IdeasExplorerPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('recent')
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([])
  const [selectedComplexity, setSelectedComplexity] = useState<string[]>([])
  const [selectedStage, setSelectedStage] = useState<string[]>([])

  // Fetch social network items with filters
  const { data: items, isLoading } = Api.socialNetworkItem.findMany.useQuery({
    include: {
      likes: {
        include: {
          user: true,
        },
      },
      comments: {
        include: {
          user: true,
        },
      },
    },
    orderBy:
      sortBy === 'recent'
        ? { createdAt: 'desc' }
        : { likes: { _count: 'desc' } },
  })

  // Follow/save item mutation
  const { mutateAsync: followItem } =
    Api.socialNetworkFollow.create.useMutation()

  const handleSaveIdea = async (itemId: string) => {
    try {
      await followItem({
        data: {
          followerId: itemId,
          profileId: organizationId!,
        },
      })
      notification.success({ message: 'Item saved successfully!' })
    } catch (error) {
      notification.error({ message: 'Failed to save item' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-lightbulb" style={{ marginRight: 8 }}></i>
          Ideas Explorer
        </Title>
        <Text type="secondary">
          Discover and explore innovative ideas from our community
        </Text>

        <div style={{ marginTop: 24 }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={8}>
              <Search
                placeholder="Search ideas..."
                onChange={e => setSearchQuery(e.target.value)}
                style={{ width: '100%' }}
                prefix={<i className="las la-search"></i>}
              />
            </Col>
            <Col xs={24} md={16}>
              <Space wrap>
                <Select
                  mode="multiple"
                  placeholder="Industry"
                  style={{ minWidth: 150 }}
                  onChange={setSelectedIndustry}
                  options={[
                    { label: 'Technology', value: 'technology' },
                    { label: 'Healthcare', value: 'healthcare' },
                    { label: 'Education', value: 'education' },
                  ]}
                />
                <Select
                  mode="multiple"
                  placeholder="Complexity"
                  style={{ minWidth: 150 }}
                  onChange={setSelectedComplexity}
                  options={[
                    { label: 'Low', value: 'low' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'High', value: 'high' },
                  ]}
                />
                <Select
                  mode="multiple"
                  placeholder="Stage"
                  style={{ minWidth: 150 }}
                  onChange={setSelectedStage}
                  options={[
                    { label: 'Concept', value: 'concept' },
                    { label: 'Development', value: 'development' },
                    { label: 'Launch', value: 'launch' },
                  ]}
                />
                <Select
                  value={sortBy}
                  onChange={setSortBy}
                  style={{ minWidth: 150 }}
                  options={[
                    { label: 'Most Recent', value: 'recent' },
                    { label: 'Most Popular', value: 'popular' },
                  ]}
                />
              </Space>
            </Col>
          </Row>
        </div>

        <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
          {items?.map(item => (
            <Col xs={24} sm={12} lg={8} key={item.id}>
              <Card
                hoverable
                actions={[
                  <Tooltip title="Save Item">
                    <Button
                      type="text"
                      icon={<i className="las la-bookmark"></i>}
                      onClick={() => handleSaveIdea(item.id)}
                    />
                  </Tooltip>,
                  <Tooltip title="View Details">
                    <Button
                      type="text"
                      icon={<i className="las la-external-link-alt"></i>}
                      onClick={() =>
                        navigate(
                          `/organizations/${organizationId}/items/${item.id}`,
                        )
                      }
                    />
                  </Tooltip>,
                ]}
              >
                <Title level={4}>
                  {item.targetComment?.content || 'Untitled'}
                </Title>
                <Text type="secondary">
                  {item.targetComment?.content?.substring(0, 150)}...
                </Text>
                <div style={{ marginTop: 16 }}>
                  <Space wrap>
                    <Tag color="blue">
                      <i className="las la-thumbs-up"></i>{' '}
                      {item.likes?.length || 0}
                    </Tag>
                    <Tag color="green">
                      <i className="las la-comment"></i>{' '}
                      {item.comments?.length || 0}
                    </Tag>
                    <Tag color="purple">
                      <i className="las la-clock"></i>{' '}
                      {dayjs(item.createdAt).fromNow()}
                    </Tag>
                  </Space>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
