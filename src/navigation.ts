import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Cùng học',
      links: [
        {
          text: 'Websit',
          href: getPermalink('/learn/website'),
        },
        {
          text: 'Tin học Văn Phòng',
          href: getPermalink('/learn/startup'),
        },
      ],
    },
    {
      text: 'Cùng đi',
      links: [
        {
          text: '63 Tỉnh Thành',
          href: getPermalink('/category/63-tinh-thanh'),
        },
        {
          text: 'Leo núi',
          href: getPermalink('/category/leo-nui'),
        },
        {
          text: 'Khám phá',
          href: getPermalink('/category/kham-pha'),
        },
      ],
    },
    {
      text: 'Cùng chơi',
      links: [
        {
          text: 'ONI',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Prision Archi',
          href: getPermalink('/landing/sales'),
        },
      ],
    },
    {
      text: 'Cùng nghe',
      links: [
        {
          text: 'Truyện',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Podcast',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Nhạc',
          href: getPermalink('/landing/sales'),
        },
      ],
    },
    {
      text: 'Cùng viết',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    /*{
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },*/
  ],
  secondaryLinks: [{ text: 'Học tập - thực hành - chia sẻ' }],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/obj.et.phi' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/Tranphi2023' },
  ],
  footNote: `
    Tạo bởi <a class="text-blue-600 underline dark:text-muted" href="https://tqp.io.vn"> TranPhi</a> · Bảo lưu mọi quyền.
  `,
};
