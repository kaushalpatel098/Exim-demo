
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getAssetPath(path: string): string {
  // Preserve external URLs and data URLs
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) {
    return path;
  }

  // Normalize the path
  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`;

  // Avoid adding the base path twice
  if (BASE_PATH && normalizedPath.startsWith(`${BASE_PATH}/`)) {
    return normalizedPath;
  }

  return `${BASE_PATH}${normalizedPath}`;
}
