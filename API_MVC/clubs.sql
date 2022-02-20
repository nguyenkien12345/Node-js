DROP DATABASE IF EXISTS clubs;

CREATE DATABASE clubs CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE clubs;

CREATE TABLE IF NOT EXISTS club
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS player
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    clubId INT NOT NULL,
    FOREIGN KEY (clubId) REFERENCES club (id)
);

INSERT INTO club(name) VALUES
('Liverpool Fc'),
('Arsenal Fc'),
('Chelsea Fc'),
('Ac Milan'),
('Inter Milan');

INSERT INTO player(name,age,clubId) VALUES
('Saul Niguez',27,3),
('Ante Rebic',28,4),
('Alison Becker',29,1),
('Marcelo Brozovic',29,5),
('Alexandre Lacazette',30,2);
