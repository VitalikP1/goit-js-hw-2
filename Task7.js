const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let correctWord;
  if (3 < login.length && login.length < 17) {
    correctWord = true;
  } else {
    correctWord = false;
    // return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  return correctWord;
};

const isLoginUnique = function (allLogins, login) {
  let registredLogin;
  for (chackedLogin of allLogins) {
    if (login === chackedLogin) {
      registredLogin = false;
      //   return "Такой логин уже используется!";
      //   console.log(registredLogin);
    } else {
      registredLogin = true;
      //   console.log(registredLogin);
    }
  }
  return registredLogin;
};

const addLogin = function (allLogins, login) {
  console.log(isLoginValid(login));
  if (isLoginValid === false) {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  console.log(isLoginUnique(login));
  if (isLoginUnique === false) {
    return "Такой логин уже используется!";
  }
  allLogins.push(login);
  return "Логин успешно добавлен!";
};

console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'

console.log(logins);

console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

//Я НЕ ПОНИМАЮ ГДЕ Я ДОПУСТИЛ ОШИБКУ В ПЕРВОЙ ПРОВЕРКЕ И НЕ ПОНИМАЮ КАК СДЕЛАТЬ ВТОРУЮ И СВЯЗАТЬ ВСЁ В КУЧУ
// СБРАСЫВАЮ ВАМ СВОЙ СЫРОЙ КОД С НАДЕЖДОЙ О ПОМОЩИ
