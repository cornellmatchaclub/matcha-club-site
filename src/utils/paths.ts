// export const getAssetPath = (path: string) => {
//   // import.meta.env.BASE_URL is '/' locally but '/matcha-club-site/' on GH Pages
//   const base = import.meta.env.BASE_URL;
//   // Remove leading slash from path to avoid double slashes
//   const cleanPath = path.startsWith('/') ? path.slice(1) : path;
//   return `${base}${cleanPath}`;
// };

// src/utils/paths.ts

export const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

/**
 * Handles the logic of trying a different case if the first fails.
 * We apply this directly to the img's onError.
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.currentTarget;
  // If we've already tried to fix it, stop to avoid infinite loops
  if (img.dataset.triedFix === 'true') return;

  const currentSrc = img.src;
  const extension = currentSrc.split('.').pop();

  if (extension) {
    const newExtension = extension === extension.toLowerCase()
      ? extension.toUpperCase()
      : extension.toLowerCase();

    img.dataset.triedFix = 'true';
    img.src = currentSrc.replace(/\.[^/.]+$/, `.${newExtension}`);
  }
};