// src/data/brands.ts
export type Brand = {
  name: string;
  logo: string;
  url?: string;
};

export const brands: Brand[] = [
  {
    name: "Orange",
    logo: "https://www.orange.tn/images/logo.svg",
    url: "https://www.orange.tn",
  },
  {
    name: "Keyrus",
    logo: "https://images.teamtailor-cdn.com/images/s3/teamtailor-production/logotype-v3/image_uploads/52d418ee-2276-4679-b876-a053b6c84ffc/original.png?1678814418",
    url: "https://jobs.keyrus.tn/",
  },
  {
    name: "Maroc Telecom",
    logo: "https://www.iam.ma/o/iam-theme/assets/img/logo.svg",
    url: "https://www.iam.ma",
  },
  {
    name: "Omniflow",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&q=80",
    url: "#",
  },
  {
    name: "Wafacash",
    logo: "https://www.wafacash.ma/sites/default/files/styles/webp/public/2025-04/Logo_Wafacash_MarocB.png.webp?itok=AQgKJayv",
    url: "https://www.wafacash.ma/fr",
  },
  {
    name: "Royal Air Maroc",
    logo: "https://www.royalairmaroc.com/ram-airways-theme/2025/assets/images/logo_ram.svg",
    url: "#",
  },
  {
    name: "atib Bank",
    logo: "https://atib.ly/documents/33593/0/Logo+%281%29.svg/784e427c-b1f5-1703-7742-05266caab2ef?version=1.0&t=1754471542579",
    url: "https://atib.ly/",
  }
];
