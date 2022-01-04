function stringLenghtClip(str, limit) {
  if (str.lenght > limit) {
    const subStr = str.slice(limit);
    return `${subStr}...`;
  }
  return str;
}

export default stringLenghtClip;
