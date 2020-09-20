const deepMap = (f, obj) => {
  if (!obj || typeof obj === "undefined") {
    return null;
  }
  return Object.keys(obj).reduce((acc, val) => {
    let replaceKey = val;

    if (val === "_doc") {
      replaceKey = "docs";
    }
    if (val === "_id") {
      replaceKey = "mid";
    }

    if (acc && val && typeof acc !== "undefined" && typeof val !== "undefined")
      if ({}.toString.call(obj[val]) === "[object Object]") {
        acc[replaceKey] = deepMap(f, obj[val]);
      } else {
        let replaceValue = obj[val];
        if (obj[val] === null) {
          replaceValue = "string";
        }
        acc[replaceKey] = f(replaceValue, replaceKey);
      }
    return acc;
  }, {});
};

module.exports = deepMap;
