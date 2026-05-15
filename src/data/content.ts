export const HERO_SLIDES = [
{
  id: 1,
  image:
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=80',
  title: 'Building Spaces. Shaping Lives.',
  subtitle: 'Award-winning architectural development and interior mastery.'
},
{
  id: 2,
  image:
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&auto=format&fit=crop&q=80',
  title: 'Timeless Elegance. Modern Vision.',
  subtitle: 'Restoring heritage properties with contemporary sophistication.'
},
{
  id: 3,
  image:
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&auto=format&fit=crop&q=80',
  title: 'Crafting Your Sanctuary.',
  subtitle: 'Bespoke interior design tailored to your lifestyle.'
}];


export const STATS = [
{ id: 1, value: '150+', label: 'Projects Delivered' },
{ id: 2, value: '25', label: 'Years of Craft' },
{ id: 3, value: '12', label: 'Cities Worldwide' },
{ id: 4, value: '99%', label: 'Client Satisfaction' }];


export const SERVICES = {
  development: {
    title: 'Real Estate Development',
    description:
    'From conceptualization to final execution, we deliver end-to-end building projects that redefine skylines and communities. Our approach combines innovative structural engineering with sustainable practices.',
    image:
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80',
    subServices: [
    {
      title: 'End-to-end Building',
      desc: 'Complete lifecycle management from blueprint to handover.',
      icon: 'Building2'
    },
    {
      title: 'Land Development',
      desc: 'Strategic site evaluation and master planning.',
      icon: 'Map'
    },
    {
      title: 'Structural Execution',
      desc: 'Precision engineering and robust construction.',
      icon: 'Hammer'
    },
    {
      title: 'Project Management',
      desc: 'Seamless coordination of resources and timelines.',
      icon: 'Briefcase'
    }]

  },
  interior: {
    title: 'Interior & Renovation',
    description:
    "We breathe new life into existing spaces. Whether it's a historic restoration or a modern interior overhaul, our artisans and designers work in harmony to create environments that inspire.",
    image:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format&fit=crop&q=80',
    subServices: [
    {
      title: 'Interior Design',
      desc: 'Curated aesthetics and functional spatial planning.',
      icon: 'Sofa'
    },
    {
      title: 'Old Building Restoration',
      desc: 'Preserving heritage while integrating modern amenities.',
      icon: 'Landmark'
    },
    {
      title: 'Room Remodeling',
      desc: 'Targeted transformations for specific living spaces.',
      icon: 'PaintRoller'
    },
    {
      title: 'Professional Painting',
      desc: 'Premium finishes and bespoke textural applications.',
      icon: 'Brush'
    }]

  }
};

// ============================================================
// PORTFOLIO — 18 projects per category × 3 categories = 54 total
// Cover images use varied aspect ratios via Unsplash sizing params
// to produce a natural Pinterest-style masonry layout.
// ============================================================

const DEV_IMAGES = [
'photo-1600596542815-ffad4c1539a9',
'photo-1512915922686-57c11dde9b6b',
'photo-1486406146926-c627a92ad1ab',
'photo-1510798831971-661eb04b3739',
'photo-1564013799919-ab600027ffc6',
'photo-1582268611958-ebfd161ef9cf',
'photo-1542621334-a254cf47733d',
'photo-1523217582562-09d0def993a6',
'photo-1518780664697-55e3ad937233',
'photo-1605276374104-dee2a0ed3cd6',
'photo-1480074568708-e7b720bb3f09',
'photo-1494526585095-c41746248156',
'photo-1448630360428-65456885c650',
'photo-1430285561322-7808604715df',
'photo-1572120360610-d971b9d7767c',
'photo-1502672260266-1c1ef2d93688',
'photo-1545324418-cc1a3fa10c00',
'photo-1600585154340-be6161a56a0c'];


