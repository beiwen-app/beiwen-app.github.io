const translations = {
  zh: {
    nav: {
      brand: "备问 Beiwen",
      pill: "iPhone AI 助理",
      platforms: "双端版本",
      features: "核心能力",
      gallery: "产品截图",
      support: "支持",
      privacy: "隐私",
      terms: "条款"
    },
    common: {
      backHome: "返回首页"
    },
    hero: {
      kicker: "离线优先 · iPhone AI 助理",
      title: "没网也能先问，<br>先拿到参考答案。",
      subtitle: "备问是一个离线优先的 iPhone AI 助理。无论你在户外、旅行、弱网环境，还是只是想少用流量，都可以先进入主界面，再通过本地模型完成问答、翻译和图片辅助判断。",
      primary: "前往 App Store 下载",
      secondary: "了解核心能力",
      pill1: "无模型也能进入",
      pill2: "流式输出，可随时停止",
      pill3: "图片 + 翻译 + 应急问答",
      iosCaption: "iOS 版主界面",
      androidCaption: "Android 版主界面",
      appStoreNote: "iPhone 版支持本地模型和打赏型 IAP；Android 版本以实际发布状态为准。"
    },
    platforms: {
      kicker: "双端版本",
      title: "同一产品，两个原生入口",
      subtitle: "iPhone 和 Android 共用一套产品边界，但分别保留平台体验差异。iPhone 更强调启动后预热与打赏型 IAP，Android 更强调广告不遮挡关键回答和 Android 15 基线。",
      ios: {
        badge: "iPhone / iPad",
        title: "iPhone 版",
        desc: "打开后先进入主体验。模型下载不会阻塞入口，ready 后低优先级预热，尽量减少第一次提问等待。",
        point1: "无模型也能进 App",
        point2: "下载、校验、安装、ready 分段可见",
        point3: "免费使用 + 打赏型 IAP"
      },
      android: {
        badge: "Android 15+",
        title: "Android 版",
        desc: "Android 版本从 Android 15 起步，广告只承担变现，不打断输入、停止按钮和高风险提示。",
        point1: "Android 15 作为最低基线",
        point2: "广告不遮挡关键回答和停止按钮",
        point3: "下载任务可在后台继续"
      }
    },
    features: {
      kicker: "核心能力",
      title: "把答案做得可读、可停、可参考",
      subtitle: "备问不是通用云端聊天框，而是面向弱网和突发场景的本地优先助手。主路径围绕“先进入、先回答、可终止、可扫读”来设计。",
      card1: {
        title: "离线优先进入",
        desc: "没有模型时也能先进入 App，阅读功能介绍、查看下载状态，再决定是否开始下载。"
      },
      card2: {
        title: "流式输出可中止",
        desc: "回答按段落逐步显示，Stop 始终可见，用户可以随时停止并保留已经生成的内容。"
      },
      card3: {
        title: "图片辅助判断",
        desc: "支持帐篷、钓鱼点位、未知蘑菇和危险动物等高风险图片场景，只给观察与参考，不给确定性结论。"
      },
      card4: {
        title: "翻译与应急短句",
        desc: "在旅行、跨境和弱网时快速生成求助、问路、身体不适说明和简短沟通文本。"
      }
    },
    gallery: {
      kicker: "产品截图",
      title: "这些图来自我们生成的产品图",
      subtitle: "活动页直接引用这套素材，方便后续做 GitHub Pages 和版本更新。",
      ios: {
        1: "首页",
        2: "图片观察",
        3: "翻译",
        4: "回答",
        5: "模型中心"
      },
      android: {
        1: "首页",
        2: "图片观察",
        3: "翻译",
        4: "回答",
        5: "模型中心"
      }
    },
    footer: {
      support: "支持",
      privacy: "隐私政策",
      terms: "使用条款",
      note: "备问 Beiwen · iOS 和 Android · 离线优先应急 AI 助理"
    },
    supportPage: {
      title: "备问支持",
      intro: "如果你在安装、模型下载、翻译、图片观察或回答结果上遇到问题，可以先看下面这几条常见说明。",
      cards: {
        a: {
          title: "模型下载",
          desc: "备问允许你先进入主界面，再开始下载本地模型。下载完成不等于可用，模型还需要校验、安装并切换到 ready。"
        },
        b: {
          title: "iPhone 和 Android",
          desc: "iPhone 版更强调启动后的预热和打赏型 IAP，Android 版更强调广告不遮挡关键回答和停止按钮。"
        },
        c: {
          title: "高风险内容",
          desc: "遇到毒蛇、蘑菇、野外植物、医疗或法律等高风险场景时，答案只作为参考，不应替代专业帮助。"
        },
        d: {
          title: "联系",
          desc: "如需进一步帮助，请联系"
        }
      }
    },
    privacyPage: {
      title: "备问隐私政策",
      updated: "最后更新：2026 年 6 月 6 日",
      sections: {
        a: {
          title: "1. 我们尽量少拿你的数据",
          desc: "备问面向离线优先场景设计。产品的核心 AI 能力尽量在设备本地完成，不要求你创建账户，也不主动收集你的问答内容作为云端服务数据。"
        },
        b: {
          title: "2. 本地模型与下载",
          desc: "如果你下载本地模型，下载请求可能会产生标准网络元数据，例如 IP 地址、请求时间、设备信息和文件版本信息。模型文件会保存在你的设备上，直到你删除它或卸载应用。"
        },
        c: {
          title: "3. 图片与回答处理",
          desc: "当你在设备本地使用图片观察、翻译或问答功能时，相关输入会尽量在本机完成处理。高风险内容仍然只提供参考，不替代专业判断。"
        },
        d: {
          title: "4. 平台差异",
          desc: "iPhone 版本的打赏型 IAP 由 Apple 处理；如果启用 Android 广告变现，广告 SDK 可能按其自身政策处理标准广告数据。具体平台的处理方式以对应版本实际启用的分发和变现配置为准。"
        },
        e: {
          title: "5. 联系方式",
          desc: "如果你对这份隐私政策有疑问，请联系"
        }
      }
    },
    termsPage: {
      title: "备问使用条款",
      updated: "最后更新：2026 年 6 月 6 日",
      sections: {
        a: {
          title: "1. AI 输出仅供参考",
          desc: "备问提供的回答、翻译、图片观察和任何摘要都可能不完整或不准确。请在依赖结果前自行复核，尤其是医疗、法律、安全和紧急情况。"
        },
        b: {
          title: "2. 本地模型与可用性",
          desc: "本地模型下载、校验、安装和 ready 状态由设备与应用共同决定。下载完成不代表可立即使用，只有在模型准备就绪后，AI 功能才会启用。"
        },
        c: {
          title: "3. iPhone 与 Android",
          desc: "iPhone 版本可能提供打赏型 IAP；Android 版本可能提供广告支持。两者都不应阻断核心应急问答路径。"
        },
        d: {
          title: "4. 用户责任",
          desc: "你需要确保自己对所上传的图片、输入的文本和生成结果拥有相应的使用权，并在必要时获得他人同意。"
        }
      }
    }
  },
  en: {
    nav: {
      brand: "Beiwen",
      pill: "iPhone AI Assistant",
      platforms: "Platforms",
      features: "Capabilities",
      gallery: "Screenshots",
      support: "Support",
      privacy: "Privacy",
      terms: "Terms"
    },
    common: {
      backHome: "Back home"
    },
    hero: {
      kicker: "Offline-first · iPhone AI assistant",
      title: "Ask first, even without signal.",
      subtitle: "Beiwen is an offline-first AI assistant for iPhone. Whether you are outdoors, traveling, on a weak signal, or simply saving data, you can open the main experience first and then use the local model for Q&A, translation, and image-assisted checks.",
      primary: "Download on the App Store",
      secondary: "Explore the capabilities",
      pill1: "Enter without a model",
      pill2: "Streaming answers, stop anytime",
      pill3: "Images + translation + emergency Q&A",
      iosCaption: "iOS home screen",
      androidCaption: "Android home screen",
      appStoreNote: "The iPhone version supports local models and tip-style IAP; Android availability depends on its public release status."
    },
    platforms: {
      kicker: "Two platforms",
      title: "One product, two native entry points",
      subtitle: "iPhone and Android share the same product boundaries, while preserving each platform's experience. iPhone emphasizes startup warm-up and tip-style IAP; Android emphasizes non-blocking ads and the Android 15 baseline.",
      ios: {
        badge: "iPhone / iPad",
        title: "iPhone version",
        desc: "Enter the main experience first. Model download does not block the app entry, and low-priority warm-up starts once the model is ready.",
        point1: "Enter the app without a model",
        point2: "Download, verification, install, and ready states are visible",
        point3: "Free to use + tip-style IAP"
      },
      android: {
        badge: "Android 15+",
        title: "Android version",
        desc: "Android starts from Android 15, and ads are strictly for monetization—they never interrupt input, stop controls, or high-risk warnings.",
        point1: "Android 15 as the minimum baseline",
        point2: "Ads never cover key answers or the stop button",
        point3: "Downloads can continue in the background"
      }
    },
    features: {
      kicker: "Core capabilities",
      title: "Readable, stoppable, and useful answers",
      subtitle: "Beiwen is not a generic cloud chat box. It is a local-first assistant designed for weak-signal and urgent situations. The main flow is built around entering early, answering early, stopping anytime, and scanning fast.",
      card1: {
        title: "Offline-first entry",
        desc: "Even without a model, you can enter the app first, read the feature overview, and decide when to download."
      },
      card2: {
        title: "Streaming answers you can stop",
        desc: "Answers appear in chunks, Stop is always visible, and you can pause while keeping what has already been generated."
      },
      card3: {
        title: "Image-assisted checks",
        desc: "Useful for tents, fishing spots, unknown mushrooms, and dangerous animals—observe and reference only, never claim certainty."
      },
      card4: {
        title: "Translation and emergency phrases",
        desc: "Quickly generate help requests, directions, health notes, and short communication lines while traveling or on weak signals."
      }
    },
    gallery: {
      kicker: "Screenshots",
      title: "These images come from our generated product assets",
      subtitle: "The landing page reuses this asset set so GitHub Pages and version updates stay easy to maintain.",
      ios: {
        1: "Home",
        2: "Image observation",
        3: "Translation",
        4: "Answer",
        5: "Model center"
      },
      android: {
        1: "Home",
        2: "Image observation",
        3: "Translation",
        4: "Answer",
        5: "Model center"
      }
    },
    footer: {
      support: "Support",
      privacy: "Privacy policy",
      terms: "Terms of use",
      note: "Beiwen · iOS and Android · Offline-first emergency AI assistant"
    },
    supportPage: {
      title: "Beiwen support",
      intro: "If you run into trouble with installation, model download, translation, image checks, or answer quality, start with these common notes.",
      cards: {
        a: {
          title: "Model downloads",
          desc: "Beiwen lets you enter the main screen before downloading a local model. Downloaded does not mean ready; the model still needs verification, installation, and a ready state."
        },
        b: {
          title: "iPhone and Android",
          desc: "The iPhone version emphasizes warm-up and tip-style IAP; the Android version emphasizes non-blocking ads and the stop button."
        },
        c: {
          title: "High-risk content",
          desc: "For snakes, mushrooms, wild plants, medical, or legal scenarios, the output is reference-only and must not replace professional help."
        },
        d: {
          title: "Contact",
          desc: "If you need more help, contact"
        }
      }
    },
    privacyPage: {
      title: "Beiwen privacy policy",
      updated: "Last updated: June 6, 2026",
      sections: {
        a: {
          title: "1. We collect as little as possible",
          desc: "Beiwen is designed for offline-first use. Core AI capabilities try to stay on device, and you do not need an account or cloud chat history."
        },
        b: {
          title: "2. Local models and downloads",
          desc: "If you download a local model, the request may produce standard network metadata such as IP address, request time, device info, and file version data. The model stays on your device until you delete it or uninstall the app."
        },
        c: {
          title: "3. Image and answer processing",
          desc: "When you use image checks, translation, or Q&A locally on the device, related inputs are processed on the phone whenever possible. High-risk content remains reference-only."
        },
        d: {
          title: "4. Platform differences",
          desc: "The iPhone tip-style IAP is handled by Apple; if Android ad monetization is enabled, the ad SDK may process standard ad data under its own policies. Platform-specific handling depends on the distribution and monetization configuration actually enabled for that version."
        },
        e: {
          title: "5. Contact",
          desc: "If you have questions about this privacy policy, contact"
        }
      }
    },
    termsPage: {
      title: "Beiwen terms of use",
      updated: "Last updated: June 6, 2026",
      sections: {
        a: {
          title: "1. AI output is reference-only",
          desc: "Beiwen answers, translations, image checks, and summaries may be incomplete or inaccurate. Please review the result before relying on it, especially for medical, legal, safety, and emergency situations."
        },
        b: {
          title: "2. Local model availability",
          desc: "Model download, verification, installation, and ready state depend on both the device and the app. Downloaded does not mean immediately usable; AI functions only activate once the model is ready."
        },
        c: {
          title: "3. iPhone and Android",
          desc: "The iPhone version may offer tip-style IAP, while the Android version may offer ad support. Neither should block the core emergency Q&A path."
        },
        d: {
          title: "4. User responsibility",
          desc: "You are responsible for ensuring you have the right to use any uploaded images, entered text, and generated results, and for obtaining consent when needed."
        }
      }
    }
  }
};

