const fs = require("fs");
const deepMap = require("../helpers/deepMap");

const data = fs.readFileSync(`${__dirname}/../data/data.json`, {
  encoding: "utf8",
});

const parsedDataObject = JSON.parse(data);

const modelJsonData = () => {
  let schemaModel;

  if (parsedDataObject && parsedDataObject.doc) {
    parsedDataObject.doc.forEach((chunk) => {
      if (chunk && chunk.data && chunk.data.matches) {
        Object.values(chunk.data.matches).forEach((value, i) => {
          const convertToType = (x) => typeof x;

          schemaModel = deepMap(convertToType, value);
        });
      }
    });
  }

  return schemaModel;
};

const modelData = () => {
  const modeledData = [];
  if (parsedDataObject && parsedDataObject.doc) {
    parsedDataObject.doc.map((chunk) => {
      if (chunk && chunk.data && chunk.data.matches) {
        return Object.values(chunk.data.matches).map((value, i) => {
          const func = (val) => val;
          const cleanData = deepMap(func, value);

          return modeledData.push(cleanData);
        });
      }
      return null;
    });
  }

  return modeledData;
};

module.exports = { jsonData: modelJsonData(), modeledData: modelData() };
