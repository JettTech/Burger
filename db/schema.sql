DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NULL,
	devoured BOOLEAN DEFAULT false,   -- // BOOLEAN === TINYINT(1) NULL  >>> !! WOULD THIS also WORK??  !!
    created_at TIMESTAMP NOT NULL,
    images TEXT NULL,
	PRIMARY KEY (id)
);

-- // date TIMESTAMP NOT NULL,    --**** 'YYYY-MM-DD HH:MM:SS' format:: CHECK ON SYNTAX IMPLEMENTATION. ****   
  --//the date will be implemented by the database set-up / settings, itself.
