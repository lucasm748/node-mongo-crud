import { Database } from './mongoConnection';

const getAll = async () => {
  const db = new Database();
  return db.collection('usuarios').find().toArray();
};

const login = async () => null;

export { getAll, login };
