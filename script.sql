USE cotuca;

SELECT * FROM dbo.Brand;

-- INSERT INTO Brand (name, country, inauguratedIn) VALUES ( 'ADOLETA', 'BR', 2022);

-- DROP TABLINSERT INTO Brand (id, name, country, inauguratedIn)

-- DROP TABLE Brand;
-- DROP TABLE RaceCar;

-- CREATE TABLE Brand (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) NOT NULL,
--   country char(2) NOT NULL,
--   inauguratedIn INT NOT NULL
-- );

-- CREATE TABLE RaceCar (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   brandId INT NOT NULL,
--   name VARCHAR(30) NOT NULL,
--   year INT NOT NULL,
--   color CHAR(6) NOT NULL,
--   price INT NOT NULL,
--   imageURL TEXT NOT NULL
-- );

-- ALTER TABLE RaceCar
--   ADD CONSTRAINT fk_brand FOREIGN KEY (brandId)
--     REFERENCES Brand(id);
