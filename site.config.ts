/**
 * SITE CONFIGURATION
 * ==================
 * Single source of truth for all business-specific content.
 * Imported by pages and components via the `@site-config` alias.
 *
 * After editing, run: npm run build
 */

import { getAssetPath } from "@/lib/asset-path";

const siteConfig = {
  // ─── Company Info ───────────────────────────────────────
  companyName: 'Prithvi International Exim LLP',
  tagline: 'Premium Indian Export Partner',
  domain: 'https://fastscalingai.com',
  foundedYear: '2024',
  location: 'W501, Siddharaj Z Square, Opp. The Landmark, Kudasan, Gandhinagar',
  locationShort: 'Kudasan, Gandhinagar, India',
  address: {
    streetAddress: 'W501, Siddharaj Z Square, Opp. The Landmark, Kudasan',
    city: 'Gandhinagar',
    region: 'Gujarat',
    country: 'IN',
  },
  description:
    'Prithvi International Exim LLP is a trusted Indian export partner specializing in jaggery, textiles, leather, carpets, handicrafts, spices, and more. Serving Africa, Middle East, UK, and Asia.',

  // ─── Navigation ─────────────────────────────────────────
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/markets', label: 'Markets' },
    { href: '/blog', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ],

  // ─── Contact ────────────────────────────────────────────
  emails: {
    general: 'info@p-i-e-group.com',
    exports: 'exports@p-i-e-group.com',
  },
  phones: {
    general: '+91 9998720118',
    exports: '+91 9512555000',
  },
  // WhatsApp Business number with country code, no "+" (e.g. 919876543210).
  // Leave empty or keep the placeholder to hide the floating button.
  whatsapp: '91XXXXXXXXXX',

  // ─── Social ─────────────────────────────────────────────
  social: {
    linkedin: 'https://www.linkedin.com/company/fast-scaling-trade',
  },

  // ─── SEO & Social ───────────────────────────────────────
  seo: {
    title: 'Prithvi International Exim LLP | Premium Indian Export Partner',
    description:
      'Connecting verified Indian manufacturers with international buyers across Africa, Middle East, UK, and Asia. 11+ product categories, competitive pricing, on-time delivery.',
    keywords:
      'Prithvi International Exim LLP, Indian exporter, jaggery export, textiles export, Africa trade, Tanzania importer, export from India, international trade',
    ogImage: getAssetPath('/og-image.jpg'),
  },

  // ─── Hero Section ───────────────────────────────────────
  hero: {
    badge: 'IEC Registered · RCMC Certified · FIEO Member',
    headline: {
      line1: "India's Premium",
      line2: 'Export Partner',
      line3: 'for Global Trade',
    },
    subheadline:
      'Connecting verified Indian manufacturers with international buyers across Africa, Middle East, UK, and Asia. Trust-first trade, competitive pricing, on-time delivery.',
    cta1: 'View Product Catalog',
    cta2: 'Request Free Quote',
  },

  // ─── Stats ──────────────────────────────────────────────
  stats: [
    { value: '11+', label: 'Product Categories' },
    { value: '7+', label: 'Countries Served' },
    { value: '24h', label: 'Quote Response' },
    { value: '2024', label: 'Established' },
  ],

  // ─── Certifications ─────────────────────────────────────
  certifications: [
    'IEC Registered Exporter',
    'GST Registered',
    'RCMC (Export Promotion Council)',
    'FIEO Member',
    'AD Code Registered',
  ],

  // ─── Trust Signals (homepage) ───────────────────────────
  trustSignals: [
    'IEC Registered Exporter',
    'RCMC Certified',
    'FIEO Member',
    'Quality Tested Products',
    'Secure Payment Terms',
    'On-Time Delivery Record',
  ],

  // ─── Products ───────────────────────────────────────────
  products: [
    {
      name: 'Jaggery',
      shortName: 'Jaggery',
      hsCode: '1701',
      indiaRank: 'Top 3',
      description:
        'Organic jaggery blocks, powder, and liquid jaggery. Made from pure sugarcane without chemicals. Popular natural sweetener in African and Middle Eastern markets.',
      shortDescription: 'Organic blocks & powder',
      moq: '1 MT',
      packaging: '25kg bags',
      image: getAssetPath('/images/products/jaggery.jpg'),
      featured: true,
    },
    {
      name: 'Textiles & Garments',
      shortName: 'Textiles',
      hsCode: '52-63',
      indiaRank: 'Top 5',
      description:
        "Cotton fabrics, readymade garments, bed linen, towels, and industrial textiles. India is one of the world's largest textile producers.",
      shortDescription: 'Cotton fabrics & garments',
      moq: '500 pcs',
      packaging: 'Poly bags',
      image: getAssetPath('/images/products/textiles.jpg'),
      featured: true,
    },
    {
      name: 'Leather Goods',
      shortName: 'Leather',
      hsCode: '4101-4115',
      indiaRank: 'Top 5',
      description:
        'Finished leather, leather bags, belts, wallets, and accessories. Premium quality from Indian tanneries with eco-friendly processing.',
      shortDescription: 'Premium leather goods',
      moq: '200 pcs',
      packaging: 'Ind. boxes',
      image: getAssetPath('/images/products/leather.jpg'),
      featured: true,
    },
    {
      name: 'Carpets & Rugs',
      shortName: 'Carpets',
      hsCode: '5701-5705',
      indiaRank: 'Top 3',
      description:
        "Handwoven carpets, tufted rugs, and machine-made floor coverings. India's carpet heritage spans centuries with exceptional craftsmanship.",
      shortDescription: 'Handwoven carpets & rugs',
      moq: '50 pcs',
      packaging: 'Rolled',
      image: getAssetPath('/images/products/carpets.jpg'),
      featured: true,
    },
    {
      name: 'Handicrafts',
      shortName: 'Handicrafts',
      hsCode: '4420, 6913',
      indiaRank: 'Top 3',
      description:
        'Artisan-crafted home decor, wooden products, brass items, pottery, and decorative pieces. Unique, handmade products with high perceived value.',
      shortDescription: 'Artisan crafted products',
      moq: '100 pcs',
      packaging: 'Custom',
      image: getAssetPath('/images/products/handicrafts.jpg'),
      featured: true,
    },
    {
      name: 'Jute Products',
      shortName: 'Jute',
      hsCode: '5303-5310',
      indiaRank: '#1 Global',
      description:
        "Jute bags, sacks, twine, and eco-friendly packaging solutions. India is the world's #1 jute producer. Growing demand for sustainable packaging.",
      shortDescription: 'Eco-friendly jute bags & sacks',
      moq: '5000 pcs',
      packaging: 'Bales',
      image: getAssetPath('/images/products/jute.jpg'),
      featured: false,
    },
    {
      name: 'Shoes & Footwear',
      shortName: 'Footwear',
      hsCode: '6401-6405',
      indiaRank: 'Top 10',
      description:
        'Leather shoes, sports footwear, sandals, and industrial safety shoes. Competitive pricing with good quality from Indian manufacturers.',
      shortDescription: 'Leather & sports footwear',
      moq: '300 pairs',
      packaging: 'Cartons',
      image: getAssetPath('/images/products/shoes.jpg'),
      featured: false,
    },
    {
      name: 'Spices',
      shortName: 'Spices',
      hsCode: '0904-0910',
      indiaRank: '#1 Global',
      description:
        "Turmeric, cumin, coriander, chili, black pepper, cardamom, and spice blends. India is the world's largest spice producer and exporter.",
      shortDescription: 'Premium Indian spices',
      moq: '500 kg',
      packaging: '25kg bags',
      image: getAssetPath('/images/products/spices.jpg'),
      featured: true,
    },
    {
      name: 'Rice',
      shortName: 'Rice',
      hsCode: '1006',
      indiaRank: '#1 Global',
      description:
        "Basmati rice, non-basmati rice, parboiled rice, and broken rice. India is the world's largest rice exporter with diverse varieties.",
      shortDescription: 'Basmati & non-basmati rice',
      moq: '20 MT',
      packaging: '50kg bags',
      image: getAssetPath('/images/products/rice.jpg'),
      featured: false,
    },
    {
      name: 'Tea',
      shortName: 'Tea',
      hsCode: '0902',
      indiaRank: '#2 Global',
      description:
        'Assam tea, Darjeeling tea, Nilgiri tea, CTC and orthodox varieties. Iconic Indian teas with global brand recognition.',
      shortDescription: 'Assam, Darjeeling & Nilgiri',
      moq: '1 MT',
      packaging: '25kg chests',
      image: getAssetPath('/images/products/tea.jpg'),
      featured: false,
    },
    {
      name: 'Pharmaceuticals',
      shortName: 'Pharma',
      hsCode: '3003-3004',
      indiaRank: 'Top 3',
      description:
        'Generic medicines, API (Active Pharmaceutical Ingredients), and medical supplies. India is the "Pharmacy of the World."',
      shortDescription: 'Generic medicines & API',
      moq: 'Varies',
      packaging: 'Pharma',
      image: getAssetPath('/images/products/pharma.jpg'),
      featured: false,
    },
  ],

  // ─── Markets ────────────────────────────────────────────
  markets: [
    { name: 'Tanzania', flag: '🇹🇿', score: 9, maxScore: 10, competition: 'LOW', population: '65M (growing 3%/yr)', port: 'Dar es Salaam', topProducts: 'Jaggery, Textiles, Leather, FMCG' },
    { name: 'Kenya', flag: '🇰🇪', score: 8, maxScore: 10, competition: 'MODERATE', population: '56M', port: 'Mombasa', topProducts: 'Textiles, Pharmaceuticals, Rice' },
    { name: 'Zambia', flag: '🇿🇲', score: 8, maxScore: 10, competition: 'LOW', population: '20M', port: 'Via Dar es Salaam', topProducts: 'Jaggery, Textiles, Shoes, FMCG' },
    { name: 'Nigeria', flag: '🇳🇬', score: 7, maxScore: 10, competition: 'MODERATE', population: '230M', port: 'Lagos', topProducts: 'Pharmaceuticals, Rice, Chemicals' },
    { name: 'UAE', flag: '🇦🇪', score: 7, maxScore: 10, competition: 'HIGH', population: '10M (high purchasing)', port: 'Jebel Ali', topProducts: 'Carpets, Handicrafts, Spices, Tea' },
    { name: 'United Kingdom', flag: '🇬🇧', score: 6, maxScore: 10, competition: 'HIGH', population: '68M', port: 'Felixstowe', topProducts: 'Carpets, Handicrafts, Textiles, Tea' },
    { name: 'China', flag: '🇨🇳', score: 6, maxScore: 10, competition: 'VARIES', population: '1.4B', port: 'Shanghai', topProducts: 'Rice, Spices, Leather, Pharmaceuticals' },
  ],

  // ─── About Page ─────────────────────────────────────────
  about: {
    story: [
      'Prithvi International Exim LLP is an export trading company based in Gandhinagar, India. We help international buyers source high-quality Indian products — from food and spices to textiles, leather goods, and handicrafts.',
      "India is the world's largest producer of spices, jute, and tea, and a leading manufacturer of textiles, leather, pharmaceuticals, and handicrafts. We give you direct access to this manufacturing base with guaranteed quality and competitive pricing.",
      'Our team has hands-on trade experience across 11+ product categories and has shipped to buyers in Tanzania, Zambia, Kenya, DRC, Nigeria, UAE, UK, China, and Australia.',
      'Whether you need a single sample or a full container load, we handle sourcing, quality inspection, documentation, and shipping — so you receive exactly what you ordered, on time.',
    ],
    milestones: [
      { year: '2024', event: 'Prithvi International Exim LLP founded in Gandhinagar, India' },
      { year: '2024', event: 'First export shipment to Tanzania' },
      { year: '2024', event: 'Registered with Export Promotion Councils (RCMC)' },
      { year: '2025', event: 'Expanded to Kenya, Zambia, and UAE markets' },
      { year: '2025', event: 'Active trade network across 7+ countries' },
    ],
  },

  // ─── Blog / Resources ──────────────────────────────────
  articles: [
    { title: "Why Source Products from India? A Buyer's Guide", category: 'Buyer Guide', image: getAssetPath('/images/blog/india-guide.jpg'), excerpt: "India is the world's largest producer of spices, jute, and tea, and a top-5 exporter of textiles, leather, and pharmaceuticals. Here's why global buyers increasingly turn to Indian suppliers." },
    { title: 'Understanding Indian Export Pricing: FOB, CIF & DDP Explained', category: 'Trade Terms', image: getAssetPath('/images/heroes/home-hero.jpg'), excerpt: "What's included in the price you're quoted? A clear breakdown of Incoterms, what each pricing model covers, and which one works best for your shipment." },
    { title: 'Quality Standards of Indian Export Products', category: 'Quality', image: getAssetPath('/images/products/spices.jpg'), excerpt: 'From FSSAI certification for food products to BIS standards for industrial goods — understand the quality benchmarks Indian exporters follow and what to look for.' },
    { title: 'Shipping from India: Ports, Routes, Costs & Transit Times', category: 'Logistics', image: getAssetPath('/images/heroes/home-cta.jpg'), excerpt: 'A practical guide to shipping from major Indian ports (JNPT, Mundra, Chennai) to Africa, Middle East, and beyond. FCL vs LCL, freight costs, and how to avoid delays.' },
    { title: "India's Spice Exports: Varieties, Grades & Global Demand", category: 'Product Spotlight', image: getAssetPath('/images/blog/spice-exports.jpg'), excerpt: "India produces 75% of the world's spices. Explore the most in-demand varieties, quality grades, packaging standards, and how to place your first bulk order." },
    { title: "Payment Security in International Trade: A Buyer's Perspective", category: 'Trade Terms', image: getAssetPath('/images/blog/payment-security.jpg'), excerpt: "TT, Letter of Credit, D/P — which payment method offers the best protection for your money? A straightforward guide for first-time importers." },
  ],

  // ─── Footer Quick Links ─────────────────────────────────
  footerProducts: [
    'Jaggery & Sugar',
    'Textiles & Garments',
    'Leather Goods',
    'Carpets & Rugs',
    'Handicrafts',
    'Spices & Tea',
  ],
  footerMarkets: ['Tanzania', 'Kenya', 'Nigeria', 'UAE', 'United Kingdom', 'China'],

  // ─── Contact Form Dropdown Options ──────────────────────
  contactCountries: [
    'Tanzania', 'Kenya', 'Nigeria', 'South Africa', 'Ghana', 'Ethiopia', 'Uganda',
    'DRC (Congo)', 'Mozambique', 'Rwanda', 'Senegal', 'Cameroon', 'Ivory Coast',
    'Angola', 'Zimbabwe', 'Botswana',
    'UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain', 'Iraq', 'Jordan',
    'China', 'Japan', 'South Korea', 'Singapore', 'Malaysia', 'Thailand',
    'Vietnam', 'Indonesia', 'Philippines', 'Bangladesh', 'Sri Lanka', 'Myanmar', 'Nepal',
    'United Kingdom', 'Germany', 'France', 'Netherlands', 'Italy', 'Spain',
    'Belgium', 'Poland', 'Sweden', 'Switzerland',
    'United States', 'Canada', 'Brazil', 'Mexico', 'Colombia', 'Chile',
    'Australia', 'New Zealand',
    'Other',
  ],
  contactProducts: [
    'Jaggery & Sugar Products', 'Textiles & Garments', 'Leather Goods',
    'Carpets & Rugs', 'Handicrafts & Home Decor', 'Spices', 'Rice',
    'Shoes & Footwear', 'Jute Products', 'Tea', 'Pharmaceuticals', 'Other',
  ],
};

export default siteConfig;
