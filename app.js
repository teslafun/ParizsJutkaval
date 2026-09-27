
const SAMPLE_DATA = {
  "categories": [
    {
      "id": "all",
      "name": {
        "hu": "Összes",
        "en": "All",
        "fr": "Toutes"
      }
    },
    {
      "id": "paris",
      "name": {
        "hu": "Párizs",
        "en": "Paris",
        "fr": "Paris"
      }
    },
    {
      "id": "france",
      "name": {
        "hu": "Franciaország",
        "en": "France",
        "fr": "France"
      }
    },
    {
      "id": "culture_history",
      "name": {
        "hu": "Kultúra & történelem",
        "en": "Culture & history",
        "fr": "Culture & histoire"
      }
    },
    {
      "id": "art",
      "name": {
        "hu": "Művészet",
        "en": "Art",
        "fr": "Art"
      }
    },
    {
      "id": "gastronomy",
      "name": {
        "hu": "Gasztronómia",
        "en": "Gastronomy",
        "fr": "Gastronomie"
      }
    },
    {
      "id": "trips",
      "name": {
        "hu": "Kirándulások",
        "en": "Trips",
        "fr": "Escapades"
      }
    },
    {
      "id": "jutka_tells",
      "name": {
        "hu": "Jutka mesél",
        "en": "Jutka tells",
        "fr": "Jutka raconte"
      }
    }
  ],
  "series": [
    {
      "id": "monet_giverny",
      "title": {
        "hu": "Monet és Giverny",
        "en": "Monet and Giverny",
        "fr": "Monet et Giverny"
      },
      "episodes": 5
    }
  ],
  "videos": [
    {
      "id": "001",
      "title": {
        "hu": "Monet és Giverny – 1. rész",
        "en": "Monet and Giverny – Part 1",
        "fr": "Monet et Giverny – Épisode 1"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris",
        "france",
        "culture_history",
        "art",
        "jutka_tells"
      ],
      "series_id": "monet_giverny",
      "episode": 1,
      "orientation": "landscape",
      "facebook_url": "https://www.facebook.com/reel/2095173488099029",
      "youtube_id": "EBEFYElmflM"
    },
    {
      "id": "002",
      "title": {
        "hu": "Monet és Giverny – 2. rész",
        "en": "Monet and Giverny – Part 2",
        "fr": "Monet et Giverny – Épisode 2"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris",
        "france",
        "culture_history",
        "art",
        "jutka_tells"
      ],
      "series_id": "monet_giverny",
      "episode": 2,
      "orientation": "landscape",
      "facebook_url": "https://www.facebook.com/reel/2137249670177772",
      "youtube_id": "3rXGdxblth4"
    },
    {
      "id": "003",
      "title": {
        "hu": "Monet és Giverny – 3. rész",
        "en": "Monet and Giverny – Part 3",
        "fr": "Monet et Giverny – Épisode 3"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris",
        "france",
        "culture_history",
        "art",
        "jutka_tells"
      ],
      "series_id": "monet_giverny",
      "episode": 3,
      "orientation": "landscape",
      "facebook_url": "https://www.facebook.com/reel/1324417502952644",
      "youtube_id": "wxEMsOFPxNc"
    },
    {
      "id": "004",
      "title": {
        "hu": "Monet és Giverny – 4. rész",
        "en": "Monet and Giverny – Part 4",
        "fr": "Monet et Giverny – Épisode 4"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris",
        "france",
        "culture_history",
        "art",
        "jutka_tells"
      ],
      "series_id": "monet_giverny",
      "episode": 4,
      "orientation": "landscape",
      "facebook_url": "https://www.facebook.com/reel/1916934712340936",
      "youtube_id": "tksZDA1p2t8"
    },
    {
      "id": "005",
      "title": {
        "hu": "Monet és Giverny – 5. rész",
        "en": "Monet and Giverny – Part 5",
        "fr": "Monet et Giverny – Épisode 5"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris",
        "france",
        "culture_history",
        "art",
        "jutka_tells"
      ],
      "series_id": "monet_giverny",
      "episode": 5,
      "orientation": "portrait",
      "facebook_url": "https://www.facebook.com/reel/36049970434647802",
      "youtube_id": "K5joBWKZ8ho"
    },
    {
      "id": "006",
      "title": {
        "hu": "Párizs",
        "en": "Paris",
        "fr": "Paris"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris"
      ],
      "series_id": null,
      "episode": null,
      "orientation": "landscape",
      "facebook_url": "https://www.facebook.com/reel/1502104838040821",
      "youtube_id": "x7I2OX-JCYk"
    },
    {
      "id": "007",
      "title": {
        "hu": "Notre-Dame",
        "en": "Notre-Dame",
        "fr": "Notre-Dame"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris",
        "france",
        "culture_history"
      ],
      "series_id": null,
      "episode": null,
      "orientation": "landscape",
      "facebook_url": "https://www.facebook.com/reel/980800928251857",
      "youtube_id": "bopzoe2HUPU"
    },
    {
      "id": "008",
      "title": {
        "hu": "Moulin Rouge",
        "en": "Moulin Rouge",
        "fr": "Moulin Rouge"
      },
      "description": {
        "hu": "",
        "en": "",
        "fr": ""
      },
      "categories": [
        "paris",
        "france"
      ],
      "series_id": null,
      "episode": null,
      "orientation": "landscape",
      "facebook_url": "https://www.facebook.com/reel/1031775829521381",
      "youtube_id": "yPg3s55IHw8"
    }
  ]
};