const INTERIOR_IMAGES = [
'photo-1512917774080-9991f1c4c750',
'photo-1600210492486-724fe5c67fb0',
'photo-1600607687920-4e2a09cf159d',
'photo-1505691938895-1758d7feb511',
'photo-1493663284031-b7e3aefcae8e',
'photo-1586023492125-27b2c045efd7',
'photo-1567016376408-0226e4d0c1ea',
'photo-1616594039964-ae9021a400a0',
'photo-1615874959474-d609969a20ed',
'photo-1618221195710-dd6b41faaea6',
'photo-1567767292278-a4f21aa2d36e',
'photo-1556909114-f6e7ad7d3136',
'photo-1554995207-c18c203602cb',
'photo-1583847268964-b28dc8f51f92',
'photo-1560448204-e02f11c3d0e2',
'photo-1540574163026-643ea20ade25',
'photo-1631679706909-1844bbd07221',
'photo-1616137466211-f939a420be84'];


const RESTORATION_IMAGES = [
'photo-1613490908592-fd5e16f024cd',
'photo-1497366811353-6870744d04b2',
'photo-1497366754035-f200968a6e72',
'photo-1576941089067-2de3c901e126',
'photo-1509644851169-2acc08aa25b5',
'photo-1568605114967-8130f3a36994',
'photo-1572120360610-d971b9d7767c',
'photo-1551038247-3d9af20df552',
'photo-1531835551805-16d864c8d311',
'photo-1448630360428-65456885c650',
'photo-1604014237800-1c9102c219da',
'photo-1518883147531-6c7d4b13970b',
'photo-1571055107559-3e67626fa8be',
'photo-1547036967-23d11aacaee0',
'photo-1574691250077-03a929faece5',
'photo-1600585154526-990dced4db0d',
'photo-1505691938895-1758d7feb511',
'photo-1600566753190-17f0baa2a6c3'];


// Varied widths simulate real Pinterest aspect ratios
const WIDTHS = [600, 700, 800, 600, 900, 700, 600, 800];

const DEV_NAMES = [
'The Glass Pavilion',
'Coastal Villa',
'Silicon Valley HQ',
'Alpine Retreat',
'Skyline Tower',
'Meridian Plaza',
'The Vertex',
'Harbor Heights',
'Solstice Residences',
'The Atrium',
'Cascade Estate',
'North Bridge Lofts',
'The Helix',
'Forest Edge Manor',
'Quartz Pavilion',
'Ember House',
'Riverstone Complex',
'The Linear House'];

const INT_NAMES = [
'Minimalist Loft',
'The Onyx Penthouse',
'Velvet Suite',
'Ivory Apartment',
'The Reading Room',
'Cedar Den',
'Studio Noir',
'The Marble Kitchen',
'Garden Atrium',
'Walnut Library',
'The Sun Salon',
'Moss Bedroom Suite',
'Brass & Stone',
'The Reflection Lounge',
'Driftwood Retreat',
'Linen House',
'Atelier Powder Room',
'The Quiet Hall'];

const REST_NAMES = [
'Heritage Townhouse',
'Urban Oasis',
'Victorian Revival',
'Old Mill Conversion',
'The Brownstone',
'Chapel Loft',
'Beaux-Arts Apartment',
'The Founders Hall',
'Carriage House Restoration',
'Gothic Quarter Flat',
'The Rectory',
'Stone Cottage',
'19th Century Atelier',
'The Mariner\u2019s House',
'Edwardian Manor',
'The Apothecary',
'Boulevard 12',
'The Old Bakery'];


const LOCATIONS = [
'Beverly Hills, CA',
'New York, NY',
'London, UK',
'Paris, France',
'Dubai, UAE',
'Aspen, CO',
'Tokyo, JP',
'Milan, IT',
'Singapore',
'Sydney, AU',
'Madrid, ES',
'Lisbon, PT'];

const SCOPES_DEV = [
'Full Build & Landscape',
'Ground-up Construction',
'Architecture & Interior',
'Commercial Build',
'Master Planning'];

const SCOPES_INT = [
'Interior Overhaul',
'Luxury Fit-out',
'Spatial Redesign',
'Furnishing & Styling',
'Room Remodel'];

const SCOPES_REST = [
'Historical Restoration',
'Apartment Renovation',
'Heritage Conservation',
'Adaptive Reuse',
'Full Refurbishment'];


