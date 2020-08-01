const StringService = {};

StringService.cutString = (str) => {
  // Edge Cases
  if (str === null || str === undefined) return "";
  if (str.length < 2) return "";
  if (typeof(str) !== "string") return "";

  let result = "";

  for (let i = 2; i < str.length; i += 3) {
    result += str[i];
  }
  return result;
};

module.exports = StringService;
