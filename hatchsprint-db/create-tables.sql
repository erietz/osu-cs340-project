/*
 * Author      : Ethan Rietz and Jason Marsh
 * Date        : 2021-11-09
 * Description : Create all of the tables for the HatchSprint database
 */


/* -- */
-- Table `Customers`
CREATE TABLE IF NOT EXISTS `Customers` (
  `customerID` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `firstName` VARCHAR(16) NOT NULL,
  `lastName` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `streetAddress1` VARCHAR(45) NOT NULL,
  `streetAddress2` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(2) NOT NULL,
  `zip` INT(5) NOT NULL,
  `phoneNumber` INT NULL,
  PRIMARY KEY (`customerID`)
);
/* -- */


/* -- */
-- Table `Restaurants`
CREATE TABLE IF NOT EXISTS `Restaurants` (
  `restaurantID` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `restaurantName` VARCHAR(45) NOT NULL,
  `streetAddress1` VARCHAR(45) NOT NULL,
  `streetAddress2` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` CHAR(2) NOT NULL,
  `zip` INT(5) NOT NULL,
  PRIMARY KEY (`restaurantID`)
);
/* -- */

/* -- */
-- Intersection Table `RestaurantCustomers`
CREATE TABLE IF NOT EXISTS `RestaurantCustomers` (
  `customerID` INT NOT NULL,
  `restaurantID` INT NOT NULL,
  PRIMARY KEY (`customerID`, `restaurantID`),
  FOREIGN KEY fk_customerID(`customerID`)
    REFERENCES Customers(`customerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY fk_restaurantID(`restaurantID`)
    REFERENCES Restaurants(`restaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
/* -- */



/* -- */
-- Table `Drivers`
CREATE TABLE IF NOT EXISTS `Drivers` (
  `driverID` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `licenseNumber` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`driverID`)
);
/* -- */

/* -- */
-- Table `Products`
CREATE TABLE IF NOT EXISTS `Products` (
  `productID` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `productName` VARCHAR(45) NOT NULL,
  `availability` TINYINT NOT NULL,
  `price` FLOAT NOT NULL,
  `restaurantID` INT NOT NULL,
  PRIMARY KEY (`productID`, `restaurantID`)
);
/* -- */


/* -- */
-- Table `Orders`
CREATE TABLE IF NOT EXISTS `Orders` (
  `orderID` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `preTax` FLOAT NOT NULL,
  `tax` FLOAT NOT NULL,
  `tip` FLOAT NOT NULL,
  `totalCost` FLOAT NOT NULL,
  `date` DATE NOT NULL,
  `time` FLOAT NOT NULL,
  `driverID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `productID` INT NOT NULL,
  PRIMARY KEY (`orderID`, `driverID`, `customerID`, `productID`)
);
/* -- */

/* -- */
CREATE TABLE IF NOT EXISTS `OrderProducts` (
  `orderID` INT NOT NULL,
  `productID` INT NOT NULL,
  PRIMARY KEY (`orderID`, `productID`),
  FOREIGN KEY fk_productID (`productID`)
    REFERENCES Products(`productID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY fk_orderID (`orderID`)
    REFERENCES Orders(`orderID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
/* -- */


/* -- */
-- Table `Products` Foreign Keys
ALTER TABLE `Products`
  ADD CONSTRAINT `restaurantID`
    FOREIGN KEY (`restaurantID`)
    REFERENCES `Restaurants` (`restaurantID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
;
/* -- */

/* -- */
-- Table Orders Foreign Keys
ALTER TABLE `Orders`
  ADD CONSTRAINT `driverID`
    FOREIGN KEY (`driverID`)
    REFERENCES `Drivers` (`driverID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
;
/* -- */

/* -- */
-- Table Orders Foreign Keys
ALTER TABLE `Orders`
  ADD CONSTRAINT `customerID`
    FOREIGN KEY (`customerID`)
    REFERENCES `Customers` (`customerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
;
/* -- */

/* -- */
-- Table Orders Foreign Keys
ALTER TABLE `Orders`
  ADD CONSTRAINT `productID`
    FOREIGN KEY (`productID`)
    REFERENCES `Products` (`productID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
;
/* -- */
