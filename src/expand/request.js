import axios from 'axios';

export function request(url) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      baseURL: 'http://39.99.241.232:3000/',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then(result => {
        if (result.status == 200 && result.data.code == 200) {
          resolve(result.data.data);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
