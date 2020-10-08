const adminEmail = 'k_murata';
const adminPassword = 'a9id3Khes'
class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  set = (key, value) => localStorage.setItem(key, value);

  get = key => this.getLocalStorage(key);

  getLocalStorage = key => {
    const ret = localStorage.getItem(key);
    if(ret){
      return ret;
    }
    return null;
  };

  login = async (email, password) => {
    if(email===adminEmail && password===adminPassword) {
      this.set('isLoggedIn', true);
      return true;
    } else {
      return false;
    }
  };

  logout = async() => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false);
    }
  };
}

export default new User();