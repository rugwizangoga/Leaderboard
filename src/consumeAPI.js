export const refreshTable  = async(link)=>{
  let response= await fetch(link);
  response= await response.json()
    .then((json) => {
      const table = document.querySelector('.table');
      table.replaceChildren();
      json.result.forEach((scores) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        ${scores.user}: ${scores.score}
    `;
        table.append(listItem);
      });
    });
};

export const addNewScore = async(link, user, score) => {
  const response= await fetch(link, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};