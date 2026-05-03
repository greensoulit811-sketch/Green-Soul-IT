// src/services/api.ts
import { Service, CaseStudy, Blog, Testimonial, TeamMember, User } from '../types';

// Simple delay function to simulate async API
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ---------------- HERO SLIDER ----------------
export const fetchHeroSlider = async () => {
  await delay(500);
  return [
    {
      id: 1,
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230712/pngtree-innovative-3d-renderings-for-web-development-promotions-marketing-collateral-business-presentations-image_3856387.jpg',
      title: 'Boost Your Online Presence',
      subtitle: 'SEO, PPC, Social Media Marketing',
    },
    {
      id: 2,
      image: 'https://png.pngtree.com/thumb_back/fw800/background/20250527/pngtree-digital-marketing-concept-image_17347611.jpg',
      title: 'Creative Digital Strategies',
      subtitle: 'Tailored Marketing Campaigns',
    },
    {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2019/04/07/23/11/digital-marketing-4111002_1280.jpg',
      title: 'Analytics & Growth',
      subtitle: 'Measurable Results for Your Business',
    },
  ];
};

// ---------------- SERVICES ----------------
export const fetchServices = async (): Promise<Service[]> => {
  await delay(500);
  return [
    {
    id: '1',
    title: 'Facebook Business Page Setup',
    slug: 'facebook-business-page-setup',
    description: 'We create a fully optimized and professional Facebook business page that represents your brand identity perfectly. Our team ensures your page is visually appealing, contains complete business information, and is designed to engage your audience effectively. This setup helps you build credibility, increase followers, and attract potential customers organically.',
    image: 'https://www.socialchamp.com/blog/wp-content/uploads/2021/10/Feature-Banner_JulyOnwards-Q3-2021_1125x600_43.png'
  },
  {
    id: '2',
    title: 'Facebook Ads Campaign & Boosting',
    slug: 'facebook-ads-boosting',
    description: 'Get complete Facebook ads campaign setup with precise targeting, budget allocation, and creative ad design. We monitor campaign performance daily, optimize ads for maximum ROI, and ensure your products or services reach the right audience. Perfect for businesses looking to drive sales, leads, and online engagement effectively.',
    image: 'https://divbyzero.com/wp-content/uploads/2018/06/facebook-ads-inbound-boost.jpg'
  },
  {
    id: '3',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description: 'Our social media marketing services help grow your brand presence across Facebook, Instagram, and other platforms. We create content calendars, schedule engaging posts, run promotions, and monitor analytics to increase engagement, reach, and follower growth. Focused on building a loyal community and boosting your online reputation.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQHFymeR2tK9ZA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655528485759?e=2147483647&v=beta&t=l2NVlgOYYlDHCrqF8JZlHuXTbpQkLHqTdiAoixk5NA0'
  },
  {
    id: '4',
    title: 'AI Video Make',
    slug: 'ai-logo-design',
    description: 'We design unique, professional, and memorable logos using AI-powered tools combined with expert design principles. Each logo reflects your brand values, communicates your identity clearly, and ensures you stand out in your industry. Our service also includes color schemes, branding guidance, and formats ready for print or digital use.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28Y8haU2qBHx6mAFwqnQC5RWcQ4Tm-J419Q&s'
  },
  {
    id: '5',
    title: 'Video Content make with Model',
    slug: 'content-creation-post-boost',
    description: 'Engage your audience with high-quality content tailored for your brand. We create compelling Facebook posts, visuals, and copywriting, then boost them strategically to reach the right audience. Our service improves brand awareness, increases engagement, and helps your posts perform better in the Facebook algorithm.',
    image: 'https://img.freepik.com/free-photo/blonde-influencer-recording-make-up-video_23-2148135468.jpg?semt=ais_user_personalization&w=740&q=80'
  },
  {
    id: '6',
    title: 'Graphics Design ',
    slug: 'graphics-design',
    description: 'Our graphics design service delivers visually stunning creatives for social media, ads, banners, and posts. Each design is crafted to grab attention, communicate your message effectively, and maintain brand consistency. Perfect for businesses seeking professional visual content that drives engagement and sales.',
    image: 'https://img.freepik.com/premium-vector/modern-web-graphics-pack-vector-eps_1348508-29.jpg?semt=ais_hybrid&w=740&q=80'
  },
  {
    id: '7',
    title: 'Website Design & Development',
    slug: 'website-design',
    description: 'We create modern, responsive, and user-friendly websites tailored to your brand and business goals. Our team focuses on clean design, fast performance, and seamless navigation to ensure a great user experience. Ideal for businesses looking to establish an online presence, showcase products/services, and convert visitors into customers.',
    image: 'https://img.freepik.com/premium-photo/web-design-team-work-project-concept-yellow-desk-with-web-design-text-top-view-flat-lay_176814-960.jpg?semt=ais_user_personalization&w=740&q=80'
  },
  {
    id: '8',
    title: 'Facebook Ads Management',
    slug: 'facebook-ads-management',
    description: 'Our Facebook ads management service helps you run, monitor, and optimize campaigns effectively. We handle audience targeting, creative design, budget allocation, and analytics tracking to maximize leads and sales. Perfect for businesses that want a hands-free approach to advertising while achieving measurable results.',
    image: 'https://i.ytimg.com/vi/iCs4XSHAuPM/maxresdefault.jpg'
  }
  ];
};

