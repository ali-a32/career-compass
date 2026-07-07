export type Job = {
  id: string;
  title: string;
  company: string;
  companyInitials: string;
  location: string;
  salary: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship" | "Freelance" | "Remote";
  tags: string[];
  category: string;
  verified?: boolean;
  urgent?: boolean;
  postedAt: string;
  deadline?: string;
};

export const categories = [
  { name: "Software Development", icon: "Code2", jobs: 12480, color: "from-blue-500 to-indigo-500", slug: "it-jobs" },
  { name: "Marketing", icon: "Megaphone", jobs: 4820, color: "from-pink-500 to-rose-500", slug: "browse-jobs" },
  { name: "Healthcare", icon: "Stethoscope", jobs: 6120, color: "from-emerald-500 to-teal-500", slug: "healthcare-jobs" },
  { name: "Engineering", icon: "HardHat", jobs: 5280, color: "from-amber-500 to-orange-500", slug: "engineering-jobs" },
  { name: "Education", icon: "GraduationCap", jobs: 2140, color: "from-violet-500 to-purple-500", slug: "browse-jobs" },
  { name: "Finance", icon: "Banknote", jobs: 3390, color: "from-green-500 to-emerald-500", slug: "browse-jobs" },
  { name: "Government", icon: "Landmark", jobs: 1870, color: "from-slate-600 to-slate-800", slug: "government-jobs" },
  { name: "Customer Support", icon: "Headphones", jobs: 2960, color: "from-sky-500 to-cyan-500", slug: "browse-jobs" },
  { name: "Construction", icon: "Hammer", jobs: 1450, color: "from-orange-500 to-red-500", slug: "engineering-jobs" },
  { name: "Remote Jobs", icon: "Globe2", jobs: 8720, color: "from-cyan-500 to-blue-500", slug: "remote-jobs" },
];

export const jobs: Job[] = [
  { id: "1", title: "Senior Frontend Engineer", company: "Stripe", companyInitials: "St", location: "San Francisco, CA · Remote", salary: "$140k – $180k", type: "Full-time", tags: ["React", "TypeScript"], category: "it", verified: true, urgent: true, postedAt: "2 days ago" },
  { id: "2", title: "Product Designer", company: "Linear", companyInitials: "Ln", location: "Remote · Worldwide", salary: "$110k – $150k", type: "Remote", tags: ["Figma", "Design Systems"], category: "it", verified: true, postedAt: "1 day ago" },
  { id: "3", title: "Registered Nurse (ICU)", company: "Mayo Clinic", companyInitials: "Mc", location: "Rochester, MN", salary: "$85k – $105k", type: "Full-time", tags: ["ICU", "BLS"], category: "healthcare", verified: true, urgent: true, postedAt: "3 days ago" },
  { id: "4", title: "Civil Engineer II", company: "AECOM", companyInitials: "Ae", location: "Austin, TX", salary: "$95k – $120k", type: "Full-time", tags: ["AutoCAD", "PE"], category: "engineering", verified: true, postedAt: "5 days ago" },
  { id: "5", title: "Marketing Intern", company: "HubSpot", companyInitials: "Hs", location: "Boston, MA", salary: "$25 / hr", type: "Internship", tags: ["Content", "SEO"], category: "marketing", postedAt: "1 week ago" },
  { id: "6", title: "Freelance Brand Designer", company: "Independent", companyInitials: "In", location: "Remote", salary: "$60 – $120 / hr", type: "Freelance", tags: ["Branding", "Illustration"], category: "design", postedAt: "4 days ago" },
  { id: "7", title: "Policy Analyst", company: "U.S. Department of Labor", companyInitials: "Dl", location: "Washington, D.C.", salary: "$78k – $102k", type: "Full-time", tags: ["Policy", "Research"], category: "government", verified: true, postedAt: "6 days ago", deadline: "Dec 20, 2026" },
  { id: "8", title: "DevOps Engineer", company: "Vercel", companyInitials: "Ve", location: "Remote", salary: "$130k – $170k", type: "Remote", tags: ["AWS", "Kubernetes"], category: "it", verified: true, postedAt: "12 hours ago" },
  { id: "9", title: "Financial Analyst", company: "Goldman Sachs", companyInitials: "Gs", location: "New York, NY", salary: "$95k – $120k", type: "Full-time", tags: ["Excel", "Modeling"], category: "finance", verified: true, postedAt: "2 days ago" },
];

