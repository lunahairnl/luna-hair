```javascript
const translations = {

    ru: {
        home: "Главная",
        services: "Услуги",
        prices: "Цены",
        works: "Работы",
        reviews: "Отзывы",
        contact: "Контакты",

        subtitle: "Профессиональное наращивание волос",
        heroText: "Профессиональное наращивание волос с естественным результатом и вниманием к каждой детали.",
        whatsapp: "ЗАПИСАТЬСЯ В WHATSAPP",

        servicesTitle: "Наши услуги",
        worksTitle: "Наши работы",
        reviewsTitle: "Отзывы",
        contactTitle: "Контакты"
    },

    nl: {
        home: "Home",
        services: "Diensten",
        prices: "Prijzen",
        works: "Werk",
        reviews: "Reviews",
        contact: "Contact",

        subtitle: "Professionele hairextensions",
        heroText: "Professionele hairextensions met een natuurlijk resultaat en aandacht voor elk detail.",
        whatsapp: "AFSPRAAK VIA WHATSAPP",

        servicesTitle: "Onze diensten",
        worksTitle: "Ons werk",
        reviewsTitle: "Reviews",
        contactTitle: "Contact"
    },

    en: {
        home: "Home",
        services: "Services",
        prices: "Prices",
        works: "Portfolio",
        reviews: "Reviews",
        contact: "Contact",

        subtitle: "Professional Hair Extensions",
        heroText: "Professional hair extensions with a natural result and attention to every detail.",
        whatsapp: "BOOK VIA WHATSAPP",

        servicesTitle: "Our Services",
        worksTitle: "Our Work",
        reviewsTitle: "Reviews",
        contactTitle: "Contact"
    },

    ua: {
        home: "Головна",
        services: "Послуги",
        prices: "Ціни",
        works: "Роботи",
        reviews: "Відгуки",
        contact: "Контакти",

        subtitle: "Професійне нарощування волосся",
        heroText: "Професійне нарощування волосся з природним результатом та увагою до кожної деталі.",
        whatsapp: "ЗАПИСАТИСЯ У WHATSAPP",

        servicesTitle: "Наші послуги",
        worksTitle: "Наші роботи",
        contactTitle: "Контакти",
        reviewsTitle: "Відгуки"
    }

};


function setLanguage(language) {

    localStorage.setItem("lunaLanguage", language);

    const text = translations[language];

    if (!text) {
        return;
    }

    document.querySelectorAll("[data-lang]").forEach(function(element) {

        const key = element.getAttribute("data-lang");

        if (text[key]) {
            element.textContent = text[key];
        }

    });

}


const savedLanguage = localStorage.getItem("lunaLanguage") || "ru";

setLanguage(savedLanguage);
```
