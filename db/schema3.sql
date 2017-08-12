USE z5t1435ep5v9l7gn;

SHOW VARIABLES LIKE 'auto_inc%';

DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id)
);
