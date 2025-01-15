import {
  Typography,
  Card,
  Button,
  Rate,
  Input,
  List,
  Avatar,
  Space,
  message,
  Divider,
  Row,
  Col,
} from 'antd'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { Prisma } from '@prisma/client'
type SocialItemWithRelations = Prisma.SocialNetworkItemGetPayload<{
  include: {
    likes: { include: { user: true } }
    comments: { include: { user: true } }
    targetUser: true
  }
}>
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function IdeaDetailsPage() {
  const { ideaId, organizationId } = useParams()
  const navigate = useNavigate()
  const [comment, setComment] = useState('')
  const { user } = useUserContext()

  const { data: socialItem, refetch } =
    Api.socialNetworkItem.findFirst.useQuery({
      where: { id: ideaId },
      include: {
        likes: { include: { user: true } },
        comments: { include: { user: true } },
        targetUser: true,
      },
    })

  const { data: relatedItems } = Api.socialNetworkItem.findMany.useQuery({
    where: {
      NOT: { id: ideaId },
    },
    take: 3,
    include: {
      targetUser: true,
    },
  })

  const { mutateAsync: addComment } =
    Api.socialNetworkComment.create.useMutation()
  const { mutateAsync: toggleLike } = Api.socialNetworkLike.create.useMutation()
  const { mutateAsync: toggleFollow } =
    Api.socialNetworkFollow.create.useMutation()
  const { mutateAsync: generateSwot } = Api.ai.generateText.useMutation()

  const [swotAnalysis, setSwotAnalysis] = useState('')

  const handleGenerateSwot = async () => {
    if (!socialItem?.targetUser?.name) return
    const prompt = `Generate a SWOT analysis for the following idea: ${socialItem.targetUser.name}`
    const response = await generateSwot({ prompt })
    setSwotAnalysis(response.answer)
  }

  const handleComment = async () => {
    if (!comment.trim() || !user?.id || !socialItem?.id) return
    await addComment({
      data: {
        content: comment,
        itemId: socialItem.id,
        userId: user.id,
      },
    })
    setComment('')
    refetch()
    message.success('Comment added successfully')
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}`)
        break
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        )
        break
      case 'email':
        window.open(`mailto:?subject=Check out this idea&body=${url}`)
        break
    }
  }

  if (!socialItem || !socialItem.targetUser) return null

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={16}>
            <Card>
              <Title level={2}>{socialItem.targetUser.name}</Title>
              <Space>
                <Avatar src={socialItem.targetUser.pictureUrl} />
                <Text>By {socialItem.targetUser.name}</Text>
                <Text type="secondary">
                  {dayjs(socialItem.createdAt).format('MMM D, YYYY')}
                </Text>
              </Space>
              <Divider />

              <Space size="large">
                <Button
                  type="primary"
                  icon={<i className="las la-heart" />}
                  onClick={() =>
                    user?.id &&
                    toggleLike({
                      data: {
                        itemId: socialItem.id,
                        userId: user.id,
                      },
                    })
                  }
                >
                  {socialItem.likes?.length || 0} Likes
                </Button>
                <Button
                  icon={<i className="las la-bell" />}
                  onClick={() =>
                    user?.id &&
                    socialItem.targetUser?.id &&
                    toggleFollow({
                      data: {
                        followerId: user.id,
                        profileId: socialItem.targetUser.id,
                      },
                    })
                  }
                >
                  Following
                </Button>
              </Space>

              <Divider />
              <Title level={4}>Share</Title>
              <Space>
                <Button
                  icon={<i className="lab la-twitter" />}
                  onClick={() => handleShare('twitter')}
                >
                  Twitter
                </Button>
                <Button
                  icon={<i className="lab la-linkedin" />}
                  onClick={() => handleShare('linkedin')}
                >
                  LinkedIn
                </Button>
                <Button
                  icon={<i className="las la-envelope" />}
                  onClick={() => handleShare('email')}
                >
                  Email
                </Button>
              </Space>
            </Card>

            <Card style={{ marginTop: 24 }}>
              <Title level={4}>Comments</Title>
              <Space.Compact style={{ width: '100%', marginBottom: 16 }}>
                <Input
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Add a comment..."
                />
                <Button type="primary" onClick={handleComment}>
                  Submit
                </Button>
              </Space.Compact>
              <List
                dataSource={socialItem.comments}
                renderItem={comment => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={comment.user?.pictureUrl} />}
                      title={comment.user?.name}
                      description={comment.content}
                    />
                    <Text type="secondary">
                      {dayjs(comment.createdAt).fromNow()}
                    </Text>
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card>
              <Title level={4}>AI SWOT Analysis</Title>
              <Button
                type="primary"
                onClick={handleGenerateSwot}
                icon={<i className="las la-robot" />}
              >
                Generate Analysis
              </Button>
              {swotAnalysis && (
                <Paragraph style={{ marginTop: 16 }}>{swotAnalysis}</Paragraph>
              )}
            </Card>

            <Card style={{ marginTop: 24 }}>
              <Title level={4}>Related Items</Title>
              <List
                dataSource={relatedItems}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                        <a
                          onClick={() =>
                            navigate(
                              `/organizations/${organizationId}/ideas/${item.id}`,
                            )
                          }
                        >
                          {item.targetUser?.name}
                        </a>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
