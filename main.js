```javascript
/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navMenu.classList.toggle("open");

    });

}


document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if(menuToggle){
            menuToggle.classList.remove("active");
        }

        if(navMenu){
            navMenu.classList.remove("open");
        }

    });

});


/* =====================================
   ACTIVE PAGE
===================================== */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-menu nav a").forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){
        link.classList.add("active");
    }

});


/* =====================================
   HERO SLIDER
===================================== */

const slides = document.querySelectorAll(".hero-slide");

if(slides.length){

    let currentSlide = 0;

    setInterval(() => {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    },5500);

}


/* =====================================
   TRANSLATIONS
===================================== */

const translations = {

    ru:{

        navHome:"Главная",
        navServices:"Услуги",
        navPrices:"Цены",
        navWorks:"Работы",
        navReviews:"Отзывы",
        navContact:"Контакты",

        heroSmall:"ПРОФЕССИОНАЛЬНОЕ НАРАЩИВАНИЕ ВОЛОС",
        heroText:"Красивые и естественные волосы, созданные специально для вас.",
        heroButton:"ЗАПИСАТЬСЯ",
        heroWorks:"ПОСМОТРЕТЬ РАБОТЫ",

        introTitle:"Красота начинается с волос",
        introText:"Профессиональное наращивание волос с вниманием к качеству, естественности и вашему индивидуальному образу.",

        service1Title:"Наращивание",
        service1Text:"Естественный результат и аккуратное крепление.",

        service2Title:"Качество",
        service2Text:"Работаем с качественными материалами и волосами.",

        service3Title:"Индивидуальный подход",
        service3Text:"Подбираем длину, оттенок и объём под вас.",

        bannerTitle:"Волосы, которые говорят за вас",
        bannerButton:"НАШИ УСЛУГИ",

        worksTitle:"Наши работы",
        worksText:"Каждая работа создаётся индивидуально с учётом структуры, оттенка и желаемого образа.",
        allWorks:"СМОТРЕТЬ ВСЕ РАБОТЫ",

        ctaTitle:"Готовы создать свой новый образ?",
        ctaText:"Напишите нам в WhatsApp и мы подберём подходящую процедуру именно для вас.",
        ctaButton:"НАПИСАТЬ В WHATSAPP",

        footerText:"Профессиональное наращивание волос.",
        footerNavigation:"Навигация",
        footerContact:"Контакты",
        footerAppointment:"Записаться"

    },


    nl:{

        navHome:"Home",
        navServices:"Diensten",
        navPrices:"Prijzen",
        navWorks:"Portfolio",
        navReviews:"Reviews",
        navContact:"Contact",

        heroSmall:"PROFESSIONELE HAARVERLENGING",
        heroText:"Mooi en natuurlijk haar, speciaal voor jou.",
        heroButton:"AFSPRAAK MAKEN",
        heroWorks:"PORTFOLIO BEKIJKEN",

        introTitle:"Schoonheid begint bij haar",
        introText:"Professionele haarverlenging met aandacht voor kwaliteit, natuurlijk resultaat en jouw persoonlijke stijl.",

        service1Title:"Haarverlenging",
        service1Text:"Een natuurlijk resultaat en nette bevestiging.",

        service2Title:"Kwaliteit",
        service2Text:"Wij werken met hoogwaardige materialen en haar.",

        service3Title:"Persoonlijke aanpak",
        service3Text:"Wij kiezen lengte, kleur en volume passend bij jou.",

        bannerTitle:"Haar dat voor jou spreekt",
        bannerButton:"ONZE DIENSTEN",

        worksTitle:"Ons werk",
        worksText:"Elke behandeling wordt afgestemd op jouw haar, kleur en gewenste uitstraling.",
        allWorks:"ALLE WERKEN BEKIJKEN",

        ctaTitle:"Klaar voor jouw nieuwe look?",
        ctaText:"Stuur ons een bericht via WhatsApp en we helpen je de juiste behandeling te kiezen.",
        ctaButton:"WHATSAPP BERICHT",

        footerText:"Professionele haarverlenging.",
        footerNavigation:"Navigatie",
        footerContact:"Contact",
        footerAppointment:"Afspraak maken"

    },


    en:{

        navHome:"Home",
        navServices:"Services",
        navPrices:"Prices",
        navWorks:"Portfolio",
        navReviews:"Reviews",
        navContact:"Contact",

        heroSmall:"PROFESSIONAL HAIR EXTENSIONS",
        heroText:"Beautiful and natural hair, created especially for you.",
        heroButton:"BOOK AN APPOINTMENT",
        heroWorks:"VIEW PORTFOLIO",

        introTitle:"Beauty begins with hair",
        introText:"Professional hair extensions with attention to quality, natural results and your personal style.",

        service1Title:"Hair Extensions",
        service1Text:"A natural result and neat application.",

        service2Title:"Quality",
        service2Text:"We work with high-quality hair and materials.",

        service3Title:"Personal Approach",
        service3Text:"We choose the length, shade and volume for you.",

        bannerTitle:"Hair that speaks for you",
        bannerButton:"OUR SERVICES",

        worksTitle:"Our Work",
        worksText:"Every look is created individually according to your hair, shade and desired style.",
        allWorks:"VIEW ALL WORK",

        ctaTitle:"Ready for your new look?",
        ctaText:"Send us a WhatsApp message and we will help you choose the right treatment.",
        ctaButton:"MESSAGE ON WHATSAPP",

        footerText:"Professional hair extensions.",
        footerNavigation:"Navigation",
        footerContact:"Contact",
        footerAppointment:"Book an appointment"

    },


    ua:{

        navHome:"Головна",
        navServices:"Послуги",
        navPrices:"Ціни",
        navWorks:"Роботи",
        navReviews:"Відгуки",
        navContact:"Контакти",

        heroSmall:"ПРОФЕСІЙНЕ НАРОЩУВАННЯ ВОЛОССЯ",
        heroText:"Красиве та натуральне волосся, створене спеціально для вас.",
        heroButton:"ЗАПИСАТИСЯ",
        heroWorks:"ПЕРЕГЛЯНУТИ РОБОТИ",

        introTitle:"Краса починається з волосся",
        introText:"Професійне нарощування волосся з увагою до якості, натуральності та вашого індивідуального образу.",

        service1Title:"Нарощування",
        service1Text:"Натуральний результат та акуратне кріплення.",

        service2Title:"Якість",
        service2Text:"Працюємо з якісними матеріалами та волоссям.",

        service3Title:"Індивідуальний підхід",
        service3Text:"Підбираємо довжину, відтінок та об'єм саме для вас.",

        bannerTitle:"Волосся, яке говорить за вас",
        bannerButton:"НАШІ ПОСЛУГИ",

        worksTitle:"Наші роботи",
        worksText:"Кожна робота створюється індивідуально з урахуванням структури, відтінку та бажаного образу.",
        allWorks:"ПЕРЕГЛЯНУТИ ВСІ РОБОТИ",

        ctaTitle:"Готові створити новий образ?",
        ctaText:"Напишіть нам у WhatsApp і ми допоможемо підібрати процедуру саме для вас.",
        ctaButton:"НАПИСАТИ У WHATSAPP",

        footerText:"Професійне нарощування волосся.",
        footerNavigation:"Навігація",
        footerContact:"Контакти",
        footerAppointment:"Записатися"

    }

};


/* =====================================
   LANGUAGE
===================================== */

function setLanguage(lang){

    const data = translations[lang];

    if(!data) return;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if(data[key]){
            element.textContent = data[key];
        }

    });

    document.documentElement.lang = lang;

    localStorage.setItem("lunaLanguage",lang);

    document.querySelectorAll("[data-lang]").forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.lang === lang
        );

    });

}


document.querySelectorAll("[data-lang]").forEach(button => {

    button.addEventListener("click", () => {

        setLanguage(button.dataset.lang);

    });

});


const savedLanguage =
    localStorage.getItem("lunaLanguage") || "ru";

setLanguage(savedLanguage);
```
