// ===================== NyaySathi – Traffic Rights Assistant =====================

// ---- i18n translations ----
const translations = {
  en: {
    "common.login": "Login", "common.signup": "Sign Up", "common.logout": "Logout",
    "landing.badge": "🚦 Traffic Rights Assistant",
    "landing.hero": "Know Your Rights When Stopped by Traffic Police",
    "landing.subtitle": "NyaySathi gives you instant, actionable legal guidance for traffic-police encounters. No lawyer needed.",
    "landing.cta1": "Get Started Free", "landing.cta2": "Ask Legal Assistant",
    "landing.featuresTitle": "What NyaySathi Offers",
    "landing.f1Title": "Traffic Rights Assistant", "landing.f1Desc": "Instant guidance for any traffic police encounter.",
    "landing.f2Title": "Government Schemes", "landing.f2Desc": "Find schemes you're eligible for.",
    "landing.f3Title": "Document Understanding", "landing.f3Desc": "Upload legal documents for AI summaries.",
    "landing.f4Title": "Legal Help Directory", "landing.f4Desc": "Find legal aid offices near you.",
    "landing.howTitle": "How It Works",
    "landing.step1Title": "Describe Your Situation", "landing.step1Desc": "Type or speak what happened with traffic police.",
    "landing.step2Title": "Get Instant Guidance", "landing.step2Desc": "Receive your legal rights and recommended actions.",
    "landing.step3Title": "Take Action", "landing.step3Desc": "Generate complaints, know escalation steps.",
    "landing.disclaimer": "⚠️ NyaySathi provides legal information only and is not a substitute for a lawyer.",
    "signup.welcomeTitle": "Join NyaySathi", "signup.welcomeSub": "Know your traffic rights. Stay informed. Stay safe.",
    "signup.title": "Create Account", "signup.subtitle": "Start using NyaySathi for free",
    "signup.name": "Full Name", "signup.email": "Email", "signup.password": "Password",
    "signup.confirmPw": "Confirm Password", "signup.language": "Preferred Language", "signup.button": "Create Account",
    "signup.hasAccount": "Already have an account?",
    "login.welcomeBack": "Welcome Back", "login.welcomeSub": "Access your traffic rights assistant",
    "login.title": "Sign In", "login.subtitle": "Enter your credentials to continue",
    "login.email": "Email", "login.password": "Password", "login.remember": "Remember me",
    "login.forgot": "Forgot password?", "login.button": "Sign In", "login.noAccount": "Don't have an account?",
    "nav.dashboard": "Dashboard", "nav.assistant": "Traffic Assistant", "nav.rights": "Legal Rights",
    "nav.schemes": "Schemes", "nav.documents": "Documents", "nav.directory": "Directory", "nav.profile": "Profile",
    "dash.welcome": "Welcome to NyaySathi", "dash.sub": "Your traffic rights companion",
    "dash.card1": "Ask Traffic Assistant", "dash.card1d": "Get instant legal guidance for traffic police encounters",
    "dash.card2": "Explore Legal Rights", "dash.card2d": "Understand your rights as a citizen",
    "dash.card3": "Find Schemes", "dash.card3d": "Discover government schemes you qualify for",
    "dash.card4": "Upload Document", "dash.card4d": "Get AI summaries of legal documents",
    "dash.card5": "Legal Directory", "dash.card5d": "Find legal aid offices near you",
    "dash.recent": "Quick Scenarios",
    "asst.title": "Traffic Rights Assistant", "asst.sub": "Describe your situation with traffic police",
    "asst.greeting": "Hi! I'm your Traffic Rights Assistant. Tell me what happened — were you stopped by police, asked for a bribe, fined without a challan? I'll tell you your rights instantly.",
    "asst.placeholder": "e.g. Police stopped me and asked for money...",
    "asst.noMatch": "I can help with traffic police situations. Try describing what happened — like being stopped, asked for a bribe, fined for helmet, or document check.",
    "rights.title": "Legal Rights Explorer",
    "rights.cats": "Traffic Rights,Consumer Protection,Women Rights,Cybercrime,Labour Rights,RTI",
    "schemes.title": "Government Scheme Finder", "schemes.search": "Search Schemes",
    "doc.title": "Document Upload", "doc.drop": "Drag & drop your PDF or image here, or click to browse",
    "doc.upload": "Upload & Analyze",
    "dir.title": "Legal Help Directory", "dir.search": "Search Directory",
    "profile.title": "Profile Settings", "profile.name": "Full Name", "profile.save": "Save Changes",
    "profile.langPref": "Language Preference", "profile.changePw": "Change Password",
    "complaint.btn": "📋 Generate Complaint", "complaint.copy": "Copy to Clipboard", "complaint.copied": "Copied!",
    "rights.yourRights": "🛡️ Your Rights", "rights.whatToDo": "✅ What You Should Do",
    "rights.whatToSay": "💬 What You Should Say", "rights.whatNotToDo": "❌ What NOT To Do",
    "rights.escalation": "⚠️ If Situation Escalates",
  },
  hi: {
    "common.login": "लॉगिन", "common.signup": "साइन अप", "common.logout": "लॉगआउट",
    "landing.badge": "🚦 ट्रैफिक अधिकार सहायक",
    "landing.hero": "ट्रैफिक पुलिस द्वारा रोके जाने पर अपने अधिकार जानें",
    "landing.subtitle": "न्यायसाथी आपको ट्रैफिक पुलिस के साथ मुठभेड़ के लिए तुरंत कार्रवाई योग्य कानूनी मार्गदर्शन देता है।",
    "landing.cta1": "मुफ्त शुरू करें", "landing.cta2": "कानूनी सहायक से पूछें",
    "landing.featuresTitle": "न्यायसाथी क्या प्रदान करता है",
    "landing.f1Title": "ट्रैफिक अधिकार सहायक", "landing.f1Desc": "किसी भी ट्रैफिक पुलिस मुठभेड़ के लिए तत्काल मार्गदर्शन।",
    "landing.f2Title": "सरकारी योजनाएं", "landing.f2Desc": "आप किन योजनाओं के पात्र हैं, खोजें।",
    "landing.f3Title": "दस्तावेज़ समझ", "landing.f3Desc": "AI सारांश के लिए कानूनी दस्तावेज़ अपलोड करें।",
    "landing.f4Title": "कानूनी सहायता निर्देशिका", "landing.f4Desc": "अपने पास कानूनी सहायता कार्यालय खोजें।",
    "landing.howTitle": "यह कैसे काम करता है",
    "landing.step1Title": "अपनी स्थिति बताएं", "landing.step1Desc": "ट्रैफिक पुलिस के साथ क्या हुआ, टाइप या बोलें।",
    "landing.step2Title": "तुरंत मार्गदर्शन पाएं", "landing.step2Desc": "अपने कानूनी अधिकार और अनुशंसित कार्रवाई प्राप्त करें।",
    "landing.step3Title": "कार्रवाई करें", "landing.step3Desc": "शिकायत तैयार करें, एस्केलेशन चरण जानें।",
    "landing.disclaimer": "⚠️ न्यायसाथी केवल कानूनी जानकारी प्रदान करता है और वकील का विकल्प नहीं है।",
    "signup.welcomeTitle": "न्यायसाथी से जुड़ें", "signup.welcomeSub": "अपने ट्रैफिक अधिकार जानें। सुरक्षित रहें।",
    "signup.title": "खाता बनाएं", "signup.subtitle": "न्यायसाथी मुफ्त में उपयोग करें",
    "signup.name": "पूरा नाम", "signup.email": "ईमेल", "signup.password": "पासवर्ड",
    "signup.confirmPw": "पासवर्ड की पुष्टि", "signup.language": "पसंदीदा भाषा", "signup.button": "खाता बनाएं",
    "signup.hasAccount": "पहले से खाता है?",
    "login.welcomeBack": "वापसी पर स्वागत", "login.welcomeSub": "अपना ट्रैफिक अधिकार सहायक एक्सेस करें",
    "login.title": "साइन इन", "login.subtitle": "जारी रखने के लिए अपनी जानकारी दर्ज करें",
    "login.email": "ईमेल", "login.password": "पासवर्ड", "login.remember": "मुझे याद रखें",
    "login.forgot": "पासवर्ड भूल गए?", "login.button": "साइन इन", "login.noAccount": "खाता नहीं है?",
    "nav.dashboard": "डैशबोर्ड", "nav.assistant": "ट्रैफिक सहायक", "nav.rights": "कानूनी अधिकार",
    "nav.schemes": "योजनाएं", "nav.documents": "दस्तावेज़", "nav.directory": "निर्देशिका", "nav.profile": "प्रोफ़ाइल",
    "dash.welcome": "न्यायसाथी में आपका स्वागत है", "dash.sub": "आपका ट्रैफिक अधिकार साथी",
    "dash.card1": "ट्रैफिक सहायक से पूछें", "dash.card1d": "ट्रैफिक पुलिस मुठभेड़ों के लिए तुरंत कानूनी मार्गदर्शन",
    "dash.card2": "कानूनी अधिकार जानें", "dash.card2d": "नागरिक के रूप में अपने अधिकार समझें",
    "dash.card3": "योजनाएं खोजें", "dash.card3d": "सरकारी योजनाएं खोजें जिनके आप पात्र हैं",
    "dash.card4": "दस्तावेज़ अपलोड करें", "dash.card4d": "कानूनी दस्तावेज़ों का AI सारांश प्राप्त करें",
    "dash.card5": "कानूनी निर्देशिका", "dash.card5d": "अपने पास कानूनी सहायता कार्यालय खोजें",
    "dash.recent": "त्वरित परिदृश्य",
    "asst.title": "ट्रैफिक अधिकार सहायक", "asst.sub": "ट्रैफिक पुलिस के साथ अपनी स्थिति बताएं",
    "asst.greeting": "नमस्ते! मैं आपका ट्रैफिक अधिकार सहायक हूं। बताइए क्या हुआ — क्या पुलिस ने रोका, रिश्वत मांगी, बिना चालान जुर्माना लगाया?",
    "asst.placeholder": "जैसे: पुलिस ने मुझे रोका और पैसे मांगे...",
    "asst.noMatch": "मैं ट्रैफिक पुलिस स्थितियों में मदद कर सकता हूं। बताएं क्या हुआ — जैसे रोका गया, रिश्वत, हेलमेट जुर्माना, या दस्तावेज़ जांच।",
    "rights.title": "कानूनी अधिकार एक्सप्लोरर",
    "rights.cats": "ट्रैफिक अधिकार,उपभोक्ता संरक्षण,महिला अधिकार,साइबर अपराध,श्रम अधिकार,आरटीआई",
    "schemes.title": "सरकारी योजना खोजक", "schemes.search": "योजनाएं खोजें",
    "doc.title": "दस्तावेज़ अपलोड", "doc.drop": "अपना PDF या इमेज यहां खींचें, या ब्राउज़ करने के लिए क्लिक करें",
    "doc.upload": "अपलोड और विश्लेषण",
    "dir.title": "कानूनी सहायता निर्देशिका", "dir.search": "निर्देशिका खोजें",
    "profile.title": "प्रोफ़ाइल सेटिंग्स", "profile.name": "पूरा नाम", "profile.save": "बदलाव सहेजें",
    "profile.langPref": "भाषा वरीयता", "profile.changePw": "पासवर्ड बदलें",
    "complaint.btn": "📋 शिकायत तैयार करें", "complaint.copy": "क्लिपबोर्ड पर कॉपी करें", "complaint.copied": "कॉपी हो गया!",
    "rights.yourRights": "🛡️ आपके अधिकार", "rights.whatToDo": "✅ आपको क्या करना चाहिए",
    "rights.whatToSay": "💬 आपको क्या कहना चाहिए", "rights.whatNotToDo": "❌ क्या नहीं करना चाहिए",
    "rights.escalation": "⚠️ अगर स्थिति बिगड़े",
  },
  mr: {
    "common.login": "लॉगिन", "common.signup": "साइन अप", "common.logout": "लॉगआउट",
    "landing.badge": "🚦 वाहतूक हक्क सहाय्यक",
    "landing.hero": "वाहतूक पोलिसांनी थांबवल्यावर तुमचे हक्क जाणून घ्या",
    "landing.subtitle": "न्यायसाथी तुम्हाला वाहतूक पोलिसांच्या भेटीसाठी तात्काळ कायदेशीर मार्गदर्शन देतो.",
    "landing.cta1": "मोफत सुरू करा", "landing.cta2": "कायदेशीर सहाय्यकाला विचारा",
    "landing.featuresTitle": "न्यायसाथी काय देतो",
    "landing.f1Title": "वाहतूक हक्क सहाय्यक", "landing.f1Desc": "कोणत्याही वाहतूक पोलीस भेटीसाठी तात्काळ मार्गदर्शन.",
    "landing.f2Title": "सरकारी योजना", "landing.f2Desc": "तुम्ही कोणत्या योजनांसाठी पात्र आहात ते शोधा.",
    "landing.f3Title": "दस्तऐवज समज", "landing.f3Desc": "AI सारांशासाठी कायदेशीर दस्तऐवज अपलोड करा.",
    "landing.f4Title": "कायदेशीर मदत निर्देशिका", "landing.f4Desc": "तुमच्या जवळ कायदेशीर मदत कार्यालये शोधा.",
    "landing.howTitle": "हे कसे काम करते",
    "landing.step1Title": "तुमची परिस्थिती सांगा", "landing.step1Desc": "वाहतूक पोलिसांसोबत काय झाले ते टाइप करा किंवा बोला.",
    "landing.step2Title": "तात्काळ मार्गदर्शन मिळवा", "landing.step2Desc": "तुमचे कायदेशीर हक्क आणि शिफारस केलेल्या कृती प्राप्त करा.",
    "landing.step3Title": "कृती करा", "landing.step3Desc": "तक्रार तयार करा, एस्केलेशन चरण जाणून घ्या.",
    "landing.disclaimer": "⚠️ न्यायसाथी केवळ कायदेशीर माहिती देतो आणि वकिलाचा पर्याय नाही.",
    "signup.welcomeTitle": "न्यायसाथीमध्ये सामील व्हा", "signup.welcomeSub": "तुमचे वाहतूक हक्क जाणून घ्या. सुरक्षित रहा.",
    "signup.title": "खाते तयार करा", "signup.subtitle": "न्यायसाथी मोफत वापरा",
    "signup.name": "पूर्ण नाव", "signup.email": "ईमेल", "signup.password": "पासवर्ड",
    "signup.confirmPw": "पासवर्डची पुष्टी", "signup.language": "पसंतीची भाषा", "signup.button": "खाते तयार करा",
    "signup.hasAccount": "आधीच खाते आहे?",
    "login.welcomeBack": "पुन्हा स्वागत", "login.welcomeSub": "तुमचा वाहतूक हक्क सहाय्यक ऍक्सेस करा",
    "login.title": "साइन इन", "login.subtitle": "सुरू ठेवण्यासाठी तुमची माहिती प्रविष्ट करा",
    "login.email": "ईमेल", "login.password": "पासवर्ड", "login.remember": "मला लक्षात ठेवा",
    "login.forgot": "पासवर्ड विसरलात?", "login.button": "साइन इन", "login.noAccount": "खाते नाही?",
    "nav.dashboard": "डॅशबोर्ड", "nav.assistant": "वाहतूक सहाय्यक", "nav.rights": "कायदेशीर हक्क",
    "nav.schemes": "योजना", "nav.documents": "दस्तऐवज", "nav.directory": "निर्देशिका", "nav.profile": "प्रोफाइल",
    "dash.welcome": "न्यायसाथीमध्ये आपले स्वागत", "dash.sub": "तुमचा वाहतूक हक्क साथीदार",
    "dash.card1": "वाहतूक सहाय्यकाला विचारा", "dash.card1d": "वाहतूक पोलीस भेटीसाठी तात्काळ कायदेशीर मार्गदर्शन",
    "dash.card2": "कायदेशीर हक्क जाणून घ्या", "dash.card2d": "नागरिक म्हणून तुमचे हक्क समजून घ्या",
    "dash.card3": "योजना शोधा", "dash.card3d": "तुम्ही पात्र असलेल्या सरकारी योजना शोधा",
    "dash.card4": "दस्तऐवज अपलोड करा", "dash.card4d": "कायदेशीर दस्तऐवजांचा AI सारांश मिळवा",
    "dash.card5": "कायदेशीर निर्देशिका", "dash.card5d": "तुमच्या जवळ कायदेशीर मदत कार्यालये शोधा",
    "dash.recent": "जलद परिस्थिती",
    "asst.title": "वाहतूक हक्क सहाय्यक", "asst.sub": "वाहतूक पोलिसांसोबतची तुमची परिस्थिती सांगा",
    "asst.greeting": "नमस्कार! मी तुमचा वाहतूक हक्क सहाय्यक आहे. सांगा काय झाले — पोलिसांनी थांबवले, लाच मागितली, चलनाशिवाय दंड केला?",
    "asst.placeholder": "उदा: पोलिसांनी मला थांबवले आणि पैसे मागितले...",
    "asst.noMatch": "मी वाहतूक पोलीस परिस्थितींमध्ये मदत करू शकतो. काय झाले ते सांगा — थांबवले, लाच, हेल्मेट दंड, किंवा दस्तऐवज तपासणी.",
    "rights.title": "कायदेशीर हक्क एक्सप्लोरर",
    "rights.cats": "वाहतूक हक्क,ग्राहक संरक्षण,महिला हक्क,सायबर गुन्हे,कामगार हक्क,आरटीआय",
    "schemes.title": "सरकारी योजना शोधक", "schemes.search": "योजना शोधा",
    "doc.title": "दस्तऐवज अपलोड", "doc.drop": "तुमचा PDF किंवा इमेज येथे ड्रॅग करा, किंवा ब्राउझ करण्यासाठी क्लिक करा",
    "doc.upload": "अपलोड आणि विश्लेषण",
    "dir.title": "कायदेशीर मदत निर्देशिका", "dir.search": "निर्देशिका शोधा",
    "profile.title": "प्रोफाइल सेटिंग्ज", "profile.name": "पूर्ण नाव", "profile.save": "बदल जतन करा",
    "profile.langPref": "भाषा प्राधान्य", "profile.changePw": "पासवर्ड बदला",
    "complaint.btn": "📋 तक्रार तयार करा", "complaint.copy": "क्लिपबोर्डवर कॉपी करा", "complaint.copied": "कॉपी झाले!",
    "rights.yourRights": "🛡️ तुमचे हक्क", "rights.whatToDo": "✅ तुम्ही काय करावे",
    "rights.whatToSay": "💬 तुम्ही काय बोलावे", "rights.whatNotToDo": "❌ काय करू नये",
    "rights.escalation": "⚠️ परिस्थिती बिघडल्यास",
  }
};

