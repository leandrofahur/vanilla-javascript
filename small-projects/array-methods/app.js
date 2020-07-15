const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

const data = []

getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api/');
  const data = await res.json();
  const userData = data.results[0];
  addData({
    name: `${userData.name.first} ${userData.name.last}`,
    money: Math.floor(Math.random() * 100000)
  });
}

const addData = (obj) => {
  data.push(obj);
  // console.log(data);
}

