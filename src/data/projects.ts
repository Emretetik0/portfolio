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
    title: "SaaS Dashboard Pro",
    description: "SaaS işletmeleri için gerçek zamanlı veri görselleştirme, karanlık mod ve yüksek hızda yanıt veren modüler bir düzen sunan üst düzey analitik panosu.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "2",
    title: "E-Ticaret Platformu",
    description: "Modern bir headless e-ticaret mağaza ön yüzü. Kesintisiz ödeme deneyimi ve dinamik ürün filtreleme ile yüksek performans için geliştirildi.",
    stack: ["Next.js", "TypeScript", "Stripe", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "3",
    title: "Geliştirici Portfolyo Şablonu",
    description: "Geliştiricilerin çalışmalarını etkili bir şekilde sergilemeleri için tasarlanmış, özelleştirilebilir ve güzel animasyonlara sahip portfolyo şablonu.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: "4",
    title: "Görev Yönetim Uygulaması",
    description: "Sürükle-bırak işlevselliği, gerçek zamanlı güncellemeler ve şık bir karanlık kullanıcı arayüzüne sahip iş birlikçi bir Kanban panosu uygulaması.",
    stack: ["React", "Redux Toolkit", "Firebase", "Tailwind"],
    githubUrl: "https://github.com"
  }
];
