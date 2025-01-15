import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Innovation Analysis`,
      description: `Get instant SWOT analysis and validation of your ideas using our advanced AI engine, reducing innovation risk by up to 80%`,
      icon: <i className="las la-brain"></i>,
    },
    {
      heading: `Global Innovation Database`,
      description: `Access thousands of successful innovation cases and get inspired by what works across industries`,
      icon: <i className="las la-database"></i>,
    },
    {
      heading: `Smart Collaboration Tools`,
      description: `Enable seamless teamwork with dedicated workspaces, real-time feedback, and structured ideation workflows`,
      icon: <i className="las la-users"></i>,
    },
    {
      heading: `Trend Analysis`,
      description: `Stay ahead of market shifts with AI-powered trend detection and opportunity mapping`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Project Validation`,
      description: `Test and validate ideas before investing resources using data-driven insights and market analysis`,
      icon: <i className="las la-check-circle"></i>,
    },
    {
      heading: `Innovation Metrics`,
      description: `Track your innovation success with comprehensive analytics and ROI measurements`,
      icon: <i className="las la-analytics"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Chen`,
      designation: `Innovation Director, TechCorp`,
      content: `BrainBank transformed how we approach innovation. We've reduced our ideation time by 60% and doubled our successful product launches.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Rodriguez`,
      designation: `Startup Founder`,
      content: `The AI analysis helped us pivot our strategy early, saving us months of development time and thousands in investment.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `David Park`,
      designation: `Product Manager, InnovateCo`,
      content: `Our team's productivity skyrocketed with BrainBank's collaboration tools. We now launch products 40% faster.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for small teams and startups`,
      monthly: 49,
      yearly: 470,
      features: [
        `AI Idea Analysis`,
        `Basic Collaboration Tools`,
        `Innovation Database Access`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for growing companies`,
      monthly: 99,
      yearly: 950,
      features: [
        `Advanced AI Analysis`,
        `Team Workspaces`,
        `Trend Detection`,
        `Priority Support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `For large organizations`,
      monthly: 199,
      yearly: 1900,
      features: [
        `Custom AI Models`,
        `Enterprise Integration`,
        `Dedicated Success Manager`,
        `Custom Reporting`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does BrainBank's AI analysis work?`,
      answer: `Our AI engine analyzes your ideas against thousands of successful innovations, market trends, and industry data to provide comprehensive SWOT analysis and validation insights.`,
    },
    {
      question: `Can I integrate BrainBank with existing tools?`,
      answer: `Yes, BrainBank offers API integration with popular project management and collaboration tools, making it seamless to incorporate into your existing workflow.`,
    },
    {
      question: `What's the average ROI for companies using BrainBank?`,
      answer: `Our customers typically see a 3-5x ROI within the first year through reduced research time, faster ideation, and higher success rates in their innovation projects.`,
    },
    {
      question: `How secure is our innovation data?`,
      answer: `We use enterprise-grade encryption and comply with GDPR and SOC 2 standards to ensure your intellectual property remains completely secure.`,
    },
  ]

  const steps = [
    {
      heading: `Input Your Ideas`,
      description: `Submit your innovation concepts through our intuitive interface`,
    },
    {
      heading: `AI Analysis`,
      description: `Get instant AI-powered validation and improvement suggestions`,
    },
    {
      heading: `Collaborate`,
      description: `Work with your team to refine and enhance your concepts`,
    },
    {
      heading: `Track Success`,
      description: `Monitor your innovation metrics and ROI in real-time`,
    },
  ]

  const painPoints = [
    {
      emoji: `😓`,
      title: `Struggling with innovation failure`,
    },
    {
      emoji: `💸`,
      title: `Wasting resources on unvalidated ideas`,
    },
    {
      emoji: `⏰`,
      title: `Taking too long to bring ideas to market`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Transform Ideas into Successful Innovations`}
        subtitle={`Use AI-powered analysis to validate your ideas and reduce innovation risk by 80%`}
        buttonText={`Start Innovating Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/fw9GVk-brainbank-THYt`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={1000}
            suffixText={`successful innovations launched`}
          />
        }
      />
      <LandingSocialProof title={`Trusted by Leading Innovators`} />
      <LandingPainPoints
        title={`95% of new products fail. Don't be one of them.`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Path to Innovation Success`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Everything You Need to Innovate Successfully`}
        subtitle={`Powerful tools to validate ideas, collaborate effectively, and launch winning innovations`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands of Successful Innovators`}
        subtitle={`See how teams are transforming their innovation process with BrainBank`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Innovation Success`}
        subtitle={`Choose the plan that best fits your innovation needs`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Everything you need to know about accelerating your innovation success`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Innovation Process?`}
        subtitle={`Join thousands of successful innovators and start creating winning products today`}
        buttonText={`Start Your Innovation Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
