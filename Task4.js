let formatString = function (string) {
  if (string.length > 40) {
    let cropString = string.slice(0, 40);
    let formatString = cropString.split(" ");
    formatString.splice(formatString.length, 0, "...");
    return formatString.join(" ");
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
