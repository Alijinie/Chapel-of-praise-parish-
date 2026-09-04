import { Ministry, Sermon, ChurchEvent, Department, GivingOption } from '../types';

export const CHURCH_INFO = {
  name: "RCBC Chapel of Praise",
  campusTag: "Main Campus Parish",
  institution: "Redeemed Christian Bible College (RCBC)",
  motto: "Raising Christ's Ambassadors",
  location: "Christ's Ambassadors Road, inside Redemption City (Km 46, Lagos-Ibadan Expressway, Ogun State, Nigeria)",
  city: "Redemption City",
  state: "Ogun State",
  country: "Nigeria",
  phone: "+234 803 123 4567",
  altPhone: "+234 812 987 6543",
  email: "chapelofpraise@rcbc.edu.ng",
  liveStreamUrl: "https://www.youtube.com",
  established: "1980",
  chaplain: {
    name: "Pastor (Dr.) E. A. Adebayo",
    role: "Chaplain & Senior Pastor",
    institutionRole: "Senior Faculty, Redeemed Christian Bible College",
    quote: "Welcome to the Chapel of Praise, the spiritual heart of the Redeemed Christian Bible College. Here on Christ's Ambassadors Road inside Redemption City, we are committed to forming theological minds, kindling spiritual fire, and commissioning ambassadors who carry Christ's light across the nations.",
  }
};

export const MINISTRIES: Ministry[] = [
  {
    id: "main-sanctuary",
    title: "The Main Sanctuary (Adult Church)",
    subtitle: "The Theological Epicenter & Training Hub",
    badge: "SPIRITUAL EPICENTER",
    umbrellaLevel: "Adult Sanctuary",
    identity: "The spiritual epicenter of the Redeemed Christian Bible College (Main Campus). It serves as a training hub for future global pastors, theologians, and Christ's ambassadors.",
    coreFocus: [
      "Scriptural Depth & Sound Exegesis",
      "Intensive Intercessory Prayer",
      "Classical & Contemporary Worship",
      "Uncompromising Doctrinal Integrity",
      "Family-Centered Leadership"
    ],
    sectionTheme: "The Pillars",
    sectionDetails: "Rooted in systematic theological grounding and sound pastoral ethics, the Main Sanctuary equips believers to walk in spiritual maturity. As an institutional campus parish right inside Redemption City, our congregation actively aligns with the global Holy Ghost Services, creating a fertile atmosphere of continuous revival, ministerial mentoring, and doctrinal clarity.",
    serviceTimings: [
      {
        name: "Sunday Celebration Service",
        day: "Every Sunday",
        time: "8:00 AM - 10:30 AM",
        description: "Intense worship, theological depth, prophetic prayer, and communion."
      },
      {
        name: "Digging Deep (Bible Study)",
        day: "Every Tuesday",
        time: "6:00 PM - 7:30 PM",
        description: "Comprehensive verse-by-verse scriptural exposition and doctrinal analysis."
      },
      {
        name: "Faith Clinic (Prayer & Deliverance)",
        day: "Every Thursday",
        time: "6:00 PM - 7:30 PM",
        description: "Focused prayer altar, healing ministrations, and divine encounters."
      }
    ],
    features: [
      "Theological grounding aligned with RCBC curriculum",
      "Pulpit exposure for senior student ministers & faculty",
      "Monthly alignment with global Holy Ghost Service",
      "Active intercessory prayer and pastoral care networks"
    ],
    imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80",
    pastoralLead: "College Chaplain & RCBC Pastoral Directorate",
    location: "Main Auditorium, Chapel of Praise Complex"
  },
  {
    id: "youth-church",
    title: "The Youth Church",
    subtitle: "High-Energy Word, Purpose & Creative Fire",
    badge: "IGNITE & DEPLOY",
    umbrellaLevel: "Youth Expressions",
    identity: "A high-energy, contemporary expressions ministry tailoring word and worship to undergraduates, young professionals, and campus scholars.",
    coreFocus: [
      "Purpose Discovery & Divine Calling",
      "Academic & Career Excellence",
      "Spiritual Fire & Holy Ghost Boldness",
      "Authentic Community Building",
      "Creative Arts & Digital Media"
    ],
    sectionTheme: "Ignite & Deploy (Arise & Shine / Shift Gears)",
    sectionDetails: "Dynamic and uninhibited, the Youth Church serves as an incubator for world changers. Through initiatives like 'Arise & Shine' and 'Shift Gears', we merge intense Holy Ghost fervor with real-world readiness—hosting creative media workshops, alternative music jams, vocational incubators, and peer fellowship circles.",
    serviceTimings: [
      {
        name: "Youth Expression Sunday Service",
        day: "Every Sunday",
        time: "8:00 AM - 10:30 AM",
        description: "Youth-led instrumentation, energetic praise, relatable panel discussions, and relevant preaching."
      },
      {
        name: "Ignite Hub & Creative Hangout",
        day: "Every Friday",
        time: "5:30 PM - 7:00 PM",
        description: "Discussions on career, entrepreneurship, relationships, and creative rehearsals."
      }
    ],
    features: [
      "Youth-led band, spoken word, dance and drama troupes",
      "Tech, design, and multimedia production masterclasses",
      "Mentorship with industry professionals and alumni pastors",
      "Campus evangelism and street impact outreaches"
    ],
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    pastoralLead: "Youth Pastor & Student Ministry Executives",
    location: "Youth Center Hall (Wing B), Chapel Complex"
  },
  {
    id: "teenagers-church",
    title: "The Teenagers Church",
    subtitle: "Vibrant, Nurturing & Safe Faith Community",
    badge: "THE OVERFLOW",
    umbrellaLevel: "Teenagers Church",
    identity: "A vibrant, nurturing, and safe environment designed specifically for teenagers to cross from childhood faith into deep, personal relationships with Christ.",
    coreFocus: [
      "Interactive Bible Quizzes & Sword Drills",
      "Open Discussions on Identity & Peer Pressure",
      "Teen Career Conferences & STEM Exploration",
      "Interactive Multimedia & Film Workshops",
      "Life Questions Without Judgment"
    ],
    sectionTheme: "The Overflow",
    sectionDetails: "Operating simultaneously during main services in our dedicated overflow wing, 'The Overflow' creates a safe haven where teens can freely question, discover, and own their walk with God. Featuring high-energy games, multimedia video reviews, and candid mentorship roundtables with trained youth leaders.",
    serviceTimings: [
      {
        name: "Teenagers Overflow Sunday",
        day: "Every Sunday",
        time: "8:00 AM - 10:15 AM",
        description: "Contemporary teen worship, interactive games, breakout discussions, and age-tailored messages."
      },
      {
        name: "Teens Bible Quiz & Cinema Hour",
        day: "Every Saturday",
        time: "4:00 PM - 6:00 PM",
        description: "Faith-based movies, character development, and academic tutoring clinic."
      }
    ],
    features: [
      "Judgment-free safe space for tough life questions",
      "Annual Teenagers Summer Camp & Leadership Retreat",
      "Talent discovery in music, media, and public speaking",
      "Academic coaching and high-school transition counseling"
    ],
    imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
    pastoralLead: "Teen Ministry Coordinator & Mentors",
    location: "The Overflow Hall (Wing C), Chapel Complex"
  }
];

