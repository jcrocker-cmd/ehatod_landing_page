// Central site config — EDIT real values before launch.
export const site = {
  name: 'eHatod',
  legalName: 'eHatod Express Utility and Services',
  tagline: 'eHatod na! Fast, fair, local delivery.',
  description:
    'eHatod delivers food, padala and pabili across your city — fast, affordable and local.',
  url: 'https://ehatod.com', // TODO: real production URL (used for SEO/canonical/OG)

  // Contact
  email: 'support@ehatod.com', // TODO: real email
  phone: '+63 900 000 0000', // TODO: real phone
  address: 'Philippines', // TODO: real address

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
