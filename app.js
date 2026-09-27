const translations = {
  hu: {
    brand:"Párizs Jutkával", nav_videos:"Videók", nav_about:"Rólunk", nav_contact:"Kapcsolat",
    eyebrow:"ÜDVÖZLÜNK", hero_title:"Fedezd fel<br>videóinkat",
    hero_text:"Inspiráló történetek, utazások, élmények és sok más. Nézd meg legújabb videóinkat!",
    hero_button:"Videók megtekintése", featured:"Kiemelt videó", featured_title:"Csodálatos helyek Párizsban",
    featured_text:"Fedezd fel velünk Párizs különleges helyeit!", latest:"Legújabb videók", all_videos:"Összes videó ›",
    v1_title:"Párizs rejtett kincsei",v1_text:"Különleges helyek a turistákon túl.",
    v2_title:"Egy nap Párizsban",v2_text:"Látnivalók, hangulatok és tippek.",
    v3_title:"Montmartre történetei",v3_text:"Séta Párizs egyik legizgalmasabb negyedében.",
    v4_title:"Párizsi gyöngyszemek",v4_text:"Kevésbé ismert, különleges helyek.",
    v5_title:"A város másik arca",v5_text:"Párizs olyan oldalai, amelyeket érdemes felfedezni.",
    about_title:"Rólunk",about_text:"Párizs történetei, helyei és élményei Jutka szemével.",
    contact_title:"Kapcsolat",contact_text:"Hamarosan itt találod a kapcsolatfelvételhez szükséges információkat.",
    footer_text:"Inspiráló történetek, utazások, élmények és sok más.",footer_nav:"Navigáció",footer_info:"Információ",
    privacy:"Adatvédelem",terms:"Felhasználási feltételek",language:"Nyelv"
  },
  en: {
    brand:"Paris with Jutka", nav_videos:"Videos", nav_about:"About", nav_contact:"Contact",
    eyebrow:"WELCOME", hero_title:"Discover<br>our videos",
    hero_text:"Inspiring stories, journeys, experiences and more. Explore our latest videos!",
    hero_button:"Watch videos", featured:"Featured video", featured_title:"Amazing places in Paris",
    featured_text:"Discover special places in Paris with us!", latest:"Latest videos", all_videos:"All videos ›",
    v1_title:"Hidden gems of Paris",v1_text:"Special places beyond the usual tourist sights.",
    v2_title:"A day in Paris",v2_text:"Sights, atmosphere and useful tips.",
    v3_title:"Stories of Montmartre",v3_text:"A walk through one of Paris's most fascinating districts.",
    v4_title:"Parisian gems",v4_text:"Less-known and truly special places.",
    v5_title:"Another side of the city",v5_text:"Paris from a different perspective.",
    about_title:"About us",about_text:"Stories, places and experiences from Paris through Jutka's eyes.",
    contact_title:"Contact",contact_text:"Contact information will be available here soon.",
    footer_text:"Inspiring stories, journeys, experiences and more.",footer_nav:"Navigation",footer_info:"Information",
    privacy:"Privacy",terms:"Terms of use",language:"Language"
  },
  fr: {
    brand:"Paris avec Jutka", nav_videos:"Vidéos", nav_about:"À propos", nav_contact:"Contact",
    eyebrow:"BIENVENUE", hero_title:"Découvrez<br>nos vidéos",
    hero_text:"Histoires, voyages, expériences et bien plus. Découvrez nos dernières vidéos !",
    hero_button:"Voir les vidéos", featured:"Vidéo à la une", featured_title:"Les lieux magnifiques de Paris",
    featured_text:"Découvrez avec nous les lieux exceptionnels de Paris !", latest:"Dernières vidéos", all_videos:"Toutes les vidéos ›",
    v1_title:"Les trésors cachés de Paris",v1_text:"Des lieux uniques loin des circuits habituels.",
    v2_title:"Une journée à Paris",v2_text:"Sites, ambiances et conseils.",
    v3_title:"Histoires de Montmartre",v3_text:"Promenade dans l'un des quartiers les plus fascinants de Paris.",
    v4_title:"Les pépites parisiennes",v4_text:"Des endroits moins connus et vraiment spéciaux.",
    v5_title:"Un autre visage de la ville",v5_text:"Paris sous un autre angle.",
    about_title:"À propos",about_text:"Histoires, lieux et expériences de Paris à travers les yeux de Jutka.",
    contact_title:"Contact",contact_text:"Les informations de contact seront bientôt disponibles ici.",
    footer_text:"Histoires, voyages, expériences et bien plus.",footer_nav:"Navigation",footer_info:"Informations",
    privacy:"Confidentialité",terms:"Conditions d'utilisation",language:"Langue"
  }
};

function setLanguage(lang){
  const t=translations[lang]||translations.hu;
  document.documentElement.lang=lang;
  document.title=t.brand;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(t[key]!==undefined) el.innerHTML=t[key];
  });
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.lang===lang);
  });
  localStorage.setItem("pj-language",lang);
}
document.querySelectorAll("[data-lang]").forEach(btn=>{
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});
setLanguage(localStorage.getItem("pj-language")||"hu");
