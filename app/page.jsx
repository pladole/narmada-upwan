"use client";

import React from "react";

const COPY = {
  en: {
    nav: {
      overview: "Overview",
      legacy: "Legacy",
      impact: "Impact",
      products: "Products",
      masterplan: "Master Plan",
      experience: "Experience",
      visit: "Visit",
      partners: "Partners",
      gallery: "Gallery",
      contact: "Contact",
    },
    brand1: "Narmada Upwan",
    brand2: "and Sanshodhan Kendra",
    heroBadge: "Bhilkheda, Chikhaldara • 25-acre medicinal biodiversity park",
    heroTitle: "A premium nature destination for medicinal biodiversity, learning, and clean produce.",
    heroText:
      "Narmada Upwan and Sanshodhan Kendra is being developed in memory of Narmadabai Kisanrao Ladole as a living landscape where biodiversity conservation, education, research, and sustainable farming come together in one refined and deeply rooted initiative.",
    heroPrimary: "Discover the Project",
    heroSecondary: "Join Organic Waitlist",
    heroQuote: "Where memory becomes landscape, and landscape becomes legacy.",

    overviewKicker: "Overview",
    overviewTitle: "A 25-acre initiative shaped for ecological depth and public value.",
    overviewText:
      "Set in Bhilkheda near Anjangaon Surji, within the broader Chikhaldara–Melghat landscape, the project is envisioned as far more than a park. It is a carefully structured biodiversity estate with medicinal woodland, conservation areas, educational zones, nursery systems, visitor spaces, and a future-facing organic produce stream.",
    overviewText2:
      "The design intent is to preserve the quiet dignity of the land while creating a meaningful destination for visitors, students, collaborators, and communities who care about medicinal plants, ecological restoration, and responsible cultivation.",
    stats: [
      ["25 Acres", "Integrated medicinal biodiversity landscape"],
      ["150 Species", "Planning base for native and regionally suitable plants"],
      ["12 km", "Distance from Anjangaon Surji"],
      ["Year-round Vision", "Biodiversity, learning, and clean produce"],
    ],

    legacyKicker: "Legacy",
    legacyTitle: "A landscape inspired by the life and values of Narmadabai Kisanrao Ladole.",
    legacyText1:
      "The initiative is being developed in memory of Narmadabai Kisanrao Ladole — a teacher, farmer, and lifelong believer in education, discipline, and self-reliance. Her life carried a rare combination of intellectual dignity and deep attachment to the land.",
    legacyText2:
      "That spirit now shapes the project’s foundation: a place where knowledge is not separate from nature, where cultivation is not separate from care, and where memory is expressed through a living, growing landscape rather than a static monument.",
    legacyText3:
      "This is intended to be a serene, meaningful, and enduring space — one that honors her journey while creating value for future generations.",

    impactKicker: "What the initiative creates",
    impactTitle: "Four interconnected outcomes, designed to reinforce one another.",
    pillars: [
      {
        title: "Biodiversity Conservation",
        text: "Native medicinal species, woodland restoration, rare and threatened plant protection, and long-term ecological stewardship in the Chikhaldara–Melghat setting.",
      },
      {
        title: "Research and Learning",
        text: "Field-based interpretation, medicinal plant documentation, nursery systems, school and academic visits, and future institutional collaboration.",
      },
      {
        title: "Community and Farmer Value",
        text: "Exposure, demonstration, practical training, and a bridge between ecological restoration and local livelihood relevance.",
      },
      {
        title: "Premium Organic Produce",
        text: "A carefully positioned produce stream beginning with organic vegetables grown around trust, freshness, soil health, and direct connection.",
      },
    ],

    productsKicker: "Products",
    productsTitle: "From biodiversity to refined, trusted produce offerings.",
    productsText:
      "The first market-facing category is organic vegetables. Over time, the initiative can extend into nursery plants, medicinal planting material, curated produce baskets, and other carefully aligned offerings that reflect the project’s values of quality, authenticity, and ecological responsibility.",
    organicVegTitle: "Organic Vegetables",
    organicVegText:
      "Seasonal vegetables cultivated with a clean-growing philosophy, strong attention to soil health, freshness, and a more personal relationship between grower and consumer.",
    organicVegPoints: [
      "Leafy vegetables harvested for freshness",
      "Seasonal gourds and kitchen staples",
      "Tomato, chilli, brinjal and mixed vegetable sets",
      "Farm-fresh curated baskets for families and early buyers",
    ],
    waitlistTitle: "Join the organic vegetable waitlist",
    waitlistText:
      "Register your interest to receive updates on seasonal availability, early batches, and future launch information.",
    waitlistBtn: "Join Organic Vegetable Waitlist",

    masterplanKicker: "Master Plan",
    masterplanTitle: "A layout that feels natural, intentional, and quietly immersive.",
    masterplanText:
      "Instead of forcing the site into a rigid formal garden, the project is structured as a layered landscape. Woodland, conservation, learning, water, nursery, and visitor movement are treated as connected experiences rather than isolated blocks.",
    masterplanText2:
      "This allows the land to retain its ecological character while offering a refined and legible experience for visitors, students, collaborators, and future buyers.",
    zones: [
      ["Native medicinal woodland", "8 acres"],
      ["RET conservation zone", "3 acres"],
      ["Ayurvedic theme gardens", "2.5 acres"],
      ["Demonstration plots", "3 acres"],
      ["Nursery + mother block", "1.5 acres"],
      ["Wetland medicinal zone", "1 acre"],
    ],

    experienceKicker: "Experience",
    experienceTitle: "What people will feel, learn, and take away.",
    experienceText:
      "The long-term experience is designed to be calm, informative, and memorable. Visitors should not feel like they are entering only a farm or only a garden. They should feel they are entering a living system where medicinal knowledge, native ecology, and responsible cultivation are expressed beautifully and clearly.",
    experienceList: [
      "Interpretive walks through medicinal landscapes",
      "Quiet shaded zones for reflection and learning",
      "Exposure for farmers, students, and institutions",
      "A future destination for organic produce and curated visits",
    ],

    visitKicker: "Visit",
    visitTitle: "Accessible enough to reach, special enough to remember.",
    visitText:
      "Located at Bhilkheda, Chikhaldara, and just 12 km from Anjangaon Surji, the site combines practical accessibility with the ecological identity needed for a meaningful medicinal biodiversity destination.",
    visitNote:
      "Its setting within the larger Chikhaldara–Melghat landscape strengthens both its ecological character and its long-term destination value.",
    openMaps: "Open in Google Maps",

    partnersKicker: "Partners / CSR",
    partnersTitle: "Well-suited for premium CSR, institutional, and mission-aligned partnerships.",
    partnersText:
      "The initiative naturally aligns with biodiversity missions, environmental education, nursery development, rural visibility, and landscape restoration. It can serve as a meaningful platform for institutions and organizations looking to support something tangible, enduring, and publicly valuable.",
    partnerList: [
      "Medicinal biodiversity conservation",
      "Environmental education and field learning",
      "Nursery and planting material development",
      "Community visibility and rural landscape impact",
    ],

    galleryKicker: "Gallery",
    galleryTitle: "Land, progress, atmosphere, and legacy.",
    galleryText:
      "Use this section to visually express the land itself, the plantation journey, the natural mood of the site, and the personal story behind the initiative.",

    contactKicker: "Contact",
    contactTitle: "Connect with the initiative directly.",
    contactText:
      "For project visits, collaborations, product waitlist interest, CSR conversations, or institutional discussions, use the official contact details below.",
    supportTitle: "Support the Project",
    supportText:
      "Support biodiversity conservation, education, and the long-term development of a medicinal and sustainable farming initiative with lasting public value.",
    supportBtn: "Email for Support",
    cards: {
      location: "Location",
      coordinates: "Coordinates",
      nearestTown: "Nearest Town",
      website: "Website",
      email: "Email",
      phone: "Phone / WhatsApp",
    },
    footer: "Developed in memory of Narmadabai Kisanrao Ladole",
  },

  mr: {
    nav: {
      overview: "परिचय",
      legacy: "वारसा",
      impact: "परिणाम",
      products: "उत्पादने",
      masterplan: "मास्टर प्लॅन",
      experience: "अनुभव",
      visit: "भेट",
      partners: "भागीदारी",
      gallery: "छायाचित्रे",
      contact: "संपर्क",
    },
    brand1: "नर्मदा उपवन",
    brand2: "आणि संशोधन केंद्र",
    heroBadge: "भिलखेडा, चिखलदरा • २५ एकर औषधी जैवविविधता उद्यान",
    heroTitle: "औषधी जैवविविधता, शिक्षण आणि स्वच्छ उत्पादनासाठी एक प्रीमियम निसर्ग-आधारित परिसर.",
    heroText:
      "नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीप्रीत्यर्थ विकसित होत असलेले नर्मदा उपवन आणि संशोधन केंद्र हे जैवविविधता संवर्धन, शिक्षण, संशोधन आणि शाश्वत शेती यांना एकत्र आणणारे जिवंत भू-दृश्य म्हणून उभे राहत आहे.",
    heroPrimary: "प्रकल्प जाणून घ्या",
    heroSecondary: "प्रतीक्षा यादीत सामील व्हा",
    heroQuote: "जिथे स्मृती भू-दृश्य बनते, आणि भू-दृश्य वारसा बनते.",

    overviewKicker: "परिचय",
    overviewTitle: "पर्यावरणीय सखोलता आणि सार्वजनिक मूल्य यांसाठी उभा राहणारा २५ एकरांचा उपक्रम.",
    overviewText:
      "अंजनगाव सुर्जी जवळील भिलखेडा येथे असलेला हा प्रकल्प केवळ एक उद्यान नाही. तो औषधी जैवविविधता, संवर्धन, रोपवाटिका, क्षेत्राधारित शिक्षण, अभ्यागत अनुभव आणि भावी सेंद्रिय उत्पादन यांना एकत्र बांधणारा एक सुसंलग्न परिसर आहे.",
    overviewText2:
      "जमिनीची शांतता, पर्यावरणीय मूल्य आणि मानवी अनुभव यांचा सन्मान राखत तयार होणारा हा उपक्रम भविष्यकाळात एक अर्थपूर्ण आणि प्रतिष्ठित निसर्ग-आधारित गंतव्य ठरू शकतो.",
    stats: [
      ["२५ एकर", "एकात्मिक औषधी जैवविविधता परिसर"],
      ["१५० प्रजाती", "स्थानिक व प्रादेशिक वनस्पतींचा नियोजन आधार"],
      ["१२ कि.मी.", "अंजनगाव सुर्जीपासून अंतर"],
      ["वर्षभर दृष्टी", "जैवविविधता, शिक्षण आणि स्वच्छ उत्पादन"],
    ],

    legacyKicker: "वारसा",
    legacyTitle: "नर्मदाबाई किसानराव लाडोळे यांच्या जीवनमूल्यांनी आकारलेला परिसर.",
    legacyText1:
      "हा उपक्रम स्व. नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीत उभा राहत आहे — शिक्षिका, शेतकरी आणि शिक्षण, शिस्त, स्वावलंबन आणि जमिनीवरील प्रेम या मूल्यांवर विश्वास ठेवणारे व्यक्तिमत्त्व.",
    legacyText2:
      "त्यांच्या जीवनातील ज्ञान, कष्ट आणि जमिनीशी असलेले नाते आता अशा जिवंत प्रकल्पातून पुढे जात आहे, जिथे स्मृती ही केवळ आठवण न राहता वाढणारा वारसा बनते.",
    legacyText3:
      "हा परिसर शांत, अर्थपूर्ण आणि दीर्घकाल टिकणारा असा अनुभव देण्यासाठी उभा राहत आहे.",

    impactKicker: "उपक्रमातून निर्माण होणारे मूल्य",
    impactTitle: "चार परस्पर जोडलेले परिणाम.",
    pillars: [
      {
        title: "जैवविविधता संवर्धन",
        text: "स्थानिक औषधी प्रजाती, पर्यावरणीय पुनर्स्थापना, दुर्मिळ वनस्पती संरक्षण आणि भूमीचे दीर्घकालीन संवर्धन.",
      },
      {
        title: "संशोधन आणि शिक्षण",
        text: "क्षेत्राधारित ज्ञान, औषधी वनस्पती दस्तऐवजीकरण, रोपवाटिका, शालेय आणि संस्थात्मक भेटी.",
      },
      {
        title: "शेतकरी आणि समुदाय मूल्य",
        text: "प्रात्यक्षिके, प्रशिक्षण, अनुभवाधारित शिक्षण आणि पर्यावरणीय संवर्धनाशी जोडलेला सामाजिक उपयोग.",
      },
      {
        title: "प्रीमियम सेंद्रिय उत्पादन",
        text: "मृदास्वास्थ्य, ताजेपणा आणि विश्वास यांवर आधारित सेंद्रिय भाजीपाला आणि भावी उत्पादन प्रवाह.",
      },
    ],

    productsKicker: "उत्पादने",
    productsTitle: "जैवविविधतेतून विश्वासार्ह आणि दर्जेदार उत्पादनांकडे.",
    productsText:
      "पहिला ग्राहकाभिमुख विभाग म्हणजे सेंद्रिय भाजीपाला. पुढे रोपे, औषधी लागवड साहित्य, निवडक ताजे उत्पादन संच आणि इतर नैसर्गिकरीत्या जुळणारी उत्पादने विकसित केली जाऊ शकतात.",
    organicVegTitle: "सेंद्रिय भाजीपाला",
    organicVegText:
      "स्वच्छ शेती, मृदास्वास्थ्य, ताजेपणा आणि ग्राहकांशी थेट विश्वाससंबंध या तत्त्वांवर आधारित हंगामी भाजीपाला.",
    organicVegPoints: [
      "ताज्या पालेभाज्या",
      "हंगामी वेलवर्गीय भाज्या",
      "टोमॅटो, मिरची, वांगी आणि इतर आवश्यक भाज्या",
      "कुटुंबांसाठी निवडक ताजे मिश्र भाजीपाला संच",
    ],
    waitlistTitle: "सेंद्रिय भाजीपाला प्रतीक्षा यादी",
    waitlistText:
      "सुरुवातीची वेळ, हंगामी उपलब्धता आणि पहिल्या बॅचबद्दल माहिती मिळवण्यासाठी आपली माहिती नोंदवा.",
    waitlistBtn: "प्रतीक्षा यादीत सामील व्हा",

    masterplanKicker: "मास्टर प्लॅन",
    masterplanTitle: "पर्यावरणाला केंद्रस्थानी ठेवून आखलेला, शांत आणि नैसर्गिक अनुभव देणारा लेआउट.",
    masterplanText:
      "संपूर्ण जमीन केवळ औपचारिक बाग म्हणून न वापरता जंगल, संवर्धन क्षेत्र, थीम विभाग, रोपवाटिका, ओलसर काठ, अभ्यागत मार्ग आणि शिक्षण क्षेत्र यांना एकमेकांशी जोडणारा भू-दृश्य दृष्टिकोन ठेवला आहे.",
    masterplanText2:
      "यामुळे जमीन आपली पर्यावरणीय ओळख जपत राहते आणि त्याच वेळी अभ्यागत, विद्यार्थी, सहकारी संस्था आणि ग्राहकांसाठी एक सुस्पष्ट व उच्च दर्जाचा अनुभव निर्माण होतो.",
    zones: [
      ["स्थानिक औषधी जंगल", "८ एकर"],
      ["RET संवर्धन विभाग", "३ एकर"],
      ["आयुर्वेद थीम गार्डन", "२.५ एकर"],
      ["प्रात्यक्षिक प्लॉट", "३ एकर"],
      ["रोपवाटिका + मातृब्लॉक", "१.५ एकर"],
      ["ओलसर औषधी विभाग", "१ एकर"],
    ],

    experienceKicker: "अनुभव",
    experienceTitle: "येथे येणाऱ्या लोकांना काय जाणवेल, काय शिकायला मिळेल, आणि काय लक्षात राहील.",
    experienceText:
      "दीर्घकालीन अनुभव हा शांत, माहितीपूर्ण आणि संस्मरणीय असा असेल. हे ठिकाण केवळ शेती किंवा केवळ उद्यान म्हणून जाणवू नये, तर औषधी ज्ञान, स्थानिक पर्यावरण आणि जबाबदार शेती यांचा सुंदर संगम म्हणून जाणवावे, हा उद्देश आहे.",
    experienceList: [
      "औषधी वनस्पतींच्या अर्थपूर्ण पायवाटा आणि फिरती",
      "शांत सावलीतील शिकण्याच्या आणि चिंतनाच्या जागा",
      "शेतकरी, विद्यार्थी आणि संस्थांसाठी अनुभवाधारित भेटी",
      "भावी सेंद्रिय उत्पादन आणि निवडक भेटींसाठी एक विशेष गंतव्य",
    ],

    visitKicker: "भेट",
    visitTitle: "पोहोचण्यास सोपे, पण अनुभवाने लक्षात राहणारे स्थान.",
    visitText:
      "प्रकल्प भिलखेडा, चिखलदरा येथे असून अंजनगाव सुर्जी हे जवळचे शहर १२ कि.मी. अंतरावर आहे. औषधी जैवविविधता उपक्रमासाठी आवश्यक पर्यावरणीय वैशिष्ट्ये आणि सुलभ पोहोच या दोन्ही दृष्टीने हे स्थान मजबूत आहे.",
    visitNote:
      "चिखलदरा–मेलघाट या विस्तृत परिसराशी असलेले नाते या स्थळाला दीर्घकालीन गंतव्य मूल्य देते.",
    openMaps: "Google Maps वर उघडा",

    partnersKicker: "भागीदारी / CSR",
    partnersTitle: "प्रीमियम CSR, संस्थात्मक आणि उद्दिष्टाभिमुख भागीदारीसाठी योग्य मंच.",
    partnersText:
      "हा उपक्रम जैवविविधता, पर्यावरण शिक्षण, रोपवाटिका विकास, ग्रामीण दृश्यता आणि लँडस्केप पुनर्स्थापना यांसारख्या क्षेत्रांशी नैसर्गिकरीत्या जुळतो. प्रत्यक्ष, दीर्घकालीन आणि सार्वजनिक मूल्य निर्माण करणाऱ्या उपक्रमांना साथ देऊ इच्छिणाऱ्या संस्थांसाठी हे एक सक्षम व्यासपीठ ठरू शकते.",
    partnerList: [
      "औषधी जैवविविधता संवर्धन",
      "पर्यावरण शिक्षण आणि क्षेत्रभेटी",
      "रोपवाटिका आणि लागवड साहित्य विकास",
      "समुदाय सहभाग आणि ग्रामीण परिणाम",
    ],

    galleryKicker: "छायाचित्रे",
    galleryTitle: "जमीन, प्रगती, वातावरण आणि वारसा.",
    galleryText:
      "या विभागात जमिनीचा स्वभाव, प्रकल्पाचा प्रवास, लागवड कामे आणि उपक्रमामागील वैयक्तिक कथा दृश्य स्वरूपात व्यक्त करा.",

    contactKicker: "संपर्क",
    contactTitle: "उपक्रमाशी थेट संपर्क साधा.",
    contactText:
      "भेट, सहकार्य, उत्पादन प्रतीक्षा यादी, CSR चर्चा किंवा संस्थात्मक संवादासाठी खालील अधिकृत संपर्क वापरा.",
    supportTitle: "प्रकल्पाला सहकार्य करा",
    supportText:
      "जैवविविधता संवर्धन, शिक्षण आणि दीर्घकालीन औषधी व शाश्वत शेती उपक्रमाच्या विकासासाठी सहकार्य करा.",
    supportBtn: "सहकार्यासाठी ईमेल करा",
    cards: {
      location: "स्थान",
      coordinates: "निर्देशांक",
      nearestTown: "जवळचे शहर",
      website: "संकेतस्थळ",
      email: "ईमेल",
      phone: "फोन / व्हॉट्सअॅप",
    },
    footer: "स्व. नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीप्रीत्यर्थ विकसित",
  },
};

