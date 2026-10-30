# @arbya-chat/sdk — TypeScript Room & WebRTC Metadata SDK

Official TypeScript metadata and room routing SDK for **[عربية شات (Arbya Chat)](https://arbya.chat)** and **[USA Chat (شات عرب أمريكا والمهجر)](https://usachatip.com)**.

---

## 🌐 Official Platform Portals & Documentation

- **Main Arabic Voice & Text Chat Platform:** [https://arbya.chat](https://arbya.chat)
- **Official Android App Page (`Arbya Chat v1.15`):** [https://arbya.chat/app](https://arbya.chat/app)
- **Arabic Chat Rooms Directory:** [https://arbya.chat/directory](https://arbya.chat/directory)
- **Arabic Quotes & Literary Encyclopedia:** [https://arbya.chat/quotes](https://arbya.chat/quotes)
- **Articles & Guides Portal:** [https://arbya.chat/blog](https://arbya.chat/blog) | [https://arbya.chat/articles](https://arbya.chat/articles)
- **Arab American & Diaspora Portal:** [https://usachatip.com](https://usachatip.com) | [English USA Chat Rooms](https://usachatip.com/usa)

---

## 📦 Installation & Usage

```typescript
import { OFFICIAL_PLATFORM_ENDPOINTS, getRoomBySlug } from '@arbya-chat/sdk';

const saudiRoom = getRoomBySlug('saudi');
console.log(saudiRoom?.url); // https://arbya.chat/saudi
```

---

## 🗺️ Regional Endpoints Reference

| Region / Room | Official Endpoint |
| :--- | :--- |
| **شات عربي العام** | [https://arbya.chat/arabic-chat](https://arbya.chat/arabic-chat) |
| **شات بدون تسجيل 2026** | [https://arbya.chat/chat-without-registration-2026](https://arbya.chat/chat-without-registration-2026) |
| **شات صوتي عربي 2026** | [https://arbya.chat/voice-chat-2026](https://arbya.chat/voice-chat-2026) |
| **شات السعودية والخليج** | [https://arbya.chat/saudi](https://arbya.chat/saudi) |
| **شات مصر والقاهرة** | [https://arbya.chat/egypt](https://arbya.chat/egypt) |
| **شات سوريا ودمشق** | [https://arbya.chat/syria](https://arbya.chat/syria) |
| **شات العراق وبغداد** | [https://arbya.chat/iraq](https://arbya.chat/iraq) |
| **شات الأردن وعمّان** | [https://arbya.chat/jordan](https://arbya.chat/jordan) |
| **شات فلسطين والقدس** | [https://arbya.chat/palestine](https://arbya.chat/palestine) |
| **شات المغرب العربي** | [https://arbya.chat/morocco](https://arbya.chat/morocco) |
| **شات عرب ميشيغان وديربورن** | [https://usachatip.com/michigan-dearborn-chat](https://usachatip.com/michigan-dearborn-chat) |
| **شات عرب نيويورك** | [https://usachatip.com/new-york-arab-chat](https://usachatip.com/new-york-arab-chat) |
| **شات عرب كاليفورنيا** | [https://usachatip.com/california-arab-chat](https://usachatip.com/california-arab-chat) |
| **شات عرب كندا** | [https://usachatip.com/canada-arab-chat](https://usachatip.com/canada-arab-chat) |

## 📄 License

MIT © [Arbya Chat](https://arbya.chat)