let currentLang = localStorage.getItem('nyaysathi-lang') || 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
}

function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('nyaysathi-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('select').forEach(sel => {
    if (sel.onchange && sel.options) {
      for (let o of sel.options) { if (o.value === lang) { sel.value = lang; } }
    }
  });
  // Re-render current dashboard page content if applicable
  const activePage = document.querySelector('.page.active');
  if (activePage && activePage.id !== 'page-landing' && activePage.id !== 'page-login' && activePage.id !== 'page-signup') {
    renderDashboardPage(activePage.id.replace('page-', ''));
  }
}

// ---- Traffic Scenarios ----
const scenarios = {
  POLICE_STOPPED: {
    keywords: ['stopped', 'stop', 'pulled over', 'police stopped', 'रोका', 'थांबवले', 'रोक'],
    rights: [
      'Police must identify themselves with name and badge number.',
      'You have the right to ask WHY you are being stopped.',
      'You are NOT required to step out of the vehicle unless there is a legal reason.',
      'Police cannot search your vehicle without a warrant or reasonable suspicion.',
    ],
    what_to_do: [
      'Stay calm and polite.',
      'Ask for the officer\'s name and badge number.',
      'Ask the specific reason for being stopped.',
      'Record the interaction if possible (it is legal to record police).',
      'Keep your documents ready — license, RC, insurance.',
    ],
    what_to_say: [
      '"Officer, may I know your name and badge number?"',
      '"Could you please tell me why I have been stopped?"',
      '"I am cooperating, but I would like to know the specific violation."',
    ],
    what_not_to_do: [
      'Do NOT argue or get aggressive.',
      'Do NOT try to flee.',
      'Do NOT offer money or bribes.',
      'Do NOT hand over your original documents — show them instead.',
    ],
    escalation: [
      'Call 100 (Police helpline) or 112 (Emergency).',
      'Note the location, time, and officer details.',
      'File a complaint at the nearest police station.',
      'Contact the District SP office.',
    ],
    complaint_template: `To,\nThe Superintendent of Police,\n[District Name]\n\nSubject: Complaint regarding improper conduct by traffic police\n\nRespected Sir/Madam,\n\nI, [Your Name], resident of [Your Address], wish to bring to your notice an incident that occurred on [Date] at [Location].\n\nI was stopped by a traffic police officer (Badge No: [____]) without any valid reason. The officer [describe the issue — demanded money / misbehaved / did not provide challan].\n\nI request you to kindly investigate this matter and take appropriate action.\n\nThank you.\n\nYours faithfully,\n[Your Name]\n[Phone Number]\n[Date]`
  },
  BRIBE_CASE: {
    keywords: ['bribe', 'money', 'cash', 'pay', 'paisa', 'paise', 'रिश्वत', 'पैसे', 'लाच', 'पैसा'],
    rights: [
      'Demanding bribe is a criminal offense under Prevention of Corruption Act.',
      'You have FULL RIGHT to refuse paying any bribe.',
      'You can record the officer demanding a bribe — it is legal evidence.',
      'Only an e-challan or printed challan is valid — cash payment is NOT required.',
    ],
    what_to_do: [
      'Firmly but politely refuse to pay cash.',
      'Ask for an official e-challan or written challan.',
      'Start recording audio/video discreetly.',
      'Note the officer\'s badge number and location.',
      'Call anti-corruption helpline: 1064.',
    ],
    what_to_say: [
      '"Sir, I would prefer an official challan. I will pay the fine through proper channels."',
      '"I am not comfortable paying in cash. Please issue an e-challan."',
      '"Can you provide me with an official receipt?"',
    ],
    what_not_to_do: [
      'Do NOT pay any cash to the officer.',
      'Do NOT get into a physical altercation.',
      'Do NOT threaten the officer.',
      'Do NOT delete any recordings you have made.',
    ],
    escalation: [
      'Call Anti-Corruption Bureau: 1064',
      'File complaint on the government anti-corruption portal.',
      'Report to the District SP with evidence.',
      'File an RTI to get the officer\'s posting details.',
    ],
    complaint_template: `To,\nThe Anti-Corruption Bureau,\n[State Name]\n\nSubject: Complaint regarding bribe demand by traffic police officer\n\nRespected Sir/Madam,\n\nI wish to report that on [Date] at approximately [Time], at [Location], a traffic police officer (Badge No: [____]) demanded a bribe of Rs. [Amount] from me.\n\nI refused to pay and have [recorded the incident / noted the details].\n\nI request immediate investigation and action against the corrupt officer.\n\nEvidence: [Describe — video/audio recording, witness details]\n\nYours faithfully,\n[Your Name]\n[Phone Number]\n[Date]`
  },
  NO_CHALLAN: {
    keywords: ['no challan', 'no receipt', 'without challan', 'no ticket', 'चालान नहीं', 'रसीद नहीं', 'चलन नाही'],
    rights: [
      'Every fine MUST be accompanied by an official challan (e-challan or written).',
      'Collecting fine without challan is ILLEGAL.',
      'You have the right to refuse payment without a proper receipt.',
      'The challan must mention: violation, fine amount, officer details, date, and location.',
    ],
    what_to_do: [
      'Ask for an official challan or e-challan.',
      'If refused, note the officer\'s badge number.',
      'Do not pay any amount without receiving a challan.',
      'Record the interaction as evidence.',
    ],
    what_to_say: [
      '"Sir, please issue me an official challan. I will pay through proper channels."',
      '"I need a receipt for any payment I make. This is my legal right."',
      '"Without a challan, I am unable to make any payment."',
    ],
    what_not_to_do: [
      'Do NOT pay cash without a challan.',
      'Do NOT hand over your license as collateral.',
      'Do NOT argue aggressively.',
    ],
    escalation: [
      'File complaint with the traffic police control room.',
      'Report online on your state\'s traffic police portal.',
      'Call 100 or 112 for assistance.',
    ],
    complaint_template: `To,\nThe Traffic Police Commissioner,\n[City Name]\n\nSubject: Complaint regarding fine collection without official challan\n\nRespected Sir/Madam,\n\nOn [Date] at [Location], a traffic officer (Badge No: [____]) attempted to collect a fine of Rs. [Amount] without issuing any official challan or e-challan.\n\nThis is a violation of proper procedure. I request investigation.\n\nYours faithfully,\n[Your Name]\n[Phone Number]`
  },
  DOCUMENT_CHECK: {
    keywords: ['document', 'documents', 'license', 'licence', 'rc', 'registration', 'insurance', 'दस्तावेज़', 'लाइसेंस', 'दस्तऐवज'],
    rights: [
      'You must carry: Driving License, Vehicle RC, Insurance, and PUC certificate.',
      'Digital copies on DigiLocker or mParivahan app are legally valid.',
      'Police CANNOT seize your original documents on the spot — they can only verify.',
      'If documents are valid, you CANNOT be fined.',
    ],
    what_to_do: [
      'Show your documents — physical or digital (DigiLocker/mParivahan).',
      'If you don\'t have documents, politely inform and ask for a challan.',
      'Note the officer details if documents are wrongly seized.',
    ],
    what_to_say: [
      '"Here are my documents. I also have them on DigiLocker which is legally valid."',
      '"Officer, digital driving license on DigiLocker is accepted by law."',
    ],
    what_not_to_do: [
      'Do NOT hand over original documents permanently.',
      'Do NOT panic if you forgot physical copies — show digital ones.',
      'Do NOT pay a bribe to avoid a document fine.',
    ],
    escalation: [
      'If documents are wrongly seized, file an RTI.',
      'Complain to the RTO office.',
      'Report to the transport commissioner.',
    ],
    complaint_template: `To,\nThe Regional Transport Officer,\n[City/District]\n\nSubject: Complaint regarding wrongful seizure of documents\n\nRespected Sir/Madam,\n\nOn [Date] at [Location], my [document type] was seized by a traffic officer (Badge No: [____]) despite being valid.\n\nI had valid documents including digital copies on DigiLocker. I request return of my documents and investigation.\n\nYours faithfully,\n[Your Name]\n[Phone Number]`
  },
  HELMET_FINE: {
    keywords: ['helmet', 'fine', 'challan', 'हेलमेट', 'जुर्माना', 'दंड'],
    rights: [
      'Helmet is mandatory for both rider and pillion under Motor Vehicle Act.',
      'Fine for no helmet: Rs. 1,000 and/or 3-month license suspension.',
      'The helmet must be ISI certified (BIS standard).',
      'Police cannot impose arbitrary fines beyond the prescribed amount.',
    ],
    what_to_do: [
      'If you were wearing a helmet, show it and politely clarify.',
      'If not wearing, accept the violation and ask for an official challan.',
      'Pay through official channels only (e-challan portal).',
    ],
    what_to_say: [
      '"I accept the violation. Please issue an official e-challan."',
      '"I was wearing an ISI-certified helmet. Please verify."',
    ],
    what_not_to_do: [
      'Do NOT pay in cash — insist on e-challan.',
      'Do NOT ride without a helmet to begin with.',
      'Do NOT argue if you genuinely weren\'t wearing one.',
    ],
    escalation: [
      'If overcharged, file complaint with traffic police helpline.',
      'Check your state\'s fine schedule online.',
    ],
    complaint_template: `To,\nThe Traffic Police Commissioner,\n[City Name]\n\nSubject: Complaint regarding incorrect helmet fine\n\nRespected Sir/Madam,\n\nOn [Date], I was fined for not wearing a helmet at [Location] by officer (Badge No: [____]). However, I was wearing an ISI-certified helmet.\n\nI request review and reversal of the fine.\n\nYours faithfully,\n[Your Name]\n[Phone Number]`
  },
  HARASSMENT: {
    keywords: ['harass', 'harassment', 'misbehave', 'abuse', 'threaten', 'threat', 'rude', 'उत्पीड़न', 'दुर्व्यवहार', 'छळ'],
    rights: [
      'Police officers MUST behave professionally and courteously.',
      'Verbal abuse or physical threats by police are punishable offenses.',
      'You have the right to file a complaint against misconduct.',
      'You can record the interaction — it is legal.',
    ],
    what_to_do: [
      'Stay calm — do not retaliate.',
      'Record the interaction (audio/video).',
      'Note badge number, time, location, and any witnesses.',
      'File a formal complaint immediately.',
      'Call 112 if you feel physically threatened.',
    ],
    what_to_say: [
      '"Sir, I request you to speak to me respectfully."',
      '"I am noting your badge number and will file a complaint if this continues."',
      '"I have the right to be treated with dignity."',
    ],
    what_not_to_do: [
      'Do NOT shout or use abusive language back.',
      'Do NOT try to physically resist.',
      'Do NOT delete evidence.',
    ],
    escalation: [
      'Call 112 (Emergency) or 100 (Police).',
      'File complaint with State Human Rights Commission.',
      'Report to the District Superintendent of Police.',
      'Approach the court if needed.',
    ],
    complaint_template: `To,\nThe Superintendent of Police,\n[District Name]\n\nSubject: Complaint of harassment/misconduct by traffic police\n\nRespected Sir/Madam,\n\nI, [Your Name], was subjected to [verbal abuse / physical threat / harassment] by a traffic police officer (Badge No: [____]) on [Date] at [Location].\n\n[Describe the incident in detail]\n\nI have [recorded the incident / have witnesses]. I request strict disciplinary action.\n\nYours faithfully,\n[Your Name]\n[Phone Number]\n[Date]`
  }
};

