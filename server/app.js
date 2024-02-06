const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Users = require('./schema/users');

const app = express();

app.use(cors());
app.use(bodyParser.json());

async function mongoDBConnecting() {
  try {
    await mongoose.connect(
      'mongodb+srv://Admin:DxEExbFlqNdYti3Z@dbstep.8knmch5.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'DB',
      },
      {
        collection: 'Users',
      }
    );
  } catch (e) {
    console.log('[e.message]', e.message);
  }
}

mongoDBConnecting();

app.get('/users', (req, res) => {
  Users.find({}).then((user) => {
    res.json(user);
  });
});

app.post('/new-user', (req, res) => {
  const newUser = new Users({
    email: req.body.email,
    password: req.body.password,
    img: req.body.img,
    userType: req.body.userType,
  });

  newUser.save();
});

app.use('/', (req, res) => {
  return res.json({ mgs: 'initial page' });
});

app.get('/users', (req, res) => {
  Users.find({}).then((user) => {
    res.json(user);
  });
});

module.exports = {
  app,
};
