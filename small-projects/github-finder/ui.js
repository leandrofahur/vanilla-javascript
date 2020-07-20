// Init:
const github = new Github;

// Search user:
const searchUser = document.getElementById('searchUser');

// Search user event listner:
searchUser.addEventListener('keyup', (evt) => {
  if(evt.target.value !== '') {
    const userText = evt.target.value;
    github.getUser(userText).then(profile => {
      console.log(profile);
    })
  }
})