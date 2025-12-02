/**
 * EVENT CONFIGURATION
 * Edit this file to update party details, dates, pricing, and links
 * All text content and important URLs are centralized here
 */

export const EVENT_CONFIG = {
  // Party Basic Info
  title: 'ШИНЭ ЖИЛИЙН PARTY ',
  subtitle: 'Программ хангамж, Мэдээллийн технологи, Мэдээллийн систем',
  tagline: 'Шинэ оныг хамтдаа угтацгаая!',
  
  // Event Date & Time
  date: '2025-12-27', // YYYY-MM-DD format
  dateDisplay: '2025 оны 12 сарын 27 - 28',
  startTime: '18:00',
  endTime: '12:00',
  startDateDisplay: '2025 оны 12 сарын 27',
  endDateDisplay: '2025 оны 12 сарын 28',
  
  // Location
  location: 'Ойн төгөл амралт',
  fullAddress: 'Хотын төвөөс 9км-т цэвэр агаарт ой модны төгөлд, Чингэлтэйн лагерт зүрх уулын эцсийн буудлаас 300 метр',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d106.88!3d47.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
  googleMapsDirectionsUrl: 'https://maps.app.goo.gl/kU5tDpegS6gXja5C8',
  
  // Pricing
  basePrice: 120000, // in MNT (Mongolian Tugrik)
  currency: 'MNT',
  taxPercentage: 0, // 0% tax
  taxLabel: 'Tax included',
  showTaxBreakdown: true,
  totalSeats: 40,
  remainingSeats: 40, // Update this manually or connect to a backend
  
  // External Links
  googleFormUrl: 'https://forms.gle/c4LcwCEboj6agPiBA',
  googleFormLabel: 'Submit Your Performance',
  rsvpLabel: 'Register for RSVP',
  
  // Contact Information
  contact: {
    email: 'one.munkhzul@gmail.com',
    phone: '94471907',
  },
  
  
  organizers: [
    {
      name: 'Software Engineering Department',
      shortName: 'SE',
      color: 'bg-blue-600',
    },
    {
      name: 'Information Technology Department',
      shortName: 'IT',
      color: 'bg-purple-600',
    },
    {
      name: 'Information Systems Department',
      shortName: 'IS',
      color: 'bg-indigo-600',
    },
  ],
  
  
  socialLinks: [
    { name: 'Email', url: 'mailto:events@university.edu' },
    { name: 'Phone', url: 'tel:+97612345678' },
  ],
  
  // Schedule/Timeline
  schedule: [
    {
      time: '18:00',
      activity: 'Doors Open',
      description: 'Угтаж авах',
    },
    {
      time: '18:30',
      activity: 'Opening Speech',
      description: 'Нээлтийн үг',
    },
    {
      time: '19:00',
      activity: 'Student Performances',
      description: 'Оюутны үзүүлбэрүүд',
    },
    {
      time: '20:30',
      activity: 'Dance & DJ',
      description: 'Dance floor opens with live DJ',
    },
    {
      time: '22:30',
      activity: 'Raffle & Closing',
      description: 'Prize raffle draw and closing remarks',
    },
  ],
  
  // Dress Code
  dressCode: 'Өөрт тухтай хүссэн хувцасаа өмсөөд ирээрэй!',
  
  // SEO & Meta
  siteTitle: 'New Year Party 2026 - Software, IT & IS',
  siteDescription: 'Join us for the New Year Party celebrating Software Engineering, IT, and Information Systems departments on January 20, 2026.',
  
  // Optional: Add to Calendar
  calendarEvent: {
    title: 'New Year Party - Software, IT & IS',
    description: 'New Year Party celebrating Software Engineering, IT, and Information Systems departments',
    location: 'Main University Hall, Building 8',
    // startDateTime and endDateTime are computed from date + time
  },
}

/**
 * Computed values - DO NOT EDIT
 */
export const computeEventData = () => {
  const basePrice = EVENT_CONFIG.basePrice
  const taxAmount = Math.round((basePrice * EVENT_CONFIG.taxPercentage) / 100)
  const totalPrice = basePrice + taxAmount
  
  return {
    basePrice,
    taxAmount,
    totalPrice,
    displayPrice: `${basePrice.toLocaleString()} ${EVENT_CONFIG.currency}`,
    displayTaxAmount: `${taxAmount.toLocaleString()} ${EVENT_CONFIG.currency}`,
    displayTotalPrice: `${totalPrice.toLocaleString()} ${EVENT_CONFIG.currency}`,
  }
}
