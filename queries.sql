-- Database Queries

-- Find all customers with postal code 1010
select * from Customers where postalcode = 1010;
-- Find the phone number for the supplier with the id 11
select phone from suppliers where  supplierid = 24;
-- List first 10 orders placed, sorted descending by the order date
select * from orders order by orderdate desc limit 10;
-- Find all customers that live in London, Madrid, or Brazil
select * from Customers where city = "London" or city = "Madrid" or country = "Brazil";
-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
values ('The Shire','Bilbo Baggins','1 Hobbit-Hole','Bag End','111','Middle Earth');
-- Update Bilbo Baggins record so that the postal code changes to "11122"
update customers set postalcode = '11122' where contactName = 'Bilbo Baggins';
-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
