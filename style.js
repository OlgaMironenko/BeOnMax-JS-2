'use strict';

/**Практическое задание 2 . Продолжить
 Дописать нашу программу по видео
 1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)
 2) Проверить, чтобы все работало и не было ошибок в консоли
 3) Добавить папку со вторым уроком в свой репозиторий на GitHub*/

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionExpenses: {},
    income: [],
    saving: false,
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("Отлично");
        appData.expenses[a] = b;
    } else {
        console.log("Плохо");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30
alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Маленький достаток");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний достаток");
} else if (appData.moneyPerDay > 2000) {
    console.log("Большой достаток");
} else {
    console.log("Произошла ошибка");
}


// Используем цикл switch

switch (appData.moneyPerDay) {
    case appData.moneyPerDay < 100:
        console.log("Маленький достаток");
        break;
    case appData.moneyPerDay > 100 && appData.moneyPerDay < 2000:
        console.log("Средний достаток");
        break;
    case  appData.moneyPerDay > 2000:
        console.log("Большой достаток");
        break;
    default:
        console.log("Произошла ошибка");
        break;
}

// Используем цикл WHILE
//
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", "");
//
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("Отлично");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Плохо");
//         i--;
//     }
//     i++;
// }


// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", "");
//
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("Отлично");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Плохо");
//         i--;
//     }
//     i++;
// }
// while (i<2);
//
// appData.moneyPerDay = appData.budget / 30;
// alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");
