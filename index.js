module.exports = deep;

function deep (obj, prop) {
  var segs = prop.split('.');
  while (segs.length) {
    obj = obj[segs.shift()];
  }
  return obj;
}
