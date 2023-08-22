// ex 1


// let bankAccount = {
//     ownerName: "",
//     accountNumber: "",
//     balance: 0,
  
//     deposit: function(amount) {
//       if (amount > 0) {
//         this.balance += amount;
//         console.log("Рахунок поповнено на " + amount + " грн. Загальний баланс: " + this.balance + " грн.");
//       } else {
//         console.log("Некоректна сума для поповнення.");
//       }
//     },
  
//     withdraw: function(amount) {
//       if (amount > 0 && amount <= this.balance) {
//         this.balance -= amount;
//         console.log("Знято " + amount + " грн. Загальний баланс: " + this.balance + " грн.");
//       } else {
//         console.log("Недостатньо коштів на рахунку або некоректна сума для зняття.");
//       }
//     }
//   };
  
//   document.getElementById("depositButton").addEventListener("click", function() {
//     let amount = parseFloat(prompt("Введіть суму для поповнення:"));
//     bankAccount.deposit(amount);
//   });
  
//   document.getElementById("withdrawButton").addEventListener("click", function() {
//     let amount = parseFloat(prompt("Введіть суму для зняття:"));
//     bankAccount.withdraw(amount);
//   });


// ex 2


// var weather = {
//     temperature: 0,
//     humidity: 0,
//     windSpeed: 0,
    
//     isBelowZero: function() {
//       return this.temperature < 0;
//     }
//   };
  
//   weather.temperature = parseFloat(prompt("Введіть температуру:"));
  
//   if (weather.isBelowZero()) {
//     console.log("Температура нижче 0 градусів Цельсія");
//   } else {
//     console.log("Температура вище або рівна 0 градусів Цельсія");
//   }


// ex 3


// var user = {
//     name: "",
//     email: "",
//     password: "",
    
//     setUserProperties: function(name, email, password) {
//       this.name = name;
//       this.email = email;
//       this.password = password;
//     },
    
//     login: function(inputEmail, inputPassword) {
//       if (inputEmail === this.email && inputPassword === this.password) {
//         return true; 
//       } else {
//         return false; 
//       }
//     }
//   };
  
//   var nameInput = prompt("Введіть ім'я:");
//   var emailInput = prompt("Введіть email:");
//   var passwordInput = prompt("Введіть пароль:");
  
//   user.setUserProperties(nameInput, emailInput, passwordInput);
  
//   var loginEmail = prompt("Введіть email для входу:");
//   var loginPassword = prompt("Введіть пароль для входу:");
  
//   if (user.login(loginEmail, loginPassword)) {
//     console.log("Логін успішний. Вітаємо, " + user.name + "!");
//   } else {
//     console.log("Невірний email або пароль. Спробуйте ще раз.");
//   }


// ex 4

const movie = {
    title: "Sample Movie",
    director: "John Doe",
    year: 2023,
    rating: 9.2,
    isHighRating: function() {
      return this.rating > 8;
    },
  };

  const titleElement = document.querySelector("title");
  const directorElement = document.querySelector("director");
  const yearElement = document.querySelector("year");
  const ratingElement = document.querySelector("rating");

  titleElement.textContent = movie.title;
  directorElement.textContent = movie.director;
  yearElement.textContent = movie.year;
  ratingElement.textContent = movie.rating;

  if (movie.isHighRating()) {
    titleElement.classList.add("green-text");
  }