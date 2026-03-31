import React from 'react';
import { FileText, Zap, ShieldCheck, Layout, PieChart, Users } from 'lucide-react';

export const productsData = [
  {
    id: 1,
    name: "Standard Resume Pro",
    description: "Perfect for entry-level professionals looking to make a mark.",
    price: 19,
    period: "one-time",
    tag: "Best Seller",
    tagType: "success",
    features: ["10+ templates", "ATS optimization", "Export to PDF", "Basic Support"],
    icon: <FileText className="w-8 h-8 text-blue-500" />
  },
  {
    id: 2,
    name: "Career Growth Suite",
    description: "Advanced tools for mid-career changes and management roles.",
    price: 49,
    period: "monthly",
    tag: "Popular",
    tagType: "primary",
    features: ["50+ templates", "LinkedIn Review", "Priority Support", "AI Suggestions"],
    icon: <Zap className="w-8 h-8 text-yellow-500" />
  },
  {
    id: 3,
    name: "Executive Masterclass",
    description: "Tailored for C-suite executives and senior leadership positions.",
    price: 199,
    period: "yearly",
    tag: "Premium",
    tagType: "secondary",
    features: ["Custom Branding", "1-on-1 Coaching", "Interview Prep", "Unlimited Revisions"],
    icon: <ShieldCheck className="w-8 h-8 text-purple-500" />
  },
  {
    id: 4,
    name: "Designer Portfolio",
    description: "Visual-first resumes for creative and design-oriented fields.",
    price: 29,
    period: "one-time",
    tag: "New",
    tagType: "accent",
    features: ["Graphic Templates", "Dribbble Sync", "Portfolio Hosting", "Custom Colors"],
    icon: <Layout className="w-8 h-8 text-pink-500" />
  },
  {
    id: 5,
    name: "Data Analyst Pro",
    description: "Technical resume formats that highlight your data prowess.",
    price: 35,
    period: "monthly",
    tag: "Top Rated",
    tagType: "info",
    features: ["Code Snippet Support", "GitHub Integration", "Stats Dashboard", "Technical Review"],
    icon: <PieChart className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 6,
    name: "Global Recruiter Pack",
    description: "Designed for agencies managing multiple client candidates.",
    price: 599,
    period: "yearly",
    tag: "Enterprise",
    tagType: "ghost",
    features: ["White-labeling", "Batch Export", "CRM Integration", "Dedicated Manager"],
    icon: <Users className="w-8 h-8 text-green-500" />
  }
];
