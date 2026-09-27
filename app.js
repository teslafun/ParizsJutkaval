
const MENU = {
  videos: {
    hu: "Videók",
    en: "Videos",
    fr: "Vidéos"
  },

  about: {
    hu: "Rólam",
    en: "About me",
    fr: "À propos de moi"
  },

  contact: {
    hu: "Kapcsolat",
    en: "Contact",
    fr: "Contact"
  }
};


// ==================================================
// YOUTUBE TEST VIDEO
// ==================================================
//
// Egyelőre minden kártya ezt a YouTube-videót használja.
// Később ezt a videos.json-ban videónként saját
// youtube_id értékre cseréljük.
//

const TEST_YOUTUBE_ID = "M7lc1UVf-VE";


// ==================================================
// STATE
// ==================================================

const state = {
  lang: localStorage.getItem("pj-language") || "hu",
  category: "all",
  data: null
};


// ==================================================
// UI TRANSLATIONS
// ==================================================

const ui = {

  hu: {

    brand: "Párizs Jutkával",

    nav_videos: MENU.videos.hu,
    nav_about: MENU.about.hu,
    nav_contact: MENU.contact.hu,

    eyebrow: "ÜDVÖZLÜNK",

    hero_title:
      "Fedezd fel<br>videóinkat",

    hero_text:
      "Inspiráló történetek, utazások, élmények és sok más. Nézd meg legújabb videóinkat!",

    hero_button:
      "Videók megtekintése",

    featured:
      "Kiemelt videó",

    featured_title:
      "Párizsi történetek",

    featured_text:
      "A kiemelt videó helye.",

    latest:
      MENU.videos.hu,

    about_title:
      MENU.about.hu,

    about_text:
      "Párizs történetei, helyei és élményei Jutka szemével.",

    contact_title:
      MENU.contact.hu,

    contact_text:
      "Kapcsolatfelvételhez szükséges információk.",

    footer_text:
      "Inspiráló történetek, utazások, élmények és sok más.",

    footer_nav:
      "Navigáció",

    language:
      "Nyelv"
  },


  en: {

    brand:
      "Paris with Jutka",

    nav_videos:
      MENU.videos.en,

    nav_about:
      MENU.about.en,

    nav_contact:
      MENU.contact.en,

    eyebrow:
      "WELCOME",

    hero_title:
      "Discover<br>our videos",

    hero_text:
      "Inspiring stories, journeys, experiences and more. Explore our latest videos!",

    hero_button:
      "Watch videos",

    featured:
      "Featured video",

    featured_title:
      "Paris stories",

    featured_text:
      "Featured video placeholder.",

    latest:
      MENU.videos.en,

    about_title:
      MENU.about.en,

    about_text:
      "Stories, places and experiences from Paris through Jutka's eyes.",

    contact_title:
      MENU.contact.en,

    contact_text:
      "Contact information.",

    footer_text:
      "Inspiring stories, journeys, experiences and more.",

    footer_nav:
      "Navigation",

    language:
      "Language"
  },


  fr: {

    brand:
      "Paris avec Jutka",

    nav_videos:
      MENU.videos.fr,

    nav_about:
      MENU.about.fr,

    nav_contact:
      MENU.contact.fr,

    eyebrow:
      "BIENVENUE",

    hero_title:
      "Découvrez<br>nos vidéos",

    hero_text:
      "Histoires, voyages, expériences et bien plus. Découvrez nos dernières vidéos !",

    hero_button:
      "Voir les vidéos",

    featured:
      "Vidéo à la une",

    featured_title:
      "Histoires de Paris",

    featured_text:
      "Emplacement de la vidéo à la une.",

    latest:
      MENU.videos.fr,

    about_title:
      MENU.about.fr,

    about_text:
      "Histoires, lieux et expériences de Paris à travers les yeux de Jutka.",

    contact_title:
      MENU.contact.fr,

    contact_text:
      "Informations de contact.",

    footer_text:
      "Histoires, voyages, expériences et bien plus.",

    footer_nav:
      "Navigation",

    language:
      "Langue"
  }

};


// ==================================================
// LANGUAGE
// ==================================================

function setLanguage(lang) {

  state.lang = lang;

  localStorage.setItem(
    "pj-language",
    lang
  );

  document.documentElement.lang = lang;

  document.title =
    ui[lang].brand;


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (ui[lang][key]) {

        element.innerHTML =
          ui[lang][key];

      }

    });


  document
    .querySelectorAll("[data-lang]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );

    });


  renderFilters();

  renderVideos();
}


// ==================================================
// CATEGORY FILTERS
// ==================================================