// Temporary YouTube test video. Replace later with each video's own YouTube ID.
const TEST_YOUTUBE_ID = "M7lc1UVf-VE";


const SITE_TITLES = {
  "hu": "Barangolj Párizsban Jutkával",
  "en": "Wander Around Paris with Jutka",
  "fr": "Explorez Paris avec Jutka"
};


const state = {
  lang: localStorage.getItem("pj-language") || "hu",
  category: "all",
  data: null
};


const ui = {
  hu: {
    brand: "Párizs Jutkával",
    nav_videos: "Videók",
    nav_about: "Rólam",
    nav_contact: "Kapcsolat",
    eyebrow: "ÜDVÖZLÜNK",
    hero_title: "Fedezd fel<br>videóinkat",
    hero_text: "Inspiráló történetek, utazások, élmények és sok más. Nézd meg legújabb videóinkat!",
    hero_button: "Videók megtekintése",
    featured: "Kiemelt videó",
    featured_title: "Párizsi történetek",
    featured_text: "A kiemelt videó helye.",
    latest: "Videók",
    about_title: "Rólam",
    about_text: "Párizs történetei, helyei és élményei Jutka szemével.",
    contact_title: "Kapcsolat",
    contact_text: "Kapcsolatfelvételhez szükséges információk.",
    footer_text: "Inspiráló történetek, utazások, élmények és sok más.",
    footer_nav: "Navigáció",
    language: "Nyelv"
  },

  en: {
    brand: "Paris with Jutka",
    nav_videos: "Videos",
    nav_about: "About",
    nav_contact: "Contact",
    eyebrow: "WELCOME",
    hero_title: "Discover<br>our videos",
    hero_text: "Inspiring stories, journeys, experiences and more. Explore our latest videos!",
    hero_button: "Watch videos",
    featured: "Featured video",
    featured_title: "Paris stories",
    featured_text: "Featured video placeholder.",
    latest: "Videos",
    about_title: "About us",
    about_text: "Stories, places and experiences from Paris through Jutka's eyes.",
    contact_title: "Contact",
    contact_text: "Contact information.",
    footer_text: "Inspiring stories, journeys, experiences and more.",
    footer_nav: "Navigation",
    language: "Language"
  },

  fr: {
    brand: "Paris avec Jutka",
    nav_videos: "Vidéos",
    nav_about: "À propos",
    nav_contact: "Contact",
    eyebrow: "BIENVENUE",
    hero_title: "Découvrez<br>nos vidéos",
    hero_text: "Histoires, voyages, expériences et bien plus. Découvrez nos dernières vidéos !",
    hero_button: "Voir les vidéos",
    featured: "Vidéo à la une",
    featured_title: "Histoires de Paris",
    featured_text: "Emplacement de la vidéo à la une.",
    latest: "Vidéos",
    about_title: "À propos",
    about_text: "Histoires, lieux et expériences de Paris à travers les yeux de Jutka.",
    contact_title: "Contact",
    contact_text: "Informations de contact.",
    footer_text: "Histoires, voyages, expériences et bien plus.",
    footer_nav: "Navigation",
    language: "Langue"
  }
};


