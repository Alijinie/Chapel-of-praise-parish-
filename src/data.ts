import { MinistryTier, Sermon, ChurchEvent, LeadershipMember } from './types';

export const CHURCH_INFO = {
  name: "RCBC Chapel of Praise",
  campus: "Main Campus (Redeemed Christian Bible College)",
  anchorMotto: "Raising Christ's Ambassadors",
  location: "Christ's Ambassadors Road, inside Redemption City, Km 46 Lagos-Ibadan Expressway, Ogun State, Nigeria",
  shortLocation: "Christ's Ambassadors Road, Redemption City",
  phone: "+234 803 300 7222",
  phoneAlt: "+234 812 456 7890",
  email: "chapelofpraise@rcbc.edu.ng",
  whatsapp: "+2348033007222",
  affiliation: "Redeemed Christian Church of God (RCCG) & Redeemed Christian Bible College (RCBC)",
  established: "1980 / Formally chartered with the Bible College",
  streamingUrl: "https://www.youtube.com/embed/live_stream?channel=RCBCChapelOfPraise",
};

export const MINISTRIES_DATA: MinistryTier[] = [
  {
    id: 'main',
    name: 'The Main Sanctuary',
    badge: 'Adult Church & Seminary Hub',
    tagline: 'The Spiritual Epicenter of the Redeemed Christian Bible College',
    audience: 'Adult Believers, Faculty Scholars, Pastors-in-Training & Families',
    identity: "The spiritual epicenter of the Redeemed Christian Bible College (Main Campus). It serves as an apostolic training hub for future global pastors, theologians, and Christ's ambassadors dispatched across nations.",
    coreFocus: [
      'Scriptural Depth & Sound Doctrine',
      'Intensive Intercessory Prayer & Deliverance',
      'Classical Hymnody and Apostolic Contemporary Worship',
      'Pastoral Mentorship & Doctrinal Integrity'
    ],
    sectionIdea: 'The Pillars: Theological grounding, family-centered leadership, and monthly preparation alignment for the massive global Holy Ghost Services hosted right inside Redemption City.',
    schedule: [
      {
        day: 'Sunday',
        time: '8:00 AM - 10:30 AM',
        name: 'Sunday Celebration Service',
        desc: 'High-praise communion, expository word ministry by seasoned faculty & campus ministers.'
      },
      {
        day: 'Tuesday',
        time: '6:00 PM - 7:45 PM',
        name: 'Digging Deep (Bible Study)',
        desc: 'Systematic theological exploration of Scripture with interactive question & answer periods.'
      },
      {
        day: 'Thursday',
        time: '6:00 PM - 7:30 PM',
        name: 'Faith Clinic (Intensive Prayer)',
        desc: 'Apostolic intercession, spiritual warfare, healing ministering, and prophetic declarations.'
      }
    ],
    features: [
      'Theological grounded pastoral care and counseling',
      'Sanctuary Choir (Classical Anthems & Apostolic High Praise)',
      'Monthly Holy Ghost Service Prayer Preparation Vigil',
      'Direct tie with RCBC pastoral training practicum'
    ],
    departments: [
      'Praise & Sanctuary Choir',
      'Ushering & Protocol Guild',
      'Evangelism & Missions Outreach',
      'Intercessory & Prayer Warriors',
      'Technical, Sound & Broadcast Crew',
      'Sanitation & Beautification Unit'
    ],
    color: {
      primary: 'from-amber-600 to-yellow-600',
      border: 'border-amber-500',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      badgeText: 'text-amber-800'
    },
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'youth',
    name: 'The Youth Church',
    badge: 'Campus & Young Professionals',
    tagline: 'Ignite & Deploy: Arise, Shine & Shift Gears',
    audience: 'Undergraduates, Young Professionals, Creatives & Campus Scholars',
    identity: 'A high-energy, contemporary expressions ministry tailoring word and worship to undergraduates, young professionals, and campus scholars seeking to thrive in both kingdom impact and marketplace leadership.',
    coreFocus: [
      'Purpose Discovery & Divine Calling',
      'Career Excellence, Innovation & Tech Seminars',
      'Spiritual Fire & Passionate Worship Expressions',
      'Authentic Community & Fellowship Circles'
    ],
    sectionIdea: 'Ignite & Deploy: Using dynamic banners like "Arise and Shine" and "Shift Gears", highlighting peer fellowship circles, creative arts departments, and vocational empowerment.',
    schedule: [
      {
        day: 'Sunday',
        time: '8:00 AM - 10:30 AM',
        name: 'Youth Expression Service',
        desc: 'Youth-led acoustic and electric praise, spoken word, contemporary pulpit panels, and life-applicable messages.'
      },
      {
        day: 'Friday (Bi-weekly)',
        time: '6:30 PM - 8:30 PM',
        name: 'Shift Gears Hangout',
        desc: 'Career discussions, tech talk, spiritual fireside roundtables, and creative arts rehearsals.'
      }
    ],
    features: [
      'Peer Fellowship Circles for campus students and young graduates',
      'Creative Arts Departments (Spoken Word, Contemporary Dance, Alternate Music)',
      'Quarterly Marketplace & Vocational Masterclasses',
      'Mentorship with seasoned industry and theological leaders'
    ],
    departments: [
      'Ignite Worship & Contemporary Band',
      'Creative Arts, Drama & Spoken Word',
      'Media, Photography & Social Broadcast',
      'Career & Vocational Mentorship Hub',
      'Campus Outreach & Welcome Team',
      'Young Professionals Network'
    ],
    color: {
      primary: 'from-blue-600 to-indigo-700',
      border: 'border-blue-500',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
      badgeText: 'text-blue-800'
    },
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'teens',
    name: 'The Teenagers Church',
    badge: 'Teens Hub & The Overflow',
    tagline: 'The Overflow: Transitioning Faith into Deep Personal Relationship',
    audience: 'Teens aged 13–19, Secondary Students & Pre-College Candidates',
    identity: 'A vibrant, nurturing, and emotionally safe environment designed specifically for teenagers to cross over from inherited childhood faith into deep, personal, resilient relationships with Jesus Christ.',
    coreFocus: [
      'Engaging Bible Quizzes & Sword Drills',
      'Open Discussions on Identity, Purpose & Peer Pressure',
      'Academic Guidance, Career Conferences & Exams Prep',
      'Interactive Multimedia Workshops & Christian Film Nights'
    ],
    sectionIdea: 'The Overflow: Operating simultaneously in a dedicated wing/overflow section during main services. Filled with interactive study games, video shows, and safe mentorship panels.',
    schedule: [
      {
        day: 'Sunday',
        time: '8:30 AM - 10:30 AM',
        name: 'The Overflow Teen Worship',
        desc: 'High-octane teen-led praise, interactive object lessons, Bible jeopardy, and open discussion circles.'
      },
      {
        day: 'Saturday (Monthly)',
        time: '4:00 PM - 6:30 PM',
        name: 'Teens Hangout & Movie Hub',
        desc: 'Christian cinematic films, music listening sessions, game tournaments, and question-without-judgment panels.'
      }
    ],
    features: [
      'Dedicated youth lounge and overflow auditorium equipped with media monitors',
      'Safe questions desk: Teens ask tough questions about life, faith, and culture',
      'High school and UTME/JAMB academic counseling mentorship',
      'Teens Choir, Drama Troupe, and Digital Tech Cadets'
    ],
    departments: [
      'The Overflow Teen Choir',
      'Junior Media & Presentation Crew',
      'Bible Quiz Champions League',
      'Teens Counseling & Peer Mentors',
      'Hospitality & Games Coordinators'
    ],
    color: {
      primary: 'from-emerald-600 to-teal-700',
      border: 'border-emerald-500',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      badgeText: 'text-emerald-800'
    },
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80'
  }
];