export const companies = [
  { name: "Stripe", initials: "St", description: "Payments infrastructure for the internet", jobs: 128, color: "bg-indigo-500" },
  { name: "Linear", initials: "Ln", description: "The issue tracker you'll enjoy using", jobs: 42, color: "bg-violet-500" },
  { name: "Vercel", initials: "Ve", description: "The frontend cloud for developers", jobs: 74, color: "bg-slate-900" },
  { name: "Airbnb", initials: "Ab", description: "Belong anywhere in the world", jobs: 96, color: "bg-rose-500" },
  { name: "Notion", initials: "No", description: "One workspace, every team", jobs: 61, color: "bg-slate-700" },
  { name: "Figma", initials: "Fg", description: "Design collaboration platform", jobs: 55, color: "bg-fuchsia-500" },
  { name: "Spotify", initials: "Sp", description: "Music for every moment", jobs: 88, color: "bg-emerald-500" },
  { name: "GitHub", initials: "Gh", description: "Where the world builds software", jobs: 112, color: "bg-slate-900" },
];

export const testimonials = [
  { name: "Sarah Chen", role: "Product Manager at Stripe", quote: "I landed my dream role in 2 weeks. JobVerse's AI match surfaced roles I'd never have found otherwise.", initials: "SC", color: "bg-indigo-500" },
  { name: "Marcus Johnson", role: "Senior Engineer at Vercel", quote: "The application flow is the fastest I've used. Verified listings mean zero time wasted on ghost jobs.", initials: "MJ", color: "bg-emerald-500" },
  { name: "Priya Patel", role: "UX Designer at Figma", quote: "The career resources helped me negotiate a 30% higher offer. Genuinely game-changing.", initials: "PP", color: "bg-rose-500" },
];

export const stats = [
  { value: 100000, suffix: "+", label: "Jobs Posted" },
  { value: 25000, suffix: "+", label: "Companies" },
  { value: 5000000, suffix: "+", label: "Applications", short: "5M+" },
  { value: 50, suffix: "+", label: "Countries" },
];

export const faqs = [
  { q: "Is JobVerse free for job seekers?", a: "Yes. Creating an account, applying to jobs, and using our AI-powered matching are completely free for candidates." },
  { q: "How does the AI job matching work?", a: "Our AI analyzes your skills, experience, and preferences to surface roles that fit — sorted by relevance rather than recency." },
  { q: "Are the listings verified?", a: "Every employer is manually reviewed. Verified listings carry a badge so you know the role is real and actively hiring." },
  { q: "Can I apply for jobs abroad?", a: "Absolutely. JobVerse aggregates opportunities from 50+ countries, including fully remote and visa-sponsored roles." },
  { q: "How do employers post a job?", a: "Sign up as an employer, choose a plan on the Employers page, and publish your first listing in under 5 minutes." },
];

export const blogPosts = [
  { title: "How to Write a Resume That Gets Interviews in 2026", excerpt: "Modern hiring managers spend 6 seconds on a resume. Here's how to make them count.", category: "Career", readTime: "6 min read", color: "from-blue-500 to-indigo-500" },
  { title: "The 10 Highest-Paying Remote Jobs This Year", excerpt: "From ML engineers to product designers, these roles pay top dollar — from anywhere.", category: "Salary", readTime: "8 min read", color: "from-emerald-500 to-teal-500" },
  { title: "Nailing the Behavioral Interview: A Complete Guide", excerpt: "STAR method, common questions, and the answers hiring managers actually want.", category: "Interview", readTime: "10 min read", color: "from-violet-500 to-purple-500" },
];

export const resources = [
  { title: "Resume Builder", description: "AI-powered resume tailored to each role.", icon: "FileText" },
  { title: "Interview Tips", description: "Practice with real questions from top companies.", icon: "MessageSquare" },
  { title: "Career Guides", description: "In-depth playbooks for every industry.", icon: "BookOpen" },
  { title: "Salary Calculator", description: "Know what you're worth before you negotiate.", icon: "Calculator" },
  { title: "Career Blog", description: "Fresh insights from industry experts weekly.", icon: "Newspaper" },
];