function matchScenario(input) {
  const lower = input.toLowerCase();
  for (const [key, scenario] of Object.entries(scenarios)) {
    for (const kw of scenario.keywords) {
      if (lower.includes(kw.toLowerCase())) return { key, ...scenario };
    }
  }
  return null;
}

// ---- Navigation ----
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    if (['dashboard','assistant','rights','schemes','document','directory','profile'].includes(page)) {
      renderDashboardPage(page);
    }
  }
  window.scrollTo(0, 0);
}

// ---- Toast ----
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.style.transform = 'translateX(0)';
  setTimeout(() => { el.style.transform = 'translateX(120%)'; }, 2500);
}

// ---- Auth handlers ----
function handleSignup(e) {
  e.preventDefault();
  const pw = document.getElementById('signup-password').value;
  const confirm = document.getElementById('signup-confirm').value;
  if (pw !== confirm) { showToast('Passwords do not match!'); return; }
  showToast('Account created successfully!');
  setTimeout(() => navigate('dashboard'), 500);
}

function handleLogin(e) {
  e.preventDefault();
  showToast('Welcome back!');
  setTimeout(() => navigate('dashboard'), 500);
}

function togglePw(id) {
  const el = document.getElementById(id);
  el.type = el.type === 'password' ? 'text' : 'password';
}

