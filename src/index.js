import './style.css';
import { refreshTable, addNewScore } from './consumeAPI.js';

let gameId = '';
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  body: JSON.stringify({
    name: 'fantasy football',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    const res = json.result;
    gameId = res.slice(14, res.lastIndexOf(' '));
  });

const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', () => {
  refreshTable(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
});

const addscore = document.getElementById('submit');
const name = document.getElementById('name');
const score = document.getElementById('score');

addscore.addEventListener('click', () => {
  if (name.value !== '' && score.value !== '') {
    addNewScore(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, name.value, score.value);
    document.forms[0].reset();
  }
});
