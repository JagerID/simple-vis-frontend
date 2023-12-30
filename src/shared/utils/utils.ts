export const formatFileSize = (bytes: number) => {
  if (bytes <= 0) return '0 B'
  const sufixes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${(bytes / Math.pow(1024, i)).toFixed(2).replace(/\.00$/, '')} ${
    sufixes[i]
  }`
}

export const formatFileName = (fileName: string) => {
  return fileName.split('.')[0]
}

export const formatTypesToInputAccept = (types: string[]) => {
  return types.join(',')
}

const ZOOM_AREA = [
  357.989981115706, 178.9949905578533, 89.49749527892665, 44.74874763946327,
  22.37437381973166, 11.187186909865837, 5.5935934549329, 2.796796727466522,
  1.3983983637333335, 0.6991991818663776, 0.349599590933478,
  0.17479979546558225, 0.08739989773510458, 0.043699948862925414,
  0.021849974431462707, 0.01092498723423886, 0.005462493580104415,
  0.002731246753037193, 0.0013656235245786486, 0.0006828116142292641,
  0.0003414055109943514, 0.0001707027554971757, 0.0000853501932587325,
  0.00004267746555976466, 0.00002133873277988233
]

export const lat2Zoom = (lat: number) => {
  let res = 0

  while (lat < ZOOM_AREA[res]) res++

  return res
}