// ---- Sidebar HTML ----
function sidebarHTML(activePage) {
  const items = [
    { key: 'dashboard', icon: '⚖️', label: t('nav.dashboard') },
    { key: 'assistant', icon: '💬', label: t('nav.assistant') },
    { key: 'rights', icon: '📖', label: t('nav.rights') },
    { key: 'schemes', icon: '🏛️', label: t('nav.schemes') },
    { key: 'document', icon: '📄', label: t('nav.documents') },
    { key: 'directory', icon: '📍', label: t('nav.directory') },
    { key: 'profile', icon: '👤', label: t('nav.profile') },
  ];
  return `
    <aside id="sidebar" class="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground flex flex-col transition-transform duration-300 -translate-x-full lg:translate-x-0 lg:static">
      <div class="h-16 flex items-center gap-2 border-b border-sidebar-border px-5">
        <span class="text-xl">⚖️</span>
        <span class="font-display text-xl font-bold text-white">NyaySathi</span>
        <button onclick="closeSidebar()" class="ml-auto lg:hidden text-white">✕</button>
      </div>
      <nav class="flex-1 space-y-1 px-3 py-4">
        ${items.map(i => `<button onclick="navigate('${i.key}')" class="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${activePage === i.key ? 'bg-sidebar-primary text-white' : 'text-gray-400 hover:bg-sidebar-accent hover:text-white'}">${i.icon} ${i.label}</button>`).join('')}
      </nav>
      <div class="border-t border-sidebar-border p-3">
        <button onclick="navigate('landing')" class="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-sidebar-accent hover:text-white">🚪 ${t('common.logout')}</button>
      </div>
    </aside>`;
}

