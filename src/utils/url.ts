/**
 * Utility functions for URL handling in multi-environment setup
 */

/**
 * Creates a proper URL with base path for internal links
 * @param path - The internal path (e.g., '/about', '/blog')
 * @returns The complete URL with base path applied
 */
export function createInternalUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${base}${cleanPath}`.replace(/\/+/g, '/');

  // Remove trailing slash except for root
  return fullUrl === '/' ? '/' : fullUrl.replace(/\/$/, '');
}

/**
 * Creates a proper URL for static assets (fonts, images, etc.)
 * @param assetPath - The asset path (e.g., '/favicon.svg', '/fonts/font.woff')
 * @returns The complete asset URL with base path applied
 */
export function createAssetUrl(assetPath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${base}${cleanPath}`.replace(/\/+/g, '/');
}

/**
 * Debug function to log current environment configuration
 */
export function debugUrls() {
  console.log('=== URL DEBUG ===');
  console.log('BASE_URL:', import.meta.env.BASE_URL);
  console.log('Example internal:', createInternalUrl('/about'));
  console.log('Example asset:', createAssetUrl('/favicon.svg'));
  console.log('================');
}