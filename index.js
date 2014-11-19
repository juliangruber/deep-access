module.exports = deep;

function deep (obj, prop) {
  var segs = prop.split('.');
  while (segs.length) {
    var seg = segs.shift();
    var existential = false;
    if (seg[seg.length - 1] == '?') {
      seg = seg.slice(0, -1);
      existential = true;
    }
    obj = obj[seg];
    if (!obj && existential) return obj;
  }
  return obj;
}