function headerHTML() {
  return `
    <header class="sticky top-0 z-30 h-16 flex items-center gap-4 border-b border-border bg-white/80 backdrop-blur px-4 lg:px-6">
      <button onclick="openSidebar()" class="lg:hidden text-xl">☰</button>
      <div class="ml-auto flex items-center gap-3">
        <select onchange="switchLang(this.value)" class="text-sm border border-border rounded-lg px-3 py-1.5 bg-white">${['en','hi','mr'].map(l => `<option value="${l}" ${currentLang===l?'selected':''}>${l==='en'?'EN':l==='hi'?'हि':'म'}</option>`).join('')}</select>
        <div class="h-9 w-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">U</div>
      </div>
    </header>`;
}

function openSidebar() { document.getElementById('sidebar').classList.remove('-translate-x-full'); }
function closeSidebar() { document.getElementById('sidebar').classList.add('-translate-x-full'); }

// ---- Render Dashboard Pages ----
function renderDashboardPage(page) {
  const layoutEl = document.getElementById(page === 'assistant' ? 'asst-layout' :
    page === 'rights' ? 'rights-layout' : page === 'schemes' ? 'schemes-layout' :
    page === 'document' ? 'doc-layout' : page === 'directory' ? 'dir-layout' :
    page === 'profile' ? 'profile-layout' : 'dash-layout');

  let content = '';
  if (page === 'dashboard') content = dashboardContent();
  else if (page === 'assistant') content = assistantContent();
  else if (page === 'rights') content = rightsContent();
  else if (page === 'schemes') content = schemesContent();
  else if (page === 'document') content = documentContent();
  else if (page === 'directory') content = directoryContent();
  else if (page === 'profile') content = profileContent();

  layoutEl.innerHTML = sidebarHTML(page) + `<div class="flex flex-1 flex-col">${headerHTML()}<main class="flex-1 p-4 lg:p-6">${content}</main></div>`;
}

