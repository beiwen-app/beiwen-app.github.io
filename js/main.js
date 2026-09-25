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
      subtitle: "没网、信号弱，或想省流量时，你都可以先打开备问，再用本地模型问答、翻译或查看图片线索，及时获得一份可参考的信息。",
      primary: "前往 App Store 下载",
      secondary: "了解核心能力",
      pill1: "无模型也能进入",
      pill2: "流式输出，可随时停止",
      pill3: "图片 + 翻译 + 应急问答",
      iosCaption: "iOS 版主界面",
      androidCaption: "Android 版主界面",
      appStoreNote: "在 iPhone 上，你可以使用本地模型，也可以选择打赏支持；Android 版请以实际上架情况为准。"
    },
    platforms: {
      kicker: "双端版本",
      title: "在 iPhone 和 Android 上，随时先问",
      subtitle: "无论你用 iPhone 还是 Android，都可以先进入主界面，再按需下载模型。我们按平台特点安排体验：iPhone 会在模型就绪后进行轻量预热，帮你减少首次等待；Android 广告不会挡住输入、停止操作或风险提示。",
      ios: {
        badge: "iPhone / iPad",
        title: "iPhone 版",
        desc: "你可以先进入主界面，再按需下载模型；模型就绪后，我们会提前完成轻量预热，帮你减少第一次提问的等待。",
        point1: "没有模型也能先浏览和准备",
        point2: "下载、校验和安装状态清晰可见",
        point3: "你可免费使用，也可选择打赏支持"
      },
      android: {
        badge: "Android 15+",
        title: "Android 版",
        desc: "你可在 Android 15 或更新版本使用备问；广告不会打断输入，也不会遮住停止按钮和风险提示。",
        point1: "支持 Android 15 或更新版本",
        point2: "回答、停止按钮和风险提示清楚可见",
        point3: "模型下载可在后台继续"
      }
    },
    features: {
      kicker: "核心能力",
      title: "需要帮助时，尽快拿到清楚的参考",
      subtitle: "遇到弱网或突发情况时，你可以先打开、尽快开始提问；答案逐段出现，你能随时停止，再快速浏览重点。",
      card1: {
        title: "离线优先进入",
        desc: "还没下载模型？你可以先查看功能和下载状态，准备好后再决定是否下载。"
      },
      card2: {
        title: "流式输出可中止",
        desc: "你可以边看回答边判断是否继续；随时停止，并保留已经生成的内容。"
      },
      card3: {
        title: "图片辅助判断",
        desc: "看到不熟悉的帐篷、钓鱼点位、蘑菇或动物时，你可以先查看图片线索。我们只提供观察与参考，不代替专业判断。"
      },
      card4: {
        title: "翻译与应急短句",
        desc: "需要问路、求助或说明身体不适时，你可以快速准备简短沟通文本，减少临场组织语言的压力。"
      }
    },
    gallery: {
      kicker: "产品截图",
      title: "关键时刻，帮你先找到下一步",
      subtitle: "看看你如何用问答、图片观察和翻译，先拿到随时可参考的信息。",
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
      note: "无论你使用 iOS 还是 Android，我们都帮你在离线时找到可参考的答案。"
    },
    supportPage: {
      kicker: "支持与建议",
      title: "遇到问题？我们来帮你",
      intro: "模型下载、翻译、图片观察或回答遇到问题？先看看下面的说明；如果还没解决，再联系我们。",
      cards: {
        a: {
          title: "模型下载",
          desc: "你可以先打开首页，再决定是否下载本地模型。下载完成后，请等模型完成校验和安装，直到状态显示“可用”再开始使用。"
        },
        b: {
          title: "iPhone 和 Android",
          desc: "在 iPhone 上，模型就绪后会进行预热，帮你减少首次提问的等待；在 Android 上，广告不会遮挡回答或停止按钮。你也可以选择打赏支持 iPhone 版。"
        },
        c: {
          title: "高风险内容",
          desc: "如果你遇到毒蛇、蘑菇、野外植物、医疗或法律等高风险问题，请把回答当作线索，并及时寻求专业帮助。"
        },
        d: {
          title: "联系",
          desc: "还需要帮助？请给我们发邮件："
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
      subtitle: "When you’re offline, on a weak signal, or saving data, open Beiwen and use a local model to ask questions, translate, or check an image for useful context.",
      primary: "Download on the App Store",
      secondary: "Explore the capabilities",
      pill1: "Enter without a model",
      pill2: "Streaming answers, stop anytime",
      pill3: "Images + translation + emergency Q&A",
      iosCaption: "iOS home screen",
      androidCaption: "Android home screen",
      appStoreNote: "On iPhone, you can use a local model and optionally support us with a tip. Check the current release status for Android."
    },
    platforms: {
      kicker: "Two platforms",
      title: "Ask first on iPhone or Android",
      subtitle: "Whichever phone you use, you can open the main screen first and download a model when you’re ready. We tune each version to its platform: on iPhone, a light warm-up after the model is ready helps shorten your first wait; on Android, ads stay clear of your input, stop control, and safety notes.",
      ios: {
        badge: "iPhone / iPad",
        title: "iPhone version",
        desc: "You can open the app before downloading a model. Once it’s ready, we warm it up in the background to help shorten your first wait.",
        point1: "Explore before downloading a model",
        point2: "See download, verification, and install progress",
        point3: "Use it for free, with an optional tip to support us"
      },
      android: {
        badge: "Android 15+",
        title: "Android version",
        desc: "Use Beiwen on Android 15 or later; ads never interrupt your input or cover the Stop control and safety notes.",
        point1: "Use Android 15 or later",
        point2: "Keep answers, Stop, and safety notes in view",
        point3: "Continue model downloads in the background"
      }
    },
    features: {
      kicker: "Core capabilities",
      title: "Get a clear reference when you need help",
      subtitle: "When your signal is weak or something unexpected happens, you can open the app and start asking quickly. Answers appear as they’re written, so you can stop anytime and scan the key points.",
      card1: {
        title: "Offline-first entry",
        desc: "Haven’t downloaded a model yet? You can explore the app and check download details before deciding."
      },
      card2: {
        title: "Streaming answers you can stop",
        desc: "Read as you go, stop whenever you need to, and keep the answer generated so far."
      },
      card3: {
        title: "Image-assisted checks",
        desc: "Check image clues about unfamiliar tents, fishing spots, mushrooms, or animals. We offer observations for reference, not a substitute for expert judgment."
      },
      card4: {
        title: "Translation and emergency phrases",
        desc: "When you need directions, help, or a way to explain a health concern, quickly prepare a short message and spend less time searching for words."
      }
    },
    gallery: {
      kicker: "Screenshots",
      title: "Find a useful next step, even offline",
      subtitle: "See how you can ask a question, check an image, or translate to get practical context when you need it.",
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
      note: "We help you find useful answers offline on iOS and Android."
    },
    supportPage: {
      kicker: "Support",
      title: "Need help? We’re here.",
      intro: "Having trouble with a model download, translation, image check, or answer? Start with these tips. If you still need help, contact us.",
      cards: {
        a: {
          title: "Model downloads",
          desc: "You can open the home screen before downloading a local model. After the download, wait for verification and installation to finish and the status to show Ready."
        },
        b: {
          title: "iPhone and Android",
          desc: "On iPhone, a warm-up after the model is ready can shorten your first wait; on Android, ads won’t cover your answer or Stop control. You can also choose to support the iPhone version with a tip."
        },
        c: {
          title: "High-risk content",
          desc: "If you’re dealing with snakes, mushrooms, wild plants, medical, or legal questions, treat the answer as a clue and seek professional help."
        },
        d: {
          title: "Contact",
          desc: "Still need help? Email us at"
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
      description: "没网或信号弱时，你也可以用备问的本地模型问答、翻译和查看图片线索，尽快获得可参考的信息。"
    },
    en: {
      title: "Beiwen - An Offline-First AI Assistant",
      description: "When you’re offline or on a weak signal, use Beiwen for local Q&A, translation, and image clues to get useful context sooner."
    }
  },
  support: {
    zh: {
      title: "备问支持",
      description: "查看模型下载、iPhone 与 Android 使用提示和高风险内容说明；需要帮助时，联系我们。"
    },
    en: {
      title: "Beiwen Support",
      description: "Find tips for model downloads, using Beiwen on iPhone or Android, and handling high-risk questions. Contact us if you need more help."
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
    "appstore-ios-1": `assets/beiwen/ios/app-store/${currentLocaleFolder}/01-home.png`,
    "appstore-ios-2": `assets/beiwen/ios/app-store/${currentLocaleFolder}/02-image-observation.png`,
    "appstore-ios-3": `assets/beiwen/ios/app-store/${currentLocaleFolder}/03-translation.png`,
    "appstore-ios-4": `assets/beiwen/ios/app-store/${currentLocaleFolder}/04-answer.png`,
    "appstore-ios-5": `assets/beiwen/ios/app-store/${currentLocaleFolder}/05-model-center.png`,
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
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);
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
