Create database burgers_db;
Use burgers_db;



Create Table burgers (
    id int(10) not null auto_increment,
    burger_name varchar(50),
    devoured boolean default false,
    primary key (id)
)
