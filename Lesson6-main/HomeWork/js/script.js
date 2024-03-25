// // Створити телефонну книгу

// // 1) створити початковий клас Abonent, де зберігатимуться ім * я і номер

// class Abonent {
//   constructor(informations) {
//     this.firstName = informations.firstName;
//     this.lastName = informations.lastName;
//     this.phoneNumber = informations.phoneNumber;
//   }

//   // 2) створити set який прийматиме телефон і номер

//   set phoneNumber(newNumber) {
//     this.number = newNumber;
//   }
//   //   3) створити get який виводитиме данні про абонента

//   get abonent() {
//     return `${this.lastName} ${this.firstName} - ${this.number}`;
//   }
// }

// // 4) створити три різних юзери

// const Vas = new Abonent({
//   firstName: "Vas",
//   lastName: "Bakhmut",
//   phoneNumber: "0425401444",
// });

// const Lubaha = new Abonent({
//   firstName: "Liubov",
//   lastName: "Moisieieva",
//   phoneNumber: "04505064987",
// });

// const Mila = new Abonent({
//   firstName: "Mila",
//   lastName: "Bakhmut",
//   phoneNumber: "0487057645",
// });

// // 5) вивести данні

// console.group(`Телефонна книга:`);
// console.log(Vas.abonent);
// console.log(Lubaha.abonent);
// console.log(Mila.abonent);
// console.groupEnd();
