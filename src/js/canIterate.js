export default function canIterate(data) {
  if (data) {
    return Object.getPrototypeOf(data).hasOwnProperty(Symbol.iterator);
  }
  return false;
}
