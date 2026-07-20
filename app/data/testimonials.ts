// PLACEHOLDER CONTENT — replace with real client testimonials
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  photo: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ama Owusu",
    role: "Founder",
    company: "La Femme Boutique",
    quote:
      "Our new site loads instantly and orders have gone up since launch. Communication was clear from day one.",
    photo: "https://i.pravatar.cc/150?img=32",
    rating: 5
  },
  {
    name: "Kwame Asante",
    role: "Headmaster",
    company: "Royal Crown Boys Senior High",
    quote:
      "Parents and staff both find the new admissions portal easy to use. Exactly the professional look we needed.",
    photo: "https://i.pravatar.cc/150?img=12",
    rating: 5
  },
  {
    name: "Efua Mensah",
    role: "Small Business Owner",
    company: "Local Retail",
    quote:
      "The course on selling digital products paid for itself in the first week. Clear, practical, no fluff.",
    photo: "https://i.pravatar.cc/150?img=45",
    rating: 5
  }
];