const appStoreLinks = {
  zh: "https://apps.apple.com/app/id6776050238",
  en: "https://apps.apple.com/app/id6776050238"
};

const pageMeta = {
  home: {
    zh: {
      title: "备问 Beiwen - 离线优先的应急 AI 助理",
      description: "备问是一款离线优先的 iPhone AI 助理，支持本地模型问答、翻译和图片辅助判断，适合旅行、弱网和隐私敏感场景。"
    },
    en: {
      title: "Beiwen - An Offline-First AI Assistant",
      description: "Beiwen is an offline-first AI assistant for iPhone, with local-model Q&A, translation, and image-assisted checks for travel, weak signals, and private tasks."
    }
  },
  support: {
    zh: {
      title: "备问支持",
      description: "备问支持页面，汇总模型下载、iPhone 与 Android 差异、高风险内容和联系信息。"
    },
    en: {
      title: "Beiwen Support",
      description: "Beiwen support page with notes on model downloads, iPhone and Android differences, high-risk content, and contact info."
    }
  },
  privacy: {
    zh: {
      title: "备问隐私政策",
      description: "备问隐私政策，说明本地模型、图片与回答处理、平台差异和联系方式。"
    },
    en: {
      title: "Beiwen Privacy Policy",
      description: "Beiwen privacy policy covering local models, image and answer processing, platform differences, and contact information."
    }
  },
  terms: {
    zh: {
      title: "备问使用条款",
      description: "备问使用条款，说明 AI 输出仅供参考、本地模型可用性、平台差异和用户责任。"
    },
    en: {
      title: "Beiwen Terms of Use",
      description: "Beiwen terms of use covering reference-only AI output, local model availability, platform differences, and user responsibility."
    }
  }
};

