// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL, ADMIN_PATH, DOCS_URL } from '@/path';

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

export const feature2 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  features: [
    {
      icon: { name: 'tabler-users', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-star', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: { name: 'tabler-chart-histogram', type: IconType.STROKE, color: 'grey.900', stroke: 1 },
      title: 'Growth',
      content: 'Our culture prioritizes continuous learning, encouraging personal and professional development. '
    }
  ]
};

export const feature5 = {
  heading: 'Beyond the 9-to-5',
  caption: 'Our benefits go beyond the standard, ensuring your life outside of work is just as fulfilling.',
  image1: '/assets/images/graphics/ai/graphics3-light.svg',
  image2: '/assets/images/graphics/ai/graphics2-light.svg',
  features: [
    {
      icon: 'tabler-coin',
      title: 'Compensation',
      content: 'Enjoy a competitive salary that recognizes your skills and contributions.'
    },
    {
      icon: 'tabler-health-recognition',
      title: 'Healthcare',
      content: "Access to a comprehensive healthcare plan, ensuring you and your family's well-being."
    }
  ],
  features2: [
    {
      icon: 'tabler-briefcase',
      title: 'Automated Scaling',
      content: 'Embrace a flexible work environment, allowing you to balance work.'
    },
    {
      icon: 'tabler-users',
      title: 'Real-Time',
      content: 'Support your family commitments with family-friendly policies and benefits.'
    }
  ],
  profileGroups: {
    avatarGroups: [
      { avatar: '/assets/images/user/avatar1.png' },
      { avatar: '/assets/images/user/avatar2.png' },
      { avatar: '/assets/images/user/avatar3.png' },
      { avatar: '/assets/images/user/avatar4.png' },
      { avatar: '/assets/images/user/avatar5.png' }
    ],
    review: '10k+ Reviews (4.5 out of 5)'
  },
  content: 'Explore diverse career paths within the company through our internal mobility programs.',
  actionBtn: { children: 'Explore all Features', href: '#' }
};

export const feature20 = {
  heading: 'Disfruta la mejor experiencia en futbol',
  caption: 'Listo para jugar?',
  actionBtn: { children: 'Alquilar', href: BUY_NOW_URL, ...linkProps },
  secondaryBtn: { children: 'Contacto', href: SECTION_PATH },
  features: [
    {
      icon: 'tabler-accessible',
      title: 'Canchas de Futbol 11',
      content: 'Disfruta unas hermosas canchas de 11 con XXX.'
    },
    {
      icon: 'tabler-brand-google',
      title: 'Buffet',
      content: 'Disfruta de una comida con el equipo luego de un grandioso partido.'
    },
    {
      icon: 'tabler-stack-2',
      title: 'Bebidas',
      content: 'Disfruta una buena fria con el equipo.'
    },
    {
      icon: 'tabler-rocket',
      title: 'Atencion al cliente personalizada',
      content: 'Estamos atentos a tus necesidades consultanos.'
    },
    {
      icon: 'tabler-help',
      title: 'Estacionamiento privado',
      content: 'Para tu mayos comodidad y seguridad disfruta de un estacionamiento exclusivo.'
    },
    {
      icon: 'tabler-refresh',
      title: 'Pagos regulares y seguros',
      content: 'Puedes efectuar reservas de forma segura y rapida.'
    }
  ]
};

export const feature21 = {
  heading: `Design Faster, Smarter with ${branding.brandName} Figma`,
  caption: 'Unlock Figma’s advanced tools for streamlined, scalable, and responsive SaaS UI design.',
  image: '/assets/images/graphics/ai/desktop1-light.svg',
  primaryBtn: { children: 'Free Figma', href: 'https://www.figma.com/community/file/1425095061180549847', ...linkProps },
  secondaryBtn: {
    children: 'Preview Pro Figma',
    href: 'https://www.figma.com/design/mlkXfeqxUKqIo0GQhPBqPb/SaasAble---UI-Kit---Preview-only?node-id=11-1833&t=JBHOIIEuYZpmN6v8-1',
    ...linkProps
  },
  features: [
    {
      animationDelay: 0.1,
      icon: 'tabler-components',
      title: 'Component Architecture'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-moon',
      title: 'Dark Mode'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brightness-auto',
      title: 'Auto Layout'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-accessible',
      title: 'WCAG Compliant'
    },
    {
      animationDelay: 0.1,
      icon: 'tabler-icons',
      title: 'Custom Icons'
    },
    {
      animationDelay: 0.2,
      icon: 'tabler-file-stack',
      title: 'Page Demos'
    },
    {
      animationDelay: 0.3,
      icon: 'tabler-brand-matrix',
      title: 'Material 3 Guideline'
    },
    {
      animationDelay: 0.4,
      icon: 'tabler-click',
      title: 'Quick Customization'
    }
  ]
};