function buildProjects(
prefix: string,
category: string,
names: string[],
images: string[],
scopes: string[])
{
  return names.map((name, i) => {
    const photoId = images[i % images.length];
    const w = WIDTHS[i % WIDTHS.length];
    return {
      id: `${prefix}${i + 1}`,
      name,
      category,
      year: `${2020 + i % 5}`,
      location: LOCATIONS[i % LOCATIONS.length],
      area: `${(2 + i % 9) * 1000 + 200} sq ft`,
      scope: scopes[i % scopes.length],
      description: `A signature ${category.toLowerCase()} project showcasing our commitment to craft, materiality and timeless design.`,
      coverImage: `https://images.unsplash.com/${photoId}?w=${w}&auto=format&fit=crop&q=80`,
      gallery: [
      `https://images.unsplash.com/${photoId}?w=1600&auto=format&fit=crop&q=80`,
      `https://images.unsplash.com/${images[(i + 1) % images.length]}?w=1600&auto=format&fit=crop&q=80`,
      `https://images.unsplash.com/${images[(i + 2) % images.length]}?w=1600&auto=format&fit=crop&q=80`,
      `https://images.unsplash.com/${images[(i + 3) % images.length]}?w=1600&auto=format&fit=crop&q=80`]

    };
  });
}

const DEV_PROJECTS = buildProjects(
  'd',
  'Development',
  DEV_NAMES,
  DEV_IMAGES,
  SCOPES_DEV
);
const INT_PROJECTS = buildProjects(
  'i',
  'Interior',
  INT_NAMES,
  INTERIOR_IMAGES,
  SCOPES_INT
);
const REST_PROJECTS = buildProjects(
  'r',
  'Restoration',
  REST_NAMES,
  RESTORATION_IMAGES,
  SCOPES_REST
);

// Interleave so the "All" view has a balanced mix across categories
export const PORTFOLIO = (() => {
  const out: any[] = [];
  const max = Math.max(
    DEV_PROJECTS.length,
    INT_PROJECTS.length,
    REST_PROJECTS.length
  );
  for (let i = 0; i < max; i++) {
    if (DEV_PROJECTS[i]) out.push(DEV_PROJECTS[i]);
    if (INT_PROJECTS[i]) out.push(INT_PROJECTS[i]);
    if (REST_PROJECTS[i]) out.push(REST_PROJECTS[i]);
  }
  return out;
})();

export const TESTIMONIALS = [
{
  id: 1,
  quote:
  "Atelier Estate didn't just build our home; they sculpted a masterpiece. Their attention to detail is unparalleled in the industry.",
  name: 'Eleanor Vance',
  role: 'Homeowner',
  project: 'The Glass Pavilion'
},
{
  id: 2,
  quote:
  'The restoration of our London townhouse was handled with such reverence for history, yet perfectly adapted for our modern family.',
  name: 'James Sterling',
  role: 'Private Client',
  project: 'Heritage Townhouse'
},
{
  id: 3,
  quote:
  'Professional, visionary, and exact. They delivered our corporate headquarters ahead of schedule without compromising a single detail.',
  name: 'Sarah Chen',
  role: 'CEO, TechFlow',
  project: 'Silicon Valley HQ'
},
{
  id: 4,
  quote:
  'From the first sketch to the final walkthrough, the team treated our vision as their own. The craftsmanship is simply on another level.',
  name: 'Arjun Mehta',
  role: 'Founder, North Studio',
  project: 'Skyline Tower'
},
{
  id: 5,
  quote:
  'They understood the soul of our old apartment and brought it back to life without losing a single shred of its character.',
  name: 'Claire Dubois',
  role: 'Art Curator',
  project: 'Urban Oasis'
},
{
  id: 6,
  quote:
  'Quietly luxurious, deeply considered, and delivered exactly when promised. A genuinely world-class partner to work with.',
  name: 'Hiroshi Tanaka',
  role: 'Managing Director',
  project: 'The Onyx Penthouse'
}];