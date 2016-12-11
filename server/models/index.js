var db = require('../db/index.js')();

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'select * from messages';
      var queryArgs = 'messages.roomname, messages.message, messages.username;';
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      console.log(body, 'line 13\\\\\\\\\\\\\\\\\\\\\\\\\\llll');
      var queryString = 'insert into messages';
      var queryArgs = `(username, message, roomname) values (${body.username}, ${body.message}, ${body.roomname});`;
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      }); // a function which can be used to insert a message into the database
    }
  },

  users: {
    // Ditto as above.
    get: function (body, callback) {
      var queryString = 'SELECT * from users';
      var queryArgs = `users.${body.username};`;
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      });
    },
    post: function (body, callback) {
      console.log(body, 'heres body in post in model MMMMMMMMMRRRRRMMMMRMRMRMRMRMRMRMR');
      var queryString = 'insert into users';
      var queryArgs = `(username) values (${body.username});`;
      db.query(queryString, queryArgs, function(err, results) {
        callback(err, results);
      });
    }
  }
};
