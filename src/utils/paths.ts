export const getAssetPath = (path: string) => {
  // import.meta.env.BASE_URL is '/' locally but '/matcha-club-site/' on GH Pages
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};