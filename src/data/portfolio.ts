export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  featured: boolean;
  status?: string;
  problem?: string;
  solution?: string;
  architecture?: string[];
  security?: string[];
  observability?: string[];
  scenarios?: string[];
  guardrails?: string[];
  outcomes?: string[];
};

export const portfolio = {
  profile: {
    name: "Debmalya Acharjee",
    title: "Senior DevOps / SRE / Platform Engineer",
    eyebrow: "CLOUD • KUBERNETES • RELIABILITY • AUTOMATION",
    headline: "I build platforms that make production boring.",
    summary:
      "Senior DevOps / SRE / Platform Engineer with around 6 years of experience working across AWS, Azure and GCP, Kubernetes environments, software delivery, observability and production reliability.",
    location: "Europe & India",
    availability: "Open to DevOps, SRE and Platform Engineering opportunities across Europe & India",
    github: "https://github.com/debmalya-acharjee",
    linkedin: "https://www.linkedin.com/in/debmalya-acharjee",
    email: "debmalyaacharjee24@gmail.com",
    resume: "/resume/Debmalya-Acharjee-Resume.pdf",
  },

  hero: {
    command: "platform status --owner debmalya",
    status: [
      { label: "Production platforms", value: "OPERATING" },
      { label: "GitOps delivery", value: "SYNCED" },
      { label: "Observability", value: "ACTIVE" },
      { label: "Reliability focus", value: "ON" },
    ],
    stack: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Argo CD", "Prometheus", "Python"],
  },

  metrics: [
    { value: "60+", label: "Production microservices supported" },
    { value: "35%", label: "Fewer deployment-related failures" },
    { value: "<5 min", label: "Deployment rollout time" },
    { value: "40%", label: "MTTR improvement" },
  ],

  focus: [
    {
      title: "Platform Engineering",
      text: "Reusable infrastructure, Kubernetes foundations, GitOps delivery and developer enablement.",
    },
    {
      title: "Site Reliability",
      text: "Observability, incident response, SLO thinking, runbooks, recovery and production readiness.",
    },
    {
      title: "Cloud & Networking",
      text: "Multi-cloud engineering across AWS, Azure and GCP, including networking, load balancing, connectivity and troubleshooting.",
    },
    {
      title: "Automation & Security",
      text: "Terraform, Python/Boto3, IAM/RBAC, operational guardrails and repeatable controls.",
    },
  ],

  skills: [
    {
      category: "Multi-Cloud & Networking",
      items: ["AWS", "Azure", "GCP", "Amazon EKS", "Kubernetes", "EC2", "VPC", "IAM", "Route 53", "RDS", "S3", "CloudFront", "ALB/NLB", "Transit Gateway", "VPN"],
    },
    {
      category: "Kubernetes & Platform",
      items: ["Kubernetes", "Docker", "Helm", "Ingress", "Services", "Deployments", "RBAC", "HPA", "Cluster Autoscaler"],
    },
    {
      category: "IaC, CI/CD & GitOps",
      items: ["Terraform", "CloudFormation", "Argo CD", "GitHub Actions", "GitLab CI", "Jenkins", "Git"],
    },
    {
      category: "Observability & Reliability",
      items: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch", "Fluent Bit", "SLOs", "RCA", "Incident Response"],
    },
    {
      category: "Security & Operations",
      items: ["IAM", "Kubernetes RBAC", "Security Hub", "GuardDuty", "AWS Config", "WAF", "Backup & DR", "Linux"],
    },
    {
      category: "Automation",
      items: ["Python", "Boto3", "Bash", "AWS CLI", "Operational Automation"],
    },
  ],

  experience: [
    {
      company: "Velocis Systems",
      role: "Senior Cloud Engineer I – DevOps",
      period: "Feb 2026 – Present",
      summary: "Production AWS, EKS, GitOps, observability and reliability engineering.",
      highlights: [
        "Operate AWS EKS-based production platforms supporting 60+ microservices.",
        "Introduced GitOps-based delivery with Argo CD, reducing deployment-related failures by 35% and rollout time from 15–20 minutes to under 5 minutes.",
        "Built centralized observability with Prometheus, Grafana, CloudWatch and Fluent Bit, improving incident visibility and reducing MTTR by approximately 40%.",
        "Built reusable Terraform patterns and operational automation to reduce manual work and configuration drift.",
        "Lead troubleshooting, RCA, runbook creation and production-readiness improvements for recurring incidents.",
      ],
      technologies: ["AWS", "EKS", "Kubernetes", "Terraform", "Argo CD", "Prometheus", "Grafana", "Python"],
    },
    {
      company: "Codelogicx",
      role: "DevOps Engineer",
      period: "Dec 2024 – Feb 2026",
      summary: "Kubernetes platform operations, CI/CD automation and developer enablement.",
      highlights: [
        "Built and operated Kubernetes/EKS environments using Docker, Helm, ingress and automated deployment workflows.",
        "Improved CI/CD workflows and deployment practices, increasing deployment frequency and reducing release friction.",
        "Automated infrastructure and operational work with Terraform, Python and Bash.",
        "Supported high-traffic distributed systems with a focus on availability, observability and production stability.",
      ],
      technologies: ["Kubernetes", "Docker", "Helm", "Jenkins", "Terraform", "Python", "AWS"],
    },
    {
      company: "ACS Global – Innova Solutions",
      role: "AWS Consultant",
      period: "Oct 2022 – Dec 2024",
      summary: "AWS infrastructure, networking, migrations, governance and production operations.",
      highlights: [
        "Designed and supported AWS infrastructure across VPC, EC2, IAM, Route 53, RDS, S3 and load balancing.",
        "Worked on multi-account and hub-and-spoke networking, VPN, routing, DNS and hybrid connectivity.",
        "Supported backup, disaster recovery, migrations, monitoring reviews and infrastructure assessments.",
      ],
      technologies: ["AWS", "VPC", "Transit Gateway", "VPN", "Route 53", "RDS", "Terraform"],
    },
    {
      company: "Newgen Software",
      role: "Engineer",
      period: "Oct 2021 – Oct 2022",
      summary: "Infrastructure operations, automation, deployments and production support.",
      highlights: [
        "Automated recurring AWS operations using Terraform, CloudFormation, AWS CLI, Python/Boto3 and Bash.",
        "Supported monitoring, incident resolution, release coordination and operational documentation.",
      ],
      technologies: ["AWS", "Terraform", "CloudFormation", "Python", "Bash", "Linux"],
    },
  ],

  projects: [
    {
      slug: "self-healing-agent",
      title: "Kubernetes Self-Healing Agent",
      category: "SRE Automation",
      description:
        "A guarded remediation workflow for Kubernetes incidents: observe, diagnose, propose, approve and execute with an auditable trail.",
      technologies: ["Kubernetes", "Python", "Prometheus", "Alertmanager", "AWS", "Automation"],
      github: "https://github.com/debmalya-acharjee/kubernates-self-heal-agent",
      featured: true,
      status: "ACTIVE BUILD",
      problem:
        "Recurring Kubernetes failures create repetitive operational toil, but unrestricted automated remediation can create a larger blast radius than the original incident.",
      solution:
        "The agent separates investigation from remediation. Diagnosis is designed around read-only access, while write actions are restricted through explicit guardrails and approval paths.",
      architecture: [
        "Prometheus and Alertmanager provide failure signals",
        "Investigator workflow collects Kubernetes state and diagnostics",
        "Read-only Kubernetes identity for investigation",
        "Remediation proposal is evaluated against action and namespace allowlists",
        "Restricted write identity is used only for permitted remediation",
        "Every decision and action is recorded for auditability",
      ],
      security: [
        "Separate read and write Kubernetes identities",
        "Least-privilege RBAC",
        "Namespace allowlist",
        "Action allowlist",
        "Human approval for higher-risk changes",
        "Rate limiting and audit logging",
      ],
      scenarios: ["CrashLoopBackOff", "OOMKilled", "ImagePullBackOff", "PodNotReady", "Deployment failures"],
      outcomes: [
        "Demonstrates safe automation rather than unrestricted autonomous changes",
        "Reduces repetitive investigation for common Kubernetes incidents",
        "Keeps remediation blast radius enforceable through identity and RBAC",
      ],
    },
    {
      slug: "gitops-eks-platform",
      title: "Production-Style EKS GitOps Platform",
      category: "Platform Engineering",
      description:
        "AWS EKS platform combining Infrastructure as Code, GitOps delivery, ingress, observability and operational controls.",
      technologies: ["AWS", "EKS", "Terraform", "Argo CD", "Helm", "Prometheus", "Grafana"],
      github: "https://github.com/debmalya-acharjee/gitops-eks-platform",
      featured: true,
      status: "RUNNING LAB",
      problem:
        "Kubernetes environments become difficult to operate when infrastructure, application delivery and observability evolve independently.",
      solution:
        "Built a platform-oriented EKS environment where infrastructure is reproducible and application delivery follows GitOps.",
      architecture: [
        "AWS VPC and Amazon EKS",
        "Terraform-managed infrastructure",
        "Amazon ECR for container images",
        "AWS Load Balancer Controller",
        "Argo CD continuous delivery",
        "Helm-based workloads",
        "Prometheus, Grafana and Alertmanager",
      ],
      security: ["IAM and IRSA patterns", "Kubernetes RBAC", "Private cluster-oriented design", "Controlled workload permissions"],
      observability: ["Prometheus metrics", "Grafana dashboards", "Alertmanager alerts", "CloudWatch integration"],
      outcomes: ["Repeatable infrastructure", "Git-based delivery", "Centralized observability", "Clear separation between infrastructure and workloads"],
    },
    {
      slug: "aws-multi-account-networking",
      title: "AWS Multi-Account & Network Architecture",
      category: "Cloud Architecture",
      description:
        "Hub-and-spoke AWS architecture focused on centralized connectivity, account separation and operational governance.",
      technologies: ["AWS", "VPC", "Transit Gateway", "VPN", "IAM", "Route 53", "Terraform"],
      github: "https://github.com/debmalya-acharjee",
      featured: true,
      status: "CASE STUDY",
      architecture: ["Hub-and-spoke connectivity", "Cross-account access patterns", "Centralized routing", "Hybrid VPN connectivity", "DNS and load-balancing considerations"],
      outcomes: ["Centralized network control", "Clearer account boundaries", "Repeatable cloud architecture patterns"],
    },
    {
      slug: "observability-reliability",
      title: "Observability & Reliability Engineering",
      category: "SRE",
      description:
        "A practical reliability approach using metrics, dashboards, alert quality, incident response and runbooks.",
      technologies: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch", "Fluent Bit", "SLO"],
      github: "https://github.com/debmalya-acharjee",
      featured: false,
      status: "CASE STUDY",
      observability: ["Infrastructure and Kubernetes metrics", "Application and platform dashboards", "Alert quality improvement", "SLO-oriented monitoring", "RCA and operational runbooks"],
      outcomes: ["Approximately 40% MTTR improvement", "Better incident visibility", "More actionable alerting"],
    },
  ] satisfies Project[],

  principles: [
    { title: "Automate the repeatable", text: "If an operational task repeats, I look for a safe way to make it deterministic." },
    { title: "Make failure visible", text: "Metrics, logs and useful alerts should make diagnosis faster, not noisier." },
    { title: "Guardrails over prompts", text: "Security boundaries should be enforced by IAM, RBAC and workflow controls." },
    { title: "Git as the source of truth", text: "Infrastructure and delivery changes should be reviewable, reproducible and auditable." },
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
  ],

  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "University of Engineering & Management, Jaipur",
  },

  languages: ["English – Professional Working Proficiency"],

  recognition: [
    { title: "Acknowledged for Innovation", detail: "Recognition for taking initiative around GitOps." },
    { title: "Star Performer", detail: "Recognition for work on modular Terraform Infrastructure as Code." },
  ],
};
