const fancyList = document.querySelector(".fancy-list");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    fancyList.textContent = "";

    for (let i = 0; i < 10; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = data[i].title;
      fancyList.appendChild(listItem);
    }
  });
  const btnToEur = document.querySelector("#btn-eur");
  fetch("https://api.exchangerate.host/latest")
  .then((response) => response.json())
  .then((data) => {
    btnToEur.textContent = data.rates.EUR
  });

  const btnToKgs = document.querySelector("#btn-kgs");
  fetch("https://api.exchangerate.host/latest")
  .then((response) => response.json())
  .then((data) => {
    btnToKgs.textContent = data.rates.KGS
  });

  document.querySelector("#learn-gender").addEventListener("click", function() {
    const gender1 = document.querySelector("#gender");
    fetch("https://api.genderize.io/?name=" + gender1)
    .then((response) => response.json())
    .then((data)=>{
      document.querySelector("#gender-value").textContent = data.gender
    });
  });
  document.querySelector("#learn-gender").addEventListener("click", function() {
    const gender1 = document.querySelector("#gender");
    fetch("https://api.genderize.io/?name=" + gender1)
    .then((response) => response.json())
    .then((data)=>{
      document.querySelector("#gender-value").textContent = data.gender
    });
  });
  document.querySelector("#random-active").addEventListener("click", function() {
    const gender1 = document.querySelector("#random-value");
    fetch("https://randomuser.me/api/" + gender1)
    .then((response) => response.json())
    .then((data)=>{
      document.querySelector("#random-result").textContent = data.results.name
    });
  });

  