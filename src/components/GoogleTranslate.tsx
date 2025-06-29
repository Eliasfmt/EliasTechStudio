/* src/components/GoogleTranslate.tsx
   ─────────────────────────────────────────────────────────────
   Singleton Google-Translate gadget (App-Router / React 18)  */
'use client';

import { useEffect, useRef } from 'react';

declare global {
  /* merge-safe: identical modifiers everywhere */
  interface Window {
    google: any;                               // Google’s namespace
    googleTranslateElementInit: () => void;    // global callback
    __gt_script_loaded?: boolean;              // we added <script> once
    __gt_widget_node?: HTMLElement;            // keep the gadget to re-use
  }
}

export default function GoogleTranslate() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ① If the widget already exists, just move it here */
    if (window.__gt_widget_node && mountRef.current) {
      mountRef.current.appendChild(window.__gt_widget_node);
      return; // done — no duplicates, no extra script
    }

    /* ② Inject Google’s script (only the first time) */
    if (!window.__gt_script_loaded) {
      window.__gt_script_loaded = true;
      const s = document.createElement('script');
      s.src =
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      s.async = true;
      document.body.appendChild(s);
    }

    /* ③ Define the callback that Google invokes */
    window.googleTranslateElementInit = () => {
      if (!mountRef.current || window.__gt_widget_node) return;

      // @ts-ignore  Google’s JS isn’t typed
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ru,es,fr,de,pt,it,zh-CN,ar',
          //layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        mountRef.current
      );

      // remember the freshly-created dropdown so later mounts can re-use it
      window.__gt_widget_node =
        mountRef.current.firstElementChild as HTMLElement;
    };
  }, []);

  /* Google will populate this div exactly once */
  return (
    <div className="notranslate">
      <div ref={mountRef} />
    </div>
  );
}



// /* src/components/GoogleTranslate.tsx
//    Safe-for-Strict-Mode, SINGLE instance                            */
// 'use client';

// import { useEffect, useRef } from 'react';

// declare global {
//   interface Window {
//     google?: any;
//     googleTranslateElementInit?: () => void;
//     __gt_script_loaded?: boolean;   // true once we added <script>
//     __gt_widget_node?: HTMLElement; // the dropdown we’ll re-use
//   }
// }

// export default function GoogleTranslate() {
//   const mountRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     /* ── 1️⃣  If the widget already exists, just move it here ── */
//     if (window.__gt_widget_node && mountRef.current) {
//       mountRef.current.appendChild(window.__gt_widget_node);
//       return; // done — no script, no callback, no duplicates
//     }

//     /* ── 2️⃣  Load Google’s script once ──────────────────────── */
//     if (!window.__gt_script_loaded) {
//       window.__gt_script_loaded = true;

//       const s = document.createElement('script');
//       s.src =
//         '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//       s.async = true;
//       document.body.appendChild(s);
//     }

//     /* ── 3️⃣  Callback: build the widget only the first time ─── */
//     window.googleTranslateElementInit = () => {
//       if (!mountRef.current || window.__gt_widget_node) return;

//       // @ts-ignore  (Google’s types aren’t in TS)
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: 'en',
//           includedLanguages: 'en,ru,es,fr,de,pt,it,zh-CN,ar',
//           //layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         mountRef.current
//       );

//       /* Grab the node Google just injected so we can re-use it */
//       window.__gt_widget_node = mountRef.current.firstElementChild as HTMLElement;
//     };
//   }, []);

//   /* Google fills this div (once) */
//   return (
//     <div className="notranslate">
//       <div ref={mountRef} />
//     </div>
//   );
// }



///////////
// /* src/components/GoogleTranslate.tsx
//    ───────────────────────────────────────────────────────────── */
// 'use client';

// import { useEffect, useRef } from 'react';

// export default function GoogleTranslate() {
//   const mountPoint = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // load Google’s script once
//     const s = document.createElement('script');
//     s.src =
//       '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     s.async = true;
//     document.body.appendChild(s);

