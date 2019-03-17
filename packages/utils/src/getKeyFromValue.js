const getKeyFromValue = (val, obj) =>
  Object.keys(obj).find(key => obj[key] === val);

export default getKeyFromValue;
