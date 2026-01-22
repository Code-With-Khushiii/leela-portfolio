import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "AI/ML Software Engineer with 3+ years of experience developing scalable machine learning systems, distributed model inference services, and cloud-native backend architectures. Designed and deployed end-to-end ML pipelines using Python, PyTorch, Kafka, and AWS with consistent uptime and low-latency requirements. Experienced in building containerized microservices, automating retraining workflows, and integrating LLM-based GenAI models into production systems.";

  const experience = [
  {
    company: "City and County of San Francisco (Capstone)",
    role: "Software Engineer",
    location: "San Francisco, CA",
    dates: "Jan 2025 – Aug 2025",
    highlights: [
      "Orchestrated and deployed a production-grade RAG-based chatbot using open-source LLaMA to retrieve 100+ technical documents, achieving sub-150ms end-to-end latency under concurrent load.",
      "Implemented NLP inference pipelines combining sentiment analysis and XGBoost models, reducing ticket classification latency by 200ms+ while improving real-time response accuracy.",
      "Engineered scalable data ingestion pipelines using FastAPI, Spark, and AWS S3, improving ingestion efficiency by 35%.",
      "Developed data quality checks using NLTK for tokenization and vectorization, reducing production failures by 12%.",
      "Configured containerized ML microservices on AWS EKS with Docker, GitHub Actions CI/CD, Redis caching, and model drift detection, cutting deployment failures by 80%."
    ]
  },
  {
    company: "Google",
    role: "Software Engineer",
    location: "Hyderabad, India",
    dates: "Mar 2021 – Nov 2022",
    highlights: [
      "Productionized an XGBoost-based ad campaign prediction model delivering a 15% AUC uplift and reducing $2M+ annual losses.",
      "Refactored ML prototypes into modular, unit-tested Python packages with 80%+ code coverage.",
      "Built predictive user-behavior models using PyTorch, TensorFlow, and PostgreSQL-backed feature stores.",
      "Improved backend reliability by 25% through Jenkins CI pipelines and structured rollouts.",
      "Engineered real-time feature pipelines using Kafka and Spark and automated retraining with Kubeflow and Airflow."
    ]
  },
  {
    company: "Accenture",
    role: "Software Engineer",
    location: "Hyderabad, India",
    dates: "Jun 2019 – Jun 2020",
    highlights: [
      "Migrated enterprise platforms to distributed Java Spring Boot microservices using gRPC and REST, reducing latency by 84%.",
      "Built AWS Glue and Redshift pipelines processing 100K+ records daily.",
      "Scaled backend microservices on Amazon Fargate and Kubernetes maintaining 99.9% availability.",
      "Improved observability using Prometheus and Grafana reducing MTTR by 40%."
    ]
  }
];

  const projects = [
  {
    title: "Edge-AI Research: LLM Orchestration",
    subtitle: "Kubernetes · Raspberry Pi · RAG",
    category: "Edge AI",
    introduction: "Deployed containerized GenAI applications on Kubernetes-managed Raspberry Pi clusters for secure on-device inference.",
    problem: "Edge environments require low latency inference without cloud dependency.",
    objective: "Optimize performance while maintaining privacy and reliability.",
    methodology: [
      "Deployed RAG and CAG workloads across six edge nodes.",
      "Containerized inference services using Kubernetes.",
      "Optimized pipelines for constrained hardware."
    ],
    results: [
      "Reduced inference latency by 40%.",
      "Maintained secure on-device processing."
    ],
    conclusion: "Demonstrated scalable GenAI deployment at the edge."
  },
  {
    title: "Whisker AI",
    subtitle: "Real-Time Image Classification",
    category: "Computer Vision",
    introduction: "Created a production-grade image classification service using PyTorch and FastAPI.",
    problem: "Real-time workloads require ultra-low latency inference.",
    objective: "Achieve high accuracy with minimal response time.",
    methodology: [
      "Optimized CNN inference pipelines.",
      "Deployed FastAPI microservices.",
      "Implemented caching strategies."
    ],
    results: [
      "94.5% accuracy achieved.",
      "Sub-15ms inference latency."
    ],
    conclusion: "Validated production-grade ML serving performance."
  },
  {
    title: "Diet Tracker",
    subtitle: "Personalized Nutrition Recommendation System",
    category: "ML Application",
    introduction: "Automated real-time inference APIs with Flask to deliver personalized nutrition recommendations.",
    problem: "Manual diet tracking leads to low adherence.",
    objective: "Increase engagement using ML automation.",
    methodology: [
      "Built recommendation logic.",
      "Deployed REST APIs.",
      "Optimized latency."
    ],
    results: [
      "Improved user adherence by 35%.",
      "Maintained fast response times."
    ],
    conclusion: "Delivered measurable user impact."
  }
];

  const skillCategories = [
  { icon: Target, title: 'Programming Languages', skills: ['Python', 'C++', 'JavaScript'] },
  { icon: TrendingUp, title: 'ML & AI Frameworks', skills: ['PyTorch', 'TensorFlow', 'XGBoost'] },
  { icon: Users, title: 'NLP & GenAI', skills: ['Transformers', 'LSTM', 'LLMs', 'RAG'] },
  { icon: Lightbulb, title: 'Backend, Cloud & DevOps', skills: ['FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana', 'Linux'] }
];

