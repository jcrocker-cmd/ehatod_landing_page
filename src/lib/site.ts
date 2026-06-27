// Central site config — EDIT real values before launch.
export const site = {
  name: 'eHatod',
  legalName: 'eHatod Utility and Delivery Services', // DTI-registered 2026-06-26 (EHATOD UTILITY AND DELIVERY SERVICES)
  tagline: 'eHatod na! Fast, fair, local delivery.',
  description:
    'eHatod delivers food, padala and pabili across your city — fast, affordable and local.',
  url: 'https://ehatodexpress.com', // production domain (registered)

  // Contact
  email: 'support@ehatodexpress.com', // TODO: create this inbox
  dpo: 'dpo@ehatodexpress.com', // Data Protection Officer contact (RA 10173) — TODO: create inbox + name the DPO person
  phone: '+63 900 000 0000', // TODO: real phone
  address: 'Brgy Canjulao, Jagna, Bohol 6308', // DTI-registered business address

  // App store links (consumer app = "eHatod")
  appStore: {
    consumerIos: '#', // TODO
    consumerAndroid: '#', // TODO
    riderAndroid: '#', // TODO eHatod Rider
    merchantAndroid: '#', // TODO eHatod Merchant
  },

  // Backend API base (fda-backend Laravel) — ROOT url, no /api suffix.
  // Same backend the Flutter apps use (single source of truth). Endpoints append /api/...
  apiBase: process.env.NEXT_PUBLIC_API_BASE || 'https://fda-backend-vfmc.onrender.com',

  // Socials
  social: {
    facebook: '#',
    instagram: '#',
    tiktok: '#',
  },
}

export const serviceCities = ['Cebu City', 'Mandaue', 'Lapu-Lapu', 'Davao', 'Cagayan de Oro']
