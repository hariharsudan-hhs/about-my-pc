import { createContext, useState } from "react";

const DeviceContext = createContext({
  operatingSystem: "",
  //   javaScript: "",
  cookies: "",
  colorDepth: "",
  flash: "",
  webBrowser: "",
  language: "",
  adBlock: "",
  screenDpi: "",
  resolution: "",
  getCookieDetails: () => {},
  getOsDetails: () => {},
  getColorDepthDetails: () => {},
  getFlashDetails: () => {},
  getWebBrowserDetails: () => {},
  getLanguageDetails: () => {},
  getAdBlockDetails: () => {},
  getScreenDpiDetails: () => {},
  getResolutionDetails: () => {}
});

export function DeviceContextProvider(props) {
  const [operatingSystem, setOperatingSystem] = useState("");
  //   const [javaScript, setJavaScript] = useState("");
  const [cookies, setCookies] = useState("");
  const [colorDepth, setColorDepth] = useState("");
  const [flash, setFlash] = useState("");
  const [webBrowser, setWebBrowser] = useState("");
  const [language, setLanguage] = useState("");
  const [adBlock, setAdBlock] = useState("");
  const [screenDpi, setScreenDpi] = useState("");
  const [resolution, setResolution] = useState("");

  function getCookieDetailsHandler() {
    var cookieEnabled = navigator.cookieEnabled ? true : false;
    //console.log(cookieEnabled);
    setCookies(cookieEnabled);
  }

  function getOsDetailsHandler() {
    //os info
    var os = "Unknown";
    var nAgt = navigator.userAgent;
    var nVer = navigator.appVersion;
    var osVersion = "Unknown";
    var clientStrings = [
      { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
      { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
      { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
      { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
      { s: "Windows Vista", r: /Windows NT 6.0/ },
      { s: "Windows Server 2003", r: /Windows NT 5.2/ },
      { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
      { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
      { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
      { s: "Windows 98", r: /(Windows 98|Win98)/ },
      { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
      { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
      { s: "Windows CE", r: /Windows CE/ },
      { s: "Windows 3.11", r: /Win16/ },
      { s: "Android", r: /Android/ },
      { s: "Open BSD", r: /OpenBSD/ },
      { s: "Sun OS", r: /SunOS/ },
      { s: "Chrome OS", r: /CrOS/ },
      { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
      { s: "iOS", r: /(iPhone|iPad|iPod)/ },
      { s: "Mac OS X", r: /Mac OS X/ },
      { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
      { s: "QNX", r: /QNX/ },
      { s: "UNIX", r: /UNIX/ },
      { s: "BeOS", r: /BeOS/ },
      { s: "OS/2", r: /OS\/2/ },
      {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
      },
    ];

    for (var id in clientStrings) {
      var cs = clientStrings[id];
      if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
      }
    }

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = "Windows";
    }

    switch (os) {
      case "Mac OS":
      case "Mac OS X":
      case "Android":
        osVersion =
          /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(
            nAgt
          )[1];
        break;

      case "iOS":
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion =
          osVersion[1] + "." + osVersion[2] + "." + (osVersion[3] | 0);
        break;
    }

    //architecture
    var architecture = "Unknown";
    if (nAgt.indexOf("x64") !== -1) architecture = "64-Bit";
    if (nAgt.indexOf("x86") !== -1 || nAgt.indexOf("x32") !== -1)
      architecture = "32-Bit";

    //alternative to react-device-detect package
    var isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        nVer
      );

    var osName = os + " " + osVersion + " ";
    var osArch = !isMobile ? architecture : "";
    setOperatingSystem(osName + osArch);
  }

  function getWebBrowserDetailsHandler() {
    // browser
    var nAgt = navigator.userAgent;
    var browser = "Unknown";
    var version = "Unknown";
    var nameOffset, verOffset, ix;

    // Opera
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browser = "Opera";
      version = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    }
    // Opera Next
    if ((verOffset = nAgt.indexOf("OPR")) != -1) {
      browser = "Opera";
      version = nAgt.substring(verOffset + 4);
    }
    // Legacy Edge
    else if ((verOffset = nAgt.indexOf("Edge")) != -1) {
      browser = "Microsoft Legacy Edge";
      version = nAgt.substring(verOffset + 5);
    }
    // Edge (Chromium)
    else if ((verOffset = nAgt.indexOf("Edg")) != -1) {
      browser = "Microsoft Edge";
      version = nAgt.substring(verOffset + 4);
    }
    // MSIE
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
      browser = "Microsoft Internet Explorer";
      version = nAgt.substring(verOffset + 5);
    }
    // Chrome
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browser = "Chrome";
      version = nAgt.substring(verOffset + 7);
    }
    // Safari
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browser = "Safari";
      version = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    }
    // Firefox
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browser = "Firefox";
      version = nAgt.substring(verOffset + 8);
    }
    // MSIE 11+
    else if (nAgt.indexOf("Trident/") != -1) {
      browser = "Microsoft Internet Explorer";
      version = nAgt.substring(nAgt.indexOf("rv:") + 3);
    }
    // Other browsers
    else if (
      (nameOffset = nAgt.lastIndexOf(" ") + 1) <
      (verOffset = nAgt.lastIndexOf("/"))
    ) {
      browser = nAgt.substring(nameOffset, verOffset);
      version = nAgt.substring(verOffset + 1);
      if (browser.toLowerCase() == browser.toUpperCase()) {
        browser = navigator.appName;
      }
    }
    // trim the version string
    if ((ix = version.indexOf(";")) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(" ")) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(")")) != -1) version = version.substring(0, ix);

    //Web Browser Height
    var browserHeight = window.innerHeight;
    var browserWidth = window.innerWidth;

    setWebBrowser(
      browser + " " + version + ", " + browserWidth + " x " + browserHeight
    );
  }

  function getFlashDetailsHandler() {
    //flash
    var flashCheck = "Unknown";
    if (navigator.mimeTypes["application/x-shockwave-flash"] == undefined)
      flashCheck = "Disabled";
    else flashCheck = "Enabled";

    setFlash(flashCheck);
  }

  function getColorDepthDetailsHandler() {
    //color depth
    var colorDepth = window.screen.colorDepth;
    setColorDepth(colorDepth);
  }

  function getLanguageDetailsHandler() {
    var language = navigator.language;
    setLanguage(language);
  }

  function getScreenDpiDetailsHandler() {
    //Screen DPI
    var devicePixelRatio = window.devicePixelRatio;
    setScreenDpi("Pixel Ratio: " + devicePixelRatio);
  }

  function getResolutionDetailsHandler() {
    //Resolution
    var screenHeight = window.screen.height;
    var screenWidth = window.screen.width;
    setResolution(screenWidth + " x " + screenHeight)
  }

  function getAdBlockDetailsHandler() {
    //AdBlock
    var adBlock = "Unknown";
    var adsNotify = document.getElementById("ads-notify-abtmypc");
    if (adsNotify !== null) {
      if (adsNotify.offsetWidth > 0 && adsNotify.offsetHeight > 0) {
        adBlock = "Disabled";
      } else {
        adBlock = "Enabled";
      }
    }
    setAdBlock(adBlock);
  }

  const context = {
    operatingSystem: operatingSystem,
    // javaScript: javaScript,
    cookies: cookies,
    colorDepth: colorDepth,
    flash: flash,
    webBrowser: webBrowser,
    language: language,
    adBlock: adBlock,
    screenDpi: screenDpi,
    resolution: resolution,
    getCookieDetails: getCookieDetailsHandler,
    getOsDetails: getOsDetailsHandler,
    getColorDepthDetails: getColorDepthDetailsHandler,
    getFlashDetails: getFlashDetailsHandler,
    getWebBrowserDetails: getWebBrowserDetailsHandler,
    getLanguageDetails: getLanguageDetailsHandler,
    getScreenDpiDetails: getScreenDpiDetailsHandler,
    getResolutionDetails: getResolutionDetailsHandler,
    getAdBlockDetails: getAdBlockDetailsHandler,
  };

  return (
    <DeviceContext.Provider value={context}>
      {props.children}
    </DeviceContext.Provider>
  );
}

export default DeviceContext;
