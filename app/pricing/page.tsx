import { Mail, ArrowRight, Check, Calendar, Zap, Shield, Clock, Sparkles } from 'lucide-react'

const services = [
  {
    id: 'consultation',
    title: 'Free Consultation',
    price: 'Free',
    delivery: '15 min call',
    description: 'Schedule a quick intro call',
    features: [
      'Understand requirements',
      'Tech suggestions',
      'Budget clarity',
      'High-level roadmap',
    ],
    cta: 'Book Now',
    ctaLink: 'https://calendly.com/ritvikshukla261/15min',
    highlight: false,
  },
  {
    id: 'single-page',
    title: 'Single-Page Website',
    price: '₹12,999',
    delivery: '7–10 days',
    description: 'Landing pages & personal portfolios',
    features: [
      'Responsive design',
      'Deployment included',
      'SEO basics',
      'Mobile optimized',
      '1 month support',
    ],
    cta: 'Get Started',
    ctaLink: 'mailto:ritvikshukla261@gmail.com?subject=Single-Page Website Inquiry',
    highlight: false,
  },
  {
    id: 'multi-page',
    title: '3–4 Page Website',
    price: '₹24,999',
    delivery: '2–3 weeks',
    description: 'Professional multi-page websites',
    features: [
      'React / Next.js',
      'Fast performance',
      'SEO optimized',
      'Contact forms',
      '2 months support',
    ],
    cta: 'Get Started',
    ctaLink: 'mailto:ritvikshukla261@gmail.com?subject=Multi-Page Website Inquiry',
    highlight: false,
  },
  {
    id: 'business',
    title: 'Business Website',
    price: '₹79,999',
    delivery: '3–5 weeks',
    description: 'Scalable business setup with CMS',
    features: [
      'Next.js + Headless CMS',
      'Custom workflows',
      'Payments',
      'Admin dashboard',
      'SEO & analytics',
      '3 months support',
    ],
    cta: 'Get Started',
    ctaLink: 'mailto:ritvikshukla261@gmail.com?subject=Business Website Inquiry',
    highlight: true,
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    price: '₹1,29,999',
    delivery: '6–10 weeks',
    description: 'Cross-platform mobile apps',
    features: [
      'Android + iOS',
      'Auth & APIs',
      'Custom UI/UX',
      'Store publishing',
      'Push notifications',
      '4 months support',
    ],
    cta: 'Get Started',
    ctaLink: 'mailto:ritvikshukla261@gmail.com?subject=Mobile App Inquiry',
    highlight: false,
  },
  {
    id: 'devops',
    title: 'DevOps / Cloud',
    price: '₹34,999',
    delivery: '7–14 days',
    description: 'Production infrastructure',
    features: ['AWS / GCP / DO', 'CI/CD', 'Kubernetes', 'IaC', 'Monitoring', 'Security & SSL'],
    cta: 'Get Started',
    ctaLink: 'mailto:ritvikshukla261@gmail.com?subject=DevOps Setup Inquiry',
    highlight: false,
  },
  {
    id: 'llm-agents',
    title: 'LLM & AI Agents',
    price: '₹69,999',
    delivery: '4–6 weeks',
    description: 'AI automation & agents',
    features: [
      'Chatbots & RAG',
      'Custom agents',
      'Workflow automation',
      'Vector databases',
      'App integration',
      '3 months support',
    ],
    cta: 'Get Started',
    ctaLink: 'mailto:ritvikshukla261@gmail.com?subject=LLM & AI Agents Inquiry',
    highlight: true,
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    price: '₹9,999',
    delivery: 'Monthly',
    description: 'Ongoing support & upkeep',
    features: [
      'Bug fixes',
      'Minor features',
      'Server checks',
      'Security updates',
      'Priority support',
    ],
    cta: 'Subscribe',
    ctaLink: 'mailto:ritvikshukla261@gmail.com?subject=Maintenance Plan Inquiry',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <div className="mt-10 min-h-screen rounded-xl bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:px-10">
        <div className="mb-28 text-center">
          <div className="bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Transparent Pricing
          </div>

          <h1 className="mb-6 text-5xl font-semibold text-gray-900 dark:text-gray-100">
            Services & Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Production-grade systems with clear scope, timelines, and pricing.
          </p>
        </div>

        <div className="mb-32 grid items-stretch gap-14 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative flex h-full flex-col rounded-2xl border bg-white px-8 py-10 transition-shadow dark:bg-gray-900 ${
                service.highlight
                  ? 'border-primary-500 shadow-lg'
                  : 'border-gray-200 dark:border-gray-800'
              }`}
            >
              {service.highlight && (
                <div className="bg-primary-500 absolute -top-4 left-6 rounded-full px-3 py-1 text-xs font-semibold text-white">
                  Popular
                </div>
              )}

              <div className="flex flex-1 flex-col">
                <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="text-4xl font-semibold text-gray-900 dark:text-gray-100">
                    {service.price}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    {service.delivery}
                  </div>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="text-primary-500 mt-0.5 h-4 w-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={service.ctaLink}
                target={service.id === 'consultation' ? '_blank' : undefined}
                rel={service.id === 'consultation' ? 'noopener noreferrer' : undefined}
                className={`mt-10 flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
                  service.highlight
                    ? 'bg-primary-600 hover:bg-primary-500 text-white'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-200 px-12 py-20 text-center dark:border-gray-800">
          <Shield className="text-primary-500 mx-auto mb-6 h-14 w-14" />
          <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Custom Requirements
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Have a specific idea or complex system in mind? Let’s talk.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:ritvikshukla261@gmail.com?subject=Custom Project Inquiry"
              className="bg-primary-600 hover:bg-primary-500 rounded-xl px-8 py-4 font-semibold text-white"
            >
              <Mail className="mr-2 inline h-4 w-4" />
              Email Me
            </a>
            <a
              href="https://calendly.com/ritvikshukla261/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              <Calendar className="mr-2 inline h-4 w-4" />
              Schedule Call
            </a>
          </div>
        </div>

        <div className="mt-32 grid gap-20 md:grid-cols-3">
          <div className="text-center">
            <Zap className="text-primary-500 mx-auto mb-4 h-10 w-10" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Clear milestones and timelines
            </p>
          </div>
          <div className="text-center">
            <Shield className="text-primary-500 mx-auto mb-4 h-10 w-10" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Quality Focused
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Clean, scalable, production-ready code
            </p>
          </div>
          <div className="text-center">
            <Clock className="text-primary-500 mx-auto mb-4 h-10 w-10" />
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Reliable Support
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Continued help after delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
