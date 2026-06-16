export type Service = {
  title: string;
  description: string;
  icon: string;
};
export const timeline = [
  { number: "1", title: "Consultation", body: "Understand your goals, fitness level, and training experience." },
  { number: "2", title: "Custom Plan", body: "Get a personalized fitness and boxing training program." },
  { number: "3", title: "Consistent Training", body: "Follow structured workouts, boxing drills, and coaching support." },
  { number: "4", title: "Track Progress", body: "Monitor strength, endurance, weight, and overall performance." },
  { number: "5", title: "Achieve Your Goals", body: "Build confidence, improve fitness, and become your strongest self." },
];
export const services: Service[] = [
  { title: "Boxing Coaching", description: "Learn boxing fundamentals, footwork, punching techniques, and conditioning drills designed for all skill levels.", icon: "Dumbbell" },
  { title: "Online Coaching", description: "Train from anywhere with personalized workout plans, progress tracking, and regular support.", icon: "Laptop2" },
  { title: "Fat Loss Program", description: "Sustainable weight-loss plans combining effective workouts, nutrition guidance, and lifestyle habits.", icon: "Flame" },
  { title: "Muscle Building", description: "Hypertrophy blocks built on progressive overload and recovery science.", icon: "Activity" },
  { title: "Diet Planning", description: "Macro-flexible meal plans dialed in for performance and adherence.", icon: "Salad" },
  { title: "Progress Tracking", description: "Monitor your performance, body measurements, and fitness improvements with regular check-ins.", icon: "Trophy" },
];

export const whyChoose = [
  { title: "Personalized Plans", description: "No templates. Every program written for your body and your week.", icon: "UserCog" },
  { title: "Flexible Timing", description: "Train on your schedule across time zones — asynchronous or live.", icon: "Clock" },
  { title: "Progress Tracking", description: "Weekly metrics, photo comparisons, and lift PRs in one dashboard.", icon: "LineChart" },
  { title: "24/7 Support", description: "Direct line to your coach when you need form checks or motivation.", icon: "MessageCircle" },
];

export const trainers = [
  { name: "Alex Carter", role: "Head Strength Coach", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", specialty: "Powerlifting · Olympic Lifts" },
  { name: "Mia Reyes", role: "Hypertrophy Specialist", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80", specialty: "Bodybuilding · Posing" },
  { name: "Jordan Blake", role: "Online Coach", image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80", specialty: "Fat Loss · Recomp" },
  { name: "Sasha Lin", role: "Mobility & Recovery", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80", specialty: "Mobility · Rehab" },
];

export const pricing = [
  {
    name: "Basic",
    price: 49,
    tagline: "For self-starters",
    features: ["Custom training program", "Monthly check-in", "Exercise video library", "Email support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: 129,
    tagline: "Most popular",
    features: ["Everything in Basic", "Personalized nutrition plan", "Weekly video reviews", "Bi-weekly 1:1 calls", "24/7 chat support"],
    highlight: true,
  },
  {
    name: "Elite",
    price: 299,
    tagline: "Done with you",
    features: ["Everything in Pro", "Daily coach access", "Live form check sessions", "Lab work review", "Quarterly photoshoot"],
    highlight: false,
  },
];

export const faqs = [
  {
    q: "Who is this program for?",
    a: "Our coaching is designed for beginners, fitness enthusiasts, and anyone looking to improve their fitness, strength, or boxing skills. No prior experience is required.",
  },
  {
    q: "Do I need boxing experience?",
    a: "No. We provide beginner-friendly coaching that covers boxing fundamentals, footwork, technique, and conditioning from the ground up.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary based on consistency, effort, and goals. Most clients notice improvements in fitness, strength, and energy levels within the first few weeks.",
  },
  {
    q: "Do I need access to a gym?",
    a: "Not necessarily. We can create training programs for a commercial gym, home gym, or even minimal-equipment setups.",
  },
  {
    q: "Is nutrition guidance included?",
    a: "Yes. We provide practical nutrition recommendations to support fat loss, muscle gain, performance, and overall health goals.",
  },
  {
    q: "How does online coaching work?",
    a: "You'll receive a personalized training plan, progress tracking, regular check-ins, and ongoing support to help you stay accountable and consistent.",
  },
  {
    q: "Can I focus only on boxing training?",
    a: "Absolutely. Programs can be tailored specifically for boxing skills, fitness, strength training, or a combination of all three.",
  },
  {
    q: "What if I have an injury or physical limitation?",
    a: "Let us know before starting. We can modify exercises and training intensity to accommodate certain limitations and training needs.",
  },
  {
    q: "How often should I train each week?",
    a: "Most clients train between 3–5 days per week, depending on their goals, schedule, and fitness level.",
  },
  {
    q: "How do I get started?",
    a: "Book a consultation and we'll discuss your goals, fitness level, and recommend the best coaching plan for your needs.",
  },
];




export const brands = [
  "TRAIN HARD",
  "STAY CONSISTENT",
  "BUILD STRENGTH",
  "BOOST CONFIDENCE",
  "IMPROVE FITNESS",
  "MASTER BOXING",
  "ACHIEVE GOALS",
  "NEVER QUIT",
];

export const goals = ["Fat Loss", "Muscle Building", "Strength & Powerlifting", "Athletic Performance", "General Fitness", "Nutrition Coaching"];
