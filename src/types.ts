export type TabType = 'home' | 'ministries' | 'sermons' | 'calendar' | 'giving' | 'contact' | 'media' | 'events' | 'visit';

export type MinistryTierId = 'main' | 'youth' | 'teens' | 'main-sanctuary' | 'youth-church' | 'teenagers-church' | string;

export interface MinistrySchedule {
  day: string;
  time: string;
  name: string;
  desc?: string;
  description?: string;
}

export interface MinistryColor {
  badgeBg?: string;
  border?: string;
  primary?: string;
  [key: string]: any;
}

export interface MinistryTier {
  id: MinistryTierId;
  name?: string;
  title?: string;
  badge?: string;
  subtitle?: string;
  umbrellaLevel?: string;
  tagline?: string;
  audience?: string;
  identity?: string;
  coreFocus?: string[];
  sectionIdea?: string;
  sectionDetails?: string;
  sectionTheme?: string;
  schedule?: MinistrySchedule[];
  serviceTimings?: MinistrySchedule[];
  features?: string[];
  departments?: string[];
  image?: string;
  imageUrl?: string;
  color?: MinistryColor;
  pastoralLead?: string;
  location?: string;
}

export type Ministry = MinistryTier;

export interface Sermon {
  id: string;
  title: string;
  speaker?: string;
  preacher?: string;
  role: string;
  date: string;
  series: string;
  duration: string;
  scripture: string;
  category?: string;
  ministry?: string;
  summary: string;
  videoUrl?: string;
  videoThumb?: string;
  keyPoints: string[];
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  desc?: string;
  description?: string;
  highlight?: boolean;
  isSpecial?: boolean;
  recurrence?: string;
  bannerTag?: string;
  registrationOpen?: boolean;
}

export interface Department {
  id: string;
  name: string;
  ministry: 'Main Sanctuary' | 'Youth Church' | 'Teenagers Church' | 'General';
  description: string;
  responsibilities: string[];
  meetingTime: string;
  leadCoordinator: string;
}

export interface LeadershipMember {
  id?: string;
  name: string;
  role: string;
  division?: string;
  qualification?: string;
  bio: string;
  image: string;
}

export interface GivingChannel {
  title: string;
  bank: string;
  accountNumber: string;
  accountName: string;
  desc: string;
}

export interface GivingOption {
  id: string;
  title: string;
  purpose: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  sortCode?: string;
  category: string;
}

export interface PrayerRequest {
  id?: string;
  name?: string;
  contact?: string;
  category: string;
  timing: string;
  message: string;
  isAnonymous: boolean;
  createdAt?: string;
}

