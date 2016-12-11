var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          console.log(err, 'this is error in get messages');
        } else {
          console.log('this is results', results);
          res.send(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err, results) {
        if (err) {
          console.log(err, 'this is error in post messages');
        } else {
          res.sendStatus(201);
        }
      });
    }

  }, // a function which handles posting a message to the database


  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body, function(err, results) {
        if (err) {
          console.log(err, 'this is error in users get');
        }
        res.send(results);
      });
    },
    post: function (req, res) {
      models.users.get(req.body, function(err, results) {
        // console.log(res, 'ressssssssssssssss line 35 comptrollers')
        if (err) {
          console.log(err, 'this is error in users post');
        }
        res.sendStatus(201);
      });
    }
  }
};


// function (req, res) {
//   models.messages.get(function (err, res) {
//     res.send(req.room, req.message, req.username);
//   });
