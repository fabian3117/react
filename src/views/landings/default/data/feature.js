// @project
import branding from '@/branding.json';
import { IconType } from '@/enum';
import { SECTION_PATH, BUY_NOW_URL, ADMIN_PATH, DOCS_URL } from '@/path';
import { items_plan_libre } from '@/data/planes';

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
  heading: 'Disfruta de la mejor experiencia en deportes',
  // caption: 'Listo para ser parte?',
  // actionBtn: { children: 'Membresia', href: BUY_NOW_URL, ...linkProps },
  // secondaryBtn: { children: 'Contacto', href: SECTION_PATH },
  features: [
    {
      icon: 'tabler-accessible',
      title: 'Personalizado',
      content: 'El entrenamiento adaptado a tus necesidades'
    },
    {
      icon: 'tabler-brand-google',
      title: 'Preparacion para competencias',
      content: 'Te preparamos para tus proximas compentecias'
    },
    {
      icon: 'tabler-stack-2',
      title: 'Varieda',
      content: 'Disfruta de la mayor variedad en tus entrenamientos con amplia experiencia.'
    },
    // {
    //   icon: 'tabler-rocket',
    //   title: 'Atencion al cliente personalizada',
    //   content: 'Estamos atentos a tus necesidades consultanos.'
    // },
    // {
    //   icon: 'tabler-help',
    //   title: 'Estacionamiento privado',
    //   content: 'Para tu mayos comodidad y seguridad disfruta de un estacionamiento exclusivo.'
    // },
    // {
    //   icon: 'tabler-refresh',
    //   title: 'Pagos regulares y seguros',
    //   content: 'Puedes efectuar reservas de forma segura y rapida.'
    // }
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
  heading: 'Planes',
  // caption: '',
  topics: [
    {
      icon: 'tabler-sparkles',
      title: '1 vez a la semana',
      title2: 'Entrenamiento 1 dia a eleccion',
      description: 'Caracteristica de la clase.',
      image: '/assets/images/graphics/default/scren_one.jpg',
      list: [
        { primary: 'Clase tecnicas' },
        { primary: 'Clase lucha' },
        { primary: 'Entrenamiento fisico' },
        // { primary: 'Responsive Grid System' }
      ],
      actionBtn: { children: 'Alquilar', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Contactar', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-palette',
      title: 'Pago por clases',
      title2: 'Pago por cantidad de clases',
      description: 'Caracteristicas.',
      image: '/assets/images/graphics/default/scren_two.webp',
      list: [
           { primary: 'Pago por cantidad de clases' },
        { primary: 'Entrenamiento fisico' },
        { primary: 'Clase lucha' },
        { primary: 'Mejoras personalizadas' },
      ],
      actionBtn: { children: 'Alquilar', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Contacto', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-rocket',
      title: '2 Veces por semana',
      title2: 'Difruta 2 veces a la semana',
      description: 'Disfruta de clases 2 veces a la semana para aprovechar la semana.',
      image: '/assets/images/graphics/default/admin-dashboard-3.png',
      list: [
        { primary: 'Clase tecnicas' },
        { primary: 'Clase lucha' },
        { primary: 'Entrenamiento fisico' },
        { primary: 'Open los findes' },
        { primary: 'Enlongacion' },
      ],
      actionBtn: { children: 'Ver carta', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Docs', href: DOCS_URL, ...linkProps }
    },
    {
      icon: 'tabler-scale',
      title: 'Libre',
      title2: 'Ingresa a todas nuestras clases en la semana.',
      description: 'Acceso completo a todas las clases durante la semana, Sin preocuparte por dias ni cupos.',
      image: '/assets/images/graphics/default/admin-dashboard.png',
      list: items_plan_libre,
      actionBtn: { children: 'Contactar', href: ADMIN_PATH, ...linkProps },
      actionBtn2: { children: 'Comprar', href: DOCS_URL, ...linkProps }
    }
  ]
};
