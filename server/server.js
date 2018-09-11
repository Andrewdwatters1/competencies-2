const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const session = require('express-session');

const controller = require('./controller');
const icons = require('./fontAwesomeIcons');

const app = express();
const serverPort = process.env.SERVER_PORT;

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Database is linked!');
})
//testgins
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))


function checkPassword(req, res, next) {
  console.log(req.query);
  if(req.query.password === 'password') {
    return next();
  } else {
    res.status(200).send("Umm... it's password bronie")
  }
}

app.get('/api/login', checkPassword, (req, res, next) => {
  console.log('hit');
  res.status(200).send('Wow, you logged in, good job');
},);
app.get('/api/login', controller.logout);
app.get('/api/icons', controller.getAllIcons);
app.post('/api/icons', controller.addIcon);
app.put('/api/icons', controller.addIconTags);
app.delete('/api/icons', controller.deleteIcon);

app.listen(serverPort, () => {
  console.log('Listening on port: ', serverPort);
})