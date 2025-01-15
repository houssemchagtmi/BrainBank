import {
  Typography,
  Form,
  Input,
  Select,
  DatePicker,
  Upload,
  Button,
  Progress,
  Card,
  Switch,
  Tag,
  Space,
  Steps,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { SocketClient } from '@/plugins/socket/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateIdeaPage() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const [currentStep, setCurrentStep] = useState(0)
  const [isDraft, setIsDraft] = useState(false)
  const [visibility, setVisibility] = useState('private')
  const [attachments, setAttachments] = useState<string[]>([])
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: generateAiAnalysis } = Api.ai.generateText.useMutation()

  const steps = [
    { title: 'Basic Info', icon: 'las la-info-circle' },
    { title: 'Details', icon: 'las la-clipboard-list' },
    { title: 'AI Analysis', icon: 'las la-robot' },
    { title: 'Review', icon: 'las la-check-circle' },
  ]

  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      setAttachments(prev => [...prev, url])
      return url
    } catch (error) {
      message.error('Failed to upload file')
      return ''
    }
  }

  const generateSwotAnalysis = async (title: string, description: string) => {
    try {
      const { answer } = await generateAiAnalysis({
        prompt: `Generate a SWOT analysis for the following idea:\nTitle: ${title}\nDescription: ${description}`,
      })
      return answer
    } catch (error) {
      message.error('Failed to generate SWOT analysis')
      return ''
    }
  }

  const handleSubmit = async (values: any) => {
    try {
      const swotAnalysis = await generateSwotAnalysis(
        values.title,
        values.description,
      )

      const ideaData = {
        title: values.title,
        description: values.description,
        category: values.category,
        deadline: values.deadline?.toISOString(),
        visibility,
        isDraft,
        attachments,
        tags: values.tags?.split(',').map((tag: string) => tag.trim()),
        swotAnalysis,
        organizationId,
      }

      // Here you would typically save the idea using your API
      // const { mutateAsync } = Api.idea.create.useMutation()
      // await mutateAsync({ data: ideaData })

      message.success('Idea created successfully!')
      navigate(`/organizations/${organizationId}/ideas`)
    } catch (error) {
      message.error('Failed to create idea')
    }
  }

  const calculateProgress = () => {
    const formValues = form.getFieldsValue()
    let completed = 0
    const totalFields = 5 // Adjust based on required fields

    if (formValues.title) completed++
    if (formValues.description) completed++
    if (formValues.category) completed++
    if (formValues.deadline) completed++
    if (formValues.tags) completed++

    return Math.round((completed / totalFields) * 100)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>
          <i className="las la-lightbulb" style={{ marginRight: 8 }}></i>
          Create New Idea
        </Title>
        <Text type="secondary">
          Share your innovative ideas with your organization
        </Text>

        <Card style={{ marginTop: 24 }}>
          <Steps
            current={currentStep}
            items={steps.map(step => ({
              title: step.title,
              icon: <i className={step.icon}></i>,
            }))}
          />

          <div style={{ marginTop: 24 }}>
            <Progress percent={calculateProgress()} status="active" />
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ marginTop: 24 }}
          >
            {currentStep === 0 && (
              <>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter your idea title" />
                </Form.Item>
                <Form.Item
                  name="category"
                  label="Category"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select category">
                    <Select.Option value="technology">Technology</Select.Option>
                    <Select.Option value="process">Process</Select.Option>
                    <Select.Option value="product">Product</Select.Option>
                  </Select>
                </Form.Item>
              </>
            )}

            {currentStep === 1 && (
              <>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[{ required: true }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Describe your idea in detail"
                  />
                </Form.Item>
                <Form.Item name="deadline" label="Deadline">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="tags" label="Tags">
                  <Input placeholder="Enter tags separated by commas" />
                </Form.Item>
                <Upload
                  customRequest={async ({ file }) => {
                    if (file instanceof File) {
                      await handleUpload(file)
                    }
                  }}
                  multiple
                  listType="picture"
                  fileList={attachments.map((url, index) => ({
                    uid: index.toString(),
                    name: `Attachment ${index + 1}`,
                    status: 'done',
                    url,
                  }))}
                >
                  <Button icon={<i className="las la-upload"></i>}>
                    Upload Attachments
                  </Button>
                </Upload>
              </>
            )}

            {currentStep === 2 && (
              <div>
                <Title level={4}>AI Analysis</Title>
                <Text>
                  The AI will analyze your idea and provide insights once you
                  submit.
                </Text>
              </div>
            )}

            {currentStep === 3 && (
              <Space direction="vertical" style={{ width: '100%' }}>
                <div>
                  <Text strong>Visibility:</Text>
                  <Select
                    value={visibility}
                    onChange={setVisibility}
                    style={{ width: 200, marginLeft: 8 }}
                  >
                    <Select.Option value="private">Private</Select.Option>
                    <Select.Option value="public">Public</Select.Option>
                    <Select.Option value="organization">
                      Organization Only
                    </Select.Option>
                  </Select>
                </div>
                <div>
                  <Text strong>Save as Draft:</Text>
                  <Switch
                    checked={isDraft}
                    onChange={setIsDraft}
                    style={{ marginLeft: 8 }}
                  />
                </div>
              </Space>
            )}

            <div style={{ marginTop: 24 }}>
              <Space>
                {currentStep > 0 && (
                  <Button onClick={() => setCurrentStep(prev => prev - 1)}>
                    <i className="las la-arrow-left"></i> Previous
                  </Button>
                )}
                {currentStep < steps.length - 1 ? (
                  <Button
                    type="primary"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                  >
                    Next <i className="las la-arrow-right"></i>
                  </Button>
                ) : (
                  <Button type="primary" htmlType="submit">
                    Submit <i className="las la-check"></i>
                  </Button>
                )}
              </Space>
            </div>
          </Form>
        </Card>
      </div>
    </PageLayout>
  )
}