export const SERMONS: Sermon[] = [
  {
    id: "sermon-1",
    title: "Ambassadors of Grace: Walking in Kingdom Dignity",
    speaker: "Pastor (Dr.) E. A. Adebayo",
    role: "College Chaplain",
    date: "August 30, 2026",
    series: "Raising Christ's Ambassadors",
    duration: "52 mins",
    scripture: "2 Corinthians 5:20-21",
    category: "Doctrine & Theology",
    summary: "A profound theological exploration of our mandate as heavenly ambassadors posted on earth. Discover how the finished work of Christ confers heavenly diplomatic immunity, authority, and divine responsibility.",
    keyPoints: [
      "The Ambassador represents the King, not personal interests",
      "Divine credentials: The Holy Spirit as our royal seal",
      "Living blameless amidst a fractured culture",
      "The message of reconciliation as our prime directive"
    ]
  },
  {
    id: "sermon-2",
    title: "Ignite & Deploy: Channeling Campus Potential into Kingdom Impact",
    speaker: "Pastor Joshua Olatunji",
    role: "Youth Pastor",
    date: "August 23, 2026",
    series: "Ignite & Deploy Series",
    duration: "44 mins",
    scripture: "1 Timothy 4:12-16",
    category: "Youth & Purpose",
    summary: "Tailored to scholars and young professionals, this message dismantles the spirit of delay and equips youths to take commanding heights in corporate arenas, media, and ministry without moral compromise.",
    keyPoints: [
      "Let no man despise your youth: Excellence commands respect",
      "Cultivating the double edge of spiritual fire and technical skill",
      "Navigating campus relationships with purity and vision",
      "Deploying your gifts before graduation"
    ]
  },
  {
    id: "sermon-3",
    title: "The Altar of Intensive Prayer: Preparing for the Holy Ghost Service",
    speaker: "Elder Matthew Balogun",
    role: "RCBC Faculty Member",
    date: "August 16, 2026",
    series: "Pillars of Revival",
    duration: "58 mins",
    scripture: "Acts 1:8, Luke 18:1",
    category: "Spiritual Fire",
    summary: "As our chapel sits right inside Redemption City, we stand in the geographic epicenter of global Holy Ghost manifestations. Learn how to construct personal and collective prayer alters that host God's glory.",
    keyPoints: [
      "Redemption City: A historic altar of answered prayers",
      "Aligning our heart postures before the monthly Holy Ghost Night",
      "Travailing prayer that shifts institutional destinies",
      "Maintaining an unbroken communion with the Holy Spirit"
    ]
  },
  {
    id: "sermon-4",
    title: "Unshakable Identity: Navigating Peer Pressure with Bold Faith",
    speaker: "Sister Deborah Adeleke",
    role: "Teen Ministry Leader",
    date: "August 9, 2026",
    series: "The Overflow Chronicles",
    duration: "38 mins",
    scripture: "Daniel 1:8-17",
    category: "Youth & Purpose",
    summary: "Delivered in The Overflow for our teenagers, this message shows how Daniel and his friends maintained divine identity in Babylon without losing their academic and career relevance.",
    keyPoints: [
      "Daniel purposed in his heart: The power of early conviction",
      "Overcoming cyber-bullying, fear of missing out, and social pressure",
      "God honors those who honor His standards in secret",
      "You are fearfully and wonderfully created with a unique purpose"
    ]
  },
  {
    id: "sermon-5",
    title: "Doctrinal Foundations: The Infallible Word in a Shifting World",
    speaker: "Rev. Prof. Samuel Akinyemi",
    role: "RCBC Provost",
    date: "August 2, 2026",
    series: "Sound Doctrine",
    duration: "61 mins",
    scripture: "2 Timothy 3:16-17",
    category: "Doctrine & Theology",
    summary: "A scholarly yet deeply spiritual treatise from the Bible College faculty detailing why orthodoxy and Holy Ghost power must always walk together in the life of every minister.",
    keyPoints: [
      "The authority and sufficiency of the Holy Scriptures",
      "Guarding the pulpit against syncretism and modern heresies",
      "The training of Christ's ambassadors for 21st century challenges",
      "Character as the true testing ground of spiritual authenticity"
    ]
  }
];

