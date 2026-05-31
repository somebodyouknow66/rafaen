export const PRODUCTS = [
  { 
    id: 1, 
    name: 'Throne',     
    price: 'TBD', // Wrapped in quotes so it doesn't cause a syntax error
    type: 'Eau de Parfum · RAAFÉN',     
    notes: 'Deep oud · smoky amber · velvety rose',         
    badge: 'bestseller',         
    seed: 'raafen-throne', 
    img: '/throne-product.png',
    rating: 5, 
    stars: [1,1,1,1,1] 
  },
  { 
    id: 2, 
    name: 'Oud e Siroor',     
    price: 320, 
    type: 'Eau de Parfum · RAAFÉN',     
    notes: 'Rare saffron · jasmine sambac · aged sandalwood', 
    badge: null, 
    seed: 'raafen-oud', 
    img: '/oud.png',
    rating: 5, 
    stars: [1,1,1,1,1] 
  },
];

export const TESTIMONIALS = [
  { id: 1, initials: 'SE', name: 'Sophia E.',  location: 'Paris, France',  text: "Golden Aura is unlike anything I've encountered in thirty years of collecting. Three sprays and the entire room turns. An absolute masterpiece." },
  { id: 2, initials: 'JK', name: 'James K.',   location: 'London, UK',     text: "Velvet Dusk was the first fragrance that made me pause mid-application and simply breathe. RAAFÉN understands what perfume should do to a person." },
  { id: 3, initials: 'AM', name: 'Amara M.',   location: 'Dubai, UAE',     text: "Noir Essence is darkness distilled into beauty. Fourteen hours of projection, and every one of them an event. RAAFÉN is worth every single cent." },
];


export const MARQUEE_1 = ['RAAFÉN', 'Beyond The Ordinary', 'Throne'];
export const MARQUEE_2 = ['RAAFÉN', 'Beyond The Ordinary', 'Mirpurkhas'];

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
