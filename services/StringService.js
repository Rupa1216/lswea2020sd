const StringService = {};

StringService.cutString = (str) => {
  // Edge Cases
  if (str === null || str === undefined || str.length < 2 || typeof(str) !== "string") return "";

  let result = "";

  for (let i = 2; i < str.length; i += 3) {
    result += str[i];
  }
  return result;
};

module.exports = StringService;
