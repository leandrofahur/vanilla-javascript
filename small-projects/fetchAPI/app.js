document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

function getJSON() {
  fetch('posts.json')
    .then(function(res) {
      return res.json();
    })
    .then(function(objects) {
      let output = '';
      objects.forEach(function(data) {
        output += `
          <li>${data.title}</li>
          <li>${data.body}</li>
          `
      });
      document.getElementById('output').innerHTML = output;
      // console.log(JSON.stringify(objects));
    })
    .catch(function(err) {
      console.log(err);
    })
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(objects) {
      let output = '';
      objects.forEach(function(data) {
        output += `
          <li>${data.login}</li>          
          `
      });
      document.getElementById('output').innerHTML = output;
      // console.log(JSON.stringify(objects));
    })
    .catch(function(err) {
      console.log(err);
    })
}