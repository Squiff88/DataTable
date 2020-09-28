export const groupDataByDate = (data) => {
  const groupedByDate = [];

  if (!data) {
    return null;
  }

  const checkedData = Array.isArray(data) ? data : [data];

  checkedData
    .map((rawData) => {
      if (groupedByDate.some((entry) => entry.date === rawData.time.date)) {
        return rawData;
      } else {
        groupedByDate.push({ date: rawData.time.date, match: [] });
        return rawData;
      }
    })
    .map((rawDataEntry) => {
      const foundIndex = groupedByDate.findIndex(
        (el) => el.date === rawDataEntry.time.date
      );
      groupedByDate[foundIndex].match.push(rawDataEntry);
    });

  return groupedByDate;
};
