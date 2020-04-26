DROP DATABASE IF EXISTS burgers_db;
Create database burgers_db;
Use burgers_db;



Create Table burgers (
    id int not null auto_increment,
    burger_name varchar(50),
    devoured boolean default false,
    createdAt datetime not null default CURRENT_TIMESTAMP,
    primary key (id)
)