const GALLERY = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function NarmadaUpwanWebsite() {
  const [language, setLanguage] = React.useState("en");
  const content = COPY[language];

  React.useEffect(() => {
    const link = document.querySelector("link[rel='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = "/favicon.png";
    document.head.appendChild(link);
  }, []);

  const sections = [
    { id: "overview", label: content.nav.overview },
    { id: "legacy", label: content.nav.legacy },
    { id: "impact", label: content.nav.impact },
    { id: "products", label: content.nav.products },
    { id: "masterplan", label: content.nav.masterplan },
    { id: "experience", label: content.nav.experience },
    { id: "visit", label: content.nav.visit },
    { id: "partners", label: content.nav.partners },
    { id: "gallery", label: content.nav.gallery },
    { id: "contact", label: content.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-stone-800">
      <style>{`
        @keyframes fadeInLogo {
          from { opacity: 0; transform: translateY(-8px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Narmada Upwan Logo" className="h-12 w-12 rounded-full object-cover ring-1 ring-stone-200" style={{ animation: "fadeInLogo 1.1s ease forwards" }} />
            <div>
              <div className="text-xl font-semibold tracking-tight text-green-900">{content.brand1}</div>
              <div className="text-sm text-stone-600">{content.brand2}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => setLanguage("en")} className={`rounded-xl px-3 py-1 text-sm font-medium ${language === "en" ? "bg-green-800 text-white" : "bg-stone-100 text-stone-700"}`}>EN</button>
            <button onClick={() => setLanguage("mr")} className={`rounded-xl px-3 py-1 text-sm font-medium ${language === "mr" ? "bg-green-800 text-white" : "bg-stone-100 text-stone-700"}`}>मराठी</button>
          </div>

          <nav className="hidden flex-wrap gap-6 md:flex">
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-stone-700 transition hover:text-green-800">{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_30%),linear-gradient(135deg,#123524_0%,#1d4d37_55%,#234f3f_100%)] text-white">
        <div className="absolute inset-0 opacity-10">
          <img src="/logo.png" alt="Watermark" className="absolute right-8 top-10 w-64 max-w-[40vw] opacity-20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-emerald-100">{content.heroBadge}</div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{content.heroTitle}</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-emerald-50 md:text-lg">{content.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#overview" className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-green-900 shadow-lg shadow-black/10 transition hover:-translate-y-0.5">{content.heroPrimary}</a>
                <a href="#products" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">{content.heroSecondary}</a>
              </div>
              <p className="mt-8 max-w-2xl text-sm italic text-emerald-100/90">{content.heroQuote}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {content.stats.map(([value, label], index) => (
                <div key={value} className={`rounded-[1.75rem] p-5 backdrop-blur-sm ${index % 2 === 0 ? "bg-white/12" : "bg-white/8"}`}>
                  <div className="text-3xl font-semibold text-lime-200">{value}</div>
                  <div className="mt-1 text-sm leading-6 text-emerald-50">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-16 md:space-y-20 md:py-20">
        <section id="overview" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-7">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.overviewKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.overviewTitle}</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">{content.overviewText}</p>
            <p className="mt-4 text-base leading-8 text-stone-700">{content.overviewText2}</p>
          </div>
          <div className="grid gap-4 lg:col-span-5 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-green-50 p-6 ring-1 ring-green-100">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{content.cards.location}</div>
              <div className="mt-2 text-sm font-medium text-stone-800">{language === "en" ? "Bhilkheda, Chikhaldara, Maharashtra" : "भिलखेडा, चिखलदरा, महाराष्ट्र"}</div>
            </div>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{content.cards.coordinates}</div>
              <div className="mt-2 text-sm font-medium text-stone-800">21.242359° N, 77.283859° E</div>
            </div>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{content.cards.nearestTown}</div>
              <div className="mt-2 text-sm font-medium text-stone-800">{language === "en" ? "Anjangaon Surji (12 km)" : "अंजनगाव सुर्जी (१२ कि.मी.)"}</div>
            </div>
            <div className="rounded-[1.5rem] bg-green-50 p-6 ring-1 ring-green-100">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{content.cards.website}</div>
              <div className="mt-2 text-sm font-medium text-stone-800">narmadaupwan.org</div>
            </div>
          </div>
        </section>

        <section id="legacy" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">{content.legacyKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{content.legacyTitle}</h2>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-7">
            <p className="text-base leading-8 text-stone-700">{content.legacyText1}</p>
            <p className="mt-4 text-base leading-8 text-stone-700">{content.legacyText2}</p>
            <p className="mt-4 text-base leading-8 text-stone-700">{content.legacyText3}</p>
          </div>
        </section>

        <section id="impact" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.impactKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.impactTitle}</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.pillars.map((item, index) => (
              <div key={item.title} className={`rounded-[1.75rem] p-6 ring-1 ${index % 2 === 0 ? "bg-green-50 ring-green-100" : "bg-stone-50 ring-stone-200"}`}>
                <div className="text-lg font-semibold text-stone-900">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-stone-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-7">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.productsKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.productsTitle}</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">{content.productsText}</p>
            <div className="mt-6 rounded-[1.5rem] bg-green-50 p-6 ring-1 ring-green-100">
              <div className="text-lg font-semibold text-green-900">{content.organicVegTitle}</div>
              <p className="mt-2 text-sm leading-7 text-stone-700">{content.organicVegText}</p>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-stone-700 sm:grid-cols-2">
              {content.organicVegPoints.map((item) => (
                <div key={item} className="rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-green-950 p-6 text-white ring-1 ring-green-900 lg:col-span-5">
            <div className="text-lg font-semibold">{content.waitlistTitle}</div>
            <p className="mt-3 text-sm leading-7 text-emerald-50">{content.waitlistText}</p>
            <form className="mt-5 grid gap-3">
              <input type="text" placeholder={language === "en" ? "Full name" : "पूर्ण नाव"} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none" />
              <input type="email" placeholder={language === "en" ? "Email address" : "ईमेल पत्ता"} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none" />
              <input type="tel" placeholder={language === "en" ? "Phone / WhatsApp" : "फोन / व्हॉट्सअॅप"} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none" />
              <textarea placeholder={language === "en" ? "What are you interested in?" : "आपल्याला कोणत्या प्रकारची आवड आहे?"} rows={4} className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none" />
              <a href="mailto:info@narmadaupwan.org?subject=Organic%20Vegetable%20Waitlist" className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-green-950 transition hover:bg-emerald-300">{content.waitlistBtn}</a>
            </form>
          </div>
        </section>

        <section id="masterplan" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-green-50 p-8 ring-1 ring-green-100 lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.masterplanKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.masterplanTitle}</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">{content.masterplanText}</p>
            <p className="mt-4 text-base leading-8 text-stone-700">{content.masterplanText2}</p>
          </div>
          <div className="grid gap-3 lg:col-span-7 md:grid-cols-2">
            {content.zones.map(([zone, area]) => (
              <div key={zone} className="flex items-center justify-between rounded-[1.5rem] bg-white px-5 py-5 shadow-sm ring-1 ring-stone-200">
                <div className="text-sm font-medium text-stone-800">{zone}</div>
                <div className="text-sm font-semibold text-green-800">{area}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">{content.experienceKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{content.experienceTitle}</h2>
            <p className="mt-5 text-base leading-8 text-stone-200">{content.experienceText}</p>
          </div>
          <div className="grid gap-4 lg:col-span-7 md:grid-cols-2">
            {content.experienceList.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <div className="text-sm leading-7 text-stone-800">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="visit" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.visitKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.visitTitle}</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">{content.visitText}</p>
            <p className="mt-4 text-base leading-8 text-stone-700">{content.visitNote}</p>
            <div className="mt-6 space-y-3 text-sm text-stone-700">
              <div><span className="font-semibold">{content.cards.location}:</span> {language === "en" ? "Bhilkheda, Chikhaldara, Maharashtra" : "भिलखेडा, चिखलदरा, महाराष्ट्र"}</div>
              <div><span className="font-semibold">{content.cards.coordinates}:</span> 21.242359° N, 77.283859° E</div>
              <div><span className="font-semibold">{content.cards.nearestTown}:</span> {language === "en" ? "Anjangaon Surji (12 km)" : "अंजनगाव सुर्जी (१२ कि.मी.)"}</div>
            </div>
            <a href="https://www.google.com/maps?q=21.242359,77.283859" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-2xl bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900">{content.openMaps}</a>
          </div>

          <div className="rounded-[2rem] bg-stone-100 p-3 ring-1 ring-stone-200 lg:col-span-7">
            <iframe title="Narmada Upwan location" src="https://www.google.com/maps?q=21.242359,77.283859&z=13&output=embed" className="h-[420px] w-full rounded-[1.5rem] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>

        <section id="partners" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-6">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.partnersKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.partnersTitle}</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">{content.partnersText}</p>
          </div>
          <div className="grid gap-3 lg:col-span-6 md:grid-cols-2">
            {content.partnerList.map((item) => (
              <div key={item} className="rounded-[1.5rem] bg-green-50 p-5 ring-1 ring-green-100">
                <div className="text-sm font-medium text-stone-800">{item}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.galleryKicker}</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.galleryTitle}</h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-stone-600">{content.galleryText}</div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {GALLERY.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-[1.5rem] bg-stone-100 ring-1 ring-stone-200">
                <img src={src} alt={`Gallery ${i + 1}`} className="h-64 w-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 lg:col-span-5">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">{content.contactKicker}</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">{content.contactTitle}</h2>
            <p className="mt-5 text-base leading-8 text-stone-700">{content.contactText}</p>
          </div>

          <div className="grid gap-4 lg:col-span-7 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.75rem] bg-stone-50 p-6 ring-1 ring-stone-200">
              <div className="space-y-4 text-sm text-stone-800">
                <div>
                  <div className="font-semibold text-green-900">{content.cards.website}</div>
                  <div>narmadaupwan.org</div>
                </div>
                <div>
                  <div className="font-semibold text-green-900">{content.cards.email}</div>
                  <div>info@narmadaupwan.org</div>
                </div>
                <div>
                  <div className="font-semibold text-green-900">{content.cards.phone}</div>
                  <div>9822236036</div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-green-950 p-6 text-white ring-1 ring-green-900">
              <div className="text-lg font-semibold">{content.supportTitle}</div>
              <p className="mt-3 text-sm leading-7 text-emerald-50">{content.supportText}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a href="mailto:info@narmadaupwan.org?subject=Support%20for%20Narmada%20Upwan" className="inline-flex rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-green-950 transition hover:bg-emerald-300">{content.supportBtn}</a>
                <a href="https://wa.me/919822236036" target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
            <div>© {content.brand1} {content.brand2}</div>
          </div>
          <div>{content.footer}</div>
        </div>
      </footer>
    </div>
  );
}