// ---- Dashboard ----
function dashboardContent() {
  const cards = [
    { icon: '💬', title: t('dash.card1'), desc: t('dash.card1d'), page: 'assistant', color: 'primary' },
    { icon: '📖', title: t('dash.card2'), desc: t('dash.card2d'), page: 'rights', color: 'success' },
    { icon: '🏛️', title: t('dash.card3'), desc: t('dash.card3d'), page: 'schemes', color: 'warning' },
    { icon: '📄', title: t('dash.card4'), desc: t('dash.card4d'), page: 'document', color: 'accent' },
    { icon: '📍', title: t('dash.card5'), desc: t('dash.card5d'), page: 'directory', color: 'primary' },
  ];
  const quickScenarios = ['Police stopped me', 'Asked for bribe', 'No challan given', 'Helmet fine', 'Document check', 'Police harassment'];
  return `
    <div class="mb-8">
      <h1 class="font-display text-2xl lg:text-3xl font-bold">${t('dash.welcome')}</h1>
      <p class="text-muted-foreground mt-1">${t('dash.sub')}</p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      ${cards.map(c => `<button onclick="navigate('${c.page}')" class="bg-white border border-border rounded-xl p-6 text-left hover:shadow-lg transition group">
        <div class="text-3xl mb-3">${c.icon}</div>
        <h3 class="font-semibold text-lg mb-1 group-hover:text-primary transition">${c.title}</h3>
        <p class="text-sm text-muted-foreground">${c.desc}</p>
      </button>`).join('')}
    </div>
    <div class="bg-white border border-border rounded-xl p-6">
      <h3 class="font-semibold mb-3">${t('dash.recent')}</h3>
      <div class="flex flex-wrap gap-2">
        ${quickScenarios.map(s => `<button onclick="navigate('assistant');setTimeout(()=>{const i=document.getElementById('chat-input');if(i){i.value='${s}';sendMessage();}},300)" class="px-4 py-2 bg-muted rounded-lg text-sm hover:bg-primary hover:text-white transition">${s}</button>`).join('')}
      </div>
    </div>`;
}

// ---- Assistant ----
let chatMessages = [];

function assistantContent() {
  chatMessages = [{ role: 'assistant', content: t('asst.greeting') }];
  return `
    <div class="flex h-[calc(100vh-7rem)] gap-4">
      <div class="flex flex-1 flex-col rounded-xl border border-border bg-white">
        <div class="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <h2 class="font-semibold">${t('asst.title')}</h2>
            <p class="text-xs text-muted-foreground">${t('asst.sub')}</p>
          </div>
        </div>
        <div id="chat-area" class="flex-1 overflow-y-auto p-4 space-y-4">
          ${renderMessages()}
        </div>
        <div class="border-t border-border p-4">
          <form onsubmit="event.preventDefault();sendMessage();" class="flex gap-2">
            <button type="button" onclick="startVoice()" id="mic-btn" class="shrink-0 w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition">🎤</button>
            <input id="chat-input" type="text" placeholder="${t('asst.placeholder')}" class="flex-1 border border-border rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
            <button type="submit" class="shrink-0 w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center hover:opacity-90 transition">➤</button>
          </form>
        </div>
      </div>
    </div>`;
}

function renderMessages() {
  return chatMessages.map(m => {
    const isUser = m.role === 'user';
    return `<div class="flex gap-3 fade-in ${isUser ? 'flex-row-reverse' : ''}">
      <div class="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-sm ${isUser ? 'bg-muted text-muted-foreground' : 'bg-primary text-white'}">
        ${isUser ? '👤' : '🤖'}
      </div>
      <div class="msg-bubble rounded-2xl px-4 py-3 text-sm leading-relaxed ${isUser ? 'bg-primary text-white' : 'bg-muted'}">
        ${m.content}
      </div>
    </div>`;
  }).join('');
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  chatMessages.push({ role: 'user', content: text });
  input.value = '';

  const match = matchScenario(text);
  let reply = '';
  if (match) {
    reply = formatScenarioResponse(match);
  } else {
    reply = t('asst.noMatch');
  }
  chatMessages.push({ role: 'assistant', content: reply });

  const area = document.getElementById('chat-area');
  area.innerHTML = renderMessages();
  area.scrollTop = area.scrollHeight;
}

function formatScenarioResponse(scenario) {
  return `
    <div class="space-y-4">
      <div><h4 class="font-semibold text-base mb-2">${t('rights.yourRights')}</h4><ul class="list-disc pl-4 space-y-1">${scenario.rights.map(r => `<li>${r}</li>`).join('')}</ul></div>
      <div><h4 class="font-semibold text-base mb-2">${t('rights.whatToDo')}</h4><ul class="list-disc pl-4 space-y-1">${scenario.what_to_do.map(r => `<li>${r}</li>`).join('')}</ul></div>
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-3"><h4 class="font-semibold text-base mb-2">${t('rights.whatToSay')}</h4><ul class="space-y-1">${scenario.what_to_say.map(r => `<li class="italic">${r}</li>`).join('')}</ul></div>
      <div><h4 class="font-semibold text-base mb-2">${t('rights.whatNotToDo')}</h4><ul class="list-disc pl-4 space-y-1">${scenario.what_not_to_do.map(r => `<li>${r}</li>`).join('')}</ul></div>
      <div><h4 class="font-semibold text-base mb-2">${t('rights.escalation')}</h4><ul class="list-disc pl-4 space-y-1">${scenario.escalation.map(r => `<li>${r}</li>`).join('')}</ul></div>
      <button onclick="showComplaint('${scenario.key || ''}')" class="mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition">${t('complaint.btn')}</button>
    </div>`;
}

