import {
  Typography,
  Card,
  Row,
  Col,
  DatePicker,
  Select,
  Button,
  Table,
  Space,
  Statistic,
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

export default function AnalyticsPage() {
  const { organizationId } = useParams()
  const [dateRange, setDateRange] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([
    dayjs().subtract(30, 'days'),
    dayjs(),
  ])
  const [category, setCategory] = useState<string>('all')

  // Fetch analytics metrics
  const { data: metrics } = Api.analyticsLocalMetric.findMany.useQuery({})

  const { mutateAsync: generatePdf } =
    Api.documentProcessor.htmlToPdf.useMutation()

  const engagementColumns = [
    { title: 'Metric Key', dataIndex: 'key', key: 'key' },
    { title: 'Positive Count', dataIndex: 'positive', key: 'positive' },
    { title: 'Negative Count', dataIndex: 'negative', key: 'negative' },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => dayjs(date).format('YYYY-MM-DD'),
    },
  ]

  const engagementData = metrics?.map(metric => ({
    key: metric.key,
    positive: metric.countPositive,
    negative: metric.countNegative,
    createdAt: metric.createdAt,
  }))

  const handleExport = async (format: 'pdf' | 'csv') => {
    if (format === 'pdf') {
      const html = `
        <html>
          <body>
            <h1>Analytics Report</h1>
            <p>Period: ${dateRange[0].format(
              'YYYY-MM-DD',
            )} to ${dateRange[1].format('YYYY-MM-DD')}</p>
            ${JSON.stringify(engagementData)}
          </body>
        </html>
      `
      const { url } = await generatePdf({ html })
      window.open(url, '_blank')
    }
  }

  const totalPositive =
    metrics?.reduce((acc, m) => acc + m.countPositive, 0) || 0
  const totalNegative =
    metrics?.reduce((acc, m) => acc + m.countNegative, 0) || 0
  const totalMetrics = metrics?.length || 0

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-line" style={{ marginRight: '8px' }}></i>
          Analytics Dashboard
        </Title>
        <Text type="secondary">
          Track engagement metrics and analyze trends
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} lg={24}>
            <Card>
              <Space style={{ marginBottom: '16px' }}>
                <RangePicker
                  value={dateRange}
                  onChange={dates => dates && setDateRange(dates)}
                />
                <Select
                  value={category}
                  onChange={setCategory}
                  style={{ width: 200 }}
                  options={[
                    { value: 'all', label: 'All Categories' },
                    { value: 'innovation', label: 'Innovation' },
                    { value: 'technology', label: 'Technology' },
                    { value: 'process', label: 'Process' },
                  ]}
                />
                <Button type="primary" onClick={() => handleExport('pdf')}>
                  <i
                    className="las la-file-pdf"
                    style={{ marginRight: '4px' }}
                  ></i>
                  Export PDF
                </Button>
                <Button onClick={() => handleExport('csv')}>
                  <i
                    className="las la-file-csv"
                    style={{ marginRight: '4px' }}
                  ></i>
                  Export CSV
                </Button>
              </Space>

              <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                  <Card>
                    <Statistic
                      title="Total Metrics"
                      value={totalMetrics}
                      prefix={<i className="las la-chart-bar"></i>}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={8}>
                  <Card>
                    <Statistic
                      title="Positive Engagements"
                      value={totalPositive}
                      prefix={<i className="las la-thumbs-up"></i>}
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={8}>
                  <Card>
                    <Statistic
                      title="Negative Engagements"
                      value={totalNegative}
                      prefix={<i className="las la-thumbs-down"></i>}
                    />
                  </Card>
                </Col>
              </Row>

              <Table
                style={{ marginTop: '24px' }}
                columns={engagementColumns}
                dataSource={engagementData}
                pagination={{ pageSize: 10 }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
