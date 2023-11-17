export function isCorrespondToFilter(car, filterObj) {
  for (const props in filterObj) {
    if (filterObj[props] && filterObj[props] !== car[props]) return false;
  }
  return true;
}