export const EVENTS: ChurchEvent[] = [
  {
    id: "event-1",
    title: "September Global Holy Ghost Service",
    date: "September 4, 2026",
    time: "7:00 PM - Till Dawn",
    location: "Redemption City Arena (Walking distance from RCBC Chapel)",
    category: "Holy Ghost Night",
    description: "The monthly gathering of millions worldwide right here in Redemption City. RCBC Chapel of Praise serves as a primary prayer & volunteer coordination base.",
    isSpecial: true,
    bannerTag: "REDEMPTION CITY MEGA NIGHT"
  },
  {
    id: "event-2",
    title: "Youth Expression Sunday: 'Shift Gears 2026'",
    date: "September 6, 2026",
    time: "8:00 AM - 10:30 AM",
    location: "Youth Center Hall (Wing B)",
    category: "Youth & Campus",
    description: "Special youth-led service featuring original music compositions, dramatic arts, career panel discussions, and an empowering message for campus scholars.",
    bannerTag: "YOUTH POWER"
  },
  {
    id: "event-3",
    title: "RCBC Academic Semester Matriculation Thanksgiving",
    date: "September 13, 2026",
    time: "8:00 AM - 11:00 AM",
    location: "Main Sanctuary Auditorium",
    category: "Academic Calendar",
    description: "Commemorating the arrival of new ministerial students, theology researchers, and student pastors into the Redeemed Christian Bible College.",
    bannerTag: "ACADEMIC TRADITION"
  },
  {
    id: "event-4",
    title: "Teenagers 'The Overflow' Multimedia & Film Showcase",
    date: "September 19, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "The Overflow Hall (Wing C)",
    category: "Teenagers",
    description: "An afternoon of short films produced by our teenagers, interactive Bible quiz championship, and a Q&A panel addressing life and identity questions.",
    bannerTag: "TEENS CREATIVE"
  },
  {
    id: "event-5",
    title: "Tuesday Digging Deep: Systematic Doctrine of the Holy Spirit",
    date: "September 8, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Main Sanctuary & Online Live",
    category: "Sanctuary Service",
    description: "Verse-by-verse exploration taught by senior RCBC lecturers and the pastoral team. Open to all students, families, and online viewers.",
    recurrence: "Weekly on Tuesday"
  },
  {
    id: "event-6",
    title: "Thursday Faith Clinic: Altar of Divine Restoration",
    date: "September 10, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Main Sanctuary",
    category: "Sanctuary Service",
    description: "A time of focused prayer, laying on of hands, and deliverance ministrations for families, students, and workers.",
    recurrence: "Weekly on Thursday"
  }
];

