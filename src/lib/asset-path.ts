
export function getAssetPath(path: string): string {
  // Preserve external URLs and data URLs
  if (/^(https?:)?\/\//.test(path) || path.startsWith('data:')) {
    return path;
  }

  // Normalize the path
  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`;

  return normalizedPath;
}
