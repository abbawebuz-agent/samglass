// Ichki sahifalar kontenti (about / projects / news / contacts) — ru/uz/en.
// Manba: samglass.uz (RU kanonik), UZ/ENG to'g'ri tarjima. Buzilgan/lorem joylar real kontent bilan tuzatilgan.

// ---- Rasmlar ----
export const PIMG = {
  aboutHero: 'https://static.tildacdn.one/tild6333-3138-4162-a332-646664336533/image-17.png',
  aboutGallery: [
    'https://static.tildacdn.one/tild6333-3138-4162-a332-646664336533/image-17.png',
    'https://static.tildacdn.one/tild3164-6338-4237-b138-633337346464/image-18.png',
    'https://static.tildacdn.one/tild3435-3236-4461-b831-343565336331/image-19.png',
    'https://static.tildacdn.one/tild6438-6431-4637-b565-383962396131/image-20.png',
  ],
  projects: [
    'https://static.tildacdn.one/tild6137-3162-4138-b931-666630313138/vbv4.png',
    'https://static.tildacdn.one/tild6464-3835-4630-a461-636533613031/vbv3.png',
    'https://static.tildacdn.one/tild3032-3337-4533-a635-666137613734/vbv5.png',
    'https://static.tildacdn.one/tild3761-3033-4661-b164-326262666135/image-13.png',
  ],
  newsFeatured: 'https://static.tildacdn.one/tild3732-3334-4461-b039-323664643330/-3.png',
  news: [
    'https://static.tildacdn.one/tild6133-3231-4434-b065-626662366166/photo_2024-07-10_14-.jpg',
    'https://static.tildacdn.one/tild3562-6132-4336-b966-383833316539/photo_2024-07-10_14-.jpg',
    'https://static.tildacdn.one/tild3137-3965-4561-a232-366236623939/photo_2024-07-10_14-.jpg',
    'https://static.tildacdn.one/tild6263-3934-4238-b732-386264326430/photo_2024-07-10_14-.jpg',
    'https://static.tildacdn.one/tild3030-3061-4732-b866-316637626365/photo_2024-06-19_11-.jpg',
    'https://static.tildacdn.one/tild3737-3566-4262-a138-336233636334/photo_2024-06-19_11-.jpg',
    'https://static.tildacdn.one/tild6264-3365-4133-b532-626233653735/photo_2024-06-19_11-.jpg',
    'https://static.tildacdn.one/tild6564-3734-4134-b332-613834313463/photo_2024-06-19_11-.jpg',
  ],
}