function showComplaint(key) {
  const scenario = scenarios[key];
  if (!scenario) return;
  const template = scenario.complaint_template;
  chatMessages.push({
    role: 'assistant',
    content: `<div class="bg-gray-50 border rounded-lg p-4"><h4 class="font-semibold mb-2">📋 Complaint Template</h4><pre class="whitespace-pre-wrap text-xs leading-relaxed">${template}</pre><button onclick="copyComplaint()" class="mt-3 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition">${t('complaint.copy')}</button></div>`
  });
  const area = document.getElementById('chat-area');
  area.innerHTML = renderMessages();
  area.scrollTop = area.scrollHeight;
  // store for copy
  window._lastComplaint = template;
}

function copyComplaint() {
  if (window._lastComplaint) {
    navigator.clipboard.writeText(window._lastComplaint).then(() => showToast(t('complaint.copied')));
  }
}

// ---- Voice ----
function startVoice() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) { showToast('Speech recognition not supported'); return; }
  const recognition = new SR();
  const langMap = { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' };
  recognition.lang = langMap[currentLang] || 'en-IN';
  recognition.continuous = false;
  recognition.interimResults = false;
  const btn = document.getElementById('mic-btn');
  btn.classList.add('bg-red-100', 'border-red-400');
  btn.textContent = '🔴';
  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    document.getElementById('chat-input').value += transcript;
  };
  recognition.onend = () => { btn.classList.remove('bg-red-100', 'border-red-400'); btn.textContent = '🎤'; };
  recognition.onerror = () => { btn.classList.remove('bg-red-100', 'border-red-400'); btn.textContent = '🎤'; };
  recognition.start();
}

// ---- Rights ----
function rightsContent() {
  const cats = t('rights.cats').split(',');
  const icons = ['🚦', '🛡️', '👩', '💻', '⚒️', '📝'];
  const details = {
    0: { title: 'Traffic Rights', points: ['Right to ask for officer ID', 'Right to official challan', 'Right to refuse bribe', 'Digital documents are valid', 'Right to record police interaction'] },
    1: { title: 'Consumer Protection', points: ['Right to safety', 'Right to be informed', 'Right to choose', 'Right to seek redressal', 'File complaint at consumer forum'] },
    2: { title: 'Women Rights', points: ['Protection under Domestic Violence Act', 'Right to file FIR at any police station', 'Cannot be called to police station after sunset', 'Right to free legal aid', 'Protection against workplace harassment'] },
    3: { title: 'Cybercrime', points: ['Report cybercrime at cybercrime.gov.in', 'Right to data privacy', 'Identity theft is punishable', 'Online harassment is a criminal offense', 'Preserve digital evidence'] },
    4: { title: 'Labour Rights', points: ['Minimum wage guarantee', 'Right to safe working conditions', 'Right to equal pay', 'Protection against unfair dismissal', 'Right to form unions'] },
    5: { title: 'RTI', points: ['Every citizen can file RTI', 'Response within 30 days', 'Fee of Rs. 10 only', 'Appeal process available', 'Covers all government bodies'] },
  };
  return `
    <h1 class="font-display text-2xl font-bold mb-6">${t('rights.title')}</h1>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" id="rights-grid">
      ${cats.map((c, i) => `<button onclick="showRightsDetail(${i})" class="bg-white border border-border rounded-xl p-6 text-left hover:shadow-lg transition">
        <div class="text-3xl mb-3">${icons[i]}</div>
        <h3 class="font-semibold text-lg">${c}</h3>
      </button>`).join('')}
    </div>
    <div id="rights-detail" class="hidden mt-6 bg-white border border-border rounded-xl p-6"></div>`;
  window._rightsDetails = details;
}

function showRightsDetail(idx) {
  const details = {
    0: { title: 'Traffic Rights', points: ['Right to ask for officer ID', 'Right to official challan', 'Right to refuse bribe', 'Digital documents are valid', 'Right to record police interaction'] },
    1: { title: 'Consumer Protection', points: ['Right to safety', 'Right to be informed', 'Right to choose', 'Right to seek redressal', 'File complaint at consumer forum'] },
    2: { title: 'Women Rights', points: ['Protection under Domestic Violence Act', 'Right to file FIR at any police station', 'Cannot be called to police station after sunset', 'Right to free legal aid', 'Protection against workplace harassment'] },
    3: { title: 'Cybercrime', points: ['Report cybercrime at cybercrime.gov.in', 'Right to data privacy', 'Identity theft is punishable', 'Online harassment is a criminal offense', 'Preserve digital evidence'] },
    4: { title: 'Labour Rights', points: ['Minimum wage guarantee', 'Right to safe working conditions', 'Right to equal pay', 'Protection against unfair dismissal', 'Right to form unions'] },
    5: { title: 'RTI', points: ['Every citizen can file RTI', 'Response within 30 days', 'Fee of Rs. 10 only', 'Appeal process available', 'Covers all government bodies'] },
  };
  const d = details[idx];
  const el = document.getElementById('rights-detail');
  el.classList.remove('hidden');
  el.innerHTML = `<h3 class="font-display text-xl font-bold mb-4">${d.title}</h3><ul class="space-y-2">${d.points.map(p => `<li class="flex items-start gap-2"><span class="text-primary">✓</span><span>${p}</span></li>`).join('')}</ul>`;
  el.scrollIntoView({ behavior: 'smooth' });
}

// ---- Schemes ----
function schemesContent() {
  return `
    <h1 class="font-display text-2xl font-bold mb-6">${t('schemes.title')}</h1>
    <div class="bg-white border border-border rounded-xl p-6 mb-6">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div><label class="block text-sm font-medium mb-1">Age</label><input type="number" id="scheme-age" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm" placeholder="25"></div>
        <div><label class="block text-sm font-medium mb-1">Gender</label><select id="scheme-gender" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"><option>Male</option><option>Female</option><option>Other</option></select></div>
        <div><label class="block text-sm font-medium mb-1">Income Range</label><select id="scheme-income" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"><option>Below 1 Lakh</option><option>1-3 Lakh</option><option>3-5 Lakh</option><option>Above 5 Lakh</option></select></div>
        <div><label class="block text-sm font-medium mb-1">Occupation</label><select id="scheme-occ" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"><option>Student</option><option>Farmer</option><option>Self-employed</option><option>Salaried</option><option>Unemployed</option></select></div>
        <div><label class="block text-sm font-medium mb-1">State</label><select id="scheme-state" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"><option>Maharashtra</option><option>Delhi</option><option>Karnataka</option><option>Tamil Nadu</option><option>UP</option></select></div>
      </div>
      <button onclick="searchSchemes()" class="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition">${t('schemes.search')}</button>
    </div>
    <div id="schemes-results"></div>`;
}

