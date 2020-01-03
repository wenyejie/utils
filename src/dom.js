export const isElement = obj => (obj ? obj.nodeType === 1 : false)

export const isComment = obj => (obj ? obj.nodeType === 8 : false)

export const isText = obj => (obj ? obj.nodeType === 3 : false)
