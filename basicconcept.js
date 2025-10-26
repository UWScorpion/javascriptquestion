
//=============Flatten An Array======================================
/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
  let res = [];
  for (let i of value) {
    if (Array.isArray(i)){
      res = res.concat(flatten(i));
    } else {
      res.push(i);
    }
  }
  return res;
}

//=============deep clone an object======================================
/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  if (value === null || typeof value !== 'object') return value;
  if (Array.isArray(value)) value.map(deepClone);
  const clonedObjs = {};
  for (const key in value) {
    if (!!value[key]) {
      clonedObjs[key] = deepClone(value[key]);
    }
  }
  return clonedObjs;
}