CREATE table todos (
ID int AUTO_INCREMENT,
title varchar(255) NOT NULL,
completed boolean NOT NULL,
PRIMARY KEY (`ID`)
);

INSERT INTO todos (ID, title, completed) VALUES (1, "get up", false), (2, "have breakfast", false), (3, "take bus", false);