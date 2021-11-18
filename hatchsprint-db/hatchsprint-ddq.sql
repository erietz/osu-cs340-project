/*
 * Author      : Ethan Rietz and Jason Marsh
 * Date        : 2021-11-09
 * Description : Create all of the tables for the HatchSprint database
 */

-------------------------------------------------------------------------------
-- Create all of the tables
-------------------------------------------------------------------------------

/* -- */
-- We must delete the intersection tables before we can delete the parent
-- tables that are referenced by them.
DROP TABLE IF EXISTS `OrderProducts`;
DROP TABLE IF EXISTS `RestaurantCustomers`;
DROP TABLE IF EXISTS `Orders`;
DROP TABLE IF EXISTS `Products`;
DROP TABLE IF EXISTS `Customers`;
DROP TABLE IF EXISTS `Restaurants`;
DROP TABLE IF EXISTS `Drivers`;

/* -- */
-- Table `Customers`
DROP TABLE IF EXISTS `Customers`;
CREATE TABLE `Customers` (
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
  `phoneNumber` BIGINT NULL,
  PRIMARY KEY (`customerID`)
);
/* -- */


/* -- */
-- Table `Restaurants`
DROP TABLE IF EXISTS `Restaurants`;
CREATE TABLE `Restaurants` (
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
DROP TABLE IF EXISTS `RestaurantCustomers`;
CREATE TABLE `RestaurantCustomers` (
  `customerID` INT NOT NULL,
  `restaurantID` INT NOT NULL,
  PRIMARY KEY (`customerID`, `restaurantID`),
  FOREIGN KEY fk_customerID(`customerID`)
    REFERENCES Customers(`customerID`)
    ON DELETE CASCADE,
  FOREIGN KEY fk_restaurantID(`restaurantID`)
    REFERENCES Restaurants(`restaurantID`)
    ON DELETE CASCADE
);
/* -- */



/* -- */
-- Table `Drivers`
DROP TABLE IF EXISTS `Drivers`;
CREATE TABLE `Drivers` (
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
DROP TABLE IF EXISTS `Orders`;
CREATE TABLE `Orders` (
  `orderID` INT NOT NULL AUTO_INCREMENT UNIQUE,
  `preTaxCost` FLOAT NOT NULL,
  `tax` FLOAT NOT NULL,
  `tip` FLOAT NOT NULL,
  `totalCost` FLOAT NOT NULL,
  `date` DATE NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `driverID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `restaurantID` INT NOT NULL,
  PRIMARY KEY (`orderID`, `driverID`, `customerID`, `restaurantID`)
);
/* -- */

/* -- */
-- Table `Products` Foreign Keys
ALTER TABLE `Products`
  ADD CONSTRAINT `restaurantID_products`
    FOREIGN KEY (`restaurantID`)
    REFERENCES `Restaurants` (`restaurantID`)
    ON DELETE CASCADE
;
/* -- */

/* -- */
-- Table Orders Foreign Keys
ALTER TABLE `Orders`
  ADD CONSTRAINT `driverID_orders`
    FOREIGN KEY (`driverID`)
    REFERENCES `Drivers` (`driverID`)
    ON DELETE CASCADE
;
/* -- */

/* -- */
-- Table Orders Foreign Keys
ALTER TABLE `Orders`
  ADD CONSTRAINT `customerID_orders`
    FOREIGN KEY (`customerID`)
    REFERENCES `Customers` (`customerID`)
    ON DELETE CASCADE
;
/* -- */

/* -- */
-- Table Orders Foreign Keys
ALTER TABLE `Orders`
  ADD CONSTRAINT `restaurantID_orders`
    FOREIGN KEY (`restaurantID`)
    REFERENCES `Restaurants` (`restaurantID`)
    ON DELETE CASCADE
;
/* -- */

/* -- */
DROP TABLE IF EXISTS `OrderProducts`;
CREATE TABLE `OrderProducts` (
  `orderID` INT NOT NULL,
  `productID` INT NOT NULL,
  PRIMARY KEY (`orderID`, `productID`),
  FOREIGN KEY fk_productID (`productID`)
    REFERENCES Products(`productID`)
    ON DELETE CASCADE,
  FOREIGN KEY fk_orderID (`orderID`)
    REFERENCES Orders(`orderID`)
    ON DELETE CASCADE
);
/* -- */


/* ------------------------------------------------------------------------------- */
/* -- Add Sample data */
/* ------------------------------------------------------------------------------- */

/* -- */
INSERT INTO Drivers (firstName, lastName, licenseNumber)
VALUES
  ('Ethan', 'Rietz', '1235ABC'),
  ('Jason', 'Marsh', '456CDE'),
  ('Angela', 'Owens', '789FGH'),
  ('Tim', 'Smith', '012IJK'),
  ('Dana', 'Harmann', '345LMN')
;
/* -- */

/* -- */
INSERT INTO Customers
  (firstName, lastName, email, password, streetAddress1, streetAddress2, city,
    state, zip, phoneNumber)
  VALUES
    ('John', 'Doe', 'john@doe.com', 'password!', '123 First St', 'Apt 2', 'Foobar',
      'IA', 50189, 5551234567),
    ('Jane', 'Thorton', 'jane@thorton.me', 'secr,et', '321 Second Ave', 'Suite
      2', 'Spam', 'KA', 78303, 5559876543),
    ('Lindsey', 'Jones', 'lindsey@jones.me', 'pw123456', '567 Third Ave', '', 'Providence', 'RI', 02860, 5559352362),
    ('James', 'Clark', 'james@clark.me', 'password134', '4 Fourth Ave', '', 'Providence', 'RI', 02860, 5559355262),
    ('Tim', 'Greenberg', 'tim@greenberg.me', 'pw908798', '5 Fifth Ave', '', 'Providence', 'RI', 02860, 55593915043)
;
/* -- */

/* -- */
INSERT INTO Restaurants
  (restaurantName, streetAddress1, streetAddress2, city, state, zip)
  VALUES
    ('Abelardos', '287 Center St', 'Unit 32', 'Omaha', 'NE', 68190),
    ('Fiji', '928 Bogus St', 'Suite 98', 'Los Angeles', 'CA', 98765),
    ("Sal's", '123 Bogus St', '', 'Providence', 'RI', 02860),
    ("Sage", '425 Bogus St', '', 'Providence', 'RI', 02860),
    ("Newberry", '3 1st St', '', 'Providence', 'RI', 02860)
;
/* -- */

/* -- */
INSERT INTO Products (productName, availability, price, restaurantID)
  VALUES
    ('Arizona Burrito', 1, 8.99,
      ((select restaurantID from Restaurants where restaurantName = 'Abelardos'))
    ),
    ('California Roll', 1, 18.45,
      ((select restaurantID from Restaurants where restaurantName = 'Fiji'))
    ),
        ('Hamburger', 1, 12.00,
      ((select restaurantID from Restaurants where restaurantName = "Sal's"))
    ),
        ('Pad Thai', 1, 11.25,
      ((select restaurantID from Restaurants where restaurantName = 'Sage'))
    ),
        ('Chicken Wings', 1, 15.00,
      ((select restaurantID from Restaurants where restaurantName = 'Newberry'))
    )
;
/* -- */

/* -- */
INSERT INTO Orders
  (preTaxCost, tax, tip, totalCost, `date`, time, customerID, driverID,
    restaurantID)
  VALUES
    (34.34, 2.45, 5.00, 41.79, '2021-11-09', '10:00:22',
      (select customerID from Customers where firstName = 'John' and lastName = 'Doe'),
      (select driverID from Drivers where firstName = 'Ethan' and lastName = 'Rietz'),
      (select restaurantID from Restaurants where restaurantName = 'Abelardos')
    )
    /* (15.00, 1.00, 3.00, 19.00, '2021-11-10', '8:00:00', */
    /*   (select customerID from Customers where firstName = 'Jane' and lastName = 'Reynolds'), */
    /*   (select driverID from Drivers where firstName = 'Jason' and lastName = 'Marsh'), */
    /*   (select restaurantID from Restaurants where restaurantName = 'Newberry') */
    /* ) */
    
;
/* -- */

/* -- */
select * from Drivers;
select * from Customers;
select * from Restaurants;
select * from Products;
select * from Orders;
select * from RestaurantCustomers;
select * from OrderProducts;
/* -- */
