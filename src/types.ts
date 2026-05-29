export interface Testimonial {
  id: string;
  author: string;
  role: string; // e.g., "Special Education Teacher", "Parent of 6yo", "Speech Therapist"
  rating: number; // e.g. 5
  comment: string;
  source: string; // e.g., "Verified Buyer on TPT"
  avatarInitials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ShowcaseProduct {
  id: string;
  title: string;
  description: string;
  pagesCount: number;
  tags: string[];
  iconName: string; // Lucide icon name mapping
  previewTitle: string;
  previewSubtitle: string;
}

export interface CalmDownStrategy {
  id: string;
  label: string;
  description: string;
  instruction: string;
  iconName: string;
}