//     // global callback Google expects
//     // @ts-ignore
//     window.googleTranslateElementInit = () => {
//       if (!mountPoint.current) return;
//       // @ts-ignore
//       new window.google.translate.TranslateElement(
//         { pageLanguage: 'en',
//           includedLanguages: 'en,ru,es,fr,de,pt,it,zh-CN,ar', // ← only allow these
//           //layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//          },   // change if your default isn’t English
//         mountPoint.current
//       );
//     };

//     return () => {
//       delete (window as any).googleTranslateElementInit;
//     };
//   }, []);

//   /* Everything outside this div is tagged "notranslate"
//      in the <Html> root, so Google only mutates *here*. */
//   return (
//     <div className="notranslate">
//       <div id="google_translate_element" ref={mountPoint} />
//     </div>
//   );
// }


////////////////////below is the last working version://///////



// /* src/components/GoogleTranslate.tsx
//    ─────────────────────────────────────────────────────────────
//    Final look: globe + “Translate:” + small round Google G + ▾
// */

// 'use client';

// import { useEffect } from 'react';

// declare global {
//   interface Window {
//     google: any;
//     googleTranslateElementInit: () => void;
//     __gt_loaded?: boolean;
//   }
// }

// export default function GoogleTranslate() {
//   useEffect(() => {
//     /* avoid loading Google’s script twice (mobile + desktop) */
//     if (window.__gt_loaded) return;
//     window.__gt_loaded = true;

//     /* ── 1.  Inject CSS overrides ─────────────────────────── */
//     const style = document.createElement('style');
//     style.innerHTML = `
//       #google_translate_element { display:inline-block; }

//       /* Core container Google injects */
//       .goog-te-gadget-simple{
//         /* one short row, we’ll supply our own icon + arrow */
//         display:inline-block !important;
//         width:32px;                 /* G (16px) + arrow space */
//         height:18px;
//         cursor:pointer;
//         position:relative;
//         vertical-align:middle;
//         overflow:hidden;            /* hide the hidden text */
//         background:url('//www.gstatic.com/images/branding/googleg/1x/googleg_standard_color_16dp.png')
//                    no-repeat left center / 16px 16px;
//       }

//       /* arrow ▾ : we draw it ourselves */
//       .goog-te-gadget-simple::after{
//         content:'\\25BE';           /* ▼ */
//         position:absolute;
//         right:0; top:50%;
//         transform:translateY(-50%);
//         font-size:11px;
//         color:#444;
//       }

//       /* kill Google’s own icon + text */
//       .goog-te-gadget-icon,
//       .goog-te-gadget-simple span { display:none !important; }

//       /* hide the grey top banner */
//       body .goog-te-banner-frame.skiptranslate{display:none!important;}
//     `;
//     document.head.appendChild(style);

//     /* ── 2.  Google callback ─────────────────────────────── */
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: 'en',
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         'google_translate_element',
//       );
//     };

//     /* ── 3.  Load Google Website-Translator script ───────── */
//     const s = document.createElement('script');
//     s.src =
//       '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     s.async = true;
//     document.body.appendChild(s);

//     /* cleanup CSS on hot-reload (script must stay) */
//     return () => { document.head.removeChild(style); };
//   }, []);

//   /* ── Render label + gadget placeholder ─────────────────── */
//   return (
//     <div className="flex items-center gap-2">
//       {/* globe icon (inline SVG) */}
//       <svg
//         className="w-4 h-4 md:w-5 md:h-5 text-gray-300"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="10" />
//         <path d="M2 12h20" />
//         <path d="M12 2a15.5 15.5 0 0 1 4 10 15.5 15.5 0 0 1-4 10 15.5 15.5 0 0 1-4-10 15.5 15.5 0 0 1 4-10z" />
//       </svg>

//       <span className="text-sm md:text-base">Translate:</span>

//       {/* Google replaces this div with its (now trimmed) gadget */}
//       <div id="google_translate_element" />
//     </div>
//   );
// }