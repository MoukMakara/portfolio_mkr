export const THEME_STORAGE_KEY = "theme";

// Inline script for <head>: applies the saved (or system) theme before first paint, avoiding a flash.
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})();`;
