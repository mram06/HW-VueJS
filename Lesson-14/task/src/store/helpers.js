export default function isCorrespondToFilter(item, filter) {
  if (item.title.toLowerCase().includes(filter.toLowerCase())) return true;
  return false;
}
