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
    'Prithvi International Exim LLP sources pharmaceutical medicines and medical and surgical supplies from India for international buyers.',

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
      'Pharmaceutical medicines and medical and surgical supplies sourced from India for international buyers, subject to buyer specifications and destination-market requirements.',
    keywords:
      'Prithvi International Exim LLP, pharmaceutical exporter India, generic medicines, surgical supplies, medical devices, examination gloves, syringes, export from India',
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
      'We support healthcare buyers with dependable sourcing of pharmaceutical medicines and surgical supplies, with clear specifications, export documentation, and responsive coordination from inquiry to delivery.',
    cta1: 'View Product Catalog',
    cta2: 'Request Free Quote',
  },

  // ─── Stats ──────────────────────────────────────────────
  stats: [
    { value: '14', label: 'Products Listed' },
    { value: '24h', label: 'Quote Response' },
    // TEMPORARILY HIDDEN: restore when these company metrics are ready to display.
    // { value: '7+', label: 'Countries Served' },
    // { value: '2024', label: 'Established' },
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
      name: 'Paracetamol Tablets',
      shortName: 'Paracetamol Tablets',
      specification: '500 mg; other strengths on request',
      productForm: 'Tablet',
      description: 'Paracetamol tablets in buyer-specified strengths and pack formats. Brand, labelling, batch documents, and destination-country registration are confirmed with the manufacturer and buyer before supply.',
      shortDescription: '500 mg tablets; other strengths available',
      moq: 'By quotation',
      packaging: 'Blister / bottle',
      image: getAssetPath('/images/products/paracetamol.jpg'),
      featured: true,
    },
    {
      name: 'Amoxicillin Capsules',
      shortName: 'Amoxicillin Capsules',
      specification: '250 mg / 500 mg',
      productForm: 'Capsule',
      description: 'Amoxicillin capsules in common strengths for licensed pharmaceutical importers. Supply is subject to manufacturer availability, destination-country registration, and required import permits.',
      shortDescription: '250 mg and 500 mg capsules',
      moq: 'By quotation',
      packaging: 'Blister / bottle',
      image: getAssetPath('/images/products/amoxicillin.jpg'),
      featured: true,
    },
    {
      name: 'Metformin Tablets',
      shortName: 'Metformin Tablets',
      specification: '500 mg / 850 mg / 1000 mg',
      productForm: 'Tablet',
      description: 'Metformin tablets in immediate-release strengths commonly specified by buyers. Final strength, pack format, labelling, and regulatory documents are confirmed for the destination market.',
      shortDescription: 'Immediate-release tablets',
      moq: 'By quotation',
      packaging: 'Blister / bottle',
      image: getAssetPath('/images/products/Metformin.jpg'),
      featured: true,
    },
    {
      name: 'Amlodipine Tablets',
      shortName: 'Amlodipine',
      specification: '2.5 mg / 5 mg / 10 mg',
      productForm: 'Tablet',
      description: 'Amlodipine tablets in commonly requested strengths for licensed buyers. Product registration, approved labelling, and import documentation depend on the destination market.',
      shortDescription: '2.5 mg, 5 mg, and 10 mg tablets',
      moq: 'By quotation',
      packaging: 'Blister / bottle',
      image: getAssetPath('/images/products/amlodipine.jpg'),
      featured: false,
    },
    {
      name: 'Omeprazole Capsules',
      shortName: 'Omeprazole',
      specification: '20 mg / 40 mg',
      productForm: 'Capsule',
      description: 'Omeprazole capsules in common strengths, with pack configuration and market-specific documentation confirmed against buyer requirements and local registration rules.',
      shortDescription: '20 mg and 40 mg capsules',
      moq: 'By quotation',
      packaging: 'Blister / bottle',
      image: getAssetPath('/images/products/omeprazole.jpg'),
      featured: false,
    },
    {
      name: 'Cetirizine Tablets',
      shortName: 'Cetirizine',
      specification: '10 mg; other forms on request',
      productForm: 'Tablet',
      description: 'Cetirizine 10 mg tablets for buyers sourcing established generic medicines. Alternative dosage forms, pack formats, and export documentation are confirmed by order and destination.',
      shortDescription: '10 mg tablets',
      moq: 'By quotation',
      packaging: 'Blister / bottle',
      image: getAssetPath('/images/products/cetirizine.jpg'),
      featured: false,
    },
    {
      name: 'Oral Rehydration Salts',
      shortName: 'ORS Sachets',
      specification: 'Single-dose sachets',
      productForm: 'Sachet',
      description: 'Oral rehydration salt sachets supplied to buyer-defined formula, pack size, and labelling requirements, subject to the applicable destination-market registration.',
      shortDescription: 'Single-dose oral rehydration sachets',
      moq: 'By quotation',
      packaging: 'Sachets / cartons',
      image: getAssetPath('/images/products/Oral Rehydration Salts.jpg'),
      featured: false,
    },
    {
      name: 'Nitrile Examination Gloves',
      shortName: 'Nitrile Examination Gloves',
      specification: 'Powder-free; sizes S–XL',
      productForm: 'Glove',
      description: 'Single-use nitrile examination gloves in multiple sizes and packaging configurations. Sterility and technical specifications are confirmed against the selected manufacturer and buyer requirements.',
      shortDescription: 'Single-use examination gloves',
      moq: 'By quotation',
      packaging: 'Boxes / cartons',
      image: getAssetPath('/images/products/Nitrile Examination Gloves.jpg'),
      featured: true,
    },
    {
      name: 'Disposable Syringes & Needles',
      shortName: 'Disposable Syringes',
      specification: '1 mL–10 mL; sterile',
      productForm: 'Syringe',
      description: 'Sterile, single-use disposable syringes with compatible needles in commonly requested capacities. Exact configurations, packaging, and device documentation are confirmed per order.',
      shortDescription: 'Sterile single-use syringes',
      moq: 'By quotation',
      packaging: 'Individual packs / cartons',
      image: getAssetPath('/images/products/Disposable syringes & needles.jpg'),
      featured: true,
    },
    {
      name: 'IV Cannulas',
      shortName: 'IV Cannulas',
      specification: 'Multiple gauge sizes',
      productForm: 'IV access',
      description: 'Single-use peripheral IV cannulas in buyer-specified gauge sizes and configurations. Device specifications, packaging, and destination-market documentation are confirmed before supply.',
      shortDescription: 'Peripheral cannulas in multiple sizes',
      moq: 'By quotation',
      packaging: 'Sterile packs / cartons',
      image: getAssetPath('/images/products/IV Cannulas.jpg'),
      featured: false,
    },
    {
      name: 'IV Infusion Sets',
      shortName: 'Infusion Sets',
      specification: 'Vented / non-vented options',
      productForm: 'IV set',
      description: 'Single-use IV infusion sets in configurations selected by the buyer. Tubing, connectors, packaging, and applicable device documents are confirmed with the manufacturer before order.',
      shortDescription: 'Single-use infusion sets',
      moq: 'By quotation',
      packaging: 'Individual packs / cartons',
      image: getAssetPath('/images/products/IV Infusion Sets.jpg'),
      featured: false,
    },
    {
      name: 'Sterile Gauze Swabs & Bandages',
      shortName: 'Gauze Dressings',
      specification: 'Multiple sizes and ply options',
      productForm: 'Dressing',
      description: 'Gauze swabs and wound dressings in buyer-specified sizes, ply, and sterile or non-sterile presentation. Product specifications and packaging are agreed before supply.',
      shortDescription: 'Gauze swabs and wound dressings',
      moq: 'By quotation',
      packaging: 'Medical packs / cartons',
      image: getAssetPath('/images/products/Sterile Gauze Swabs & Bandages.jpg'),
      featured: true,
    },
    {
      name: 'Urinary Catheters & Drainage Bags',
      shortName: 'Urology Supplies',
      specification: 'Multiple sizes and configurations',
      productForm: 'Urology',
      description: 'Urinary catheters and drainage bags in commonly sourced configurations. Material, size, sterile presentation, and device documentation are confirmed to buyer and market requirements.',
      shortDescription: 'Catheters and urine drainage bags',
      moq: 'By quotation',
      packaging: 'Individual packs / cartons',
      image: getAssetPath('/images/products/Urinary Catheters & Drainage Bags.jpg'),
      featured: false,
    },
    {
      name: 'Surgical Sutures',
      shortName: 'Sutures',
      specification: 'Absorbable / non-absorbable',
      productForm: 'Suture',
      description: 'Surgical sutures in absorbable and non-absorbable options, with material, needle configuration, sizes, and packaging confirmed against buyer specifications and destination requirements.',
      shortDescription: 'Surgical sutures in buyer-specified formats',
      moq: 'By quotation',
      packaging: 'Sterile packs / cartons',
      image: getAssetPath('/images/products/Surgical Sutures.jpg'),
      featured: false,
    },
  ],
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
    'Paracetamol Tablets',
    'Amoxicillin Capsules',
    'Metformin Tablets',
    'Nitrile Examination Gloves',
    'Disposable Syringes & Needles',
    'Sterile Gauze Swabs & Bandages',
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
    'Paracetamol Tablets', 'Amoxicillin Capsules', 'Metformin Tablets',
    'Amlodipine Tablets', 'Omeprazole Capsules', 'Cetirizine Tablets',
    'Oral Rehydration Salts', 'Nitrile Examination Gloves',
    'Disposable Syringes & Needles', 'IV Cannulas', 'IV Infusion Sets',
    'Sterile Gauze Swabs & Bandages', 'Urinary Catheters & Drainage Bags',
    'Surgical Sutures',
  ],
};

export default siteConfig;
