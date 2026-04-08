"use client";

import React from "react";

const COPY = {
  en: {
    nav: {
      about: "About",
      legacy: "Legacy",
      park: "The Park",
      research: "Research",
      gallery: "Gallery",
      visit: "Visit",
      contact: "Contact",
    },
    brand1: "Narmada Upwan",
    brand2: "and Sanshodhan Kendra",
    heroBadge: "Bhilkheda, Chikhaldara • 25-acre medicinal biodiversity park",
    heroTitle: "A living memorial of nature, learning, and resilience.",
    heroText:
      "Narmada Upwan and Sanshodhan Kendra is being developed in memory of Narmadabai Kisanrao Ladole — a teacher with a lifelong passion for education and farming — as a medicinal biodiversity, research, and educational park in the Chikhaldara–Melghat landscape.",
    explore: "Explore the Project",
    visitInfo: "Visit Information",
    support: "Donate / Support",
    highlights: [
      {
        title: "25 Acres",
        text: "A medicinal biodiversity and educational park planned across 25 acres in Bhilkheda.",
      },
      {
        title: "150 Species",
        text: "A curated planning list of native and regionally suitable medicinal plants for the Chikhaldara–Melghat landscape.",
      },
      {
        title: "Living Legacy",
        text: "Developed in memory of Narmadabai Kisanrao Ladole — a teacher, farmer, and lifelong learner.",
      },
      {
        title: "Research + Education",
        text: "Designed to integrate conservation, nursery development, field learning, and community engagement.",
      },
    ],
    aboutKicker: "About the project",
    aboutTitle: "A medicinal biodiversity and educational park rooted in place.",
    aboutP1:
      "The project is located at Bhilkheda, near Anjangaon Surji, within the broader Chikhaldara–Melghat region of Maharashtra. It is envisioned as an integrated landscape for medicinal plant conservation, ecological restoration, nursery development, field learning, and public awareness.",
    aboutP2:
      "Built around biodiversity, education, and research, the park brings together native medicinal species, interpretation zones, training spaces, and visitor access in a way that respects both ecology and local context.",
    snapshot: "Project snapshot",
    legacyKicker: "Legacy",
    legacyTitle: "In memory of Narmadabai Kisanrao Ladole.",
    legacyP1:
      "Born in Lohi, Yavatmal district, she fought to continue her education when circumstances pushed against it. She worked in the fields to support her studies, later became a primary school teacher, and remained deeply connected to farming throughout her life.",
    legacyP2:
      "This park reflects the values she lived by: discipline, self-reliance, love for land, and commitment to learning. It is being developed as a living tribute to her journey and to the future she believed in.",
    parkKicker: "The Park",
    parkTitle: "Master layout built for ecology, learning, and continuity.",
    parkText:
      "The 25-acre plan balances conservation habitat, themed medicinal gardens, nursery systems, public access, and research spaces instead of overbuilding the site.",
    researchKicker: "Research and learning",
    researchTitle: "Built for field-based knowledge.",
    researchText:
      "The park is planned as more than a conservation site. It is intended to support training programs, school visits, farmer learning, nursery-based propagation, documentation of medicinal plants, and future research collaborations.",
    whyKicker: "Why it matters",
    whyP1:
      "Medicinal plant diversity is under pressure from habitat loss, fragmented landscapes, and fading traditional knowledge. This project creates a structured place where conservation, education, and community relevance can meet.",
    whyP2:
      "By combining nursery capacity, themed interpretation, biodiversity restoration, and access for learners, the park can serve as a credible platform for long-term ecological and educational value.",
    galleryKicker: "Gallery",
    galleryTitle: "Landscape, progress, and memory.",
    galleryText:
      "Replace these placeholders with your farm, plantation, family, and project progress photos.",
    visitKicker: "Visit",
    visitTitle: "Find the project site.",
    openMaps: "Open in Google Maps",
    contactKicker: "Contact",
    contactTitle: "Build the next chapter of the park.",
    contactText:
      "For collaboration, nursery planning, biodiversity development, educational visits, or project discussions, reach out through the official website domain and contact channels.",
    supportTitle: "Support the project",
    supportText:
      "Invite CSR partners, institutions, well-wishers, and collaborators to support biodiversity conservation, education, and research development.",
    supportBtn: "Support This Project",
    footer: "Developed in memory of Narmadabai Kisanrao Ladole",
    cards: {
      projectName: "Project Name",
      location: "Location",
      coordinates: "Coordinates",
      nearestTown: "Nearest Town",
      projectType: "Project Type",
      domain: "Domain",
      born: "Born",
      passedAway: "Passed Away",
      placeOfBirth: "Place of Birth",
      profession: "Profession",
      passions: "Life’s Passions",
      parkLegacy: "Legacy in the Park",
      address: "Address",
      region: "Region",
      website: "Website",
      focus: "Focus",
    },
  },
  mr: {
    nav: {
      about: "परिचय",
      legacy: "स्मृती",
      park: "उद्यान",
      research: "संशोधन",
      gallery: "छायाचित्रे",
      visit: "भेट",
      contact: "संपर्क",
    },
    brand1: "नर्मदा उपवन",
    brand2: "आणि संशोधन केंद्र",
    heroBadge: "भिलखेडा, चिखलदरा • २५ एकर औषधी जैवविविधता उद्यान",
    heroTitle: "निसर्ग, ज्ञान आणि जिद्दीचा जिवंत स्मारक.",
    heroText:
      "नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीप्रीत्यर्थ विकसित होत असलेले नर्मदा उपवन आणि संशोधन केंद्र हे चिखलदरा–मेलघाट परिसरातील औषधी जैवविविधता, संशोधन आणि शैक्षणिक उद्यान आहे.",
    explore: "प्रकल्प पहा",
    visitInfo: "भेट माहिती",
    support: "देणगी / सहकार्य",
    highlights: [
      {
        title: "२५ एकर",
        text: "भिलखेडा येथे २५ एकरांवर उभारले जाणारे औषधी जैवविविधता आणि शैक्षणिक उद्यान.",
      },
      {
        title: "१५० प्रजाती",
        text: "चिखलदरा–मेलघाट परिसरासाठी योग्य स्थानिक व प्रादेशिक औषधी वनस्पतींची निवडलेली यादी.",
      },
      {
        title: "जिवंत वारसा",
        text: "स्व. नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीत विकसित होत असलेला उपक्रम.",
      },
      {
        title: "संशोधन + शिक्षण",
        text: "संवर्धन, रोपवाटिका, क्षेत्राधारित शिक्षण आणि समुदाय सहभाग यांचा समन्वय.",
      },
    ],
    aboutKicker: "प्रकल्प परिचय",
    aboutTitle: "स्थानाशी जोडलेले औषधी जैवविविधता आणि शैक्षणिक उद्यान.",
    aboutP1:
      "हा प्रकल्प भिलखेडा येथे, अंजनगाव सुर्जी जवळ, चिखलदरा–मेलघाट परिसरात स्थित आहे. औषधी वनस्पती संवर्धन, पर्यावरणीय पुनर्स्थापना, रोपवाटिका, प्रत्यक्ष शिक्षण आणि जनजागृती यांचे एकत्रित केंद्र म्हणून याची कल्पना आहे.",
    aboutP2:
      "जैवविविधता, शिक्षण आणि संशोधन याभोवती उभ्या केलेल्या या उद्यानात स्थानिक औषधी वनस्पती, माहितीपर विभाग, प्रशिक्षण जागा आणि अभ्यागत सुविधा यांचा समतोल साधला आहे.",
    snapshot: "प्रकल्प झलक",
    legacyKicker: "स्मृती",
    legacyTitle: "स्व. नर्मदाबाई किसानराव लाडोळे यांच्या स्मरणार्थ.",
    legacyP1:
      "यवतमाळ जिल्ह्यातील लोही येथे जन्मलेल्या नर्मदाबाईंनी प्रतिकूल परिस्थितीतही शिक्षण सुरू ठेवण्यासाठी संघर्ष केला. शेतीत काम करून शिक्षण पूर्ण केले, पुढे प्राथमिक शिक्षिका झाल्या आणि आयुष्यभर शेतीशी त्यांचे नाते कायम राहिले.",
    legacyP2:
      "हा प्रकल्प त्यांच्या जीवनमूल्यांना आकार देतो: शिस्त, स्वावलंबन, जमिनीवरील प्रेम आणि शिक्षणाची बांधिलकी. त्यांच्या स्मृतीचा हा जिवंत वारसा आहे.",
    parkKicker: "उद्यान",
    parkTitle: "पर्यावरण, शिक्षण आणि सातत्य लक्षात घेऊन आखलेला मास्टर लेआउट.",
    parkText:
      "२५ एकरांचे नियोजन हे अति बांधकाम न करता संवर्धन क्षेत्र, थीम गार्डन, रोपवाटिका, सार्वजनिक प्रवेश आणि संशोधन जागांचा समतोल राखते.",
    researchKicker: "संशोधन आणि शिक्षण",
    researchTitle: "क्षेत्राधारित ज्ञानासाठी उभारलेले केंद्र.",
    researchText:
      "हे उद्यान फक्त संवर्धनापुरते मर्यादित नाही. प्रशिक्षण, शालेय भेटी, शेतकरी शिक्षण, रोपवाटिका, औषधी वनस्पती दस्तऐवजीकरण आणि भविष्यातील संशोधन सहकार्य यासाठी हे नियोजित आहे.",
    whyKicker: "महत्त्व",
    whyP1:
      "औषधी वनस्पतींची विविधता अधिवास नष्ट होणे, तुकडीकरण आणि पारंपरिक ज्ञान कमी होणे यामुळे दबावाखाली आहे. हा प्रकल्प संवर्धन, शिक्षण आणि समुदाय सहभाग एकत्र आणतो.",
    whyP2:
      "रोपवाटिका, माहितीपर थीम, जैवविविधता पुनर्स्थापना आणि शिकण्यासाठी प्रवेश या घटकांमुळे हे उद्यान दीर्घकालीन पर्यावरणीय आणि शैक्षणिक मूल्य निर्माण करू शकते.",
    galleryKicker: "छायाचित्रे",
    galleryTitle: "भूमी, प्रगती आणि स्मृती.",
    galleryText:
      "तुमच्या शेत, लागवड, कुटुंब आणि प्रकल्प प्रगतीची छायाचित्रे येथे बदला.",
    visitKicker: "भेट",
    visitTitle: "प्रकल्प स्थळ शोधा.",
    openMaps: "Google Maps वर उघडा",
    contactKicker: "संपर्क",
    contactTitle: "उद्यानाचा पुढचा अध्याय घडवूया.",
    contactText:
      "सहकार्य, रोपवाटिका नियोजन, जैवविविधता विकास, शैक्षणिक भेटी किंवा प्रकल्प चर्चेसाठी अधिकृत संकेतस्थळ आणि संपर्क माध्यमांचा वापर करा.",
    supportTitle: "प्रकल्पाला सहकार्य करा",
    supportText:
      "CSR भागीदार, संस्था, हितचिंतक आणि सहकारी यांना जैवविविधता संवर्धन, शिक्षण आणि संशोधन विकासासाठी सहभागी होण्याचे आमंत्रण.",
    supportBtn: "या प्रकल्पाला सहकार्य करा",
    footer: "स्व. नर्मदाबाई किसानराव लाडोळे यांच्या स्मृतीप्रीत्यर्थ विकसित",
    cards: {
      projectName: "प्रकल्प नाव",
      location: "स्थान",
      coordinates: "निर्देशांक",
      nearestTown: "जवळचे शहर",
      projectType: "प्रकल्प प्रकार",
      domain: "डोमेन",
      born: "जन्म",
      passedAway: "निधन",
      placeOfBirth: "जन्मगाव",
      profession: "व्यवसाय",
      passions: "आवडी",
      parkLegacy: "उद्यानातील वारसा",
      address: "पत्ता",
      region: "परिसर",
      website: "संकेतस्थळ",
      focus: "केंद्रबिंदू",
    },
  },
};

