function stringLenghtClip(str, limit) {
  if (str.length > 0) {
    if (str.length > limit) {
      const subStr = str.slice(0, limit);
      return `${subStr}...`;
    }
    return str;
  }
  return str;
}
export default stringLenghtClip;
