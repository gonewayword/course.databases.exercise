DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

-- mysql -u "root" -p "tigerblood" -e "SHOW DATABASES"

CREATE TABLE messages (
  username TEXT NOT NULL,
  message TEXT NOT NULL,
  roomname TEXT NOT NULL
);
CREATE TABLE users (
  username TEXT NOT NULL,
  realname TEXT NULL
);
--
-- CREATE TABLE messages (
--   message_id INTEGER PRIMARY KEY,
--   message TEXT NOT NULL,
--   username TEXT varchar(30)ls
--   ,
--   time_stamp DATE NOT NULL,
--   FOREIGN KEY(username) REFERENCES users(username)
-- );
--
-- CREATE TABLE users (
--   /* Describe your table here.*/
--   user_id INTEGER PRIMARY KEY,
--   username TEXT NOT NULL,
--   realname TEXT NOT NULL,
--   age INTEGER NULL,
-- );

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
