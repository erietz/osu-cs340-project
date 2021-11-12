/*
 * Author      : Ethan Rietz and Jason Marsh
 * Date        : 2021-11-11
 * Description : Queries for Data Manipulation
 */

-------------------------------------------------------------------------------
-- Create all of the tables
-------------------------------------------------------------------------------

/* -- */
-- Table `Customers`

-- Show all data in Customers table
SELECT * FROM Customers;

-- Insert new Customer into table
INSERT INTO Customers
  (firstName, lastName, email, password, streetAddress1, streetAddress2, city,
    state, zip, phoneNumber)
  VALUES
    (:firstName, :lastName, :email, :password, :streetAddress1, :streetAddress2, :city,
    :state, :zip, :phoneNumber);

-- Update Customer with specified values
UPDATE Customers
SET firstName = :firstName, lastName = :lastName, email = :email, password = :password, streetAddress1 = :streetAddress1, streetAddress2 = :streetAddress2, city = :city, state = :state, zip = :zip, phoneNumber = :phoneNumber)
WHERE customer_id = :customer_id;

-- Delete specified Customer
DELETE FROM Customers WHERE customer_id = :customer_id;
/* -- */


/* -- */
-- Table `Restaurants`

-- Show all data in Restaurants table
SELECT * FROM Restaurants;

-- Insert new Restaurant into table
INSERT INTO Restaurants
  (restaurantName, streetAddress1, streetAddress2, city, state, zip)
  VALUES
    (:restaurantName, :streetAddress1, :streetAddress2, :city, :state, :zip);

-- Update Restaurant with specified values
UPDATE Restaurants
SET restaurantName = :restaurantName, streetAddress1 = :streetAddress1, streetAddress2 = :streetAddress2, city = :city, state = :state, zip = :zip);
WHERE restaurant_id = :restaurant_id;

-- Delete specified Restaurant
DELETE FROM Restaurants WHERE restaurant_id = :restaurant_id;
/* -- */

/* -- */
-- Intersection Table `RestaurantCustomers`

-- Show all data in RestaurantCustomers table
SELECT * FROM RestaurantCustomers
WHERE restaurant_id = :restaurant_id
/* -- */

/* -- */
-- Table `Drivers`

-- Show all data in Drivers table
SELECT * FROM Drivers;

-- Insert new Driver into table
INSERT INTO Drivers (firstName, lastName, licenseNumber)
VALUES
  (:firstName, :lastName, :licenseNumber);

-- Update Drivers with specified values
UPDATE Drivers
SET firstName = :firstName, lastName = :lastName, licenseNumber = :licenseNumber
WHERE driverID = :driverID;

-- Delete specified Driver
DELETE FROM Drivers WHERE driverID = :driverID;
/* -- */

/* -- */
-- Table `Products`

-- Show all data in Products table
SELECT * FROM Products;

-- Insert new Product into table
INSERT INTO Products (productName, availability, price, restaurantID)
  VALUES
    (:productName, :availability, :price, :restaurant_id);

-- Update Products with specified values
UPDATE Products
SET productName = :productName, availability = :availability, price = :price, restaurant_id = :restaurant_id
WHERE productID = productID;

-- Delete specified Product
DELETE FROM Products WHERE productID = :productID;
/* -- */


/* -- */
-- Table `Orders`

-- Show all data in Orders table
SELECT * FROM Orders;

-- Insert new Order into table
INSERT INTO Orders
  (preTaxCost, tax, tip, totalCost, `date`, time, customerID, driverID,
    restaurantID)
  VALUES
    (:preTaxCost, :tax, :tip, :totalCost, :`date`, :time, :customerID, :driverID,
    :restaurantID);

-- Update Orders with specified values
UPDATE Orders
SET preTaxCost = :preTaxCost, tax = :tax, tip = :tip, totalCost = :totalCost, date = :date, time = :time, customerID = :customerID, driverID = :driverID,
    restaurantID = :restaurant_id
WHERE orderID = orderID;

-- Delete specified Order
DELETE FROM Orders WHERE orderID = :orderID;
/* -- */

/* -- */
-- Table 'OrderProducts'

-- Show all values in OrderProducts
SELECT * FROM OrderProducts
/* -- */