import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Award,
  ExternalLink,
} from 'lucide-react'

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 mt-10 rounded-xl">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-12 space-y-6 border-b border-gray-200 pb-8 dark:border-gray-700">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Ritvik Shukla</h1>
            <p className="text-primary-500 text-sm tracking-wider uppercase">
              Full Stack Engineer · Cloud Infrastructure · AI Applications
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a
              href="mailto:ritvikshukla261@gmail.com"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Mail className="h-4 w-4" />
              ritvikshukla261@gmail.com
            </a>
            <a
              href="tel:+918929223295"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Phone className="h-4 w-4" />
              +91 8929223295
            </a>
            <a
              href="https://github.com/ritvikshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Github className="h-4 w-4" />
              Github
            </a>
            <a
              href="https://linkedin.com/in/ritvikshukla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="mb-6 font-mono text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Technical Skills
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Languages:</span>{' '}
              Python, JavaScript, Java, Go, TypeScript
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Backend:</span>{' '}
              Node.js, Express.js, Nest.js, KTor, Spring Boot, Django, Flask
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Frontend:</span>{' '}
              HTML, CSS, React.js, Redux, Next.js, Svelte, Vue.js
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Testing:</span>{' '}
              Cypress, Pytest, React Testing Library, Mocha, Chai
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Databases:</span>{' '}
              MariaDB, PostgreSQL, MongoDB, MySQL
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-gray-100">Others:</span>{' '}
              Docker, Redis, Airtable, Kubernetes, Airflow, RabbitMQ, AWS, Terraform, Ansible
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-8 font-mono text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Work Experience
          </h2>

          <div className="space-y-10">
            <div className="border-primary-500 relative border-l-2 pl-6">
              <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Founding Engineer
                  </h3>
                  <p className="text-primary-500 font-medium">Dunes Ventures</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Jul 2025 – Present</span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  • Designed and implemented an AI-powered workspace with multi-agent orchestration,
                  enabling coordinated task execution across specialized agents with shared context,
                  state management, and deterministic handoffs.
                </li>
                <li>
                  • Architected and built a production-grade RAG pipeline featuring dynamic query
                  classification, multi-language support (50+ languages), context-aware response
                  synthesis, real-time knowledge base ingestion, embedding-based similarity search
                  with configurable thresholds, and intelligent reranking for high-precision
                  retrieval.
                </li>
                <li>
                  • Developed a Financial Modeller Agent leveraging LLMs and automated spreadsheet
                  generation to produce end-to-end financial models, including dynamic projections,
                  scenario analysis, unit economics, and auto-generated charts and visualizations
                  for founder decision-making.
                </li>
                <li>
                  • Built a fault-tolerant, distributed notification system using Amazon SQS for
                  decoupled messaging, AWS Lambda consumers with retry and exponential backoff,
                  Amazon SES for transactional email delivery, and Firebase Cloud Messaging for
                  reliable cross-platform push notifications.
                </li>
                <li>
                  • Implemented an event-driven architecture using Amazon EventBridge with
                  cross-account event routing, rule-based filtering, event archiving with 3-day
                  retention, and seamless integration across AWS MediaConvert, AWS Transcribe, and
                  downstream asynchronous processing pipelines.
                </li>
                <li>
                  • Engineered a scalable vector processing pipeline leveraging Amazon SQS (14-day
                  message retention), long-running AWS Lambda processors (900s timeout, 1024MB
                  memory), Amazon Bedrock for embedding generation, and Amazon S3 with versioning
                  and automated lifecycle policies.
                </li>
                <li>
                  • Integrated multi-modal AI capabilities including Text-to-Speech (TTS),
                  Speech-to-Text (STT), and Image Generation using foundation models, enabling
                  voice-driven interactions, real-time transcription workflows, and dynamic visual
                  content generation.
                </li>
                <li>
                  • Implemented real-time frontend updates using Server-Sent Events (SSE), streaming
                  live processing status, intermediate agent states, and task completion signals to
                  the client.
                </li>
                <li>
                  • Implemented advanced observability and LLM monitoring using Langfuse, providing
                  end-to-end tracing, structured request logging, token usage analytics, latency
                  measurement, and error rate monitoring across all AI workflows.
                </li>
              </ul>
            </div>

            <div className="border-primary-500 relative border-l-2 pl-6">
              <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Founding Engineer
                  </h3>
                  <p className="text-primary-500 font-medium">Navicater Solutions</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jul 2024 – Aug 2025
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  • Led end-to-end development of a mariner-focused social platform using React
                  Native, LLMs, and a high-performance Fastify backend integrated with AI-driven
                  services.
                </li>
                <li>
                  • Designed and built a B2B analytics and operations dashboard using Next.js,
                  Vercel AI SDK, and LLMs, enabling intelligent workflows and actionable insights
                  for maritime enterprises.
                </li>
                <li>
                  • Automated multi-platform mobile application releases for Play Store and App
                  Store using custom GitHub Actions, significantly reducing release cycles and
                  deployment errors.
                </li>
                <li>
                  • Optimized containerized build and deployment workflows to DigitalOcean Container
                  Registry and Kubernetes using GitHub Actions, Helm, and environment-specific
                  deployment strategies.
                </li>
                <li>
                  • Provisioned and managed cloud infrastructure using AWS CDK, authored reusable
                  Helm charts, and implemented secure, end-to-end CI/CD pipelines with AWS
                  CodePipeline and AWS CodeDeploy.
                </li>
                <li>
                  • Developed an AI-powered conversational assistant using FastAPI and
                  Retrieval-Augmented Generation (RAG) to support maritime operations, knowledge
                  retrieval, and real-time troubleshooting.
                </li>
              </ul>
            </div>

            <div className="border-primary-500 relative border-l-2 pl-6">
              <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Senior Engineer
                  </h3>
                  <p className="text-primary-500 font-medium">tryCoM AI</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Sep 2024 – Feb 2025
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  • Architected and maintained end-to-end backend systems, infrastructure, and CI/CD
                  pipelines across AWS EC2, Firebase Hosting, Docker, Nginx, GitHub Actions, AWS
                  CodeDeploy, and AWS CodePipeline, achieving 99.9% uptime.
                </li>
                <li>
                  • Designed and implemented secure authentication and access control using SSO for
                  AdMakerHQ.
                </li>
                <li>
                  • Engineered multi-platform social media automation by integrating the Facebook
                  Graph API and extending support to Instagram, Facebook, YouTube, and Google My
                  Business (GMB), enabling large-scale post creation, scheduling, and publishing.
                </li>
                <li>
                  • Built and optimized data pipelines including high-throughput web scraping using
                  Selenium and Beautiful Soup (reducing manual effort by 70%) and workflow
                  orchestration with Apache Airflow, improving ETL efficiency by 40%.
                </li>
                <li>
                  • Developed analytics and insights APIs delivering real-time engagement and growth
                  metrics, enabling data-driven optimization of social media strategies.
                </li>
                <li>
                  • Led frontend performance and UX improvements using Redux Toolkit, Zustand, and
                  Tanstack Query, implementing optimistic updates and resolving critical rendering
                  issues.
                </li>
                <li>
                  • Diagnosed and resolved critical performance and stability issues, including
                  memory leaks and OOM errors, and optimized Docker images from 1.7GB to 458MB (70%+
                  reduction).
                </li>
                <li>
                  • Developed and deployed AI-powered ad generation systems (audio with multi-voice
                  models and image ads), enabling hundreds of ads to be generated within seconds.
                </li>
              </ul>
            </div>

            <div className="border-primary-500 relative border-l-2 pl-6">
              <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Software Development Engineer
                  </h3>
                  <p className="text-primary-500 font-medium">Blaze AI (YC W22)</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  May 2024 – Jun 2024
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  • Built and optimized scalable data pipelines for automated ingestion, cleaning,
                  and transformation into Snowflake, using advanced Airflow DAGs to streamline
                  scraping and processing workflows.
                </li>
                <li>
                  • Integrated public Twitter APIs to enrich blockchain wallet mapping datasets and
                  contributed to the Blaze Admin application using Next.js.
                </li>
              </ul>
            </div>

            <div className="border-primary-500 relative border-l-2 pl-6">
              <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Software Development Engineer
                  </h3>
                  <p className="text-primary-500 font-medium">Alemeno</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Aug 2023 – Jan 2024
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  • Led development of customer-facing platforms including the SonicCloud website
                  and a scalable SaaS solution for laboratory testing, driving up to 40%
                  improvements in engagement and operational efficiency.
                </li>
                <li>
                  • Built real-time analytics dashboards and enforced high code quality through
                  comprehensive testing using pytest and Jest.
                </li>
              </ul>
            </div>

            <div className="border-primary-500 relative border-l-2 pl-6">
              <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Software Development Engineer
                  </h3>
                  <p className="text-primary-500 font-medium">Blaze AI (YC W22)</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Jul 2023 – Sep 2023
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  • Automated large-scale data collection and usage monitoring with Airflow,
                  including scraping over 45M records and integrating real-time reporting with
                  Slack, reducing manual effort by 50%.
                </li>
                <li>
                  • Developed full-stack data products and visualizations that strengthened lead
                  generation, improved conversion insights, and contributed to achieving 2nd place
                  on Product Hunt.
                </li>
              </ul>
            </div>

            <div className="border-primary-500 relative border-l-2 pl-6">
              <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Co-Founder
                  </h3>
                  <p className="text-primary-500 font-medium">WebX DAO</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Sep 2024 – Sep 2024
                </span>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  • Co-founded and led WebX DAO from 2020–2024, building and growing an open-source
                  Web3 community focused on blockchain, DeFi, metaverse, and emerging web
                  technologies.
                </li>
                <li>
                  • Fostered long-term collaboration among developers, creators, and blockchain
                  enthusiasts through community-driven initiatives, discussions, and learning
                  programs.
                </li>
                <li>
                  • Built and maintained a comprehensive documentation and learning portal using
                  Docusaurus, curating tutorials, guides, and resources for Web3 and blockchain
                  development.
                </li>
                <li>
                  • Part of DevNFT, an experimental NFT initiative designed to engage and reward
                  open source developers.
                </li>
                <li>
                  • Developed a Telegram bot to automate community management, handle member
                  queries, and streamline moderation and admin workflows.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-8 font-mono text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Projects
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Adaptive Bitrate Streaming Platform
                </h3>
                <a href="https://github.com/shuklaritvik06/adaptive-bitrate-streaming" target='__blank' className="text-primary-500 hover:text-primary-600">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>
                  • Built an end-to-end Adaptive Bitrate Streaming (ABR) system using HLS, enabling
                  smooth, high-quality video playback across devices and fluctuating network
                  conditions.
                </li>
                <li>
                  • Designed and deployed a secure, scalable AWS architecture using VPC, S3, Lambda,
                  SQS, ECS/ECR, CloudFormation, and CloudWatch with load balancing and secrets
                  management.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-8 font-mono text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Honours and Awards
          </h2>

          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <div className="flex items-start gap-3">
              <Award className="text-primary-500 mt-1 h-4 w-4 flex-shrink-0" />
              <p>
                Won $5,500 in total prizes, including $500 at the Polygon BUIDL IT Hackathon and
                $5,000 for DevNFT selected by the Filecoin Accelerator.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Award className="text-primary-500 mt-1 h-4 w-4 flex-shrink-0" />
              <p>
                Secured 2nd place at the Blaze API Hackathon, winning INR 21,000 for building an
                ENS-based crypto portfolio visualizer.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-8 font-mono text-sm tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Education
          </h2>

          <div className="border-primary-500 relative border-l-2 pl-6">
            <div className="bg-primary-500 absolute top-0 -left-2 h-4 w-4 rounded-full"></div>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-primary-500 font-medium">
                  Central University of Rajasthan, Ajmer
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">2020 – 2024</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">CGPA: 8.49 / 10</p>
          </div>
        </section>
      </div>
    </div>
  )
}
