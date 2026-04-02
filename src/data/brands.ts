// src/data/brands.ts
export type Brand = {
  name: string;
  logo: string;
  url?: string;
};

export const brands: Brand[] = [
  {
    name: "Orange",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/512px-Orange_logo.svg.png",
    url: "https://www.orange.com",
  },
  {
    name: "Keyrus",
    logo: "https://www.keyrus.com/wp-content/uploads/2023/03/logo-keyrus.svg",
    url: "https://www.keyrus.com",
  },
  {
    name: "Maroc Telecom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Maroc_Telecom_logo.svg/512px-Maroc_Telecom_logo.svg.png",
    url: "https://www.iam.ma",
  },
  {
    name: "Omniflow",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&q=80",
    url: "#",
  },
  {
    name: "Wafacash",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Wafacash_logo.png/220px-Wafacash_logo.png",
    url: "https://www.wafacash.com",
  },
  {
    name: "Royal Air Maroc",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Royal_Air_Maroc_logo.svg/512px-Royal_Air_Maroc_logo.svg.png",
    url: "https://www.royalairmaroc.com",
  },
  {
    name: "Liferay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Liferay-logo-full-color-2x.png/220px-Liferay-logo-full-color-2x.png",
    url: "https://www.liferay.com",
  },
  {
    name: "Rebuild",
    logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=100&h=100&fit=crop&q=80",
    url: "#",
  },
];