export const feature = {
  heading: `What’s Inside of ${branding.brandName} Plus Version`,
  features: [
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA JavaScript',
      content: 'Ensure accessibility with WCAG compliant design for browsing.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js JavaScript',
      content: 'Tailor typography for optimal readability across all screen sizes.'
    },
    {
      image: '/assets/images/shared/react.svg',
      title: 'CRA TypeScript',
      content: 'Customize Material 3 design MUI components for enhanced aesthetics.'
    },
    {
      image: '/assets/images/shared/next-js.svg',
      title: 'Next.js TypeScript',
      content: 'Adjust content layout for visual coherence on various screen sizes.'
    },
    {
      image: '/assets/images/shared/figma.svg',
      title: 'Figma ',
      content: 'Boost visibility with SEO-friendly features for better search rankings.'
    },
    {
      title: 'Check Out Our Pricing Plan',
      content: 'Choose the plan that aligns with your SaaS product requirements.',
      actionBtn: { children: 'Pricing Plan', href: BUY_NOW_URL, ...linkProps }
    }
  ]
};

export const feature7 = {
  heading: 'Real-Time Performance Insights',
  caption: 'Gain a competitive edge with real-time performance monitoring.',
  testimonials: [
    {
      image: '/assets/images/graphics/ai/graphics6-light.svg',
      features: [
        {
          icon: 'tabler-star',
          title: 'Core Value',
          content: 'Unlock growth potential through continuous monitoring, enabling proactive strategies in a competitive landscape.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics8-light.svg',
      features: [
        {
          icon: 'tabler-route',
          title: 'Multi-Cloud Orchestration',
          content: 'Enhances flexibility and resilience in a multi-cloud environment.'
        }
      ]
    },
    {
      image: '/assets/images/graphics/ai/graphics3-light.svg',
      features: [
        {
          icon: 'tabler-history',
          title: 'Story',
          content: 'Real-time performance insights empower teams to respond swiftly, optimizing operations and driving growth.'
        }
      ]
    }
  ],
  breadcrumbs: [{ title: 'Core Value' }, { title: 'Culture' }, { title: 'Story' }]
};

export const feature23 = {
  heading: 'Culture of Innovation',
  caption:
    'Join a team that embraces forward-thinking ideas, fosters innovation, and cultivates an environment where your creativity can flourish.',
  heading2: 'Growth',
  caption2: 'Our culture prioritizes continuous learning, encouraging personal and professional development. ',
  image: '/assets/images/graphics/default/feature23-light.png',
  primaryBtn: { children: 'Join  Our Team', href: '#' },

  features: [
    {
      icon: 'tabler-users',
      title: 'Teamwork',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    },
    {
      icon: 'tabler-star',
      title: 'Inclusivity',
      content: 'We embrace varied perspectives and backgrounds, creating an inclusive environment.'
    }
  ]
};

export const feature18 = {
  heading: 'Nuestros Servicios',
  // caption: '',
  topics: [
    {
      icon: 'tabler-sparkles',
      title: 'Futbol 11',
      title2: 'Canchas de Futbol 11',
      description: 'Caracteristica de nuestra instalacion.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      list: [
        { primary: 'Cancha sesped cintetico' },
        { primary: 'Cancha CARACTERISTICAXXX' },
        { primary: 'Cronometros' },
        // { primary: 'Responsive Grid System' }
      ],
      actionBtn: { children: 'Alquilar', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Contactar', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-palette',
      title: 'Futbol 5',
      title2: 'Cancha de Futbol 5',
      description: 'Caracteristica de nuestra instalacion.',
      image: '/assets/images/graphics/default/admin-dashboard-2.png',
      list: [
           { primary: 'Cancha sesped cintetico' },
        { primary: 'Cancha CARACTERISTICAXXX' },
        { primary: 'Cronometros' },
      ],
      actionBtn: { children: 'Alquilar', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Contacto', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-rocket',
      title: 'Buffet',
      title2: 'Buffet comida y bebidas',
      description: 'Disfruta de un cafe antes de arrancar con la mejor calidad y  una bebida para el final del partido.',
      image: '/assets/images/graphics/default/admin-dashboard-3.png',
      list: [
        { primary: 'Cafeteria' },
        { primary: 'Snack' },
        { primary: 'Bebidas' },
        { primary: 'Velocidad' }
      ],
      actionBtn: { children: 'Ver carta', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Docs', href: DOCS_URL, ...linkProps }
    },
    // {
    //   icon: 'tabler-scale',
    //   title: 'Scalability',
    //   title2: 'Build to Scale',
    //   description: 'Easily scale your app with flexible, modular, and extensible templates.',
    //   image: '/assets/images/graphics/default/admin-dashboard.png',
    //   list: [
    //     { primary: 'Modular Architecture' },
    //     { primary: 'Performance Optimized' },
    //     { primary: 'Extensible Codebase' },
    //     { primary: 'Future Proof Design' }
    //   ],
    //   actionBtn: { children: 'View Dashboard', href: ADMIN_PATH, ...linkProps },
    //   actionBtn2: { children: 'Docs', href: DOCS_URL, ...linkProps }
    // }
  ]
};
