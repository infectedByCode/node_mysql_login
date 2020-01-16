DROP DATABASE IF EXISTS login_users;
CREATE DATABASE login_users;

USE login_users;

DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (
  uuid VARCHAR(36) NOT NULL,
  username VARCHAR(50) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL
);

INSERT INTO users (uuid, username, user_password, email)
VALUES(
  '710b962e-041c-11e1-9234-0123456789ab', 
  'user1288', 
  'password', 
  'email@email.com'
  );