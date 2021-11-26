const url = 'http://localhost:3030/data';

const getAll = () => {
  return fetch(`${url}/games?sortBy=_createdOn%20desc`).then((res) =>
    res.json()
  );
};

const getOne = (id) => {
  return fetch(`${url}/games/${id}`).then((res) => res.json());
};

const gameService = {
  getAll,
  getOne,
};

export default gameService;
