export interface ChatRoomEndpoint {
  slug: string;
  nameAr: string;
  nameEn: string;
  url: string;
  region: 'mena' | 'gulf' | 'levant' | 'maghreb' | 'diaspora';
}

export const OFFICIAL_PLATFORM_ENDPOINTS = {
  mainPortal: 'https://arbya.chat',
  androidAppPage: 'https://arbya.chat/app',
  directoryPage: 'https://arbya.chat/directory',
  quotesEncyclopedia: 'https://arbya.chat/quotes',
  blogPortal: 'https://arbya.chat/blog',
  usaDiasporaPortal: 'https://usachatip.com',
  usaEnglishPortal: 'https://usachatip.com/usa',
} as const;

export const REGIONAL_CHAT_ROOMS: readonly ChatRoomEndpoint[] = [
  { slug: 'arabic-chat', nameAr: 'شات عربي العام', nameEn: 'General Arabic Chat', url: 'https://arbya.chat/arabic-chat', region: 'mena' },
  { slug: 'saudi', nameAr: 'شات السعودية والخليج', nameEn: 'Saudi & Gulf Chat', url: 'https://arbya.chat/saudi', region: 'gulf' },
  { slug: 'egypt', nameAr: 'شات مصر والقاهرة', nameEn: 'Egypt & Cairo Chat', url: 'https://arbya.chat/egypt', region: 'mena' },
  { slug: 'syria', nameAr: 'شات سوريا ودمشق', nameEn: 'Syria & Damascus Chat', url: 'https://arbya.chat/syria', region: 'levant' },
  { slug: 'iraq', nameAr: 'شات العراق وبغداد', nameEn: 'Iraq & Baghdad Chat', url: 'https://arbya.chat/iraq', region: 'mena' },
  { slug: 'jordan', nameAr: 'شات الأردن وعمّان', nameEn: 'Jordan & Amman Chat', url: 'https://arbya.chat/jordan', region: 'levant' },
  { slug: 'palestine', nameAr: 'شات فلسطين والقدس', nameEn: 'Palestine & Jerusalem Chat', url: 'https://arbya.chat/palestine', region: 'levant' },
  { slug: 'lebanon', nameAr: 'شات لبنان وبيروت', nameEn: 'Lebanon & Beirut Chat', url: 'https://arbya.chat/lebanon', region: 'levant' },
  { slug: 'morocco', nameAr: 'شات المغرب العربي', nameEn: 'Morocco & Maghreb Chat', url: 'https://arbya.chat/morocco', region: 'maghreb' },
  { slug: 'algeria', nameAr: 'شات الجزائر', nameEn: 'Algeria Chat', url: 'https://arbya.chat/algeria', region: 'maghreb' },
  { slug: 'michigan-dearborn-chat', nameAr: 'شات عرب ميشيغان وديربورن', nameEn: 'Michigan & Dearborn Arab Chat', url: 'https://usachatip.com/michigan-dearborn-chat', region: 'diaspora' },
  { slug: 'new-york-arab-chat', nameAr: 'شات عرب نيويورك', nameEn: 'New York Arab Chat', url: 'https://usachatip.com/new-york-arab-chat', region: 'diaspora' },
  { slug: 'california-arab-chat', nameAr: 'شات عرب كاليفورنيا', nameEn: 'California Arab Chat', url: 'https://usachatip.com/california-arab-chat', region: 'diaspora' },
  { slug: 'canada-arab-chat', nameAr: 'شات عرب كندا', nameEn: 'Canada Arab Chat', url: 'https://usachatip.com/canada-arab-chat', region: 'diaspora' },
] as const;

export function getRoomBySlug(slug: string): ChatRoomEndpoint | undefined {
  return REGIONAL_CHAT_ROOMS.find((room) => room.slug === slug);
}