export const DEPARTMENTS: Department[] = [
  {
    id: "choir",
    name: "Ambassadors of Praise (Choir & Music)",
    ministry: "Main Sanctuary",
    description: "Leading celestial worship, classical choral hymns, and contemporary anthems that usher in the tangible presence of God during services.",
    responsibilities: [
      "Vocal and instrumental leadership on Sundays and midweek",
      "Weekly choir rehearsals on Thursdays (5:00 PM) & Saturdays (4:00 PM)",
      "Special ministrations during RCBC convocations and Holy Ghost nights"
    ],
    meetingTime: "Thursday 5:00 PM & Saturday 4:00 PM",
    leadCoordinator: "Minister David Adelekan (Music Director)"
  },
  {
    id: "media",
    name: "Media, Tech & Live Broadcast",
    ministry: "General",
    description: "Managing livestreaming, sound engineering, multi-camera setups, projection, and digital communications across all 3 ministry wings.",
    responsibilities: [
      "Broadcast streaming on YouTube and Facebook Live",
      "Visual slide projection and audio recording of sermons",
      "Social media updates, photography, and sermon note publishing"
    ],
    meetingTime: "Sundays 7:00 AM & Saturdays 3:00 PM",
    leadCoordinator: "Bro. Emmanuel Eze (Technical Lead)"
  },
  {
    id: "ushers",
    name: "Sanctuary Protocol, Ushers & Greeters",
    ministry: "Main Sanctuary",
    description: "Creating a welcoming, orderly, and spiritually conducive atmosphere for worshippers from the first step through our doors.",
    responsibilities: [
      "Warm reception of guests, students, and visiting ministers",
      "Seating logistics, crowd coordination, and sanctuary orderliness",
      "Offering coordination and guest information follow-up"
    ],
    meetingTime: "Sunday 7:15 AM & Monthly Last Saturday",
    leadCoordinator: "Deaconess Grace Olusola (Chief Usher)"
  },
  {
    id: "youth-arts",
    name: "Youth Creative Expressions (Drama & Dance)",
    ministry: "Youth Church",
    description: "Communicating kingdom truths through high-impact gospel theater, contemporary choreography, spoken word, and short films.",
    responsibilities: [
      "Monthly dramatic sketches and seasonal drama productions",
      "Creative performances during Youth Expression Sundays",
      "Scriptwriting and digital content production for evangelism"
    ],
    meetingTime: "Saturdays 3:30 PM (Youth Hall)",
    leadCoordinator: "Sister Favour Ojo (Drama Coordinator)"
  },
  {
    id: "teens-mentors",
    name: "Teenagers Mentorship & Tutoring Squad",
    ministry: "Teenagers Church",
    description: "Dedicated teachers, campus scholars, and counselors providing spiritual mentorship and academic support to teenagers.",
    responsibilities: [
      "Facilitating breakout discussion circles during 'The Overflow'",
      "Organizing quarterly career expos and Bible quiz drills",
      "Offering academic math/science tutoring for exam-bound teens"
    ],
    meetingTime: "Sundays 7:30 AM & Alternate Saturdays",
    leadCoordinator: "Pastor Tayo Babatunde (Teens Mentor)"
  },
  {
    id: "prayer",
    name: "Intercessory Prayer Altar & Faith Clinic",
    ministry: "Main Sanctuary",
    description: "Standing in the gap for the Church, RCBC, Redemption City, families, and global mission outposts around the world.",
    responsibilities: [
      "Pre-service prayer chains every Sunday morning (7:00 AM)",
      "Daily midnight vigil rosters during Holy Ghost week",
      "Special intercessory support for student examinations"
    ],
    meetingTime: "Sundays 7:00 AM & Wednesdays 5:30 PM",
    leadCoordinator: "Elder Isaiah Ogundipe"
  }
];

