const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = []

// getRandomUser();
// getRandomUser();
// getRandomUser();
// getRandomUser();
// getRandomUser();

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/');
  const dataResJson = await res.json();
  const userData = dataResJson.results[0];
  addData({
    name: `${userData.name.first} ${userData.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  });
}

const addData = (obj) => {
  data.push(obj);
  onUpdateDOM();
}

const doubleMoney = () => {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  onUpdateDOM();
}

const calculateWealth = () => {
  const wealth = data.reduce((acc, user) => (acc + user.money), 0);
  // console.log(formatMoney(wealth));

  const element = document.createElement('div');
  element.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}<strong></h3>`;
  main.appendChild(element);
}

const sortRichest = () => {
  data = data.sort((a,b) => b.money - a.money)
  onUpdateDOM();
}

const showMillionaires = () => {
  data = data.filter((user) => user.money > 1000000)
  onUpdateDOM();
}

const onUpdateDOM = (providedData = data) => {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  });
};

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}



// Event Listeners:
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);