import { todos } from '../services/usuarioServices';

const getAll = async (req, res) => {
  const usuarios = todos();
  return res.status(200).json(usuarios);
};

const login = async () => null;

export { getAll, login };
