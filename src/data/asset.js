// Tilda rasm URL'ini lokal /assets yo'liga aylantiradi (bo'lmasa CDN'ga qaytadi)
import map from './assetMap.json'

export function asset(url) {
  if (!url) return url
  return map[url] || url
}