const pages = {
  ru: {
    about: {
      title: 'Samglass — ваш партнёр в успехе',
      intro: 'Мы являемся одним из лидеров в производстве фасадных стёкол. Samglass — надёжный и профессиональный производитель, который предлагает высококачественную продукцию и услуги своим клиентам.',
      whyTitle: 'Почему SamGlass?',
      whyText: 'Наши стёкла устойчивы к высоким температурам и давлению. Samglass — компания с многолетним опытом и зрелыми специалистами. Мы гарантируем услуги по подбору размеров, доставке и своевременной подготовке вашей продукции!',
      stats: [
        { num: '3000 м²', label: 'Производственной площади' },
        { num: '4500+', label: 'Довольных клиентов' },
        { num: '100+', label: 'Реализованных проектов' },
        { num: '10+', label: 'Лет опыта' },
      ],
      teamLine: 'Доверьтесь профессионализму и опыту нашей команды для достижения ваших целей и амбиций.',
      advantagesTitle: 'Наши преимущества',
      advantages: [
        { title: 'Большой опыт', text: 'Команда Samglass обладает многолетним опытом в производстве и реализации стеклопакетов, что позволяет грамотно подходить к каждому проекту и выполнять работу на высшем уровне.' },
        { title: 'Качество продукции', text: 'Мы используем только высококачественные материалы и современное оборудование, а также строго контролируем каждый этап производства для соответствия высоким стандартам качества и надёжности.' },
        { title: 'Клиентоориентированность', text: 'Мы внимательно относимся к потребностям каждого клиента и предлагаем индивидуальные решения, отвечающие именно вашим задачам.' },
        { title: 'Инновационность', text: 'Команда Samglass следит за новыми тенденциями и технологиями в производстве стеклопакетов и применяет их в работе для высокого качества продукции.' },
      ],
      capsTitle: 'Наше производство и возможности',
      caps: ['Закалённое стекло', 'Алмазная гравировка стекла', 'Линия по сборке стеклопакета', 'Сверление стекла', 'Триплекс', 'Фацет', 'Пескоструйная обработка стекла', 'Моллирование стекла', 'Художественные стёкла', 'Линия по производству стёкол', 'Лазерная полировка стекла', 'Окрашенное стекло', 'Резка стекла'],
    },
    projects: {
      title: 'Проекты',
      sub: 'Реализованные проекты Samglass — от банков и торговых центров до клиник и частных домов.',
      items: [
        { title: 'Установка фасадных окон для филиала банка «Asaka»', text: 'Современные фасадные стёкла для отделения банка — надёжность, энергоэффективность и презентабельный внешний вид.' },
        { title: 'Оснащение торгового центра в Самарканде фасадными окнами', text: 'Масштабное остекление фасада торгового центра с акцентом на прочность и эстетику.' },
        { title: 'Автоматические раздвижные двери от Samglass', text: 'Установка автоматических раздвижных стеклянных дверей с надёжными механизмами.' },
        { title: 'Установка футуристических стёкол для клиники', text: 'Современные стеклянные решения для медицинского учреждения — чистота линий и функциональность.' },
      ],
    },
    news: {
      title: 'Новости',
      featured: { title: 'Стеклянные душевые кабины от SamGlass', text1: 'Сегодня оконные душевые кабины выбирают сторонники минимализма и те, кто уделяет внимание личной гигиене. Душевые кабины чёрного цвета от бренда SamGlass станут отличным выбором для тех, кто ценит комфорт.', text2: 'Компания SamGlass по доступной цене предлагает высококачественные душевые кабины с новейшим дизайном — для ванной, гостиницы, дачи или квартиры. У покупателей есть возможность выбрать тип и размер кабины, которые они хотят.' },
      moreTitle: 'Другие новости',
      items: [
        { title: 'Ваше здание станет прочнее с окнами SamGlass', text: 'Окна SamGlass из высококачественных материалов повысят прочность вашего здания, обеспечив вашу безопасность.' },
        { title: 'Почему именно SamGlass?', text: 'Окна SamGlass из высококачественных материалов не пропускают шум и служат долго.' },
        { title: 'Доверьте внешний вид вашего бизнес-центра SamGlass', text: 'Окна SamGlass — современные, высококачественные и долговечные, идеальны для вашего бизнес-центра.' },
        { title: 'Будьте вместе со временем', text: 'Вашему заведению необходимо выделяться не только качеством, но и современным внешним видом.' },
        { title: 'Будьте в моде с окнами SamGlass', text: 'При росте числа университетов ваше заведение должно выделяться качеством и внешним видом.' },
        { title: 'С праздником Курбан-Байрам от SamGlass', text: 'Компания Sam Glass поздравляет вас с благословенным праздником Курбан-Байрам.' },
        { title: 'Шум больше не беспокоит вас', text: 'Высококачественные окна SamGlass с современным дизайном защитят вашу комнату от любых шумов.' },
        { title: 'Samglass — залог вашей безопасности', text: 'Благодаря прочным и долговечным окнам Samglass с современным дизайном ваша безопасность полностью обеспечена.' },
      ],
    },
    contacts: {
      title: 'Контакты',
      intro: 'Вот наши контактные данные для связи. Вы можете позвонить нам, отправить электронное письмо или воспользоваться контактной формой. Мы всегда готовы помочь, ответить на ваши вопросы и предложить индивидуальные решения.',
      addressLabel: 'Адрес',
      address: 'ул. Рудаки 164, Самарканд, Узбекистан',
      phoneLabel: 'Номер телефона',
      emailLabel: 'Почта',
    },
  },

  uz: {
    about: {
      title: 'Samglass — muvaffaqiyatdagi hamkoringiz',
      intro: 'Biz fasad oynalari ishlab chiqarishda yetakchilardan birimiz. Samglass — mijozlariga yuqori sifatli mahsulot va xizmatlar taklif etadigan ishonchli va professional ishlab chiqaruvchi.',
      whyTitle: 'Nega SamGlass?',
      whyText: 'Oynalarimiz yuqori harorat va bosimga chidamli. Samglass — ko‘p yillik tajriba va yetuk mutaxassislarga ega kompaniya. O‘lcham tanlash, yetkazib berish va mahsulotingizni o‘z vaqtida tayyorlash xizmatlarini kafolatlaymiz!',
      stats: [
        { num: '3000 м²', label: 'Ishlab chiqarish maydoni' },
        { num: '4500+', label: 'Mamnun mijozlar' },
        { num: '100+', label: 'Amalga oshirilgan loyihalar' },
        { num: '10+', label: 'Yillik tajriba' },
      ],
      teamLine: 'Maqsad va orzularingizga erishish uchun jamoamizning professionalligi va tajribasiga ishoning.',
      advantagesTitle: 'Bizning afzalliklarimiz',
      advantages: [
        { title: 'Katta tajriba', text: 'Samglass jamoasi steklopaketlar ishlab chiqarish va o‘rnatishda ko‘p yillik tajribaga ega, bu har bir loyihaga to‘g‘ri yondashish va ishni eng yuqori darajada bajarish imkonini beradi.' },
        { title: 'Mahsulot sifati', text: 'Faqat yuqori sifatli materiallar va zamonaviy uskunalardan foydalanamiz hamda yuqori sifat va ishonchlilik standartlariga muvofiqlik uchun har bir bosqichni qat’iy nazorat qilamiz.' },
        { title: 'Mijozga yo‘naltirilganlik', text: 'Har bir mijozning ehtiyojiga e’tibor bilan yondashamiz va aynan sizning vazifalaringizga mos individual yechimlarni taklif qilamiz.' },
        { title: 'Innovatsiya', text: 'Samglass jamoasi steklopaket ishlab chiqarishdagi yangi tendensiya va texnologiyalarni kuzatadi va mahsulot sifati uchun ularni ishda qo‘llaydi.' },
      ],
      capsTitle: 'Ishlab chiqarishimiz va imkoniyatlarimiz',
      caps: ['Toblangan shisha', 'Olmosli gravirovka', 'Steklopaket yig‘ish liniyasi', 'Shisha teshish (burg‘ulash)', 'Tripleks', 'Fatset', 'Peskostruy ishlov', 'Mollirovaniye', 'Badiiy shishalar', 'Shisha ishlab chiqarish liniyasi', 'Lazerli silliqlash', 'Bo‘yalgan shisha', 'Shisha kesish'],
    },
    projects: {
      title: 'Loyihalar',
      sub: 'Samglass amalga oshirgan loyihalar — banklar va savdo markazlaridan tortib klinikalar va xususiy uylargacha.',
      items: [
        { title: '«Asaka» bank filialiga fasad oynalarini o‘rnatish', text: 'Bank bo‘limi uchun zamonaviy fasad oynalari — ishonchlilik, energiya samaradorligi va nufuzli tashqi ko‘rinish.' },
        { title: 'Samarqanddagi savdo markazini fasad oynalari bilan jihozlash', text: 'Savdo markazi fasadini keng ko‘lamli oynalash — mustahkamlik va estetikaga urg‘u.' },
        { title: 'Samglass’dan avtomatik suriladigan eshiklar', text: 'Ishonchli mexanizmlarga ega avtomatik suriladigan shisha eshiklarni o‘rnatish.' },
        { title: 'Klinika uchun futuristik shishalarni o‘rnatish', text: 'Tibbiyot muassasasi uchun zamonaviy shisha yechimlari — toza chiziqlar va funksionallik.' },
      ],
    },
    news: {
      title: 'Yangiliklar',
      featured: { title: 'SamGlass’dan shisha dush kabinalar', text1: 'Bugun shisha dush kabinalarni minimalizm tarafdorlari va shaxsiy gigiyenaga e’tibor beradiganlar tanlaydi. SamGlass brendining qora rangli dush kabinalari qulaylikni qadrlaydiganlar uchun ajoyib tanlov bo‘ladi.', text2: 'SamGlass kompaniyasi hammom, mehmonxona, dala hovli yoki kvartira uchun eng yangi dizayndagi yuqori sifatli dush kabinalarni hamyonbop narxda taklif etadi. Xaridorlar o‘zlari xohlagan tur va o‘lchamdagi kabinani tanlash imkoniyatiga ega.' },
      moreTitle: 'Boshqa yangiliklar',
      items: [
        { title: 'Binongiz SamGlass oynalari bilan yanada mustahkam bo‘ladi', text: 'Yuqori sifatli materiallardan tayyorlangan SamGlass oynalari binongiz mustahkamligini oshiradi va xavfsizligingizni ta’minlaydi.' },
        { title: 'Nega aynan SamGlass?', text: 'Yuqori sifatli materiallardan tayyorlangan SamGlass oynalari shovqinni o‘tkazmaydi va uzoq xizmat qiladi.' },
        { title: 'Biznes-markazingiz ko‘rinishini SamGlass’ga ishoning', text: 'SamGlass oynalari — zamonaviy, yuqori sifatli va uzoq muddatli, biznes-markazingiz uchun ideal.' },
        { title: 'Zamon bilan hamnafas bo‘ling', text: 'Muassasangiz nafaqat sifati, balki zamonaviy tashqi ko‘rinishi bilan ham ajralib turishi kerak.' },
        { title: 'SamGlass oynalari bilan zamonaviy bo‘ling', text: 'Universitetlar soni ortib borayotgan bir paytda muassasangiz sifati va ko‘rinishi bilan ajralib turishi lozim.' },
        { title: 'SamGlass’dan Qurbon hayit muborak', text: 'Sam Glass kompaniyasi sizni muborak Qurbon hayiti bilan tabriklaydi.' },
        { title: 'Shovqin endi sizni bezovta qilmaydi', text: 'Zamonaviy dizayndagi yuqori sifatli SamGlass oynalari xonangizni har qanday shovqindan himoya qiladi.' },
        { title: 'Samglass — xavfsizligingiz kafolati', text: 'Zamonaviy dizayndagi mustahkam va uzoq muddatli Samglass oynalari tufayli xavfsizligingiz to‘liq ta’minlanadi.' },
      ],
    },
    contacts: {
      title: 'Kontaktlar',
      intro: 'Bog‘lanish uchun aloqa ma’lumotlarimiz. Bizga qo‘ng‘iroq qilishingiz, elektron xat yuborishingiz yoki aloqa formasidan foydalanishingiz mumkin. Biz har doim yordam berishga, savollaringizga javob berishga va individual yechimlar taklif qilishga tayyormiz.',
      addressLabel: 'Manzil',
      address: 'Rudakiy ko‘chasi 164, Samarqand, O‘zbekiston',
      phoneLabel: 'Telefon raqami',
      emailLabel: 'Pochta',
    },
  },

  en: {
    about: {
      title: 'Samglass — your partner in success',
      intro: 'We are one of the leaders in facade glass manufacturing. Samglass is a reliable and professional manufacturer that offers high-quality products and services to its customers.',
      whyTitle: 'Why SamGlass?',
      whyText: 'Our glass is resistant to high temperatures and pressure. Samglass is a company with years of experience and mature specialists. We guarantee sizing, delivery and timely preparation of your products!',
      stats: [
        { num: '3000 м²', label: 'Production area' },
        { num: '4500+', label: 'Satisfied customers' },
        { num: '100+', label: 'Realized projects' },
        { num: '10+', label: 'Years of experience' },
      ],
      teamLine: 'Trust the professionalism and experience of our team to achieve your goals and ambitions.',
      advantagesTitle: 'Our advantages',
      advantages: [
        { title: 'Extensive experience', text: 'The Samglass team has years of experience in producing and installing glass units, allowing a thorough approach to every project and work of the highest level.' },
        { title: 'Product quality', text: 'We use only high-quality materials and modern equipment, and strictly control every stage of production to meet high standards of quality and reliability.' },
        { title: 'Customer focus', text: 'We pay close attention to the needs of every client and offer individual solutions that match exactly your tasks.' },
        { title: 'Innovation', text: 'The Samglass team follows new trends and technologies in glass-unit production and applies them in its work for high product quality.' },
      ],
      capsTitle: 'Our production and capabilities',
      caps: ['Tempered glass', 'Diamond glass engraving', 'Glass-unit assembly line', 'Glass drilling', 'Triplex', 'Bevel (facet)', 'Glass sandblasting', 'Glass bending', 'Artistic glass', 'Glass production line', 'Laser glass polishing', 'Painted glass', 'Glass cutting'],
    },
    projects: {
      title: 'Projects',
      sub: 'Projects implemented by Samglass — from banks and shopping centers to clinics and private homes.',
      items: [
        { title: 'Installation of facade windows for the «Asaka» bank branch', text: 'Modern facade glass for a bank branch — reliability, energy efficiency and a presentable appearance.' },
        { title: 'Equipping a shopping center in Samarkand with facade windows', text: 'Large-scale facade glazing of a shopping center with a focus on strength and aesthetics.' },
        { title: 'Automatic sliding doors by Samglass', text: 'Installation of automatic sliding glass doors with reliable mechanisms.' },
        { title: 'Installation of futuristic glass for a clinic', text: 'Modern glass solutions for a medical facility — clean lines and functionality.' },
      ],
    },
    news: {
      title: 'News',
      featured: { title: 'Glass shower cabins by SamGlass', text1: 'Today glass shower cabins are chosen by fans of minimalism and those who care about personal hygiene. Black shower cabins by SamGlass are an excellent choice for those who value comfort.', text2: 'SamGlass offers high-quality shower cabins with the latest design at an affordable price — for a bathroom, hotel, country house or apartment. Customers can choose the type and size of cabin they want.' },
      moreTitle: 'Other news',
      items: [
        { title: 'Your building will be stronger with SamGlass windows', text: 'SamGlass windows made of high-quality materials will increase the strength of your building and ensure your safety.' },
        { title: 'Why SamGlass?', text: 'SamGlass windows made of high-quality materials block noise and last a long time.' },
        { title: 'Trust the look of your business center to SamGlass', text: 'SamGlass windows are modern, high-quality and durable — ideal for your business center.' },
        { title: 'Keep up with the times', text: 'Your institution needs to stand out not only by quality but also by a modern appearance.' },
        { title: 'Be in style with SamGlass windows', text: 'With the growing number of universities, your institution should stand out by quality and appearance.' },
        { title: 'Happy Eid al-Adha from SamGlass', text: 'Sam Glass congratulates you on the blessed holiday of Eid al-Adha.' },
        { title: 'Noise no longer bothers you', text: 'High-quality SamGlass windows with a modern design will protect your room from any noise.' },
        { title: 'Samglass — the key to your safety', text: 'Thanks to durable and long-lasting Samglass windows with a modern design, your safety is fully ensured.' },
      ],
    },
    contacts: {
      title: 'Contacts',
      intro: 'Here are our contact details. You can call us, send an email or use the contact form. We are always ready to help, answer your questions and offer individual solutions.',
      addressLabel: 'Address',
      address: 'Rudaki St. 164, Samarkand, Uzbekistan',
      phoneLabel: 'Phone number',
      emailLabel: 'Email',
    },
  },
}

export default pages