const ZONES = [
  ["Native Medicinal Woodland", "8 acres", "Ecological restoration with native medicinal trees, shrubs, herbs, and climbers."],
  ["RET Conservation Zone", "3 acres", "Rare, endangered, and sensitive medicinal plants under closer protection."],
  ["Ayurvedic Theme Gardens", "2.5 acres", "Thematic interpretive gardens for health traditions and medicinal uses."],
  ["Demonstration Plots", "3 acres", "Training and display plots for medicinal cultivation and community learning."],
  ["Arboretum", "1.5 acres", "Labeled medicinal tree collection with structured visitor access."],
  ["Nursery + Mother Block", "1.5 acres", "Propagation and replacement stock for long-term sustainability."],
  ["Wetland Medicinal Zone", "1 acre", "Moisture-loving herbs, ferns, and water-edge medicinal species."],
  ["Ethnomedicine Zone", "1 acre", "Interpretation of traditional knowledge linked to local communities."],
  ["Research & Training", "1 acre", "Field learning space for students, farmers, and collaborators."],
  ["Visitor Core + Trails", "2.5 acres", "Entry, movement, utilities, and public engagement spaces."],
];

const PLANT_GROUPS = [
  "Medicinal trees such as Amla, Hirda, Behada, Bael, Ashoka, Karanj, Jamun, and Vijaysar",
  "Shrubs and understory plants such as Adulsa, Ashwagandha, Chitrak, Bharangi, and Sarpagandha",
  "Herbs including Kalmegh, Brahmi, Mandukaparni, Safed Musli, Tulsi, Vekhanda, and Bhringraj",
  "Climbers such as Guduchi, Shatavari, Gurmar, Pippali, and Hadjod",
  "Grasses and special habitat species including Lemongrass, Rosha Grass, Vetiver, and medicinal ferns",
];

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
    { id: "about", label: content.nav.about },
    { id: "legacy", label: content.nav.legacy },
    { id: "park", label: content.nav.park },
    { id: "research", label: content.nav.research },
    { id: "gallery", label: content.nav.gallery },
    { id: "visit", label: content.nav.visit },
    { id: "contact", label: content.nav.contact },
  ];

  const snapshotCards = [
    [content.cards.projectName, language === "en" ? "Narmada Upwan and Sanshodhan Kendra" : "नर्मदा उपवन आणि संशोधन केंद्र"],
    [content.cards.location, language === "en" ? "Bhilkheda, Chikhaldara, Maharashtra" : "भिलखेडा, चिखलदरा, महाराष्ट्र"],
    [content.cards.coordinates, "21.242359° N, 77.283859° E"],
    [content.cards.nearestTown, language === "en" ? "Anjangaon Surji (12 km)" : "अंजनगाव सुर्जी (१२ कि.मी.)"],
    [content.cards.projectType, language === "en" ? "Medicinal biodiversity, research, and educational park" : "औषधी जैवविविधता, संशोधन आणि शैक्षणिक उद्यान"],
    [content.cards.domain, "narmadaupwan.org"],
  ];

  const legacyCards = [
    [content.cards.born, language === "en" ? "May 4, 1943" : "४ मे १९४३"],
    [content.cards.passedAway, language === "en" ? "August 25, 2026" : "२५ ऑगस्ट २०२६"],
    [content.cards.placeOfBirth, language === "en" ? "Lohi, Yavatmal district" : "लोही, यवतमाळ जिल्हा"],
    [content.cards.profession, language === "en" ? "Primary school teacher" : "प्राथमिक शिक्षिका"],
    [content.cards.passions, language === "en" ? "Education and farming" : "शिक्षण आणि शेती"],
    [content.cards.parkLegacy, language === "en" ? "Biodiversity, learning, and land stewardship" : "जैवविविधता, ज्ञान आणि भूमीशी नाते"],
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
              <div className="text-xl font-semibold tracking-tight text-green-900">{content.brand1}</div>
              <div className="text-sm text-stone-600">{content.brand2}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-xl px-3 py-1 text-sm font-medium ${
                language === "en" ? "bg-green-800 text-white" : "bg-stone-100 text-stone-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("mr")}
              className={`rounded-xl px-3 py-1 text-sm font-medium ${
                language === "mr" ? "bg-green-800 text-white" : "bg-stone-100 text-stone-700"
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
          <img src="/logo.png" alt="Watermark Logo" className="w-96 max-w-[70vw] opacity-20" />
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
                href="#about"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-green-900 shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
              >
                {content.explore}
              </a>
              <a
                href="#visit"
                className="rounded-2xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {content.visitInfo}
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-400/20"
              >
                {content.support}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {content.highlights.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/10 p-5">
                  <div className="text-2xl font-semibold text-lime-200">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-emerald-50">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <section id="about" className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.aboutKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {content.aboutTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">{content.aboutP1}</p>
            <p className="mt-4 text-base leading-8 text-stone-700">{content.aboutP2}</p>
          </div>

          <div className="rounded-[2rem] bg-green-50 p-8 ring-1 ring-green-100">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.snapshot}
            </div>
            <div className="mt-5 grid gap-4">
              {snapshotCards.map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-green-100">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{k}</div>
                  <div className="mt-1 text-sm font-medium text-stone-800">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="legacy" className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-stone-900 p-8 text-white shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              {content.legacyKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {content.legacyTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-200">{content.legacyP1}</p>
            <p className="mt-4 text-base leading-8 text-stone-200">{content.legacyP2}</p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="grid gap-4">
              {legacyCards.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-200"
                >
                  <div className="text-sm font-semibold text-stone-500">{k}</div>
                  <div className="text-right text-sm font-medium text-stone-800">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="park" className="mt-16 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
                {content.parkKicker}
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
                {content.parkTitle}
              </h2>
            </div>
            <div className="max-w-xl text-sm leading-7 text-stone-600">{content.parkText}</div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl ring-1 ring-stone-200">
            <table className="min-w-full divide-y divide-stone-200">
              <thead className="bg-stone-100">
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
                    Zone
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
                    Area
                  </th>
                  <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 bg-white">
                {ZONES.map(([zone, area, purpose]) => (
                  <tr key={zone} className="align-top">
                    <td className="px-5 py-4 text-sm font-semibold text-stone-900">{zone}</td>
                    <td className="px-5 py-4 text-sm text-stone-700">{area}</td>
                    <td className="px-5 py-4 text-sm leading-7 text-stone-700">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PLANT_GROUPS.map((item) => (
              <div key={item} className="rounded-2xl bg-green-50 p-5 ring-1 ring-green-100">
                <p className="text-sm leading-7 text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="research" className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-green-950 p-8 text-white shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              {content.researchKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {content.researchTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-emerald-50">{content.researchText}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Medicinal plant nursery development",
                "Species documentation and labeling",
                "Farmer and student exposure visits",
                "Ethnomedicine interpretation",
                "Conservation-led field trials",
                "Long-term landscape stewardship",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm text-emerald-50 ring-1 ring-white/10">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.whyKicker}
            </div>
            <div className="mt-5 space-y-5 text-base leading-8 text-stone-700">
              <p>{content.whyP1}</p>
              <p>{content.whyP2}</p>
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

        <section id="visit" className="mt-16 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-green-700">
              {content.visitKicker}
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
              {content.visitTitle}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-stone-700">
              <p>
                <span className="font-semibold text-stone-900">{content.cards.address}:</span> {language === "en" ? "Bhilkheda, Chikhaldara, Amravati, Maharashtra, India" : "भिलखेडा, चिखलदरा, अमरावती, महाराष्ट्र, भारत"}
              </p>
              <p>
                <span className="font-semibold text-stone-900">{content.cards.coordinates}:</span> 21.242359° N, 77.283859° E
              </p>
              <p>
                <span className="font-semibold text-stone-900">{content.cards.nearestTown}:</span> {language === "en" ? "Anjangaon Surji (12 km)" : "अंजनगाव सुर्जी (१२ कि.मी.)"}
              </p>
              <p>
                <span className="font-semibold text-stone-900">{content.cards.region}:</span> {language === "en" ? "Chikhaldara–Melghat landscape" : "चिखलदरा–मेलघाट परिसर"}
              </p>
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

        <section id="contact" className="mt-16 rounded-[2rem] bg-gradient-to-br from-stone-900 to-stone-800 p-8 text-white shadow-sm">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                {content.contactKicker}
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {content.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200">{content.contactText}</p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] bg-white/10 p-6 ring-1 ring-white/10">
                <div className="space-y-4 text-sm text-stone-100">
                  <div>
                    <div className="font-semibold text-emerald-200">{content.cards.website}</div>
                    <div>narmadaupwan.org</div>
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-200">{content.cards.location}</div>
                    <div>{language === "en" ? "Bhilkheda, Chikhaldara, Maharashtra" : "भिलखेडा, चिखलदरा, महाराष्ट्र"}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-emerald-200">{content.cards.focus}</div>
                    <div>
                      {language === "en"
                        ? "Medicinal biodiversity, research, education, and landscape restoration"
                        : "औषधी जैवविविधता, संशोधन, शिक्षण आणि पर्यावरणीय पुनर्स्थापना"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.75rem] bg-emerald-500/15 p-6 ring-1 ring-emerald-300/20">
                <div className="text-lg font-semibold text-white">{content.supportTitle}</div>
                <p className="mt-3 text-sm leading-7 text-emerald-50">{content.supportText}</p>
                <a
                  href="mailto:info@narmadaupwan.org?subject=Support%20for%20Narmada%20Upwan"
                  className="mt-4 inline-flex rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-green-950 transition hover:bg-emerald-300"
                >
                  {content.supportBtn}
                </a>
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
