
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Blog {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  feedback: string;
  photo: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
}

export interface User {
  email: string;
  name: string;
  token?: string;
}
