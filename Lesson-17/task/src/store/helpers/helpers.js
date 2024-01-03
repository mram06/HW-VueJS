export function isCorrespondToFilter(item, filterObj) {
  let foundResult = null;
  if (filterObj.seller && filterObj.seller.length !== 0) {
    if (filterObj.seller.length === 1) {
      if (
        filterObj.seller[0].toLowerCase() === "rozetka" &&
        item.seller.toLowerCase() !== "rozetka"
      )
        return false;
      if (
        filterObj.seller[0].toLowerCase() !== "rozetka" &&
        item.seller.toLowerCase() === "rozetka"
      )
        return false;
    }
  }

  if (filterObj.brand && filterObj.brand.length !== 0) {
    for (const brand of filterObj.brand) {
      if (brand.toLowerCase() === item.brand.toLowerCase()) {
        foundResult = true;
        break;
      }
    }
    if (!foundResult) {
      return false;
    }
    foundResult = null;
  }
  if (filterObj.brandText) {
    if (!item.brand.toLowerCase().includes(filterObj.brandText.toLowerCase()))
      return false;
  }

  return true;
}
