create database auth_demo;

use auth_demo;

create table users(
    id int primary key auto_increment,
    username varchar(50) not null unique,
    password varchar(255) not null 
);