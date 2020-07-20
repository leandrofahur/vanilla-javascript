class Github {
  constructor() {
    this.client_id = 'bd17bf1f015daa23db8c';
    this.client_secret = '60dddcb3dde402427edb9a5cf151020d9096038d';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileJson = await profileResponse.json();
    return {
      profileJson
    }
  }
}

