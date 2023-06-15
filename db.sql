// db queries

create database store;

create table products (
    id int not null auto_increment,
    name varchar(255) not null,
    description varchar(255),
    price float(9, 2) not null,
    sale_price float(9, 2) not null,
    quantity int not null,
    image text,

    primary key (id) 
)

alter table products
add type varchar(255) not null;

alter table products
alter column image text not null;
