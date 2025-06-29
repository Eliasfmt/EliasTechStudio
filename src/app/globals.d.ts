export {};

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    __gt_loaded?: boolean;
    google: {
      translate?: {
        TranslateElement?: unknown;
      };
    };
  }
}