export function isMatchFilter(driver, filter) {
  if (filter.name) {
    if (!driver.name.toLowerCase().includes(filter.name.toLowerCase()))
      return false;
  }
  if (filter.expMin) {
    if (filter.expMin > driver.experience) return false;
  }
  if (filter.expMax) {
    if (filter.expMax < driver.experience) return false;
  }
  return true;
}
