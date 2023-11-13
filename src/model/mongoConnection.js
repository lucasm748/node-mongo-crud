const mongoose = require('mongoose');

const server = encodeURIComponent(
  'mongodb+srv://devmongodb:yHextdHhjrgSgJMq@cluster0.tmnlx1s.mongodb.net/?retryWrites=true&w=majority'
);
const database = 'crudmongodb';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection error', err);
      });
  }
}

module.exports = new Database().connect();
