export interface RoadmapItem {
  id: string;
  text: string;
}

export interface Topic {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  level: "Beginner" | "Intermediate";
  weeks: number;
  items: RoadmapItem[];
}

function items(slug: string, texts: string[]): RoadmapItem[] {
  return texts.map((text, i) => ({ id: `${slug}-${i + 1}`, text }));
}

// Apna content yahan badal sakte ho: topics add/edit karo, baaki app apne aap update ho jaata hai.
export const topics: Topic[] = [
  {
    slug: "linux",
    title: "Linux Basics",
    emoji: "🐧",
    summary: "Terminal, permissions, services aur logs: cloud aur security dono ki neev.",
    level: "Beginner",
    weeks: 3,
    items: items("linux", [
      "File system navigate karna (ls, cd, find, grep)",
      "Users, groups aur file permissions (chmod, chown, sudo)",
      "Process aur service management (ps, top, systemctl)",
      "Logs padhna (/var/log, journalctl)",
      "Bash scripting ki basics",
      "SSH aur key-based login",
    ]),
  },
  {
    slug: "networking",
    title: "Networking",
    emoji: "🌐",
    summary: "Data network par kaise chalta hai: security samajhne ke liye zaruri.",
    level: "Beginner",
    weeks: 3,
    items: items("networking", [
      "OSI aur TCP/IP model",
      "IP addressing aur subnetting",
      "DNS, HTTP/HTTPS aur TLS",
      "Firewalls aur NAT",
      "Wireshark ya tcpdump se packets dekhna",
    ]),
  },
  {
    slug: "git-github",
    title: "Git & GitHub",
    emoji: "🔀",
    summary: "Version control, pull requests aur automation ki basics.",
    level: "Beginner",
    weeks: 2,
    items: items("git-github", [
      "Commit, branch aur merge",
      "Pull request aur code review",
      "Remote repo se push/pull aur conflicts",
      "GitHub Actions ka basic workflow",
      "Secrets ko code me na daalna (secret scanning)",
    ]),
  },
  {
    slug: "cloud-fundamentals",
    title: "Cloud Fundamentals",
    emoji: "☁️",
    summary: "Azure ya AWS ki core services aur cloud ke concepts.",
    level: "Intermediate",
    weeks: 4,
    items: items("cloud-fundamentals", [
      "IaaS, PaaS, SaaS ka fark",
      "Virtual machines aur storage",
      "Virtual network (VNet/VPC) aur subnets",
      "Identity aur access management (IAM)",
      "Monitoring aur logging services",
      "Cost management ki basics",
    ]),
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    emoji: "🛡️",
    summary: "Cloud me data, identity aur network ko surakshit rakhna.",
    level: "Intermediate",
    weeks: 5,
    items: items("cloud-security", [
      "Shared responsibility model",
      "Least privilege aur MFA",
      "Network security groups aur firewall rules",
      "Encryption aur key management",
      "Threat detection aur security alerts",
      "Compliance ki basics",
    ]),
  },
  {
    slug: "iac-devsecops",
    title: "IaC & DevSecOps",
    emoji: "⚙️",
    summary: "Infrastructure ko code se banana aur pipelines me security jodna.",
    level: "Intermediate",
    weeks: 4,
    items: items("iac-devsecops", [
      "Terraform ki basics",
      "IaC code ko security tools se scan karna",
      "CI/CD pipeline me security checks",
      "Container aur Docker security ki basics",
    ]),
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

export const totalItems = topics.reduce((sum, t) => sum + t.items.length, 0);
