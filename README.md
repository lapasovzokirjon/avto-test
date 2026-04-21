# TurboDrive Avto Maktab — Next.js App Router + TypeScript

Bu loyiha Next.js App Router va TypeScript asosida tayyorlangan zamonaviy landing page.

## Ichida nima bor
- Hero section (rasm bilan)
- Biz haqimizda
- O'quvchilar natijasi
- O'qituvchilar
- Sharhlar
- FAQ
- Forma

## 0 dan ishga tushirish

### 1) Node.js o'rnating
Kompyuterda Node.js 18.18 yoki undan yangi versiya bo'lishi kerak.

### 2) Loyihani terminalda oching
```bash
cd avto-maktab-nextjs
```

### 3) Paketlarni o'rnating
```bash
npm install
```

### 4) Development serverni yoqing
```bash
npm run dev
```

### 5) Browserda oching
```bash
http://localhost:3000
```

## Papkalar tuzilmasi
```bash
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  ContactForm.tsx
  data.ts
  Faq.tsx
  Footer.tsx
  Header.tsx
  Hero.tsx
  Results.tsx
  Reviews.tsx
  Teachers.tsx
public/
  hero-driving.svg
```

## Qanday o'zgartirasiz

### Matnlarni almashtirish
- `components/data.ts` ichida o'qituvchilar, sharhlar, FAQ va statistika bor.
- `Hero.tsx`, `About.tsx`, `ContactForm.tsx` ichida asosiy marketing matnlar turadi.

### Ranglarni o'zgartirish
- `app/globals.css` ichidagi `:root` dan asosiy ranglarni o'zgartirasiz.

### Formani backendga ulash
Hozir forma demo holatda. Yuborilganda faqat frontendda success message chiqadi.
Keyingi bosqichda buni:
- Telegram botga
- Emailga
- CRM ga
- Google Sheets ga
ulab berish mumkin.

## Tavsiya qilinadigan keyingi upgrade
1. Admin panel yoki CRM integratsiya
2. Telegramga lead yuborish
3. SEO uchun metadata kuchaytirish
4. Google Maps va filiallar qo'shish
5. Call tracking va analytics
6. Real suratlar va video testimoniallar

## Production build
```bash
npm run build
npm run start
```
