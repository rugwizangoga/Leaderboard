export const refreshTable = async (link) => {
  const response = await fetch(link);
  await response.json()
    .then((json) => {
      const table = document.querySelector('.table');
      table.replaceChildren();
      let index = 1;
      json.result.forEach((scores) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        ${scores.user}: ${scores.score}
    `;
        if (index % 2 === 0) {
          listItem.classList.add('whitebcolor');
        } else {
          listItem.classList.add('graybcolor');
        }
        index += 1;
        table.append(listItem);
      });
    });
};

export const addNewScore = async (link, user, score) => {
  await fetch(link, {
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