/** @type {import('../types/mandal.js').Mandal} */
export const demoMandal = {
  identity: {
    name: 'Shri Durga Utsav Mandal',
    nameMarathi: 'श्री दुर्गा उत्सव मंडळ',
    slug: 'shri-durga-utsav-mandal',
    tagline: 'Devotion • Strength • Culture • Unity',
    taglineMarathi: 'भक्ती • शक्ती • संस्कृती • एकता',
    established: 1998,
    communitySize: '250+ Families',
    description:
      'For over 25 years, Shri Durga Utsav Mandal has brought together the families of Anand Nagar to celebrate Navratri with devotion, culture, and community spirit. What began as a small neighbourhood gathering has grown into one of the most cherished celebrations in the area — known for its beautiful Devi decorations, traditional aarti, garba evenings, and warm hospitality. Every year, nine days of prayer, music, dance, and togetherness remind us of the strength that comes from community.',
    descriptionMarathi:
      'गेल्या २५ वर्षांपासून, श्री दुर्गा उत्सव मंडळ आनंद नगरच्या कुटुंबांना नवरात्री उत्सवासाठी एकत्र आणत आहे. भक्ती, संस्कृती आणि समुदायभावनेने हा उत्सव साजरा केला जातो. सुंदर देवी सजावट, पारंपारिक आरती, गरबा संध्या आणि आपुलकीची भावना यासाठी हा उत्सव ओळखला जातो.',
    heroImageUrl: '/images/hero-durga.jpg',
    aboutImageUrl: '/images/about-mandal.jpg',
  },

  festival: {
    name: 'Navratri 2026',
    nameMarathi: 'नवरात्री २०२६',
    startDate: '2026-10-11',
    endDate: '2026-10-19',
    dussehraDate: '2026-10-20',
    year: '2026',
  },

  schedule: [
    {
      day: 1,
      date: '2026-10-11',
      goddess: 'Shailaputri',
      goddessMarathi: 'शैलपुत्री',
      color: 'Orange',
      colorHex: '#E87A2F',
      events: [
        {
          title: 'Ghatasthapana',
          titleMarathi: 'घटस्थापना',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Auspicious beginning of Navratri with the ceremonial installation of the sacred Kalash. Join the community for prayers and blessings.',
          eventType: 'Pooja',
        },
        {
          title: 'Maha Aarti & Garba',
          titleMarathi: 'महाआरती आणि गरबा',
          time: '07:30 PM',
          endTime: '10:30 PM',
          venue: 'Shri Durga Ground',
          description: 'Evening Maha Aarti followed by traditional Garba celebrations.',
          eventType: 'Aarti',
        },
      ],
    },
    {
      day: 2,
      date: '2026-10-12',
      goddess: 'Brahmacharini',
      goddessMarathi: 'ब्रह्मचारिणी',
      color: 'White',
      colorHex: '#D9D0C4',
      events: [
        {
          title: 'Morning Pooja',
          titleMarathi: 'प्रातःकाळ पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Daily morning pooja and offerings to Maa Brahmacharini.',
          eventType: 'Pooja',
        },
        {
          title: 'Garba Evening',
          titleMarathi: 'गरबा संध्या',
          time: '08:00 PM',
          endTime: '11:00 PM',
          venue: 'Shri Durga Ground',
          description: 'Traditional Garba with live music. All community members welcome.',
          eventType: 'Cultural',
        },
      ],
    },
    {
      day: 3,
      date: '2026-10-13',
      goddess: 'Chandraghanta',
      goddessMarathi: 'चंद्रघंटा',
      color: 'Red',
      colorHex: '#C0392B',
      events: [
        {
          title: 'Morning Pooja',
          titleMarathi: 'प्रातःकाळ पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Daily morning pooja and offerings to Maa Chandraghanta.',
          eventType: 'Pooja',
        },
        {
          title: 'Cultural Programme & Garba',
          titleMarathi: 'सांस्कृतिक कार्यक्रम आणि गरबा',
          time: '07:30 PM',
          endTime: '11:00 PM',
          venue: 'Shri Durga Ground',
          description: 'Special cultural performances by community children, followed by Garba.',
          eventType: 'Cultural',
        },
      ],
    },
    {
      day: 4,
      date: '2026-10-14',
      goddess: 'Kushmanda',
      goddessMarathi: 'कूष्माण्डा',
      color: 'Royal Blue',
      colorHex: '#2E5FA1',
      events: [
        {
          title: 'Morning Pooja',
          titleMarathi: 'प्रातःकाळ पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Daily morning pooja and offerings to Maa Kushmanda.',
          eventType: 'Pooja',
        },
        {
          title: 'Haldi Kumkum & Garba',
          titleMarathi: 'हळदी कुंकू आणि गरबा',
          time: '05:00 PM',
          endTime: '10:30 PM',
          venue: 'Shri Durga Ground',
          description: 'Traditional Haldi Kumkum ceremony for women, followed by community Garba.',
          eventType: 'Cultural',
        },
      ],
    },
    {
      day: 5,
      date: '2026-10-15',
      goddess: 'Skandamata',
      goddessMarathi: 'स्कंदमाता',
      color: 'Yellow',
      colorHex: '#D4A72C',
      events: [
        {
          title: 'Morning Pooja',
          titleMarathi: 'प्रातःकाळ पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Daily morning pooja and offerings to Maa Skandamata.',
          eventType: 'Pooja',
        },
        {
          title: 'Bhajan Sandhya & Garba',
          titleMarathi: 'भजन संध्या आणि गरबा',
          time: '07:30 PM',
          endTime: '11:00 PM',
          venue: 'Shri Durga Ground',
          description: 'Devotional Bhajan evening with renowned local artists, followed by Garba.',
          eventType: 'Aarti',
        },
      ],
    },
    {
      day: 6,
      date: '2026-10-16',
      goddess: 'Katyayani',
      goddessMarathi: 'कात्यायनी',
      color: 'Green',
      colorHex: '#3D8B37',
      events: [
        {
          title: 'Morning Pooja',
          titleMarathi: 'प्रातःकाळ पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Daily morning pooja and offerings to Maa Katyayani.',
          eventType: 'Pooja',
        },
        {
          title: 'Youth Night & Garba',
          titleMarathi: 'तरुण संध्या आणि गरबा',
          time: '08:00 PM',
          endTime: '11:30 PM',
          venue: 'Shri Durga Ground',
          description: 'Special evening organized by the youth committee with Dandiya Raas and DJ Garba.',
          eventType: 'Cultural',
        },
      ],
    },
    {
      day: 7,
      date: '2026-10-17',
      goddess: 'Kalaratri',
      goddessMarathi: 'कालरात्री',
      color: 'Grey',
      colorHex: '#6B7280',
      events: [
        {
          title: 'Morning Pooja',
          titleMarathi: 'प्रातःकाळ पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Daily morning pooja and offerings to Maa Kalaratri.',
          eventType: 'Pooja',
        },
        {
          title: 'Maha Aarti',
          titleMarathi: 'महाआरती',
          time: '08:00 PM',
          venue: 'Shri Durga Ground',
          description: 'Grand community Maha Aarti. Join the community for the evening prayers and seek blessings of Maa Kalaratri.',
          eventType: 'Aarti',
        },
      ],
    },
    {
      day: 8,
      date: '2026-10-18',
      goddess: 'Mahagauri',
      goddessMarathi: 'महागौरी',
      color: 'Purple',
      colorHex: '#7C3AED',
      events: [
        {
          title: 'Durga Ashtami Pooja',
          titleMarathi: 'दुर्गा अष्टमी पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Special Ashtami Pooja with Havan and Kanya Pujan. An important day of the celebration.',
          eventType: 'Pooja',
        },
        {
          title: 'Ashtami Garba Night',
          titleMarathi: 'अष्टमी गरबा रात्री',
          time: '08:00 PM',
          endTime: '12:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Grand Ashtami celebration with special Garba performances and community feast.',
          eventType: 'Cultural',
        },
      ],
    },
    {
      day: 9,
      date: '2026-10-19',
      goddess: 'Siddhidatri',
      goddessMarathi: 'सिद्धिदात्री',
      color: 'Peacock Green',
      colorHex: '#0D7377',
      events: [
        {
          title: 'Maha Navami Pooja',
          titleMarathi: 'महानवमी पूजा',
          time: '07:00 AM',
          venue: 'Shri Durga Ground',
          description: 'Grand Navami Pooja marking the culmination of nine days of devotion.',
          eventType: 'Pooja',
        },
        {
          title: 'Visarjan Miravnuk',
          titleMarathi: 'विसर्जन मिरवणूक',
          time: '05:00 PM',
          venue: 'Shri Durga Ground to Visarjan Ghat',
          description: 'Grand farewell procession with dhol-tasha, dance, and community participation. The idol is taken from the ground to the Visarjan Ghat.',
          eventType: 'Procession',
        },
      ],
    },
  ],

  sponsors: [
    {
      id: 'sp-1',
      name: 'Sharma Trading Co.',
      tier: 'gold',
      description: 'Premium sponsor supporting our celebration for the past 12 years. Your trust fuels our devotion.',
      initials: 'ST',
    },
    {
      id: 'sp-2',
      name: 'Anand Nagar Co-op Bank',
      tier: 'gold',
      description: 'Committed to community development and cultural preservation.',
      initials: 'AN',
    },
    {
      id: 'sp-3',
      name: 'Patil Electronics',
      tier: 'silver',
      description: 'Powering the celebration with sound and lighting.',
      initials: 'PE',
    },
    {
      id: 'sp-4',
      name: 'Deshmukh Builders',
      tier: 'silver',
      description: 'Building communities, strengthening bonds.',
      initials: 'DB',
    },
    {
      id: 'sp-5',
      name: 'Kulkarni Sweets',
      tier: 'community',
      description: 'Sweetening the celebration with traditional prasad.',
      initials: 'KS',
    },
    {
      id: 'sp-6',
      name: 'Bhagwat Medical',
      tier: 'community',
      initials: 'BM',
    },
    {
      id: 'sp-7',
      name: 'Joshi Fabrics',
      tier: 'festival',
      initials: 'JF',
    },
    {
      id: 'sp-8',
      name: 'Mehta Photography',
      tier: 'supporter',
      initials: 'MP',
    },
  ],

  gallery: [
    {
      id: 'g-1',
      src: '/images/gallery-1.jpg',
      alt: 'Beautifully decorated Devi idol with flowers and lights',
      caption: 'Devi Decoration — Navratri 2025',
      featured: true,
    },
    {
      id: 'g-2',
      src: '/images/gallery-2.jpg',
      alt: 'Community members performing Garba during Navratri evening',
      caption: 'Garba Evening — Day 5',
    },
    {
      id: 'g-3',
      src: '/images/gallery-3.jpg',
      alt: 'Traditional Maha Aarti with community gathering',
      caption: 'Maha Aarti — Navratri 2025',
    },
    {
      id: 'g-4',
      src: '/images/gallery-4.jpg',
      alt: 'Visarjan procession with dhol-tasha through the streets',
      caption: 'Visarjan Miravnuk — Day 9',
    },
  ],

  location: {
    venue: 'Shri Durga Ground',
    address: 'Anand Nagar, Near Water Tank, Pune',
    landmark: 'Opposite Anand Nagar Community Hall',
    city: 'Pune',
    state: 'Maharashtra',
    mapsUrl: 'https://maps.google.com/?q=Anand+Nagar+Pune',
  },

  contact: {
    phone: '+91 98765 43210',
    email: 'info@shridurgamandal.org',
    whatsapp: '+919876543210',
  },

  social: {
    instagram: 'https://instagram.com/shridurgautsavmandal',
    facebook: 'https://facebook.com/shridurgautsavmandal',
    youtube: 'https://youtube.com/@shridurgautsavmandal',
  },
};