export const FOUR_PILLARS = [
  {
    number: '01',
    title: 'Theological Grounding',
    tagline: 'Doctrinal Integrity & Expository Truth',
    desc: 'Anchored directly to the academic and spiritual legacy of the Redeemed Christian Bible College. Every sermon, Bible study, and doctrine is systematically rooted in uncompromised Biblical truth.',
    icon: 'BookOpen'
  },
  {
    number: '02',
    title: 'Apostolic Intercession',
    tagline: 'Faith Clinic & Fervent Prayer',
    desc: 'Maintaining a blazing altar of intercession. We prepare ministers and families to contend in the spirit, releasing prophetic breakthroughs and spiritual authority in everyday life.',
    icon: 'Flame'
  },
  {
    number: '03',
    title: "Raising Christ's Ambassadors",
    tagline: 'Equipping Future Global Leaders',
    desc: 'Training theological scholars, marketplace professionals, and vibrant youth to be trustworthy representatives of the Kingdom of God across all cultural, professional, and geographic spheres.',
    icon: 'GraduationCap'
  },
  {
    number: '04',
    title: 'Holy Ghost Service Alignment',
    tagline: 'Heartbeat of Redemption City',
    desc: 'Located inside Redemption City, we stand in direct spiritual alignment with the global monthly Holy Ghost Services and international conventions hosted right within our campus vicinity.',
    icon: 'Sparkles'
  }
];

