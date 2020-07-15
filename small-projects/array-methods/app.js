const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

const data = []

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