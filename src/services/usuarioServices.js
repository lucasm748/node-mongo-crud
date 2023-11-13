import { getAll } from '../model/usuarioModel';

const todos = async () => {
  const users = await getAll();
  return users;
};

const login = async () => null;

export { todos, login };
