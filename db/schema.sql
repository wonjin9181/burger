CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int not null auto_increment,
    burger_name varchar(100) not null,
    devoured boolean default false,
    PRIMARY KEY (id)
);