export const SERMONS_DATA: Sermon[] = [
  {
    id: 'sermon-1',
    title: 'Walking Worthy as Ambassadors of Christ',
    series: 'The Ambassador Mandate',
    preacher: 'Pastor (Dr.) E. A. Adeboye / Guest Provost',
    role: 'General Overseer & Spiritual Father',
    ministry: 'Main Sanctuary',
    date: 'Last Sunday',
    duration: '1h 15m',
    scripture: '2 Corinthians 5:20, Ephesians 4:1',
    summary: 'A definitive exposition on what it means to carry the diplomatic credentials of the Kingdom of Heaven in a broken world. Faithfulness to sound doctrine and holy living are the hallmarks of a true ambassador.',
    keyPoints: [
      'Ambassadors do not speak their own opinions; they declare the decrees of their King.',
      'Your conduct in private validates your credentials in public.',
      'The power backing an ambassador is the entire authority of Heaven.'
    ],
    videoThumb: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sermon-2',
    title: 'Ignite & Deploy: Shift Gears in Your Calling',
    series: 'Youth Ignite Series',
    preacher: 'Pastor Samuel Olatunji',
    role: 'Campus Youth Pastor & RCBC Faculty Fellow',
    ministry: 'Youth Church',
    date: '2 Weeks Ago',
    duration: '52m',
    scripture: 'Isaiah 60:1-3, Romans 12:11',
    summary: 'Tailored for undergraduates, tech builders, and creatives. Discover how God converts your natural gifts, academic knowledge, and youthful energy into an engine for cultural transformation.',
    keyPoints: [
      'Fervency of spirit must accompany diligence in business.',
      'How to build resilience in modern corporate and academic environments.',
      'Establishing peer accountability circles that sharpen your spiritual edge.'
    ],
    videoThumb: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sermon-3',
    title: 'The Overflow: Navigating Identity Without Apology',
    series: 'Unfiltered Faith for Teens',
    preacher: 'Minister Deborah Adeleke',
    role: 'Teenagers Church Coordinator',
    ministry: 'Teenagers Church',
    date: '3 Weeks Ago',
    duration: '40m',
    scripture: '1 Timothy 4:12, Daniel 1:8',
    summary: 'Addressing peer pressure, social media algorithms, and self-worth from a loving biblical perspective. Teenagers are encouraged to dare like Daniel and refuse to compromise.',
    keyPoints: [
      'Let no one despise your youth: conduct, speech, love, faith, purity.',
      'Handling peer pressure without isolation or anxiety.',
      'Cultivating a secret place of personal daily devotion.'
    ],
    videoThumb: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sermon-4',
    title: 'The Doctrine of Sound Faith: The Pastor’s Armoury',
    series: 'RCBC Seminary Colloquium',
    preacher: 'Pastor (Prof.) J. B. Kayode',
    role: 'Dean of Theological Studies, RCBC Main Campus',
    ministry: 'RCBC Faculty',
    date: 'Special Academic Lecture',
    duration: '1h 05m',
    scripture: 'Titus 2:1, 2 Timothy 2:15',
    summary: 'Special theological discourse delivered to student ministers and pastors-in-training at the Chapel of Praise, highlighting doctrinal defense against modern theological dilution.',
    keyPoints: [
      'Hermeneutics: Rightly dividing the Word of truth in post-modern cultures.',
      'Balancing theological rigor with fresh Holy Ghost anointing.',
      'The shepherd’s integrity in times of institutional growth.'
    ],
    videoThumb: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=800&q=80'
  }
];

