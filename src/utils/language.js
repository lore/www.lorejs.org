/**
 * This is a utility file to store and retrieve the user's language preference
 */

import storageAvailable from './storageAvailable';

// If the user's browser doesn't support localStorage, we can use this variable
// as a fallback to store their language preference. This will allow them to browse
// the website, but if they refresh the browser (or navigate away from the application),
// this variable will be reset, and their language preference will be forgotten.
let languageFallback = null;

export default {

  saveLanguage(language) {
    if (storageAvailable('localStorage')) {
      localStorage.setItem('language', language);
    } else {
      languageFallback = language;
      let message = `
      Your web browser does not allow access to local storage. In Safari, the most common cause of 
      this is using "Private Browsing Mode". This will not affect the functionality of this website, 
      but your language preference will be forgotten if you leave the site or refresh the page.
      `;
      message = message.split('\n').join(' ').trim();
      alert(message);
    }
  },

  hasLanguage() {
    if (storageAvailable('localStorage')) {
      return !!localStorage.getItem('language');
    }

    return !!languageFallback;
  },

  getLanguage() {
    if (storageAvailable('localStorage')) {
      return localStorage.getItem('language') || 'ES6';
    }

    return languageFallback || 'ES6';
  },

  deleteLanguage() {
    if (storageAvailable('localStorage')) {
      localStorage.removeItem('language');
    } else {
      languageFallback = null;
    }
  }

};
