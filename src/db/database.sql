CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

show table;
describe employee;


INSERT INTO employee VALUES 
    (1,'Joe',1000),
    (2,'John',1100),
    (3,'Jack',1200),
    (4,'Jim',1300),
    (5,'Jerry',1400);



CREATE DATABASE IF NOT EXISTS trabajodb;

USE trabajodb;

CREATE TABLE usuario (
    
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(70)NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    rol VARCHAR(70) NOT NULL,
    rut INT,
    razon_social VARCHAR(50),
    PRIMARY KEY (email)
);

CREATE TABLE servicio (
    
    id INT NOT NULL AUTO_INCREMENT,
    Ceco VARCHAR(50),
    recorrido  VARCHAR(150)NOT NULL,
    email VARCHAR(70)NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (email) REFERENCES usuario(email)
);

-- Insertar datos en la tabla usuario
INSERT INTO usuario (nombre, apellido, email, telefono, contraseña, rol, rut, razon_social)
VALUES
    ('Juan', 'Pérez', 'juan.perez@email.com', '123456789', 'contraseña123', 'usuario', 123456789, 'Empresa A'),
    ('María', 'Gómez', 'maria.gomez@email.com', '987654321', 'clave456', 'admin', 987654321, 'Empresa B'),
    ('Carlos', 'López', 'carlos.lopez@email.com', '555666777', 'secreto789', 'conductor', 654321987, 'Empresa C'),
    ('Laura', 'García', 'laura.garcia@email.com', '111223344', 'passLaura123', 'usuario_regular', 345678901, 'Empresa D'),
    ('Roberto', 'Martínez', 'roberto.martinez@email.com', '999888777', 'robertoPass789', 'usuario_regular', 567890123, 'Empresa E'),
    ('Ana', 'López', 'ana.lopez@email.com', '333222111', 'anaPassword456', 'admin', 789012345, 'Empresa F');
    

-- Insertar datos en la tabla servicio
INSERT INTO servicio (Ceco, recorrido, email)
VALUES
    ('C001', 'Recorrido A', 'juan.perez@email.com'),
    ('C002', 'Recorrido B', 'maria.gomez@email.com'),
    ('C003', 'Recorrido C', 'carlos.lopez@email.com'),
    ('C004', 'Recorrido D', 'laura.garcia@email.com'),
    ('C005', 'Recorrido E', 'roberto.martinez@email.com'),
    ('C006', 'Recorrido F', 'ana.lopez@email.com');



DROP TABLE  servicio;
DROP TABLE usuario;



INSERT INTO tblusuario (nombre, apellido, fecha_nacimiento, email, telefono, contraseña, rol, rut, razon_social)
VALUES
    ('Juan', 'Pérez', '1990-05-15', 'juan.perez@email.com', '123456789', 'contraseña123', 'usuario_regular', 123456789, 'Empresa A'),



