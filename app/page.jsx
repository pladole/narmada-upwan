"use client";

import React from "react";

const COPY = {
  en: {
    nav: {
      vision: "Vision",
      impact: "Impact",
      products: "Products",
      park: "The Park",
      visit: "Visit",
      partners: "Partner",
      gallery: "Gallery",
      contact: "Contact",
    },
    brand1: "Narmada Upwan",
    brand2: "and Sanshodhan Kendra",
    heroBadge: "Bhilkheda, Chikhaldara • 25-acre medicinal biodiversity park",
    heroTitle: "A living laboratory of medicinal biodiversity and sustainable farming.",
    heroText:
      "Narmada Upwan and Sanshodhan Kendra is being developed in memory of Narmadabai Kisanrao Ladole as a biodiversity park, learning landscape, research platform, and future source of trusted organic produce.",
    heroPrimary: "Visit the Project",
    heroSecondary: "Support / Partner",

    visionKicker: "Vision and legacy",
    visionTitle: "A project born from memory, land, and purpose.",
    visionP1:
      "This project stands on 25 acres at Bhilkheda near Anjangaon Surji, in the broader Chikhaldara–Melghat landscape. It is being created in memory of Narmadabai Kisanrao Ladole — a teacher, farmer, and lifelong believer in education, discipline, and the dignity of working with the land.",
    visionP2:
      "What began as a family vision is being shaped into a long-term public value project: a medicinal biodiversity park that supports conservation, learning, community engagement, nursery development, and clean farm produce.",

    impactKicker: "What this park delivers",
    impactTitle: "Four connected pillars, one living ecosystem.",
    pillars: [
      {
        title: "Biodiversity Conservation",
        text: "Native medicinal species, ecological restoration, rare plant protection, and landscape stewardship in the Chikhaldara–Melghat setting.",
      },
      {
        title: "Research and Knowledge",
        text: "Field learning, medicinal plant documentation, ethnomedicine interpretation, nursery development, and future collaborations with institutions.",
      },
      {
        title: "Farmer and Community Value",
        text: "A platform for practical exposure, training, demonstration, and community-linked engagement rooted in local landscape realities.",
      },
      {
        title: "Organic Produce",
        text: "A future-facing product stream beginning with organic vegetables grown with a strong focus on soil health, freshness, and trust.",
      },
    ],

    productsKicker: "Products",
    productsTitle: "From biodiversity to trusted produce.",
    productsText:
      "The first planned consumer-facing category is organic vegetables. Over time, the project can also support nursery plants, medicinal planting material, and other value-added farm-linked offerings.",
    organicVegTitle: "Organic Vegetables",
    organicVegText:
      "Seasonal vegetables grown with a clean-cultivation mindset, focus on soil health, freshness, and direct connection with buyers who care about quality and trust.",
    waitlistTitle: "Join the organic vegetable waitlist",
    waitlistText:
      "Share your details to receive updates on launch timing, availability, and early access to upcoming batches.",
    waitlistBtn: "Join Waitlist",
    productList: [
      "Leafy vegetables",
      "Seasonal gourds",
      "Tomato, chilli, brinjal",
      "Farm-fresh mixed baskets",
    ],

    parkKicker: "The Park",
    parkTitle: "Designed as a balanced ecological and public-facing landscape.",
    parkText:
      "The site plan is intentionally structured to avoid overbuilding. It balances conservation habitat, themed medicinal spaces, public access, nursery systems, and learning zones.",
    zonesTitle: "Key zones",
    zones: [
      ["Native medicinal woodland", "8 acres"],
      ["RET conservation zone", "3 acres"],
      ["Ayurvedic theme gardens", "2.5 acres"],
      ["Demonstration plots", "3 acres"],
      ["Nursery + mother block", "1.5 acres"],
      ["Wetland medicinal zone", "1 acre"],
    ],

    visitKicker: "Visit",
    visitTitle: "Accessible, grounded, and easy to locate.",
    visitText:
      "The project is located at Bhilkheda, Chikhaldara, with Anjangaon Surji as the nearest town at 12 km. The site combines ecological value with practical accessibility.",
    openMaps: "Open in Google Maps",

    partnerKicker: "Partner / CSR",
    partnerTitle:
      "A strong fit for biodiversity, education, and rural impact partnerships.",
    partnerText:
      "The project aligns naturally with CSR, institutional partnerships, biodiversity missions, educational outreach, and rural landscape restoration goals.",
    partnerList: [
      "Medicinal biodiversity conservation",
      "Environmental education and field learning",
      "Nursery and planting material development",
      "Community engagement and local livelihood visibility",
    ],

    galleryKicker: "Gallery",
    galleryTitle: "Land, progress, and the story behind the project.",
    galleryText:
      "Replace these placeholders with farm photos, site development, plantation work, and legacy images.",

    contactKicker: "Contact",
    contactTitle: "Connect with the project.",
    contactText:
      "For visits, collaboration, waitlist interest, CSR discussions, or project inquiries, reach out directly using the contact details below.",

    supportTitle: "Support the project",
    supportText:
      "Support biodiversity conservation, education, and the development of a long-term medicinal and sustainable farming initiative.",
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
      vision: "दृष्टिकोन",
      impact: "परिणाम",
      products: "उत्पादने",
      park: "उद्यान",
      visit: "भेट",
      partners: "भागीदारी",
      gallery: "छायाचित्रे",
      contact: "संपर्क",
    },
    brand1: "नर्मदा उपवन",
    brand2: "आणि संशोधन केंद्र",
    heroBadge: "भिलखेडा, चिखलदरा • २५ एकर औषधी जैवविविधता उद्यान",
    heroTitle: "औषधी जैवविविधता आणि शाश्वत शेतीचे जिवंत प्रयोगशाळा-सदृश केंद्र.",
    heroText:
      "नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीप्रीत्यर्थ विकसित होत असलेले नर्मदा उपवन आणि संशोधन केंद्र हे जैवविविधता उद्यान, शैक्षणिक परिसर, संशोधन मंच आणि विश्वासार्ह सेंद्रिय उत्पादनांचा भविष्यातील स्रोत म्हणून उभे राहत आहे.",
    heroPrimary: "प्रकल्पाला भेट द्या",
    heroSecondary: "सहकार्य / भागीदारी",

    visionKicker: "दृष्टिकोन आणि वारसा",
    visionTitle: "स्मृती, जमीन आणि हेतू यांपासून जन्मलेला प्रकल्प.",
    visionP1:
      "अंजनगाव सुर्जीपासून जवळ असलेल्या भिलखेडा येथील २५ एकर जमिनीवर हा प्रकल्प उभा राहत आहे. शिक्षिका, शेतकरी आणि आयुष्यभर शिक्षण व श्रम यांच्या मूल्यांवर विश्वास ठेवणाऱ्या स्व. नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीत हा उपक्रम उभारला जात आहे.",
    visionP2:
      "कौटुंबिक प्रेरणेपासून सुरू झालेला हा विचार आता सार्वजनिक मूल्य निर्माण करणाऱ्या दीर्घकालीन प्रकल्पात रूपांतरित होत आहे — औषधी जैवविविधता, शिक्षण, समुदाय सहभाग, रोपवाटिका आणि स्वच्छ उत्पादन यांना जोडणारा प्रकल्प.",

    impactKicker: "हा प्रकल्प काय देतो",
    impactTitle: "चार परस्पर जोडलेले स्तंभ, एक जिवंत परिसंस्था.",
    pillars: [
      {
        title: "जैवविविधता संवर्धन",
        text: "स्थानिक औषधी प्रजाती, पर्यावरणीय पुनर्स्थापना, दुर्मिळ वनस्पती संरक्षण आणि चिखलदरा–मेलघाट परिसरातील भूमीसंवर्धन.",
      },
      {
        title: "संशोधन आणि ज्ञान",
        text: "क्षेत्राधारित शिक्षण, औषधी वनस्पती दस्तऐवजीकरण, पारंपरिक ज्ञानाचे सादरीकरण, रोपवाटिका आणि भविष्यातील संस्थात्मक सहकार्य.",
      },
      {
        title: "शेतकरी आणि समुदाय मूल्य",
        text: "प्रात्यक्षिके, प्रशिक्षण, प्रत्यक्ष अनुभव आणि स्थानिक वास्तवाशी जोडलेला समुदाय सहभाग.",
      },
      {
        title: "सेंद्रिय उत्पादन",
        text: "मृदास्वास्थ्य, ताजेपणा आणि विश्वास यांवर आधारित सेंद्रिय भाजीपाल्यापासून सुरू होणारा भविष्यातील उत्पादन प्रवाह.",
      },
    ],

    productsKicker: "उत्पादने",
    productsTitle: "जैवविविधतेतून विश्वासार्ह उत्पादनांकडे.",
    productsText:
      "ग्राहकांसाठी पहिला नियोजित विभाग म्हणजे सेंद्रिय भाजीपाला. पुढे रोपे, औषधी लागवड साहित्य आणि इतर मूल्यवर्धित शेतमाल यांचाही विचार केला जाऊ शकतो.",
    organicVegTitle: "सेंद्रिय भाजीपाला",
    organicVegText:
      "स्वच्छ शेती, मृदास्वास्थ्य, ताजेपणा आणि विश्वास या तत्त्वांवर आधारित हंगामी भाजीपाला.",
    waitlistTitle: "सेंद्रिय भाजीपाला प्रतीक्षा यादी",
    waitlistText:
      "सुरुवातीची वेळ, उपलब्धता आणि पहिल्या बॅचबद्दल माहिती मिळवण्यासाठी आपली माहिती नोंदवा.",
    waitlistBtn: "प्रतीक्षा यादीत सामील व्हा",
    productList: [
      "पालेभाज्या",
      "हंगामी वेलवर्गीय भाज्या",
      "टोमॅटो, मिरची, वांगी",
      "ताज्या मिश्र भाजीपाला टोपल्या",
    ],

    parkKicker: "उद्यान",
    parkTitle: "पर्यावरणीय आणि सार्वजनिक वापराचा समतोल राखून आखलेले नियोजन.",
    parkText:
      "अति बांधकाम टाळून संवर्धन क्षेत्र, थीम गार्डन, सार्वजनिक प्रवेश, रोपवाटिका आणि शिक्षण क्षेत्रांचा समतोल राखत मास्टर प्लॅन तयार केला आहे.",
    zonesTitle: "मुख्य विभाग",
    zones: [
      ["स्थानिक औषधी जंगल", "८ एकर"],
      ["RET संवर्धन विभाग", "३ एकर"],
      ["आयुर्वेद थीम गार्डन", "२.५ एकर"],
      ["प्रात्यक्षिक प्लॉट", "३ एकर"],
      ["रोपवाटिका + मातृब्लॉक", "१.५ एकर"],
      ["ओलसर औषधी विभाग", "१ एकर"],
    ],

    visitKicker: "भेट",
    visitTitle: "सहज पोहोचण्याजोगे, जमिनीशी जोडलेले स्थान.",
    visitText:
      "प्रकल्प भिलखेडा, चिखलदरा येथे असून अंजनगाव सुर्जी हे जवळचे शहर १२ कि.मी. अंतरावर आहे. पर्यावरणीय मूल्य आणि सुलभ पोहोच या दोन्ही दृष्टीने हे स्थान मजबूत आहे.",
    openMaps: "Google Maps वर उघडा",

    partnerKicker: "भागीदारी / CSR",
    partnerTitle: "जैवविविधता, शिक्षण आणि ग्रामीण परिणाम यासाठी सक्षम भागीदारी संधी.",
    partnerText:
      "हा प्रकल्प CSR, संस्थात्मक भागीदारी, जैवविविधता उपक्रम, शैक्षणिक विस्तार आणि ग्रामीण परिसर विकासाच्या उद्दिष्टांशी चांगला जुळतो.",
    partnerList: [
      "औषधी जैवविविधता संवर्धन",
      "पर्यावरण शिक्षण आणि क्षेत्रभेटी",
      "रोपवाटिका आणि लागवड साहित्य विकास",
      "समुदाय सहभाग आणि स्थानिक उपजीविका दृश्यमानता",
    ],

    galleryKicker: "छायाचित्रे",
    galleryTitle: "जमीन, प्रगती आणि प्रकल्पामागची कथा.",
    galleryText:
      "येथे शेत, प्रकल्प प्रगती, लागवड कामे आणि वारसा दर्शविणारी छायाचित्रे जोडा.",

    contactKicker: "संपर्क",
    contactTitle: "प्रकल्पाशी थेट संपर्क साधा.",
    contactText:
      "भेट, सहकार्य, प्रतीक्षा यादी, CSR चर्चा किंवा इतर चौकशींसाठी खालील संपर्क वापरा.",

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
    const link =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = "/favicon.png";
    document.head.appendChild(link);
  }, []);

  const sections = [
    { id: "vision", label: content.nav.vision },
    { id: "impact", label: content.nav.impact },
    { id: "products", label: content.nav.products },
    { id: "park", label: content.nav.park },
    { id: "visit", label: content.nav.visit },
    { id: "partners", label: content.nav.partners },
    { id: "gallery", label: content.nav.gallery },
    { id: "contact", label: content.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <style>{`
        @keyframes fadeInLogo {
          from { opacity: 0; transform: translateY(-8px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Narmada Upwan Logo"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-stone-200"
              style={{ animation: "fadeInLogo 1.1s ease forwards" }}
            />
            <div>
              <div className="text-xl font-semibold tracking-tight text-green-900">
                {content.brand1}
              </div>
              <div className="text-sm text-stone-600">{content.brand2}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-xl px-3 py-1 text-sm font-medium ${
                language === "en"
                  ? "bg-green-800 text-white"
                  : "bg-stone-100 text-stone-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("mr")}
              className={`rounded-xl px-3 py-1 text-sm font-medium ${
                language === "mr"
                  ? "bg-green-800 text-white"
                  : "bg-stone-100 text-stone-700"
              }`}
            >
              मराठी
            </button>
          </div>

          <nav className="hidden gap-6 md:flex">
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-stone-700 transition hover:text-green-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-800 text-white">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img
            src="/logo.png"
            alt="Watermark Logo"
            className="w-96 max-w-[70vw] opacity-20"
          />
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-lime-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-emerald-100">
              {content.heroBadge}
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              {content.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-50 md:text-lg">
              {content.heroText}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#visit"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-green-900 shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
              >
                {content.heroPrimary}
              </a>
              <a
                href="#partners"
                className="rounded-2xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {content.heroSecondary}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {content.pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-sm"
              >
                <div className="text-xl font-semibold text-lime-200">
                  {item.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-emerald-50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <section id="vision" className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.visionKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {content.visionTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              {content.visionP1}
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700">
              {content.visionP2}
            </p>
          </div>

          <div className="rounded-[2rem] bg-green-50 p-8 ring-1 ring-green-100">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-green-100">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {content.cards.location}
                </div>
                <div className="mt-1 text-sm font-medium text-stone-800">
                  {language === "en"
                    ? "Bhilkheda, Chikhaldara, Maharashtra"
                    : "भिलखेडा, चिखलदरा, महाराष्ट्र"}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-green-100">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {content.cards.coordinates}
                </div>
                <div className="mt-1 text-sm font-medium text-stone-800">
                  21.242359° N, 77.283859° E
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-green-100">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {content.cards.nearestTown}
                </div>
                <div className="mt-1 text-sm font-medium text-stone-800">
                  {language === "en"
                    ? "Anjangaon Surji (12 km)"
                    : "अंजनगाव सुर्जी (१२ कि.मी.)"}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-green-100">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  {content.cards.website}
                </div>
                <div className="mt-1 text-sm font-medium text-stone-800">
                  narmadaupwan.org
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.impactKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {content.impactTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] bg-stone-50 p-6 ring-1 ring-stone-200"
              >
                <div className="text-lg font-semibold text-stone-900">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
                {content.productsKicker}
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                {content.productsTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-700">
                {content.productsText}
              </p>

              <div className="mt-6 grid gap-3 text-sm text-stone-700 sm:grid-cols-2">
                {content.productList.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-green-50 p-4 ring-1 ring-green-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-green-950 p-6 text-white ring-1 ring-green-900">
              <div className="text-lg font-semibold">{content.waitlistTitle}</div>
              <p className="mt-3 text-sm leading-7 text-emerald-50">
                {content.waitlistText}
              </p>

              <form className="mt-5 grid gap-3">
                <input
                  type="text"
                  placeholder={language === "en" ? "Full name" : "पूर्ण नाव"}
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none"
                />
                <input
                  type="email"
                  placeholder={language === "en" ? "Email address" : "ईमेल पत्ता"}
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none"
                />
                <input
                  type="tel"
                  placeholder={language === "en" ? "Phone / WhatsApp" : "फोन / व्हॉट्सअॅप"}
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none"
                />
                <textarea
                  placeholder={
                    language === "en"
                      ? "What are you interested in?"
                      : "आपल्याला कोणत्या प्रकारची आवड आहे?"
                  }
                  rows={4}
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-emerald-100/70 outline-none"
                />
                <a
                  href="mailto:info@narmadaupwan.org?subject=Organic%20Vegetable%20Waitlist"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-green-950 transition hover:bg-emerald-300"
                >
                  {content.waitlistBtn}
                </a>
              </form>
            </div>
          </div>
        </section>

        <section id="park" className="mt-16 grid gap-8 md:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.parkKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {content.parkTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              {content.parkText}
            </p>
          </div>

          <div className="rounded-[2rem] bg-green-50 p-8 ring-1 ring-green-100">
            <div className="text-lg font-semibold text-green-900">
              {content.zonesTitle}
            </div>
            <div className="mt-5 grid gap-3">
              {content.zones.map(([zone, area]) => (
                <div
                  key={zone}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 ring-1 ring-green-100"
                >
                  <div className="text-sm font-medium text-stone-800">{zone}</div>
                  <div className="text-sm font-semibold text-green-800">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="visit" className="mt-16 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.visitKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {content.visitTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              {content.visitText}
            </p>

            <div className="mt-6 space-y-3 text-sm text-stone-700">
              <div>
                <span className="font-semibold">{content.cards.location}:</span>{" "}
                {language === "en"
                  ? "Bhilkheda, Chikhaldara, Maharashtra"
                  : "भिलखेडा, चिखलदरा, महाराष्ट्र"}
              </div>
              <div>
                <span className="font-semibold">{content.cards.coordinates}:</span>{" "}
                21.242359° N, 77.283859° E
              </div>
              <div>
                <span className="font-semibold">{content.cards.nearestTown}:</span>{" "}
                {language === "en"
                  ? "Anjangaon Surji (12 km)"
                  : "अंजनगाव सुर्जी (१२ कि.मी.)"}
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=21.242359,77.283859"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-2xl bg-green-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-900"
            >
              {content.openMaps}
            </a>
          </div>

          <div className="rounded-[2rem] bg-stone-100 p-3 ring-1 ring-stone-200">
            <iframe
              title="Narmada Upwan location"
              src="https://www.google.com/maps?q=21.242359,77.283859&z=13&output=embed"
              className="h-[380px] w-full rounded-[1.5rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section
          id="partners"
          className="mt-16 rounded-[2rem] bg-gradient-to-br from-green-950 to-green-900 p-8 text-white shadow-sm"
        >
          <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                {content.partnerKicker}
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {content.partnerTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-emerald-50">
                {content.partnerText}
              </p>
            </div>

            <div className="grid gap-3">
              {content.partnerList.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-4 text-sm text-emerald-50 ring-1 ring-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
                {content.galleryKicker}
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                {content.galleryTitle}
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-stone-600">
              {content.galleryText}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-[1.5rem] bg-stone-100 ring-1 ring-stone-200"
              >
                <img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="grid gap-8 md:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
                {content.contactKicker}
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                {content.contactTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-700">
                {content.contactText}
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.75rem] bg-stone-50 p-6 ring-1 ring-stone-200">
                <div className="space-y-4 text-sm text-stone-800">
                  <div>
                    <div className="font-semibold text-green-900">
                      {content.cards.website}
                    </div>
                    <div>narmadaupwan.org</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">
                      {content.cards.email}
                    </div>
                    <div>info@narmadaupwan.org</div>
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">
                      {content.cards.phone}
                    </div>
                    <div>9822236036</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-green-950 p-6 text-white ring-1 ring-green-900">
                <div className="text-lg font-semibold">{content.supportTitle}</div>
                <p className="mt-3 text-sm leading-7 text-emerald-50">
                  {content.supportText}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="mailto:info@narmadaupwan.org?subject=Support%20for%20Narmada%20Upwan"
                    className="inline-flex rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-green-950 transition hover:bg-emerald-300"
                  >
                    {content.supportBtn}
                  </a>
                  <a
                    href="https://wa.me/919822236036"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
            <div>
              © {content.brand1} {content.brand2}
            </div>
          </div>
          <div>{content.footer}</div>
        </div>
      </footer>
    </div>
  );
}