export const UPCOMING_EVENTS: ChurchEvent[] = [
  {
    id: 'event-1',
    title: 'Global Holy Ghost Service (Monthly Alignment)',
    category: 'Redemption City Global',
    date: 'First Friday of Every Month',
    time: '7:00 PM till Dawn',
    location: 'Redemption Arena, Redemption City (Adjacent to RCBC)',
    desc: 'The worldwide flagship gathering of millions under the ministration of Pastor E. A. Adeboye. RCBC Chapel of Praise leads pre-service prayer and serves in designated choir/protocol clusters.',
    highlight: true,
    registrationOpen: false
  },
  {
    id: 'event-2',
    title: 'Shift Gears: Youth & Career Leadership Summit',
    category: 'Youth & Teens',
    date: 'March 28 - 29, 2026',
    time: '9:00 AM - 4:00 PM',
    location: 'RCBC Chapel Auditorium & Youth Wing',
    desc: 'Two days of intensive marketplace workshops, tech hackathons, spiritual revival sessions, and networking with Christian captains of industry.',
    highlight: true,
    registrationOpen: true
  },
  {
    id: 'event-3',
    title: 'RCBC Mid-Semester Theological Colloquium',
    category: 'RCBC Academic',
    date: 'April 14, 2026',
    time: '10:00 AM - 2:00 PM',
    location: 'Chapel of Praise Seminary Hall',
    desc: 'Annual scholarly presentation by graduating student-ministers on biblical exegesis, contemporary apologetics, and cross-cultural missiology.',
    highlight: false,
    registrationOpen: true
  },
  {
    id: 'event-4',
    title: 'The Overflow: Annual Teen Bible Bowl & Quiz League',
    category: 'Youth & Teens',
    date: 'May 02, 2026',
    time: '11:00 AM - 3:30 PM',
    location: 'Teenagers Overflow Wing',
    desc: 'Exciting quiz challenge covering the Book of Acts and Romans, interactive drama skits, video show, and awards for young biblical scholars.',
    highlight: false,
    registrationOpen: true
  },
  {
    id: 'event-5',
    title: 'Faith Clinic All-Night Vigil & Breakthrough Altar',
    category: 'Spiritual / Service',
    date: 'Last Thursday of the Month',
    time: '11:00 PM - 4:30 AM',
    location: 'Main Sanctuary',
    desc: 'An intensive night of deep intercessory prayer, prophetic laying-on of hands, and deliverance ministering for the campus community and families.',
    highlight: false,
    registrationOpen: false
  }
];

export const GALLERY_PHOTOS = [
  {
    title: 'Main Sanctuary During Sunday Celebration Service',
    category: 'Main Sanctuary',
    url: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Youth Expressions Band & Contemporary Praise',
    category: 'Youth Church',
    url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'The Teenagers Overflow Wing & Interactive Session',
    category: 'Teenagers Church',
    url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'RCBC Seminary Student Ministers in Exegesis Class',
    category: 'RCBC College',
    url: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Faith Clinic Thursday Deliverance & Prayer Altar',
    category: 'Prayer Altar',
    url: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Choir & Orchestra Ministrations at Chapel of Praise',
    category: 'Music Ministry',
    url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Redemption City Peaceful Campus Atmosphere',
    category: 'Redemption City',
    url: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Campus Leadership & Ministry Coordination Team',
    category: 'Leadership',
    url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80'
  }
];

export const GIVING_CHANNELS = [
  {
    title: 'Tithes & General Offerings',
    desc: 'Regular tithes and Sunday service offerings supporting ongoing pastoral and campus worship operations.',
    bank: 'Zenith Bank PLC',
    accountNumber: '1012345678',
    accountName: 'RCBC Chapel of Praise - Main Operations',
    sortCode: '057150013'
  },
  {
    title: 'Chapel Sanctuary & Media Expansion Fund',
    desc: 'Direct investments into audio-visual upgrades, LED screens, and auditorium expansion projects.',
    bank: 'Guaranty Trust Bank (GTBank)',
    accountNumber: '0123456789',
    accountName: 'RCBC Chapel of Praise - Projects & Building',
    sortCode: '058152062'
  },
  {
    title: 'Student-Ministers Scholarship & Welfare Fund',
    desc: 'Supporting tuition subsidies and welfare for indigent theology students and orphans studying at RCBC.',
    bank: 'United Bank for Africa (UBA)',
    accountNumber: '2098765432',
    accountName: 'RCBC Chapel of Praise - Student Support',
    sortCode: '033153513'
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    name: 'Pastor (Dr.) E. A. Adeboye',
    role: 'General Overseer, RCCG Worldwide',
    qualification: 'Spiritual Father & Grand Patron',
    bio: 'Providing apostolic oversight, spiritual fatherhood, and prophetic direction to the Redeemed Christian Bible College and all parishes across Redemption City.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Pastor (Prof.) Babatunde Olawale',
    role: 'College Chaplain & Pastor-in-Charge',
    qualification: 'Ph.D. Systematic Theology, M.Div.',
    bio: 'Oversees the spiritual welfare of the student body, faculty, and regular campus worshippers, anchoring the church in robust biblical doctrine and pastoral care.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Pastor Samuel Olatunji',
    role: 'Associate Pastor & Youth Church Lead',
    qualification: 'B.Sc., PGD Theology (RCBC)',
    bio: 'Leads the contemporary Youth Expressions ministry, passionate about mentoring undergraduates, driving tech integration, and raising kingdom marketplace leaders.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Minister Deborah Adeleke',
    role: 'Teenagers Church Coordinator & Counselor',
    qualification: 'M.Ed. Guidance & Counseling, Dip. Theology',
    bio: 'Directs "The Overflow" Teenagers Church, facilitating interactive discipleship, academic guidance, and nurturing young believers through formative teen years.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  }
];
