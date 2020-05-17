const checkForSpam = function (message) {
  const spamWords1 = "sale";
  const spamWords2 = "[SPAM]";
  //   Хотел без объявления 2-х переменных, а через масив
  // Только не понимаю как, чтобы сделать код меньше и практичнее
  // Сможете подсказать?
  let arrMessage = message.split(" ");
  for (let i = 0; i < arrMessage.length; i += 1) {
    if (arrMessage[i] === spamWords1 || arrMessage[i] === spamWords2) {
      return true;
    }
  }
  return false;
};
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