// ---------------- CASE STUDIES ----------------
export const fetchCaseStudies = async (): Promise<CaseStudy[]> => {
  await delay(500);
  return [
    { id: '1', title: 'E-Commerce Growth', description: 'Increased online sales by 250% through targeted PPC and SEO.', image: 'https://picsum.photos/seed/case1/800/600', category: 'E-Commerce' },
    { id: '2', title: 'SaaS Lead Gen', description: 'Acquired 10k+ new monthly leads for a B2B SaaS platform.', image: 'https://picsum.photos/seed/case2/800/600', category: 'Software' },
    { id: '3', title: 'Brand Identity', description: 'Complete digital rebrand for a global logistics firm.', image: 'https://picsum.photos/seed/case3/800/600', category: 'Identity' },
  ];
};

// ---------------- BLOGS ----------------
export const fetchBlogs = async (): Promise<Blog[]> => {
  await delay(500);
  return [
    { id: '1', title: '5 Tips for Digital Marketing', date: '2026-01-20', summary: 'Boost your marketing ROI with these five simple yet effective strategies for 2026.', image: 'https://picsum.photos/seed/blog1/800/500' },
    { id: '2', title: 'The Future of SEO', date: '2026-01-15', summary: 'How AI and machine learning are changing the search engine landscape.', image: 'https://picsum.photos/seed/blog2/800/500' },
    { id: '3', title: 'Social Media Trends', date: '2026-01-10', summary: 'Short-form video is king. Discover how to leverage it for your brand.', image: 'https://picsum.photos/seed/blog3/800/500' },
  ];
};

// ---------------- TESTIMONIALS ----------------
export const fetchTestimonials = async (): Promise<Testimonial[]> => {
  await delay(500);
  return [
    { id: '1', name: 'John Doe', company: 'Brain Station', feedback: 'They transformed our online presence and our sales skyrocketed within months.', photo: 'https://www.shutterstock.com/image-photo/young-indian-latin-happy-smiling-260nw-2007080246.jpg' },
    { id: '2', name: 'Sarah Smith', company: 'TechFlow', feedback: 'The best agency we have worked with. Their data-driven approach actually works.', photo: 'https://static.vecteezy.com/system/resources/thumbnails/024/770/154/small/businessman-working-at-office-using-laptop-photo.jpg' },
    { id: '3', name: 'Dybala Smith', company: 'TechFlow', feedback: 'The best agency we have worked with. Their data-driven approach actually works.', photo: 'https://img.freepik.com/free-photo/busy-young-attractive-smiling-man-sitting-co-working-open-office-holding-laptop_285396-1768.jpg?semt=ais_hybrid&w=740&q=80' },
  ];
};

// ---------------- TEAM MEMBERS ----------------
export const fetchTeam = async (): Promise<TeamMember[]> => {
  await delay(500);
  return [
    {
    id: '1',
    name: 'Tareque Mahmud',
    role: 'CEO & Founder',
    company: 'Green Soul IT',
    photo: 'https://simple-portfolio-seven-delta.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funnamed.3c1127a3.jpg&w=1080&q=75',
    details: 'MBA in Business Administration from Dhaka University. 10+ years experience leading tech startups and digital ventures.'
  },
  {
    id: '2',
    name: 'Aminul Islam Shuvo',
    role: 'Marketing Head',
    company: 'Green Soul IT',
    photo: 'https://i.postimg.cc/QdY0Y5cB/shuvo-vai.jpg',
    details: 'Gont. Tolaram College. Expert in digital marketing strategies.'
  },
  {
    id: '3',
    name: 'Abida Rahman',
    role: 'Digital Marketer',
    company: 'Green Soul IT',
    photo: 'https://picsum.photos/seed/cd/400/400',
    details: 'Southeast University. 1+ years experience in creative direction marketing.'
  },
  // {
  //   id: '4',
  //   name: 'Kaniz Fatema',
  //   role: 'Web Developer',
  //   company: 'Green Soul IT',
  //   photo: 'https://i.postimg.cc/7LQdzdKd/Kaniz.jpg',
  //   details: 'BSc in Computer Science from DIU. Specializes in frontend & backend development, React, Node.js.'
  // },
  // {
  //   id: '5',
  //   name: 'MD Al Shahrier Akon',
  //   role: 'Graphics Designer',
  //   company: 'Green Soul IT',
  //   photo: 'https://picsum.photos/seed/dev2/400/400',
  //   details: 'BSc in Computer Science from Southeast University. Specializes in frontend & backend development, React, Node.js.'
  // }
  ];
};

// ---------------- AUTH ----------------
export const loginUser = async (email: string, password: string): Promise<User> => {
  await delay(800);
  if (email && password) {
    return { email, name: 'User', token: 'mock-jwt-token-123' };
  }
  throw new Error('Invalid credentials');
};

export const registerUser = async (name: string, email: string, password: string): Promise<User> => {
  await delay(1000);
  return { email, name, token: 'mock-jwt-token-456' };
};

// ---------------- CONTACT ----------------
export const contactSubmit = async (data: any) => {
  await delay(500);
  return { status: 'success' };
};