const supportedLocales = new Set(["zh-Hans", "en"]);
const localeByLang = {
  zh: "zh-Hans",
  en: "en"
};

let currentLang = "zh";

function getInitialLang() {
  const preferred = document.documentElement.lang || "zh-Hans";
  return preferred.startsWith("en") ? "en" : "zh";
}

function setLocale(lang) {
  currentLang = lang === "en" ? "en" : "zh";
  document.documentElement.lang = localeByLang[currentLang];
  window.localStorage?.setItem("beiwen.locale", currentLang);
  applyTranslations();
  updateMeta();
  updateImages();
  updateAppStoreLinks();
  updateLocaleButtons();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = resolveTranslation(element.dataset.i18n);
    if (translation == null) {
      return;
    }

    element.innerHTML = translation;
  });
}

function resolveTranslation(path) {
  const parts = path.split(".");
  let value = translations[currentLang];

  for (const part of parts) {
    if (value && Object.prototype.hasOwnProperty.call(value, part)) {
      value = value[part];
    } else {
      return null;
    }
  }

  return value;
}

function updateImages() {
  const currentLocaleFolder = currentLang === "zh" ? "zh-Hans" : "en";
  const imageMapping = {
    "hero-ios": `assets/beiwen/ios/${currentLocaleFolder}/01-home.png`,
    "hero-android": `assets/beiwen/android/${currentLocaleFolder}/android-phone-01.png`,
    "ios-1": `assets/beiwen/ios/${currentLocaleFolder}/01-home.png`,
    "ios-2": `assets/beiwen/ios/${currentLocaleFolder}/02-image-observation.png`,
    "ios-3": `assets/beiwen/ios/${currentLocaleFolder}/03-translation.png`,
    "ios-4": `assets/beiwen/ios/${currentLocaleFolder}/04-answer.png`,
    "ios-5": `assets/beiwen/ios/${currentLocaleFolder}/05-model-center.png`,
    "android-1": `assets/beiwen/android/${currentLocaleFolder}/android-phone-01.png`,
    "android-2": `assets/beiwen/android/${currentLocaleFolder}/android-phone-02.png`,
    "android-3": `assets/beiwen/android/${currentLocaleFolder}/android-phone-03.png`,
    "android-4": `assets/beiwen/android/${currentLocaleFolder}/android-phone-04.png`,
    "android-5": `assets/beiwen/android/${currentLocaleFolder}/android-phone-05.png`,
    "gallery-spotlight-1": `assets/beiwen/ios/${currentLocaleFolder}/01-home.png`,
    "gallery-spotlight-2": `assets/beiwen/ios/${currentLocaleFolder}/04-answer.png`,
    "gallery-spotlight-3": `assets/beiwen/android/${currentLocaleFolder}/android-phone-05.png`
  };

  document.querySelectorAll("[data-beiwen-image]").forEach((image) => {
    const key = image.dataset.beiwenImage;
    if (imageMapping[key]) {
      const pageKey = document.body?.dataset?.page || "home";
      const prefix = pageKey === "privacy" || pageKey === "terms" ? "../" : "";
      image.src = `${prefix}${imageMapping[key]}`;
    }
    const label = image.closest("figure")?.querySelector("figcaption")?.textContent?.trim() || image.alt;
    image.alt = label;
  });
}

function updateMeta() {
  const pageKey = document.body?.dataset?.page || "home";
  const metaGroup = pageMeta[pageKey] || pageMeta.home;
  const selected = metaGroup[currentLang] || metaGroup.zh;
  const title = selected.title;
  const description = selected.description;

  document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }
}

function updateAppStoreLinks() {
  document.querySelectorAll("[data-app-store-link]").forEach((link) => {
    link.href = appStoreLinks[currentLang];
  });
}

function updateLocaleButtons() {
  document.querySelectorAll("[data-set-locale]").forEach((button) => {
    const locale = button.dataset.setLocale;
    const active = locale === localeByLang[currentLang];
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function bindLocaleSwitchers() {
  document.querySelectorAll("[data-set-locale]").forEach((button) => {
    const locale = button.dataset.setLocale;
    if (!supportedLocales.has(locale)) {
      return;
    }

    button.addEventListener("click", () => {
      setLocale(locale === "en" ? "en" : "zh");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const persistedLang = window.localStorage?.getItem("beiwen.locale");
  currentLang = persistedLang === "en" ? "en" : getInitialLang();
  setLocale(currentLang);
  bindLocaleSwitchers();
});
