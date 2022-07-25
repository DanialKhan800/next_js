// routes
import Routes from "../../routes";
// _data

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: "1",
    // subheader: 'Marketing',
    items: [
      { title: "NFTs", path: Routes.nfts },
      { title: "Collections", path: Routes.collections },
    ],
  },
  {
    order: "2",
    // subheader: 'Career',
    items: [
      { title: "NFTs", path: Routes.nfts },
      { title: "Collections", path: Routes.collections },
    ],
  },
  {
    order: "3",
    // subheader: 'Common',
    items: [
      { title: "Services", path: Routes.maintenance },
      { title: "Case Studies", path: Routes.maintenance },
      { title: "Case Study", path: Routes.maintenance },
      { title: "Blog Posts", path: Routes.maintenance },
      { title: "Blog Post", path: Routes.maintenance },
      { title: "About", path: Routes.maintenance },
      { title: "Contact", path: Routes.maintenance },
    ],
  },
  {
    order: "4",
    // subheader: 'E-Learning',
    items: [
      { title: "Services", path: Routes.maintenance },
      { title: "Case Studies", path: Routes.maintenance },
      { title: "Case Study", path: Routes.maintenance },
      { title: "Blog Posts", path: Routes.maintenance },
      { title: "Blog Post", path: Routes.maintenance },
      { title: "About", path: Routes.maintenance },
      { title: "Contact", path: Routes.maintenance },
    ],
  },
  {
    order: "5",
    // subheader: 'Travel',
    items: [
      { title: "Services", path: Routes.maintenance },
      { title: "Case Studies", path: Routes.maintenance },
      { title: "Case Study", path: Routes.maintenance },
      { title: "Blog Posts", path: Routes.maintenance },
      { title: "Blog Post", path: Routes.maintenance },
      { title: "About", path: Routes.maintenance },
      { title: "Contact", path: Routes.maintenance },
    ],
  },
  {
    order: "6",
    // subheader: 'Coming Soon',
    items: [
      { title: "Services", path: Routes.maintenance },
      { title: "Case Studies", path: Routes.maintenance },
      { title: "Case Study", path: Routes.maintenance },
      { title: "Blog Posts", path: Routes.maintenance },
      { title: "Blog Post", path: Routes.maintenance },
      { title: "About", path: Routes.maintenance },
      { title: "Contact", path: Routes.maintenance },
    ],
  },
];
export const FooterPageLinks = [
  {
    // subheader: 'Products',
    items: [
      { title: "Explore", path: Routes.maintenance },
      { title: "How it works", path: Routes.maintenance },
      { title: "Contact Us", path: Routes.maintenance },
    ],
  },
  {
    // subheader: 'Support',
    items: [
      { title: "Help Center", path: Routes.maintenance },
      { title: "Terms of services", path: Routes.maintenance },
      { title: "Leagal", path: Routes.maintenance },
      { title: "Privacy Policy", path: Routes.maintenance },
    ],
  },
];
export const navConfig = [
  { title: "Tokenomics", path: Routes.tokenomics },
  // {
  //   title: 'Pages',
  //   path: Routes.pages,
  //   children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
  // },
  { title: "Hadaro Genesis Shares", path: Routes.marketplace },
  { title: "NFTs", path: Routes.nfts },
  { title: "FAQs", path: Routes.faqs },
  { title: "About Us", path: Routes.aboutus },
];
