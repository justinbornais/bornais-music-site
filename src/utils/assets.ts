/**
 * Asset URL utility for handling base URL in Astro.
 * 
 * This uses Vite's import.meta.env.BASE_URL which is automatically
 * set from the `base` config in astro.config.mjs.
 * 
 * When base is '/bornais-music-site', assets will be prefixed accordingly.
 * When base is '/', no prefix is added.
 */

/**
 * Get the base URL for the site.
 * Returns the base URL with a trailing slash removed for easier concatenation.
 */
export function getBaseUrl(): string {
  const base = import.meta.env.BASE_URL;
  // Remove trailing slash if present (but keep single '/')
  return base === '/' ? '' : base.replace(/\/$/, '');
}

/**
 * Prepend the base URL to an asset path.
 * 
 * @param path - The asset path starting with '/' (e.g., '/images/photo.jpg')
 * @returns The full URL with base path prepended
 * 
 * @example
 * // With base: '/bornais-music-site'
 * assetUrl('/images/photo.jpg') // => '/bornais-music-site/images/photo.jpg'
 * 
 * // With base: '/'
 * assetUrl('/images/photo.jpg') // => '/images/photo.jpg'
 */
export function assetUrl(path: string): string {
  const base = getBaseUrl();
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

/**
 * Create a CSS url() value with the correct base path.
 * 
 * @param path - The asset path starting with '/' (e.g., '/images/bg.jpg')
 * @returns A CSS url() string ready for use in style objects
 * 
 * @example
 * cssUrl('/images/bg.jpg') // => 'url(/bornais-music-site/images/bg.jpg)'
 */
export function cssUrl(path: string): string {
  return `url(${assetUrl(path)})`;
}