function renderFilters() {

  const box =
    document.getElementById("filters");


  if (!box) {
    return;
  }


  box.innerHTML = "";


  state.data.categories.forEach(category => {

    const button =
      document.createElement("button");


    button.className =
      "filter" +
      (
        category.id === state.category
          ? " active"
          : ""
      );


    button.textContent =
      category.name[state.lang];


    button.onclick = () => {

      state.category =
        category.id;

      renderFilters();

      renderVideos();

    };


    box.appendChild(button);

  });

}


// ==================================================
// YOUTUBE PLAYER
// ==================================================

function createYouTubeEmbed(video) {

  const wrapper =
    document.createElement("div");


  wrapper.className =
    "youtube-card";


  if (
    video.orientation === "landscape"
  ) {

    wrapper.classList.add(
      "landscape"
    );

  } else {

    wrapper.classList.add(
      "portrait"
    );

  }


  const player =
    document.createElement("div");


  player.className =
    "youtube-player";


  const iframe =
    document.createElement("iframe");


 iframe.src =
  "https://www.youtube-nocookie.com/embed/" +
  (video.youtube_id || TEST_YOUTUBE_ID);

  iframe.title =
    video.title[state.lang];


  iframe.loading =
    "lazy";


  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";


  iframe.allowFullscreen =
    true;


  iframe.referrerPolicy =
    "strict-origin-when-cross-origin";


  player.appendChild(
    iframe
  );


  wrapper.appendChild(
    player
  );


  return wrapper;
}


// ==================================================
// VIDEO CARDS
// ==================================================

function renderVideos() {

  const row =
    document.getElementById(
      "video-row"
    );


  if (!row) {
    return;
  }


  row.innerHTML = "";


  let list =
    state.data.videos;


  if (
    state.category !== "all"
  ) {

    list =
      list.filter(video =>
        video.categories.includes(
          state.category
        )
      );

  }


  list.forEach(video => {

    const card =
      document.createElement(
        "article"
      );


    card.className =
      "video-card " +
      (
        video.orientation === "landscape"
          ? "landscape"
          : "portrait"
      );


    // ----------------------------------------------
    // SERIES
    // ----------------------------------------------

    const series =
      video.series_id
        ? state.data.series.find(
            item =>
              item.id ===
              video.series_id
          )
        : null;


    const episode =
      video.episode &&
      series
        ? `<span class="episode">${video.episode}/${series.episodes}</span>`
        : "";


    const seriesTitle =
      series
        ? series.title[state.lang]
        : "";


    // ----------------------------------------------
    // YOUTUBE
    // ----------------------------------------------

    const embed =
      createYouTubeEmbed(
        video
      );


    // ----------------------------------------------
    // CARD BODY
    // ----------------------------------------------

    const body =
      document.createElement(
        "div"
      );


    body.className =
      "card-body";


    if (seriesTitle) {

      const seriesElement =
        document.createElement(
          "div"
        );

      seriesElement.className =
        "series";

      seriesElement.textContent =
        seriesTitle;

      body.appendChild(
        seriesElement
      );

    }


    const title =
      document.createElement(
        "h3"
      );


    title.textContent =
      video.title[state.lang];


    body.appendChild(
      title
    );


    if (
      video.description &&
      video.description[state.lang]
    ) {

      const description =
        document.createElement(
          "p"
        );

      description.textContent =
        video.description[
          state.lang
        ];


      body.appendChild(
        description
      );

    }


    // ----------------------------------------------
    // EPISODE BADGE
    // ----------------------------------------------

    if (episode) {

      embed.insertAdjacentHTML(
        "afterbegin",
        episode
      );

    }


    // ----------------------------------------------
    // CARD
    // ----------------------------------------------

    card.appendChild(
      embed
    );

    card.appendChild(
      body
    );

    row.appendChild(
      card
    );

  });

}


// ==================================================
// LOAD VIDEOS.JSON
// ==================================================

async function init() {

  try {

    const response =
      await fetch(
        "data/videos.json"
      );


    if (!response.ok) {

      throw new Error(
        "HTTP " +
        response.status
      );

    }


    state.data =
      await response.json();


  } catch (error) {

    console.error(
      "A data/videos.json nem tölthető be:",
      error
    );


    return;

  }


  setLanguage(
    state.lang
  );

}


// ==================================================
// LANGUAGE BUTTONS
// ==================================================

document
  .querySelectorAll("[data-lang]")
  .forEach(button => {

    button.onclick = () => {

      setLanguage(
        button.dataset.lang
      );

    };

  });


// ==================================================
// START
// ==================================================

init();