export const GIVING_OPTIONS: GivingOption[] = [
  {
    id: "tithe-offering",
    title: "Tithes & Sanctuary Offerings",
    purpose: "Supports general pastoral care, sanctuary operations, and weekly services.",
    bankName: "Guaranty Trust Bank (GTBank)",
    accountName: "RCBC Chapel of Praise Sanctuary",
    accountNumber: "0123456789",
    category: "General Sanctuary Fund"
  },
  {
    id: "rcbc-scholarship",
    title: "RCBC Student Pastor Scholarship Fund",
    purpose: "Provides tuition grants, study bibles, and meal subsidies for underprivileged theological students training to be missionary pastors.",
    bankName: "Zenith Bank Plc",
    accountName: "RCBC Ministerial Training Support",
    accountNumber: "1012345678",
    category: "Theological Education"
  },
  {
    id: "youth-teens",
    title: "Youth & Teenagers Mission Fund",
    purpose: "Powers 'Ignite & Deploy' vocational training, 'The Overflow' teenage multimedia equipment, and annual youth leadership camps.",
    bankName: "Access Bank Plc",
    accountName: "RCBC Chapel Youth & Teens Ministry",
    accountNumber: "0098765432",
    category: "Next Generation"
  },
  {
    id: "building-project",
    title: "Campus Chapel Expansion & Media Tech Project",
    purpose: "Finances auditorium audio-visual upgrades, solar inverter systems, and student fellowship center expansion.",
    bankName: "First Bank of Nigeria",
    accountName: "RCBC Chapel of Praise Building Project",
    accountNumber: "2034567890",
    category: "Capital Projects"
  }
];

export const TESTIMONIES = [
  {
    name: "Pastor Samuel Kalu",
    role: "RCBC Alumnus & Missionary Pastor",
    text: "My years worshiping at the Chapel of Praise provided the spiritual crucible for my missionary posting in West Africa. The doctrinal depth of the Main Sanctuary and the intense prayer climate inside Redemption City shaped my entire ministry.",
    year: "Class of 2022"
  },
  {
    name: "Chidinma Okoro",
    role: "Undergraduate Scholar & Youth Choir Member",
    text: "The Youth Church's 'Ignite & Deploy' platform gave me confidence to balance my university studies with creative ministry. Here, spiritual fire meets academic excellence without contradiction.",
    year: "Youth Church Member"
  },
  {
    name: "Toluwani Adeyemi",
    role: "High School Student",
    text: "At 'The Overflow' Teenagers Church, I found mentors who actually listened to my questions about peer pressure and identity. I gave my life to Christ here, and my relationship with God is now real and personal.",
    year: "Teenagers Church"
  }
];

export const FAQ_LIST = [
  {
    q: "Where exactly is RCBC Chapel of Praise located?",
    a: "We are situated on Christ's Ambassadors Road inside the historic Redemption City (Km 46, Lagos-Ibadan Expressway, Ogun State, Nigeria). When you enter through the main Redemption City gates, follow Christ's Ambassadors Road directly into the Redeemed Christian Bible College (RCBC) main campus complex."
  },
  {
    q: "How does the three-tier ministry umbrella work on Sundays?",
    a: "All three ministries run simultaneously on Sunday mornings starting at 8:00 AM: The Main Sanctuary serves adults and families; The Youth Church meets in Wing B with vibrant youth expressions; and The Teenagers Church gathers in 'The Overflow' (Wing C) with multimedia-rich, age-tailored discipleship."
  },
  {
    q: "Can visitors from outside the Bible College attend?",
    a: "Absolutely! While we serve as the institutional campus parish of RCBC, our doors are wide open to residents of Redemption City, nearby communities, visitors attending the monthly Holy Ghost Service, and anyone seeking sound biblical teaching."
  },
  {
    q: "How can I volunteer or join a church department?",
    a: "You can sign up directly using the 'Join a Department' form on this website or speak with the protocol team right after Sunday Celebration Service."
  },
  {
    q: "Can I watch services online if I am away from Redemption City?",
    a: "Yes! Every Sunday Celebration Service, Tuesday Digging Deep, and Thursday Faith Clinic are streamed live in high definition via our Media portal and YouTube channel."
  }
];