function setLanguage(lang) {
  state.lang = lang;

  localStorage.setItem("pj-language", lang);

  document.documentElement.lang = lang;

  if (SITE_TITLES[lang]) {
    ui[lang].brand = SITE_TITLES[lang];
  }

  document.title = ui[lang].brand;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (ui[lang][key]) {
      element.innerHTML = ui[lang][key];
    }
  });

  document.querySelectorAll("[data-logo-alt]").forEach(logo => {
    logo.alt = ui[lang].brand;
  });

  document.querySelectorAll("[data-lang]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.lang === lang
    );
  });

  renderFilters();
  renderVideos();
}


function renderFilters() {
  const box = document.getElementById("filters");

  if (!box) {
    return;
  }

  box.innerHTML = "";

  state.data.categories.forEach(category => {
    const button = document.createElement("button");

    button.className =
      "filter" +
      (category.id === state.category ? " active" : "");

    button.textContent = category.name[state.lang];

    button.onclick = () => {
      state.category = category.id;

      renderFilters();
      renderVideos();
    };

    box.appendChild(button);
  });
}


function createYouTubeEmbed(video) {
  const wrapper = document.createElement("div");

  wrapper.className =
    "youtube-card" +
    (video.orientation === "landscape"
      ? " landscape"
      : " portrait");

  const player = document.createElement("div");
  player.className = "youtube-player";

  const iframe = document.createElement("iframe");

  iframe.src =
    "https://www.youtube-nocookie.com/embed/" +
    (video.youtube_id || TEST_YOUTUBE_ID);

  iframe.title = video.title[state.lang];
  iframe.loading = "lazy";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";

  player.appendChild(iframe);
  wrapper.appendChild(player);

  return wrapper;
}


function renderVideos() {
  const row = document.getElementById("video-row");

  if (!row) {
    return;
  }

  row.innerHTML = "";

  let list = state.data.videos;

  if (state.category !== "all") {
    list = list.filter(video =>
      video.categories.includes(state.category)
    );
  }

  list.forEach(video => {
    const card = document.createElement("article");

    card.className =
      "video-card " +
      (video.orientation === "landscape"
        ? "landscape"
        : "portrait");

    const series =
      video.series_id
        ? state.data.series.find(
            series => series.id === video.series_id
          )
        : null;

    const episode =
      video.episode && series
        ? `<span class="episode">${video.episode}/${series.episodes}</span>`
        : "";

    const seriesTitle =
      series
        ? series.title[state.lang]
        : "";

    const embed = createYouTubeEmbed(video);

    const body = document.createElement("div");

    body.className = "card-body";

    body.innerHTML = `
      ${seriesTitle
        ? `<div class="series">${seriesTitle}</div>`
        : ""
      }

      <h3>${video.title[state.lang]}</h3>

      ${
        video.description[state.lang]
          ? `<p>${video.description[state.lang]}</p>`
          : ""
      }
    `;

    if (episode) {
      embed.insertAdjacentHTML(
        "afterbegin",
        episode
      );
    }

    card.appendChild(embed);
    card.appendChild(body);

    row.appendChild(card);
  });
}


async function init() {
  try {
    const response = await fetch("data/videos.json");

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    state.data = await response.json();

  } catch (error) {
    console.warn(
      "A videos.json nem tölthető be, SAMPLE_DATA használata:",
      error
    );

    state.data = SAMPLE_DATA;
  }

  setLanguage(state.lang);
}


document.querySelectorAll("[data-lang]").forEach(button => {
  button.onclick = () =>
    setLanguage(button.dataset.lang);
});


init();