export function isCorrespondToFilter(item, filterObj) {
  for (const props in filterObj) {
    if (filterObj[props] && filterObj[props] !== item[props]) return false;
  }
  return true;
}
