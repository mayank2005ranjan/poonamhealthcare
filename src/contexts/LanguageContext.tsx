
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi';

// Define more precise types to handle deeply nested translation structures
type SimpleTranslation = string | Record<Language, string>;
type NestedTranslation = {
  [key: string]: SimpleTranslation | NestedObject;
};
type NestedObject = {
  [key: string]: SimpleTranslation | NestedObject;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: NestedTranslation;
};

const translations = {
  home: {
    en: 'Home',
    hi: 'होम',
  },
  about: {
    en: 'About Us',
    hi: 'हमारे बारे में',
  },
  services: {
    en: 'Our Services',
    hi: 'हमारी सेवाएं',
  },
  appointment: {
    en: 'Book Appointment',
    hi: 'अपॉइंटमेंट बुक करें',
  },
  pharmacy: {
    en: 'Pharmacy',
    hi: 'फार्मेसी',
  },
  contact: {
    en: 'Contact',
    hi: 'संपर्क करें',
  },
  team: {
    en: 'Our Team',
    hi: 'हमारी टीम',
  },
  welcomeMessage: {
    en: 'Providing Quality Healthcare Services',
    hi: 'गुणवत्तापूर्ण स्वास्थ्य सेवाएं प्रदान करना',
  },
  welcomeSubtext: {
    en: 'Your health is our priority. Experience world-class medical care.',
    hi: 'आपका स्वास्थ्य हमारी प्राथमिकता है। विश्व स्तरीय चिकित्सा देखभाल का अनुभव करें।',
  },
  heroHeading: {
    en: 'Your Trusted Partner in Health and Wellness',
    hi: 'स्वास्थ्य और कल्याण में आपका विश्वसनीय साथी',
  },
  heroSubheading: {
    en: 'Expert Care | Trusted Doctors | Compassionate Service',
    hi: 'विशेषज्ञ देखभाल | विश्वसनीय डॉक्टर | करुणामय सेवा',
  },
  bookAppointment: {
    en: 'Book Appointment',
    hi: 'अपॉइंटमेंट बुक करें',
  },
  callNow: {
    en: 'Call Now',
    hi: 'अभी कॉल करें',
  },
  quickContact: {
    en: 'Need Assistance? Call us Now!',
    hi: 'सहायता चाहिए? अभी कॉल करें!',
  },
  teamHelp: {
    en: 'Our team is here to help you',
    hi: 'हमारी टीम आपकी मदद के लिए यहाँ है',
  },
  footer: {
    quickLinks: {
      en: 'Quick Links',
      hi: 'त्वरित लिंक',
    },
    contactUs: {
      en: 'Contact Us',
      hi: 'संपर्क करें',
    },
    openingHours: {
      en: 'Opening Hours',
      hi: 'खुलने का समय',
    },
  },
  footerTagline: {
    en: 'Your trusted partner in health and wellness.',
    hi: 'स्वास्थ्य और कल्याण में आपका विश्वसनीय साथी।',
  },
  weekdays: {
    en: 'Monday to Sunday',
    hi: 'सोमवार से रविवार',
  },
  hours: {
    en: '24hrs',
    hi: '24 घंटे',
  },
  openingHours: {
    en: '24hrs',
    hi: '24 घंटे',
  },
  emergency: {
    en: 'Emergency: 24/7',
    hi: 'आपातकालीन: 24/7',
  },
  rightsReserved: {
    en: 'All Rights Reserved.',
    hi: 'सर्वाधिकार सुरक्षित।',
  },
  privacyPolicy: {
    en: 'Privacy Policy',
    hi: 'गोपनीयता नीति',
  },
  termsConditions: {
    en: 'Terms & Conditions',
    hi: 'नियम और शर्तें',
  },
  disclaimer: {
    en: 'Disclaimer',
    hi: 'अस्वीकरण',
  },
  refundPolicy: {
    en: 'Refund & Cancellation Policy',
    hi: 'रिफंड और रद्दीकरण नीति',
  },
  patientRights: {
    en: 'Patient Rights & Responsibilities',
    hi: 'रोगी के अधिकार और जिम्मेदारियां',
  },
  findUs: {
    en: 'Find Us',
    hi: 'हमें ढूंढें',
  },
  visitLocation: {
    en: 'Visit our location in Jhanjharpur',
    hi: 'झंझारपुर में हमारे स्थान पर जाएँ',
  },
  getDirections: {
    en: 'Get Directions',
    hi: 'रास्ता पाएं',
  },
  latestUpdates: {
    en: 'Latest Updates',
    hi: 'नवीनतम अपडेट',
  },
  stayInformed: {
    en: 'Stay informed about our services and events',
    hi: 'हमारी सेवाओं और कार्यक्रमों के बारे में जानकारी प्राप्त करें',
  },
  updates: {
    nowOnline: {
      en: 'Now Online!',
      hi: 'अब ऑनलाइन!',
    },
    nowOnlineDate: {
      en: 'April 29, 2025',
      hi: '29 अप्रैल, 2025',
    },
    nowOnlineDesc: {
      en: 'Poonam Health Care is now live online — explore our services, book appointments, and order medicines at: poonamhealthcare.vercel.app',
      hi: 'पूनम हेल्थ केयर अब ऑनलाइन हो गया है — poonamhealthcare.vercel.app पर हमारी सेवाओं का पता लगाएं, अपॉइंटमेंट बुक करें और दवाएं ऑर्डर करें',
    },
    eyeCare: {
      en: 'World-Class Eye Care Now Available',
      hi: 'विश्व स्तरीय नेत्र देखभाल अब उपलब्ध',
    },
    eyeCareDate: {
      en: 'April 29, 2025',
      hi: '29 अप्रैल, 2025',
    },
    eyeCareDesc: {
      en: 'We now offer expert eye consultations and advanced treatments from experienced specialists. Your vision is in safe hands!',
      hi: 'हम अब अनुभवी विशेषज्ञों से विशेषज्ञ नेत्र परामर्श और उन्नत उपचार प्रदान करते हैं। आपकी दृष्टि सुरक्षित हाथों में है!',
    },
    bloodTest: {
      en: 'Blood Test Facility Launched',
      hi: 'रक्त परीक्षण सुविधा शुरू की गई',
    },
    bloodTestDate: {
      en: 'April 29, 2025',
      hi: '29 अप्रैल, 2025',
    },
    bloodTestDesc: {
      en: 'Get hassle-free blood collection at your home for routine and special tests. Book now and stay ahead of your health.',
      hi: 'नियमित और विशेष परीक्षणों के लिए अपने घर पर परेशानी मुक्त रक्त संग्रह प्राप्त करें। अभी बुक करें और अपने स्वास्थ्य से आगे रहें।',
    },
  },
  // Doctor translations
  doctors: {
    rakesh: {
      name: {
        en: 'Dr. Rakesh Roshan Chaudhary',
        hi: 'डॉ. राकेश रोशन चौधरी',
      },
      degree: {
        en: 'MBBS (DMCH), D.T.M & H (Medicine) MD (General Physician)',
        hi: 'एमबीबीएस (डीएमसीएच), डी.टी.एम एंड एच (मेडिसिन) एमडी (जनरल फिजिशियन)',
      },
      department: {
        en: 'General Physician',
        hi: 'जनरल फिजिशियन',
      },
      experience: {
        en: '10+ years experience',
        hi: '10+ वर्षों का अनुभव',
      },
      bio: {
        en: 'Specialist in heart, lung, stomach and diabetes cases.',
        hi: 'हृदय, फेफड़े, पेट और मधुमेह के मामलों के विशेषज्ञ।',
      },
    },
    rashmi: {
      name: {
        en: 'Dr. Kumari Rashmi Chaudhary',
        hi: 'डॉ. कुमारी रश्मि चौधरी',
      },
      degree: {
        en: 'ΜΒΒS (ΑΝΜMC), MD (DMCH)',
        hi: 'एमबीबीएस (एएनएमएमसी), एमडी (डीएमसीएच)',
      },
      department: {
        en: 'Gynaecologist & Anaesthesiologist',
        hi: 'स्त्री रोग विशेषज्ञ और एनेस्थिसियोलॉजिस्ट',
      },
      experience: {
        en: '10+ years experience',
        hi: '10+ वर्षों का अनुभव',
      },
      bio: {
        en: "Expert in women's healthcare and maternal wellness.",
        hi: 'महिला स्वास्थ्य सेवा और मातृ स्वास्थ्य में विशेषज्ञ।',
      },
    },
    masihuzzaman: {
      name: {
        en: 'Dr. Md. Masihuzzaman',
        hi: 'डॉ. मो. मसीहुज़्ज़मान',
      },
      degree: {
        en: 'PhD, M.Ophtal, B.Ophthal. FOVT (USA)',
        hi: 'पीएचडी, एम.ऑफ्थल, बी.ऑफ्थल. एफओवीटी (यूएसए)',
      },
      department: {
        en: 'Eye Specialist',
        hi: 'नेत्र विशेषज्ञ',
      },
      experience: {
        en: '10+ years experience',
        hi: '10+ वर्षों का अनुभव',
      },
      bio: {
        en: 'Specialized in advanced eye care and treatments.',
        hi: 'उन्नत नेत्र देखभाल और उपचार में विशेषज्ञ।',
      },
    },
  },
  // Staff translations
  staff: {
    nurse1: {
      name: {
        en: 'Anjali Kumari',
        hi: 'अंजली कुमारी',
      },
      role: {
        en: 'Senior Nurse',
        hi: 'सीनियर नर्स',
      },
      quote: {
        en: 'Always here to care for you',
        hi: 'हमेशा आपकी देखभाल के लिए मौजूद',
      },
    },
    nurse2: {
      name: {
        en: 'Ravi Kumar',
        hi: 'रवि कुमार',
      },
      role: {
        en: 'Pharmacy Assistant',
        hi: 'फार्मेसी सहायक',
      },
      quote: {
        en: 'Your health is our priority',
        hi: 'आपका स्वास्थ्य हमारी प्राथमिकता है',
      },
    },
    nurse3: {
      name: {
        en: 'Sunita Devi',
        hi: 'सुनीता देवी',
      },
      role: {
        en: 'Lab Technician',
        hi: 'लैब तकनीशियन',
      },
      quote: {
        en: 'Accurate diagnostics for better treatment',
        hi: 'बेहतर उपचार के लिए सटीक निदान',
      },
    },
    nurse4: {
      name: {
        en: 'Mukesh Singh',
        hi: 'मुकेश सिंह',
      },
      role: {
        en: 'Patient Coordinator',
        hi: 'रोगी समन्वयक',
      },
      quote: {
        en: 'Making your hospital visit seamless',
        hi: 'आपकी अस्पताल यात्रा को सहज बनाना',
      },
    },
  },
  // Meet Our Doctors section translations
  meetOurDoctors: {
    en: 'Meet Our Doctors',
    hi: 'हमारे डॉक्टरों से मिलें',
  },
  doctorsSubtitle: {
    en: 'Experienced specialists dedicated to your health and care.',
    hi: 'आपके स्वास्थ्य और देखभाल के लिए समर्पित अनुभवी विशेषज्ञ।',
  },
  viewAllDoctors: {
    en: 'View All Doctors',
    hi: 'सभी डॉक्टरों को देखें',
  },
  // Team Page translations
  teamPage: {
    title: {
      en: 'Meet Our Team',
      hi: 'हमारी टीम से मिलें',
    },
    subtitle: {
      en: 'The strength of our care lies in the hands of our dedicated experts.',
      hi: 'हमारी देखभाल की ताकत हमारे समर्पित विशेषज्ञों के हाथों में है।',
    },
    doctorsTitle: {
      en: 'Doctors & Specialists',
      hi: 'डॉक्टर और विशेषज्ञ',
    },
    staffTitle: {
      en: 'Nursing & Support Staff',
      hi: 'नर्सिंग और सहायक स्टाफ',
    },
    bookAppointment: {
      en: 'Book Appointment',
      hi: 'अपॉइंटमेंट बुक करें',
    },
    togetherTitle: {
      en: 'Together, We Care',
      hi: 'साथ मिलकर, हम देखभाल करते हैं',
    },
    togetherDesc: {
      en: 'Our team is committed to providing you with the best healthcare experience.',
      hi: 'हमारी टीम आपको सर्वोत्तम स्वास्थ्य देखभाल अनुभव प्रदान करने के लिए प्रतिबद्ध है।',
    },
    needCare: {
      en: 'Need Expert Care?',
      hi: 'विशेषज्ञ देखभाल की आवश्यकता है?',
    },
    meetDoctors: {
      en: 'Meet our trusted doctors and book your consultation today!',
      hi: 'हमारे विश्वसनीय डॉक्टरों से मिलें और आज ही अपना परामर्श बुक करें!',
    },
  },
  // About Us Page Translations
  aboutUs: {
    hero: {
      title: {
        en: 'About Poonam Health Care',
        hi: 'पूनम हेल्थ केयर के बारे में',
      },
      subtitle: {
        en: 'Your Health, Our Priority Since Day One',
        hi: 'आपका स्वास्थ्य, पहले दिन से हमारी प्राथमिकता',
      },
    },
    ourStory: {
      title: {
        en: 'Our Story',
        hi: 'हमारी कहानी'
      },
      howWeStarted: {
        title: {
          en: 'How Poonam Health Care Started',
          hi: 'पूनम हेल्थ केयर की शुरुआत कैसे हुई'
        },
        content: {
          en: 'Poonam Health Care was founded with a simple yet powerful vision — to bring compassionate, quality healthcare closer to the people of Jhanjharpur and nearby areas. What began as a small initiative, driven by a deep sense of care for the community, has now grown into a trusted name for expert medical services. Our journey started with the belief that every individual deserves easy access to reliable doctors, essential medicines, and essential health support under one roof.',
          hi: 'पूनम हेल्थ केयर की स्थापना एक सरल लेकिन शक्तिशाली दृष्टि के साथ की गई थी — झंझारपुर और आसपास के क्षेत्रों के लोगों के लिए करुणामय, गुणवत्तापूर्ण स्वास्थ्य सेवाओं को करीब लाना। जो समुदाय के लिए गहरी देखभाल की भावना से प्रेरित एक छोटी पहल के रूप में शुरू हुआ, अब विशेषज्ञ चिकित्सा सेवाओं के लिए एक विश्वसनीय नाम बन गया है। हमारी यात्रा इस विश्वास के साथ शुरू हुई कि हर व्यक्ति को एक ही छत के नीचे विश्वसनीय डॉक्टरों, आवश्यक दवाओं और आवश्यक स्वास्थ्य सहायता तक आसान पहुंच का अधिकार है।'
        },
        content2: {
          en: 'Inspired by the dream of making healthcare affordable and approachable, Poonam Health Care opened its doors with a team of dedicated professionals. Over time, we expanded our services to include specialized doctor consultations, pharmacy services with free delivery, and blood collection facilities — all designed to make your health journey smoother and safer. Today, we continue to grow with the same commitment: delivering trusted care with a human touch.',
          hi: 'स्वास्थ्य सेवा को किफायती और सुलभ बनाने के सपने से प्रेरित, पूनम हेल्थ केयर ने समर्पित पेशेवरों की एक टीम के साथ अपने द्वार खोले। समय के साथ, हमने अपनी सेवाओं का विस्तार करके विशेषज्ञ डॉक्टर परामर्श, मुफ्त वितरण के साथ फार्मेसी सेवाएं और रक्त संग्रह सुविधाएं शामिल कीं — सभी आपकी स्वास्थ्य यात्रा को अधिक सुविधाजनक और सुरक्षित बनाने के लिए डिज़ाइन की गई हैं। आज, हम उसी प्रतिबद्धता के साथ आगे बढ़ रहे हैं: मानवीय स्पर्श के साथ विश्वसनीय देखभाल प्रदान करना।'
        }
      },
      vision: {
        title: {
          en: 'Our Vision',
          hi: 'हमारा विजन'
        },
        content: {
          en: "At Poonam Health Care, our vision is to become the most trusted healthcare partner for every family in Jhanjharpur and surrounding areas. We aspire to set new standards in community healthcare by delivering affordable, accessible, and compassionate medical services — ensuring that health and wellness are within everyone's reach.",
          hi: 'पूनम हेल्थ केयर में, हमारा विजन झंझारपुर और आसपास के क्षेत्रों के हर परिवार के लिए सबसे विश्वसनीय स्वास्थ्य सेवा साझेदार बनना है। हम किफायती, सुलभ और करुणामय चिकित्सा सेवाएं प्रदान करके सामुदायिक स्वास्थ्य सेवा में नए मानक स्थापित करने का लक्ष्य रखते हैं — यह सुनिश्चित करते हुए कि स्वास्थ्य और कल्याण हर किसी की पहुंच के भीतर हो।'
        }
      },
      values: {
        title: {
          en: 'Our Values',
          hi: 'हमारे मूल्य'
        },
        compassion: {
          en: 'Compassion First',
          hi: 'पहले करुणा'
        },
        compassionDesc: {
          en: 'Every patient is treated with warmth, kindness, and respect.',
          hi: 'हर मरीज के साथ गर्मजोशी, दयालुता और सम्मान के साथ व्यवहार किया जाता है।'
        },
        integrity: {
          en: 'Integrity Always',
          hi: 'हमेशा ईमानदारी'
        },
        integrityDesc: {
          en: 'We maintain complete honesty and transparency in our services.',
          hi: 'हम अपनी सेवाओं में पूरी ईमानदारी और पारदर्शिता बनाए रखते हैं।'
        },
        excellence: {
          en: 'Excellence in Care',
          hi: 'देखभाल में उत्कृष्टता'
        },
        excellenceDesc: {
          en: 'We constantly strive to improve the quality and efficiency of our medical services.',
          hi: 'हम लगातार अपनी चिकित्सा सेवाओं की गुणवत्ता और दक्षता में सुधार के लिए प्रयास करते हैं।'
        },
        community: {
          en: 'Community Focus',
          hi: 'समुदाय पर ध्यान'
        },
        communityDesc: {
          en: 'We believe healthcare should be available and affordable for everyone, especially at the local level.',
          hi: 'हम मानते हैं कि स्वास्थ्य सेवा सभी के लिए, विशेष रूप से स्थानीय स्तर पर उपलब्ध और सस्ती होनी चाहिए।'
        },
        innovation: {
          en: 'Innovation and Growth',
          hi: 'नवाचार और विकास'
        },
        innovationDesc: {
          en: 'We embrace new medical advancements to offer the best care possible.',
          hi: 'हम सर्वोत्तम संभव देखभाल प्रदान करने के लिए नए चिकित्सा प्रगति को अपनाते हैं।'
        }
      },
      commitment: {
        title: {
          en: 'Our Commitment to Patient Care',
          hi: 'रोगी देखभाल के प्रति हमारी प्रतिबद्धता'
        },
        content: {
          en: 'Poonam Health Care is built on a foundation of trust, empathy, and medical excellence. We are committed to offering personalized attention to every patient who walks through our doors. From experienced doctors across multiple specialties to our free pharmacy delivery and convenient appointment services — every touchpoint is designed with your comfort and well-being in mind.',
          hi: 'पूनम हेल्थ केयर विश्वास, सहानुभूति और चिकित्सा उत्कृष्टता की नींव पर बना है। हम हर उस मरीज को व्यक्तिगत ध्यान देने के लिए प्रतिबद्ध हैं जो हमारे द्वार से गुजरता है। कई विशेषताओं में अनुभवी डॉक्टरों से लेकर हमारी मुफ्त फार्मेसी डिलीवरी और सुविधाजनक अपॉइंटमेंट सेवाओं तक — हर स्पर्श बिंदु आपके आराम और भलाई को ध्यान में रखकर डिज़ाइन किया गया है।'
        },
        content2: {
          en: 'Your health is our priority, and we are here to walk with you at every step of your healthcare journey.',
          hi: 'आपका स्वास्थ्य हमारी प्राथमिकता है, और हम आपकी स्वास्थ्य सेवा यात्रा के हर कदम पर आपके साथ चलने के लिए यहां हैं।'
        }
      }
    },
    whyChoose: {
      title: {
        en: 'Why Choose Poonam Health Care?',
        hi: 'पूनम हेल्थ केयर को क्यों चुनें?'
      },
      doctors: {
        en: 'Experienced Doctors',
        hi: 'अनुभवी डॉक्टर'
      },
      facilities: {
        en: 'Modern Facilities',
        hi: 'आधुनिक सुविधाएँ'
      },
      delivery: {
        en: 'Free Medicine Delivery',
        hi: 'मुफ्त दवा वितरण'
      },
      appointments: {
        en: 'Convenient Online Appointments',
        hi: 'सुविधाजनक ऑनलाइन अपॉइंटमेंट'
      },
      care: {
        en: 'Compassionate Care',
        hi: 'करुणामय देखभाल'
      },
      pharmacy: {
        en: 'In-house Pharmacy',
        hi: 'इन-हाउस फार्मेसी'
      }
    },
    team: {
      title: {
        en: 'Meet Our Team',
        hi: 'हमारी टीम से मिलें'
      },
      description: {
        en: 'Behind every great hospital is a great team.',
        hi: 'हर महान अस्पताल के पीछे एक महान टीम होती है।'
      },
      viewButton: {
        en: 'View Our Team',
        hi: 'हमारी टीम देखें'
      }
    },
    gallery: {
      title: {
        en: 'Gallery',
        hi: 'गैलरी'
      },
      description: {
        en: 'Explore our facilities, services, and the people who make it special.',
        hi: 'हमारी सुविधाओं, सेवाओं और उन लोगों का पता लगाएं जो इसे विशेष बनाते हैं।'
      }
    },
    contact: {
      title: {
        en: 'Need Health Advice?',
        hi: 'स्वास्थ्य सलाह चाहिए?'
      },
      callUs: {
        en: 'Call Us!',
        hi: 'हमें कॉल करें!'
      }
    }
  },
  // Services Page Translations
  servicesPage: { // Renamed from 'services' to avoid conflicts
    hero: {
      title: {
        en: 'Our Healthcare Services',
        hi: 'हमारी स्वास्थ्य सेवाएँ'
      },
      subtitle: {
        en: 'Caring for you and your family with expertise and compassion.',
        hi: 'विशेषज्ञता और करुणा के साथ आपकी और आपके परिवार की देखभाल करना।'
      }
    },
    bloodCollection: {
      title: {
        en: 'Blood Collection Facility',
        hi: 'रक्त संग्रह सुविधा'
      },
      description: {
        en: 'Hassle-free home blood sample collection for routine and special tests.',
        hi: 'नियमित और विशेष परीक्षणों के लिए परेशानी मुक्त घर पर रक्त नमूना संग्रह।'
      }
    },
    pharmacy: {
      title: {
        en: 'Pharmacy (Free Delivery)',
        hi: 'फार्मेसी (मुफ्त डिलीवरी)'
      },
      description: {
        en: 'Order medicines from our in-house pharmacy with free delivery under 3 kms.',
        hi: '3 किमी के अंदर मुफ्त डिलीवरी के साथ हमारी इन-हाउस फार्मेसी से दवाइयां ऑर्डर करें।'
      }
    },
    eyeSpecialist: {
      title: {
        en: 'Eye Specialist Appointments',
        hi: 'नेत्र विशेषज्ञ अपॉइंटमेंट'
      },
      description: {
        en: 'Comprehensive eye checkups, surgeries, and treatment from experienced specialists.',
        hi: 'अनुभवी विशेषज्ञों से व्यापक नेत्र जांच, सर्जरी और उपचार।'
      }
    },
    gynecologist: {
      title: {
        en: 'Gynecologist Consultations',
        hi: 'स्त्री रोग विशेषज्ञ परामर्श'
      },
      description: {
        en: "Expert women's healthcare for all stages of life.",
        hi: 'जीवन के सभी चरणों के लिए विशेषज्ञ महिला स्वास्थ्य सेवा।'
      }
    },
    diabetologist: {
      title: {
        en: 'Diabetologist Consultations',
        hi: 'मधुमेह विशेषज्ञ परामर्श'
      },
      description: {
        en: 'Manage and control diabetes with personalized plans and guidance.',
        hi: 'व्यक्तिगत योजनाओं और मार्गदर्शन के साथ मधुमेह का प्रबंधन और नियंत्रण।'
      }
    },
    generalPhysician: {
      title: {
        en: 'General Physician Visits',
        hi: 'सामान्य चिकित्सक यात्रा'
      },
      description: {
        en: 'From fever to infections, trusted care for everyday health issues.',
        hi: 'बुखार से लेकर संक्रमण तक, रोजमर्रा के स्वास्थ्य मुद्दों के लिए विश्वसनीय देखभाल।'
      }
    },
    entSpecialist: {
      title: {
        en: 'ENT Specialist Appointments',
        hi: 'ईएनटी विशेषज्ञ अपॉइंटमेंट'
      },
      description: {
        en: 'Diagnosis and treatment of ear, nose, and throat problems.',
        hi: 'कान, नाक और गले की समस्याओं का निदान और उपचार।'
      }
    },
    healthCheckups: {
      title: {
        en: 'Routine Health Checkups',
        hi: 'नियमित स्वास्थ्य जांच'
      },
      description: {
        en: 'Preventive checkups and health packages to keep you safe and healthy.',
        hi: 'आपको सुरक्षित और स्वस्थ रखने के लिए निवारक जांच और स्वास्थ्य पैकेज।'
      }
    },
    whyChoose: {
      title: {
        en: 'Why Choose Our Services?',
        hi: 'हमारी सेवाओं को क्यों चुनें?'
      },
      affordable: {
        en: 'Affordable & Accessible',
        hi: 'किफायती और सुलभ'
      },
      doctors: {
        en: 'Trusted Doctors',
        hi: 'विश्वसनीय डॉक्टर'
      },
      delivery: {
        en: 'Free Medicine Delivery',
        hi: 'मुफ्त दवा वितरण'
      },
      booking: {
        en: 'Convenient Appointment Booking',
        hi: 'सुविधाजनक अपॉइंटमेंट बुकिंग'
      }
    },
    bookCTA: {
      title: {
        en: 'Need expert care? Book your appointment today!',
        hi: 'विशेषज्ञ देखभाल की आवश्यकता है? आज ही अपनी अपॉइंटमेंट बुक करें!'
      },
      button: {
        en: 'Book Now',
        hi: 'अभी बुक करें'
      }
    },
    appointmentProcess: {
      title: {
        en: 'Appointment Process',
        hi: 'अपॉइंटमेंट प्रक्रिया',
      },
      step1: {
        title: {
          en: '1. Scan & Pay',
          hi: '1. स्कैन करें और भुगतान करें',
        },
        description: {
          en: 'Scan our UPI QR code and complete the consultation fee payment.',
          hi: 'हमारे UPI QR कोड को स्कैन करें और परामर्श शुल्क का भुगतान पूरा करें।',
        },
      },
      step2: {
        title: {
          en: '2. Save Payment Proof',
          hi: '2. भुगतान का प्रमाण सहेजें',
        },
        description: {
          en: 'Take a screenshot of the successful payment.',
          hi: 'सफल भुगतान का स्क्रीनशॉट लें।',
        },
      },
      step3: {
        title: {
          en: '3. Book Your Appointment',
          hi: '3. अपनी अपॉइंटमेंट बुक करें',
        },
        description: {
          en: 'Click the "Book Appointment" and fill out the form.',
          hi: '"अपॉइंटमेंट बुक करें" पर क्लिक करें और फॉर्म भरें।',
        },
      },
    },
    faq: {
      title: {
        en: 'Frequently Asked Questions',
        hi: 'अक्सर पूछे जाने वाले प्रश्न'
      },
      q1: {
        en: 'How do I book an appointment?',
        hi: 'मैं अपॉइंटमेंट कैसे बुक करूं?'
      },
      a1: {
        en: 'You can book an appointment through our website by clicking the "Book Appointment" button, calling our helpline at 9534800801, or visiting our hospital in person.',
        hi: 'आप "अपॉइंटमेंट बुक करें" बटन पर क्लिक करके, हमारी हेल्पलाइन 9534800801 पर कॉल करके, या व्यक्तिगत रूप से हमारे अस्पताल में जाकर अपॉइंटमेंट बुक कर सकते हैं।'
      },
      q2: {
        en: 'Is there a free consultation day?',
        hi: 'क्या कोई मुफ्त परामर्श दिवस है?'
      },
      a2: {
        en: 'Yes, we occasionally organize free health camps and consultation days. Please follow our updates section on the homepage for announcements about upcoming free consultation days.',
        hi: 'हां, हम समय-समय पर मुफ्त स्वास्थ्य शिविर और परामर्श दिवस आयोजित करते हैं। कृपया आगामी मुफ्त परामर्श दिनों के बारे में घोषणाओं के लिए होमपेज पर हमारे अपडेट अनुभाग का अनुसरण करें।'
      },
      q3: {
        en: 'How can I order medicines?',
        hi: 'मैं दवाएं कैसे ऑर्डर कर सकता हूं?'
      },
      a3: {
        en: 'You can order medicines by calling or WhatsApp messaging our pharmacy line at 9534800801. We offer free delivery within 3km of our location.',
        hi: 'आप हमारी फार्मेसी लाइन 9534800801 पर कॉल या व्हाट्सएप मैसेज करके दवाएं ऑर्डर कर सकते हैं। हम अपने स्थान से 3 किमी के भीतर मुफ्त डिलीवरी प्रदान करते हैं।'
      },
      q4: {
        en: 'Do you offer emergency services?',
        hi: 'क्या आप आपातकालीन सेवाएं प्रदान करते हैं?'
      },
      a4: {
        en: 'Yes, our healthcare center is open 24/7 for emergency cases. For emergencies, please call us immediately at 9534800801.',
        hi: 'हां, हमारा हेल्थकेयर सेंटर आपातकालीन मामलों के लिए 24/7 खुला है। आपात स्थिति में, कृपया हमें तुरंत 9534800801 पर कॉल करें।'
      }
    }
  },
  // Appointment Page Translations
  appointmentPage: {
    hero: {
      title: {
        en: 'Book Your Appointment',
        hi: 'अपनी अपॉइंटमेंट बुक करें'
      },
      subtitle: {
        en: 'Quick, Easy, and Hassle-Free Booking with Our Trusted Doctors.',
        hi: 'हमारे विश्वसनीय डॉक्टरों के साथ त्वरित, आसान और परेशानी मुक्त बुकिंग।'
      }
    },
    payment: {
      title: {
        en: 'Scan and Pay Consultation Fees',
        hi: 'परामर्श शुल्क स्कैन करें और भुगतान करें'
      },
      instructions: {
        en: 'After payment, please take a screenshot and click on "Book Appointment".',
        hi: 'भुगतान के बाद, कृपया एक स्क्रीनशॉट लें और "अपॉइंटमेंट बुक करें" पर क्लिक करें।'
      },
      walkIn: {
        en: 'Walk-in and appointment through call are also available.',
        hi: 'वॉक-इन और कॉल के माध्यम से अपॉइंटमेंट भी उपलब्ध हैं।'
      }
    },
    process: {
      step1: {
        title: {
          en: '1. Scan & Pay',
          hi: '1. स्कैन करें और भुगतान करें',
        },
        description: {
          en: 'Scan our UPI QR code and complete the consultation fee payment.',
          hi: 'हमारे UPI QR कोड को स्कैन करें और परामर्श शुल्क का भुगतान पूरा करें।',
        },
      },
      step2: {
        title: {
          en: '2. Save Payment Proof',
          hi: '2. भुगतान का प्रमाण सहेजें',
        },
        description: {
          en: 'Take a screenshot of the successful payment.',
          hi: 'सफल भुगतान का स्क्रीनशॉट लें।',
        },
      },
      step3: {
        title: {
          en: '3. Book Your Appointment',
          hi: '3. अपनी अपॉइंटमेंट बुक करें',
        },
        description: {
          en: 'Click the "Book Appointment" and fill out the form.',
          hi: '"अपॉइंटमेंट बुक करें" पर क्लिक करें और फॉर्म भरें।',
        },
      },
    },
    urgent: {
      text: {
        en: 'For urgent consultation, please call us directly.',
        hi: 'तत्काल परामर्श के लिए, कृपया हमें सीधे कॉल करें।'
      }
    },
    book: {
      button: {
        en: 'Book Appointment',
        hi: 'अपॉइंटमेंट बुक करें'
      }
    },
    contact: {
      phone: {
        en: 'Call Us',
        hi: 'हमें कॉल करें'
      },
      whatsapp: {
        en: 'WhatsApp',
        hi: 'व्हाट्सएप'
      },
      address: {
        en: 'Address',
        hi: 'पता'
      }
    }
  },
  // Pharmacy Page Translations
  pharmacyPage: { // Renamed from 'pharmacy' to avoid conflicts
    hero: {
      title: {
        en: 'Poonam Health Care Pharmacy',
        hi: 'पूनम हेल्थ केयर फार्मेसी'
      },
      subtitle: {
        en: 'Easy Access to Trusted Medicines — Delivered to Your Doorstep',
        hi: 'विश्वसनीय दवाओं तक आसान पहुंच — आपके दरवाजे पर वितरित'
      }
    },
    services: {
      title: {
        en: 'Our Pharmacy Services',
        hi: 'हमारी फार्मेसी सेवाएं'
      }
    },
    features: {
      range: {
        title: {
          en: 'Wide Range of Medicines',
          hi: 'दवाओं की विस्तृत श्रेणी'
        },
        description: {
          en: 'All essential medicines available at our in-house pharmacy.',
          hi: 'हमारी इन-हाउस फार्मेसी में सभी आवश्यक दवाएं उपलब्ध हैं।'
        }
      },
      delivery: {
        title: {
          en: 'Free Home Delivery',
          hi: 'मुफ्त होम डिलीवरी'
        },
        description: {
          en: 'Free delivery of medicines within 3 km radius.',
          hi: '3 किमी की परिधि के भीतर दवाओं की मुफ्त डिलीवरी।'
        }
      },
      processing: {
        title: {
          en: 'Quick Processing',
          hi: 'त्वरित प्रसंस्करण'
        },
        description: {
          en: 'Fast service to ensure you get your medicines on time.',
          hi: 'यह सुनिश्चित करने के लिए तेज़ सेवा कि आपको अपनी दवाएं समय पर मिलें।'
        }
      },
      quality: {
        title: {
          en: 'Quality Guaranteed',
          hi: 'गुणवत्ता की गारंटी'
        },
        description: {
          en: 'Only trusted and verified brands supplied.',
          hi: 'केवल विश्वसनीय और सत्यापित ब्रांड आपूर्ति।'
        }
      }
    },
    howToOrder: {
      title: {
        en: 'How to Order?',
        hi: 'ऑर्डर कैसे करें?'
      },
      step1: {
        title: {
          en: 'Call or WhatsApp',
          hi: 'कॉल या व्हाट्सएप'
        },
        description: {
          en: 'Call or WhatsApp your prescription to our number.',
          hi: 'अपने प्रिस्क्रिप्शन को हमारे नंबर पर कॉल या व्हाट्सएप करें।'
        }
      },
      step2: {
        title: {
          en: 'Confirm Details',
          hi: 'विवरण की पुष्टि करें'
        },
        description: {
          en: 'Confirm your address and availability.',
          hi: 'अपने पते और उपलब्धता की पुष्टि करें।'
        }
      },
      step3: {
        title: {
          en: 'Receive Medicines',
          hi: 'दवाएं प्राप्त करें'
        },
        description: {
          en: 'Receive your Medicines — quick, free delivery under 3 kms!',
          hi: 'अपनी दवाएं प्राप्त करें — 3 किमी के अंदर त्वरित, मुफ्त डिलीवरी!'
        }
      }
    },
    delivery: {
      title: {
        en: 'Free Delivery Information',
        hi: 'मुफ्त डिलीवरी जानकारी'
      },
      area: {
        title: {
          en: 'Service Area',
          hi: 'सेवा क्षेत्र'
        },
        description: {
          en: 'Within 3 kilometers from our hospital.',
          hi: 'हमारे अस्पताल से 3 किलोमीटर के भीतर।'
        }
      },
      time: {
        title: {
          en: 'Delivery Time',
          hi: 'डिलीवरी का समय'
        },
        description: {
          en: 'Within 24 hours after order confirmation.',
          hi: 'ऑर्डर पुष्टि के 24 घंटे के भीतर।'
        }
      },
      timing: {
        title: {
          en: 'Pharmacy Timing',
          hi: 'फार्मेसी का समय'
        },
        description: {
          en: '24/7',
          hi: '24/7'
        }
      }
    },
    promotions: {
      title: {
        en: '10-20% OFF on All Surgical Items',
        hi: 'सभी सर्जिकल आइटम पर 10-20% की छूट'
      }
    },
    orderNow: {
      title: {
        en: 'Ready to Order Medicines?',
        hi: 'दवाएं ऑर्डर करने के लिए तैयार हैं?'
      },
      button: {
        en: 'Order Medicines Now',
        hi: 'अभी दवाएं ऑर्डर करें'
      },
      phone: {
        en: 'Call: 9534800801',
        hi: 'कॉल करें: 9534800801'
      }
    },
    contact: {
      phone: {
        en: 'Call Us',
        hi: 'हमें कॉल करें'
      },
      whatsapp: {
        en: 'WhatsApp',
        hi: 'व्हाट्सएप'
      },
      address: {
        en: 'Visit Us',
        hi: 'हमसे मिलें'
      }
    }
  },
  // Contact Page Translations
  contactPage: { // Renamed from 'contact' to avoid conflicts
    hero: {
      title: {
        en: 'Get In Touch With Us',
        hi: 'हमसे संपर्क करें'
      },
      subtitle: {
        en: "We're here to help you with your health needs. Contact us easily below!",
        hi: 'हम आपकी स्वास्थ्य जरूरतों में आपकी मदद करने के लिए यहां हैं। नीचे आसानी से हमसे संपर्क करें!'
      }
    },
    callUs: {
      title: {
        en: 'Call Us Directly',
        hi: 'हमें सीधे कॉल करें'
      }
    },
    address: {
      title: {
        en: 'Address',
        hi: 'पता'
      }
    },
    email: {
      title: {
        en: 'Email',
        hi: 'ईमेल'
      }
    },
    whatsapp: {
      title: {
        en: 'WhatsApp',
        hi: 'व्हाट्सएप'
      }
    },
    timings: {
      title: {
        en: 'Timings',
        hi: 'समय'
      }
    },
    location: {
      title: {
        en: 'Our Location',
        hi: 'हमारा स्थान'
      }
    },
    getDirections: {
      en: 'Get Directions',
      hi: 'रास्ता पाएं'
    }
  },
  // FAQ Section Translations
  faq: {
    title: {
      en: 'Frequently Asked Questions',
      hi: 'अक्सर पूछे जाने वाले प्रश्न',
    },
    subtitle: {
      en: 'Find quick answers to common questions about our services',
      hi: 'हमारी सेवाओं के बारे में सामान्य प्रश्नों के त्वरित उत्तर पाएं',
    },
    appointment: {
      en: 'How do I book an appointment?',
      hi: 'मैं अपॉइंटमेंट कैसे बुक करूं?',
    },
    appointmentAnswer: {
      en: 'You can book an appointment by clicking on the "Book Appointment" button, calling us at 9534800801, or visiting our clinic in person.',
      hi: 'आप "अपॉइंटमेंट बुक करें" बटन पर क्लिक करके, हमें 9534800801 पर कॉल करके, या व्यक्तिगत रूप से हमारे क्लिनिक में जाकर अपॉइंटमेंट बुक कर सकते हैं।',
    },
    homeDelivery: {
      en: 'Is medicine home delivery available?',
      hi: 'क्या दवा होम डिलीवरी उपलब्ध है?',
    },
    homeDeliveryAnswer: {
      en: 'Yes, we provide free medicine delivery within a 3km radius of our clinic. Just call or WhatsApp us your prescription.',
      hi: 'हां, हम अपने क्लिनिक के 3 किमी के दायरे में मुफ्त दवा वितरण प्रदान करते हैं। बस हमें अपना प्रिस्क्रिप्शन कॉल या व्हाट्सएप करें।',
    },
    timing: {
      en: 'What are your clinic timings?',
      hi: 'आपके क्लिनिक का समय क्या है?',
    },
    timingAnswer: {
      en: 'Our clinic is open 24/7 for emergencies. Regular consultation hours are from 9:00 AM to 8:00 PM, Monday to Saturday.',
      hi: 'हमारा क्लिनिक आपातकालीन स्थितियों के लिए 24/7 खुला है। नियमित परामर्श का समय सुबह 9:00 बजे से शाम 8:00 बजे तक, सोमवार से शनिवार तक है।',
    },
    payment: {
      en: 'What payment methods do you accept?',
      hi: 'आप कौन से भुगतान विधियों को स्वीकार करते हैं?',
    },
    paymentAnswer: {
      en: 'We accept cash, credit/debit cards, and all UPI payment methods including PhonePe, Google Pay, and Paytm.',
      hi: 'हम नकद, क्रेडिट/डेबिट कार्ड, और फोनपे, Google Pay, और Paytm सहित सभी UPI भुगतान विधियों को स्वीकार करते हैं।',
    },
    specialists: {
      en: 'What specialist doctors are available?',
      hi: 'कौन से विशेषज्ञ डॉक्टर उपलब्ध हैं?',
    },
    specialistsAnswer: {
      en: 'We have specialists in Eye Care, Gynecology, Diabetes Management, ENT, and General Medicine. Visit our About page to learn more about our doctors.',
      hi: 'हमारे पास आंखों की देखभाल, स्त्री रोग, मधुमेह प्रबंधन, ईएनटी और सामान्य चिकित्सा के विशेषज्ञ हैं। हमारे डॉक्टरों के बारे में अधिक जानने के लिए हमारा अबाउट पेज देखें।',
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
