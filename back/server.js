const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || 3050);

app.use(cookieParser(process.env.COKKIE_ID));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_ID,
    cookie: {
      httpOnly: true,
    },
  })
);

app.get('/', (req, res) => {
  res.send('server start');
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
