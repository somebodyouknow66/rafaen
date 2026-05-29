export const PRODUCTS = [
  { id: 1, name: 'Noir Essence',    price: 285, type: 'Eau de Parfum · RAAFÉN',     notes: 'Deep oud · smoky amber · velvety rose',         badge: null,         seed: 'raafen-noir-a',   rating: 5, stars: [1,1,1,1,1] },
  { id: 2, name: 'Golden Aura',     price: 320, type: 'Eau de Parfum · RAAFÉN',     notes: 'Rare saffron · jasmine sambac · aged sandalwood', badge: 'Bestseller', seed: 'raafen-golden',   rating: 5, stars: [1,1,1,1,1] },
  { id: 3, name: 'Velvet Dusk',     price: 395, type: 'Extrait de Parfum · RAAFÉN', notes: 'Leather · vanilla orchid · tonka bean',           badge: null,         seed: 'raafen-velvet',   rating: 5, stars: [1,1,1,1,1] },
  { id: 4, name: 'Ivory Mist',      price: 265, type: 'Eau de Parfum · RAAFÉN',     notes: 'White tea · Florentine iris · cashmere musk',     badge: null,         seed: 'raafen-ivory',    rating: 4, stars: [1,1,1,1,0] },
  { id: 5, name: 'Crimson Veil',    price: 450, type: 'Extrait de Parfum · RAAFÉN', notes: 'Black rose · rare patchouli · pomegranate',       badge: 'Limited',    seed: 'raafen-crimson',  rating: 5, stars: [1,1,1,1,1] },
  { id: 6, name: 'Ocean Reverie',   price: 220, type: 'Eau de Toilette · RAAFÉN',   notes: 'Sea salt · Calabrian bergamot · driftwood',       badge: null,         seed: 'raafen-ocean',    rating: 4, stars: [1,1,1,1,0] },
];

export const TESTIMONIALS = [
  { id: 1, initials: 'SE', name: 'Sophia E.',  location: 'Paris, France',  text: "Golden Aura is unlike anything I've encountered in thirty years of collecting. Three sprays and the entire room turns. An absolute masterpiece." },
  { id: 2, initials: 'JK', name: 'James K.',   location: 'London, UK',     text: "Velvet Dusk was the first fragrance that made me pause mid-application and simply breathe. RAAFÉN understands what perfume should do to a person." },
  { id: 3, initials: 'AM', name: 'Amara M.',   location: 'Dubai, UAE',     text: "Noir Essence is darkness distilled into beauty. Fourteen hours of projection, and every one of them an event. RAAFÉN is worth every single cent." },
];

export const SCENT_MAP = {
  dark:   { name: 'Noir Essence',   desc: 'Dark oud, smoky amber, velvety rose. For those who command a room.',            emoji: '🌑', label: 'Dark & Deep'      },
  floral: { name: 'Golden Aura',    desc: 'Rare saffron, jasmine sambac, aged sandalwood. Luminous and unforgettable.',    emoji: '🌸', label: 'Floral & Light'   },
  ocean:  { name: 'Ocean Reverie',  desc: 'Sea salt, bergamot, driftwood. For the free spirit.',                           emoji: '🌊', label: 'Fresh & Marine'   },
  exotic: { name: 'Crimson Veil',   desc: 'Black rose, patchouli, pomegranate. Seductive and mysterious.',                 emoji: '🌿', label: 'Exotic & Spiced'  },
};

export const MARQUEE_1 = ['RAAFÉN', 'Beyond The Ordinary', 'Paris'];
export const MARQUEE_2 = ['RAAFÉN', 'Beyond The Ordinary', 'Maison de Parfum'];

export const NAV_LINKS = [
  { text: 'Story',       href: '#story'       },
  { text: 'Collections', href: '#collections' },
  { text: 'Philosophy',  href: '#philosophy'  },
  { text: 'Contact',     href: '#contact'     },
];

export const GALLERY_SEEDS = ['raafen-gal1','raafen-gal2','raafen-gal3','raafen-gal4','raafen-gal5'];

export const FOOTER_LINKS = {
  collection: ['Noir Essence','Golden Aura','Velvet Dusk','Crimson Veil','Ivory Mist','Ocean Reverie'],
  maison:     [{ label:'Our Story', href:'#story' },{ label:'Philosophy', href:'#philosophy' },{ label:'Atelier', href:'#' },{ label:'Sustainability', href:'#' },{ label:'Press', href:'#' }],
  support:    [{ label:'Contact', href:'#contact' },{ label:'Shipping', href:'#' },{ label:'Returns', href:'#' },{ label:'FAQ', href:'#' },{ label:'Privacy', href:'#' }],
};
