const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const api = require('./api');

const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || 3050);

app.use(
  cors({
    origin: process.env.FRONT_SERVER_URL,
  })
);
app.use(cookieParser(process.env.COKKIE_ID));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_ID,
    cookie: {
      httpOnly: true,
    },
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