const certifications = [
  {
    name: 'AWS Certified Machine Learning Engineer – Associate',
    link: 'https://www.credly.com/badges/4946a6fe-a6c8-4576-ae5c-1da043b83b0f'
  }
];


  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide"> Leela Tejaswini Tikkisetty</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'certifications', label: 'Certs' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Harpreet Kaur"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              LEELA T
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
            AI / ML Software Engineer
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              SAN FRANCISCO, CA · OPEN TO REMOTE
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔧 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'UPTIME SUPPORTED', value: '99%+', detail: 'Global SaaS + Ops' },
              { label: 'AUTOMATION IMPACT', value: '45%', detail: 'Tier-1 deflection' },
              { label: 'TOOLKIT', value: 'Python · SQL · AWS', detail: 'ServiceNow · Splunk' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Tier-1/Tier-2 support specialist who blends automation, cloud awareness, and documentation discipline to keep hybrid environments healthy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Incident Readiness',
                detail: 'Designed low-latency inference pipelines, monitoring hooks, and automated alerts to keep ML services reliable in production.'
              },
              {
                icon: Rocket,
                title: 'Automation Mindset',
                detail: 'Automated data ingestion, model training, validation, and deployment workflows using Python, CI/CD, and cloud orchestration.'
              },
              {
                icon: Lightbulb,
                title: 'People-First Support',
                detail: 'Worked cross-functionally with ML engineers, backend teams, and product stakeholders to ship reliable AI systems.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Focused on resilient infrastructure, accessible support, and measurable uptime.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Automation, analytics, and infrastructure projects that pair uptime goals with user empathy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Need implementation breakdowns or architecture diagrams?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies and logs.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Hands-on support, automation, and reporting toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Credentials that reinforce day-to-day systems work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 ">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm hover:shadow-md transition cursor-pointer 
                md:col-span-2 max-w-xl mx-auto"
            >
              <Award className="w-6 h-6 text-brown mr-4" />
              <span className="text-brown font-medium underline underline-offset-4">
                {cert.name}
              </span>
              <ExternalLink className="w-4 h-4 ml-3 text-brown" />
            </a>
          ))}

          </div>
        </div>
      </section>

              
              {/* Education */}
        <section id="education" className="py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-display text-black mb-6 tracking-wide">
                EDUCATION
              </h2>
              <div className="w-16 h-0.5 bg-brown mx-auto"></div>
            </div>

            <div className="space-y-10">

              {/* Masters */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">
                  San Francisco State University
                </h3>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                  <p className="text-brown font-medium">
                    Master of Science – Analytics
                  </p>
                  <p className="text-sm text-brown/80 font-light">
                    San Francisco, CA · August 2023 – August 2025
                  </p>
                </div>

                <p className="text-brown leading-relaxed font-light mt-4">
                  Specialized in the theoretical and practical application of AI and Machine Learning, focusing on advanced statistical modeling, pattern recognition, and data mining. The curriculum emphasized transforming complex datasets into predictive insights and deploying intelligent analytical solutions.
                </p>
              </div>

              {/* Bachelors */}
              <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">
                  Vignana Bharathi Institute of Technology
                </h3>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-2">
                  <p className="text-brown font-medium">
                    Bachelor of Technology – Computer Science
                  </p>
                  <p className="text-sm text-brown/80 font-light">
                    Hyderabad, India · June 2015 – May 2019
                  </p>
                </div>

                <p className="text-brown leading-relaxed font-light mt-4">
                  Built a robust foundation in core computer science principles with a focus on scalable systems, including distributed computing and cloud architecture. Mastered software engineering fundamentals like object-oriented design, data structures, and algorithms essential for building production-level applications.
                </p>
              </div>

            </div>
          </div>
        </section>


      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s troubleshoot, automate, or brainstorm how to keep your environment resilient.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+19257655000"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (415) 980-9127
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/leelatikkisetty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:leelatejaswinit@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                leelatejaswinit@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center">
              <ExternalLink className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
          © 2025 Leela Tejaswini Tikkisetty · AI / ML Software Engineer

          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;