CREATE DATABASE budget_ti;
USE budget_ti;
CREATE TABLE userTiBudget(
    idUserTi INT NOT NULL IDENTITY(1,1),
    emailUser VARCHAR(50) NOT NULL PRIMARY KEY,
    userPassword VARCHAR(500)
);
INSERT INTO userTiBudget(emailUser,userPassword) VALUES ('david@gmail.com','54321');
SELECT * FROM userTiBudget;
--Tabla de presupuestos
CREATE TABLE budgets(
    idBudget INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    CreationDate VARCHAR(50) NOT NULL ,
    project VARCHAR(500),
    versions VARCHAR(20)
);
INSERT INTO budgets(CreationDate,project,versions) VALUES ('2018-07-22','Comprar procesadores','1.1');
INSERT INTO budgets(CreationDate,project,versions) VALUES ('2021-08-22','Comprar graficas','2.1');
DROP TABLE budgets;
SELECT * FROM budgets;
--Estado de resultados
CREATE TABLE statesResults(
    idEstRes INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    sales FLOAT,--foranea  de flujo de efectivo
    costs FLOAT,--foranea  de flujo de efectivo
    margin FLOAT,
    FinalBalnce FLOAT
);
INSERT INTO statesResults(sales,costs,margin,FinalBalnce) VALUES (234,150.34,5643,5435);
SELECT * FROM statesResults;
--Flujo de efectivo
CREATE TABLE cashFlow(
    idCar INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    income FLOAT,
    expenses FLOAT,
    total Float
)
INSERT INTO cashFlow(income,expenses,total) VALUES (234.543);
SELECT * FROM cashFlow;
--Resumen Financiero
CREATE TABLE financialSummary(
    idFinSu INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    sales FLOAT,
    costs FLOAT,
    margin FLOAT,
    porcent VARCHAR(20)
)
INSERT INTO financialSummary(sales,costs,margin,porcent) VALUES (234.543,150.34,432,);

