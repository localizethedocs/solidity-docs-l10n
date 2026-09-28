// Site URL
let ROOT_URL = '.';

// Derive ROOT_URL from the current script location when possible.
// This works for both file:// and http(s) served builds because
// the script usually lives under `.../_static/js/...`.
(function() {
  // Get the currently running script reliably
  const script = document.currentScript || (function() {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  const scriptSrc = script && script.src ? script.src : location.href;

  // If the script path contains '/_static/', strip from there to get site root
  const staticIndex = scriptSrc.indexOf('/_static/');
  if (staticIndex !== -1) {
    ROOT_URL = scriptSrc.slice(0, staticIndex);
    return;
  }
})();

// Color mode constants
const [DARK, LIGHT] = ["dark", "light"];
const LIGHT_LOGO_PATH = `${ROOT_URL}/_static/img/logo.svg`;
const DARK_LOGO_PATH = `${ROOT_URL}/_static/img/logo-dark.svg`;
const SUN_ICON_PATH = `${ROOT_URL}/_static/img/sun.svg`;
const MOON_ICON_PATH = `${ROOT_URL}/_static/img/moon.svg`;
const LIGHT_HAMBURGER_PATH = `${ROOT_URL}/_static/img/hamburger-light.svg`;
const DARK_HAMBURGER_PATH = `${ROOT_URL}/_static/img/hamburger-dark.svg`;
const COLOR_TOGGLE_ICON_CLASS = "color-toggle-icon";
const SOLIDITY_LOGO_CLASS = "solidity-logo";
const LS_COLOR_SCHEME = "color-scheme";

// Solidity navigation constants
const SOLIDITY_HOME_URL = "https://soliditylang.org";
const BLOG_URL = `${SOLIDITY_HOME_URL}/blog`;
const DOCS_URL = "/";
const USE_CASES_PATH = `${SOLIDITY_HOME_URL}/use-cases`;
const CONTRIBUTE_PATH = `/en/latest/contributing.html`;
const ABOUT_PATH = `${SOLIDITY_HOME_URL}/about`;
const FORUM_URL = "https://forum.soliditylang.org/";
const NAV_LINKS = [
  { name: window.NAV_LINKS.blog, href: BLOG_URL },
  { name: window.NAV_LINKS.documentation, href: DOCS_URL },
  { name: window.NAV_LINKS.use_cases, href: USE_CASES_PATH },
  { name: window.NAV_LINKS.contribute, href: CONTRIBUTE_PATH },
  { name: window.NAV_LINKS.about, href: ABOUT_PATH },
  { name: window.NAV_LINKS.forum, href: FORUM_URL },
];

const MOBILE_MENU_TOGGLE_CLASS = "shift";
const WRAPPER_CLASS = "unified-wrapper";
