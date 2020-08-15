const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Surrey, British Columbia',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Joana Doe',
    age: 21,
    gender: 'female',
    lookingFor: 'male',
    location: '-',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Smith Doe',
    age: 27,
    gender: 'male',
    lookingFor: 'male',
    location: 'Fort Lauderdale, Florida',
    image: 'https://randomuser.me/api/portraits/men/21.jpg'
  },
  {
    name: 'Angela Doe',
    age: 45,
    gender: 'female',
    lookingFor: 'male',
    location: 'New York, New York',
    image: 'https://randomuser.me/api/portraits/women/77.jpg'
  }
];

const profiles = profileIterator(data);
nextProfile()

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}" height="200" width="200">
    `;
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for a ${currentProfile.gender}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
    `;
  } else {
    window.location.reload();
  }

}

// Iterator function:
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  }
}
