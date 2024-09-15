// import React, { useEffect } from 'react';
// import Style from "../App.module.css";

// const GoogleTranslate = () => {
//   useEffect(() => {
//     const addScript = document.createElement('script');
//     addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     document.body.appendChild(addScript);

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
//     };
//   }, []);

//   return <div id="google_translate_element" className={Style.google_translate_element}></div>;
// };

// export default GoogleTranslate;

import React, { useEffect } from 'react';
import Style from "../App.module.css";

const GoogleTranslate = () => {
  useEffect(() => {
    if (!document.getElementById('google-translate-script')) {
      const addScript = document.createElement('script');
      addScript.id = 'google-translate-script';
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      if (!window.googleTranslateElementInitCalled) {
        new window.google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        window.googleTranslateElementInitCalled = true;
      }
    };
  }, []);

  return <div id="google_translate_element" className={Style.google_translate_element}></div>;
};

export default GoogleTranslate;