function searchSchemes() {
  const schemes = [
    { name: 'PM Kisan Samman Nidhi', desc: 'Financial benefit of Rs. 6000/year for farmers.', eligibility: 'Land-owning farmers', link: '#' },
    { name: 'Ayushman Bharat', desc: 'Health insurance coverage of Rs. 5 lakh per family.', eligibility: 'Families identified as deprived', link: '#' },
    { name: 'Ujjwala Yojana', desc: 'Free LPG connections to BPL women.', eligibility: 'Women from BPL families', link: '#' },
  ];
  document.getElementById('schemes-results').innerHTML = `<div class="space-y-4">${schemes.map(s => `
    <div class="bg-white border border-border rounded-xl p-6">
      <h3 class="font-semibold text-lg">${s.name}</h3>
      <p class="text-sm text-muted-foreground mt-1">${s.desc}</p>
      <p class="text-sm mt-2"><span class="font-medium">Eligibility:</span> ${s.eligibility}</p>
      <a href="${s.link}" class="inline-block mt-3 text-sm text-primary font-medium hover:underline">Apply Now →</a>
    </div>`).join('')}</div>`;
}

// ---- Document Upload ----
function documentContent() {
  return `
    <h1 class="font-display text-2xl font-bold mb-6">${t('doc.title')}</h1>
    <div class="bg-white border border-border rounded-xl p-8">
      <div id="drop-zone" onclick="document.getElementById('file-input').click()" ondragover="event.preventDefault();this.classList.add('border-primary','bg-primary/5')" ondragleave="this.classList.remove('border-primary','bg-primary/5')" ondrop="event.preventDefault();handleFileDrop(event)" class="border-2 border-dashed border-border rounded-xl p-12 text-center cursor-pointer hover:border-primary hover:bg-blue-50/50 transition">
        <div class="text-4xl mb-3">📁</div>
        <p class="text-muted-foreground">${t('doc.drop')}</p>
        <input type="file" id="file-input" accept=".pdf,image/*" class="hidden" onchange="handleFileSelect(this)" />
      </div>
      <div id="file-preview" class="hidden mt-4 p-4 bg-muted rounded-lg"></div>
      <div id="doc-summary" class="hidden mt-6"></div>
    </div>`;
}

function handleFileSelect(input) {
  if (input.files[0]) processFile(input.files[0]);
}
function handleFileDrop(e) {
  if (e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
}
function processFile(file) {
  document.getElementById('file-preview').classList.remove('hidden');
  document.getElementById('file-preview').innerHTML = `<div class="flex items-center gap-3"><span class="text-2xl">📄</span><div><p class="font-medium text-sm">${file.name}</p><p class="text-xs text-muted-foreground">${(file.size/1024).toFixed(1)} KB</p></div></div>
    <button onclick="analyzeDoc()" class="mt-3 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90">${t('doc.upload')}</button>`;
}
function analyzeDoc() {
  document.getElementById('doc-summary').classList.remove('hidden');
  document.getElementById('doc-summary').innerHTML = `
    <h3 class="font-semibold text-lg mb-3">📊 AI Summary</h3>
    <p class="text-sm text-muted-foreground mb-4">This document appears to be a rental agreement. Key clauses include monthly rent, security deposit, and lock-in period.</p>
    <h4 class="font-medium mb-2">Key Points:</h4>
    <ul class="space-y-1 text-sm"><li class="flex items-center gap-2"><span class="text-primary">•</span>Monthly rent: ₹15,000</li><li class="flex items-center gap-2"><span class="text-primary">•</span>Security deposit: ₹45,000</li><li class="flex items-center gap-2"><span class="text-primary">•</span>Lock-in period: 11 months</li><li class="flex items-center gap-2"><span class="text-primary">•</span>Notice period: 1 month</li></ul>`;
}

// ---- Directory ----
function directoryContent() {
  return `
    <h1 class="font-display text-2xl font-bold mb-6">${t('dir.title')}</h1>
    <div class="bg-white border border-border rounded-xl p-6 mb-6">
      <div class="grid sm:grid-cols-2 gap-4">
        <div><label class="block text-sm font-medium mb-1">State</label><select id="dir-state" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"><option>Maharashtra</option><option>Delhi</option><option>Karnataka</option></select></div>
        <div><label class="block text-sm font-medium mb-1">District</label><select id="dir-dist" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"><option>Pune</option><option>Mumbai</option><option>Nagpur</option></select></div>
      </div>
      <button onclick="searchDirectory()" class="mt-4 bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition">${t('dir.search')}</button>
    </div>
    <div id="dir-results"></div>`;
}

function searchDirectory() {
  const offices = [
    { name: 'District Legal Services Authority', contact: '+91 1234567890', website: 'https://nalsa.gov.in', address: 'Court Complex, Main Road' },
    { name: 'State Legal Aid Center', contact: '+91 9876543210', website: 'https://nalsa.gov.in', address: 'High Court Campus' },
    { name: 'Free Legal Aid Clinic', contact: '+91 5555555555', website: 'https://nalsa.gov.in', address: 'Community Center, Block B' },
  ];
  document.getElementById('dir-results').innerHTML = `<div class="space-y-4">${offices.map(o => `
    <div class="bg-white border border-border rounded-xl p-6">
      <h3 class="font-semibold text-lg">${o.name}</h3>
      <p class="text-sm text-muted-foreground mt-1">📍 ${o.address}</p>
      <p class="text-sm mt-1">📞 ${o.contact}</p>
      <a href="${o.website}" target="_blank" class="inline-block mt-2 text-sm text-primary font-medium hover:underline">🌐 Visit Website</a>
    </div>`).join('')}</div>`;
}

// ---- Profile ----
function profileContent() {
  return `
    <h1 class="font-display text-2xl font-bold mb-6">${t('profile.title')}</h1>
    <div class="max-w-xl space-y-6">
      <div class="bg-white border border-border rounded-xl p-6">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">U</div>
          <div><h3 class="font-semibold text-lg">User</h3><p class="text-sm text-muted-foreground">user@example.com</p></div>
        </div>
        <div class="space-y-4">
          <div><label class="block text-sm font-medium mb-1">${t('profile.name')}</label><input type="text" value="User" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"></div>
          <div><label class="block text-sm font-medium mb-1">${t('profile.langPref')}</label><select onchange="switchLang(this.value)" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm">${['en','hi','mr'].map(l => `<option value="${l}" ${currentLang===l?'selected':''}>${l==='en'?'English':l==='hi'?'Hindi':'Marathi'}</option>`).join('')}</select></div>
          <div><label class="block text-sm font-medium mb-1">${t('profile.changePw')}</label><input type="password" placeholder="New password" class="w-full border border-border rounded-lg px-3 py-2.5 text-sm"></div>
          <button onclick="showToast('Profile saved!')" class="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition">${t('profile.save')}</button>
        </div>
      </div>
      <button onclick="navigate('landing')" class="w-full border border-red-200 text-red-600 py-2.5 rounded-lg font-medium hover:bg-red-50 transition">🚪 ${t('common.logout')}</button>
    </div>`;
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  switchLang(currentLang);
});
