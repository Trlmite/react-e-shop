function stringLenghtClip(str, limit) {
  if (str.length > limit) {
    const subStr = str.slice(0, limit);
    return `${subStr}...`;
  }
  return str;
}
export default stringLenghtClip;
