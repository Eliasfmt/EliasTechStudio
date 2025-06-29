
export {};

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
    __gt_loaded?: boolean; // ✅ add this line
  }
}