/** @type {import('../types/mandal.js').Mandal} */
export const demoMandal2 = {
  identity: {
    name: 'Jai Bhavani Utsav Mandal',
    nameMarathi: 'जय भवानी उत्सव मंडळ',
    slug: 'jai-bhavani-utsav-mandal',
    tagline: 'Faith • Tradition • Celebration • Community',
    taglineMarathi: 'श्रद्धा • परंपरा • उत्सव • समुदाय',
    established: 2005,
    communitySize: '150+ Families',
    description:
      'Jai Bhavani Utsav Mandal was founded by a group of devoted families in Sakinaka who wanted to create a celebration that honours Maa Bhavani and brings together the diverse community. Over the years, our celebration has become a beautiful blend of traditional pooja, cultural performances, and community togetherness.',
    descriptionMarathi:
      'साकीनाका येथील भक्त कुटुंबांनी स्थापन केलेल्या जय भवानी उत्सव मंडळाने मां भवानीच्या आराधनेसाठी आणि विविधतेने नटलेल्या समुदायाला एकत्र आणण्यासाठी हा उत्सव सुरू केला.',
    heroImageUrl: '/images/hero-durga.jpg',
    aboutImageUrl: '/images/about-mandal.jpg',
  },

  festival: {
    name: 'Navratri 2026',
    nameMarathi: 'नवरात्री २०२६',
    startDate: '2026-10-11',
    endDate: '2026-10-19',
    dussehraDate: '2026-10-20',
    year: '2026',
  },

  schedule: [
    {
      day: 1, date: '2026-10-11', goddess: 'Shailaputri', goddessMarathi: 'शैलपुत्री',
      color: 'Orange', colorHex: '#E87A2F',
      events: [{
        title: 'Kalash Sthapana', titleMarathi: 'कलश स्थापना',
        time: '08:00 AM', venue: 'Bhavani Mandir Ground',
        description: 'Sacred Kalash installation ceremony and inaugural pooja.', eventType: 'Pooja',
      }],
    },
    {
      day: 2, date: '2026-10-12', goddess: 'Brahmacharini', goddessMarathi: 'ब्रह्मचारिणी',
      color: 'White', colorHex: '#D9D0C4',
      events: [{
        title: 'Evening Aarti & Dandiya', titleMarathi: 'संध्याकाळ आरती आणि दांडिया',
        time: '07:00 PM', venue: 'Bhavani Mandir Ground',
        description: 'Traditional Aarti followed by Dandiya Raas.', eventType: 'Aarti',
      }],
    },
    {
      day: 3, date: '2026-10-13', goddess: 'Chandraghanta', goddessMarathi: 'चंद्रघंटा',
      color: 'Red', colorHex: '#C0392B',
      events: [{
        title: 'Bhajan & Garba Night', titleMarathi: 'भजन आणि गरबा रात्री',
        time: '07:30 PM', venue: 'Bhavani Mandir Ground',
        description: 'Devotional Bhajan session with live Garba.', eventType: 'Cultural',
      }],
    },
    {
      day: 4, date: '2026-10-14', goddess: 'Kushmanda', goddessMarathi: 'कूष्माण्डा',
      color: 'Royal Blue', colorHex: '#2E5FA1',
      events: [{
        title: 'Special Pooja & Garba', titleMarathi: 'विशेष पूजा आणि गरबा',
        time: '07:00 PM', venue: 'Bhavani Mandir Ground',
        description: 'Special pooja by community elders, followed by Garba.', eventType: 'Pooja',
      }],
    },
    {
      day: 5, date: '2026-10-15', goddess: 'Skandamata', goddessMarathi: 'स्कंदमाता',
      color: 'Yellow', colorHex: '#D4A72C',
      events: [{
        title: 'Children\'s Programme', titleMarathi: 'बालकांचा कार्यक्रम',
        time: '05:00 PM', venue: 'Bhavani Mandir Ground',
        description: 'Cultural performances by the young members of our community.', eventType: 'Cultural',
      }],
    },
    {
      day: 6, date: '2026-10-16', goddess: 'Katyayani', goddessMarathi: 'कात्यायनी',
      color: 'Green', colorHex: '#3D8B37',
      events: [{
        title: 'Sundarkand Path & Garba', titleMarathi: 'सुंदरकांड पाठ आणि गरबा',
        time: '06:00 PM', venue: 'Bhavani Mandir Ground',
        description: 'Community Sundarkand recitation followed by Garba.', eventType: 'Aarti',
      }],
    },
    {
      day: 7, date: '2026-10-17', goddess: 'Kalaratri', goddessMarathi: 'कालरात्री',
      color: 'Grey', colorHex: '#6B7280',
      events: [{
        title: 'Grand Aarti & Community Dinner', titleMarathi: 'भव्य आरती आणि सामुदायिक भोजन',
        time: '07:00 PM', venue: 'Bhavani Mandir Ground',
        description: 'Grand community Aarti followed by Bhandara (community meal).', eventType: 'Aarti',
      }],
    },
    {
      day: 8, date: '2026-10-18', goddess: 'Mahagauri', goddessMarathi: 'महागौरी',
      color: 'Purple', colorHex: '#7C3AED',
      events: [{
        title: 'Durga Ashtami Havan', titleMarathi: 'दुर्गा अष्टमी हवन',
        time: '09:00 AM', venue: 'Bhavani Mandir Ground',
        description: 'Sacred Havan ceremony and Kanya Pujan.', eventType: 'Pooja',
      }],
    },
    {
      day: 9, date: '2026-10-19', goddess: 'Siddhidatri', goddessMarathi: 'सिद्धिदात्री',
      color: 'Peacock Green', colorHex: '#0D7377',
      events: [{
        title: 'Navami Pooja & Visarjan', titleMarathi: 'नवमी पूजा आणि विसर्जन',
        time: '10:00 AM', venue: 'Bhavani Mandir Ground',
        description: 'Final day celebrations with Navami Pooja and evening Visarjan procession.', eventType: 'Procession',
      }],
    },
  ],

  sponsors: [
    {
      id: 'sp2-1', name: 'Gupta Enterprises', tier: 'gold',
      description: 'Our proud title sponsor for Navratri 2026.', initials: 'GE',
    },
    {
      id: 'sp2-2', name: 'Sakinaka Traders Association', tier: 'silver',
      description: 'Supporting local celebrations since 2010.', initials: 'SA',
    },
    {
      id: 'sp2-3', name: 'Bhatia Jewellers', tier: 'community', initials: 'BJ',
    },
    {
      id: 'sp2-4', name: 'Patel Catering', tier: 'festival', initials: 'PC',
    },
  ],

  gallery: [
    {
      id: 'g2-1', src: '/images/gallery-1.jpg',
      alt: 'Beautifully adorned Bhavani idol', caption: 'Maa Bhavani — Navratri 2025', featured: true,
    },
    {
      id: 'g2-2', src: '/images/gallery-2.jpg',
      alt: 'Community Dandiya night', caption: 'Dandiya Night — Day 3',
    },
    {
      id: 'g2-3', src: '/images/gallery-3.jpg',
      alt: 'Traditional aarti ceremony', caption: 'Grand Aarti — Navratri 2025',
    },
  ],

  location: {
    venue: 'Bhavani Mandir Ground',
    address: 'Sakinaka, Near Bus Depot, Mumbai',
    landmark: 'Behind Sakinaka Metro Station',
    city: 'Mumbai',
    state: 'Maharashtra',
    mapsUrl: 'https://maps.google.com/?q=Sakinaka+Mumbai',
  },

  contact: {
    phone: '+91 99876 54321',
    whatsapp: '+919987654321',
  },

  social: {
    instagram: 'https://instagram.com/jaibhavanimandal',
    facebook: 'https://facebook.com/jaibhavanimandal',
  },
};
