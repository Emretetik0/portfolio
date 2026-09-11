export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ExamLens",
    description: "PDR rehber öğretmenleri için deneme sınavı performans ve trend analizi platformu. Excel notlarını işler, matematik açığı ve ani düşüş trendi olan kritik öğrencileri anlık tespit eder.",
    stack: ["Next.js 16", "TypeScript", "Zustand", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com/Emretetik0/ExamLens",
    liveUrl: "https://exam-lens-alpha.vercel.app"
  },
  {
    id: "2",
    title: "FinFlow",
    description: "Modern kişisel finans & bütçe takip platformu. Gelir-gider hareketleri, interaktif nakit akışı grafikleri, kategori bütçe limitleri ve CSV dışa aktarma yetenekleri sunar.",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Recharts", "Vite"],
    githubUrl: "https://github.com/Emretetik0/finflow",
    liveUrl: "https://emretetik0.github.io/finflow/"
  },
  {
    id: "3",
    title: "Autofix",
    description: "Modern oto servis ve bakım randevu yönetim platformu. Müşteriler için hızlı randevu alma, kapsamlı yönetici (admin) paneli, dinamik servis kataloğu ve koyu/açık tema desteği.",
    stack: ["Next.js 15", "React 19", "Prisma", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Emretetik0/autofix",
    liveUrl: "https://emretetik0.github.io/autofix/"
  },
  {
    id: "4",
    title: "Modern Geliştirici Portföyü",
    description: "Yüksek performanslı, interaktif ve modern animasyonlara sahip kişisel portföy web sitesi. Projeleri, yetenekleri ve iletişim kanallarını akıcı bir karanlık tema ile sergiler.",
    stack: ["React 19", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Emretetik0/portfolio",
    liveUrl: "https://emretetik0.github.io/portfolio/"
  }
];
