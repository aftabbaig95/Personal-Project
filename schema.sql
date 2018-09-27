
 -- create table listings (
-- id Serial Primary Key, 
-- city varchar(200) not null, 
-- Address text not null, 
-- Type varchar(200) not null, 
-- Rating integer not null, 
-- price integer not null, 
-- Ameneties_1 varchar(200) , 
-- Amenities_2 varchar(200) , 
-- Amenities_3 varchar(200) ,
-- Amenities_4 varchar(200), 
-- Amenities_5 varchar(200), 
-- Amenities_6 varchar(200),
-- lattitude integer, 
-- longitude integer);

insert into listings (city, Address, Type, Rating, price,Ameneties_1, Amenities_2, Amenities_3, Amenities_4, Amenities_5, Amenities_6 )
values('Houston', '10070 Westpark Dr, Houston, TX 77042 ', 'Private Room: 1bed x 1bath', 4, 88, 'A/C', 'TV', 'Washer/Dryer', 'indoor fireplace', 'free parking', 'wifi'),
('Houston','8701 Town Park Dr, Houston, TX 77036','Apartment: 1Bed x 1Bath', 3.5,74,'kitchen','A/C & Heater','Dishwasher','gym access','pool access', null),
('Dallas', '3220 McKinney Ave, Dallas, TX 75204', 'House:Private Room with connected Bathroom', 5, 150, 'free wifi' , 'breakfast', 'A/C', 'free parking', 'access to backyard pool', 'TV'),
('Dallas', '4649 Cole Ave, Dallas, TX 75205', 'Apartment: 2Bed x 2Bath', 3, 175, 'wifi', 'washer/dryer', 'parking', 'gym access', 'room service', null),
 ('Dallas', '3377 Blackburn St, Dallas, TX 75204' ,'Apartment: 3Bed x 2Bath', 4, 75, 'kitchen', 'wifi', 'Washer/Dryer', 'Parking', null , null ); 




insert into listings (city, Address, Type, Rating, price,Ameneties_1, Amenities_2, Amenities_3, Amenities_4, Amenities_5, Amenities_6, lattitude, longitude )
values 
('New York', '30 W 63rd St, New York, NY 10023', 'Apartment:2bed x 2bath', 5, 210, 'Wifi', 'Washer/Dryer', 'Kitchen', 'A/C', 'Gym', null),
('New York', '225 E 95th St, New York, NY 10128', 'Studio', 4.5, 185, 'Wifi', 'Washer/Dryer', 'Kitchen', 'A/C', null, null), 
('New York', '155 W 68th St, New York, NY 10023', '1 Bedroom-747 Sq Ft', 5, 150, 'Wifi', 'Washer/Dryer', 'Kitchen', 'A/C', 'Gym', null),
('New York', '435 W 31st St, New York, NY 10001', 'Studio-505 Sq Ft', 3.5, 130, 'Wifi', 'Washer/Dryer', null, 'A/C', null, null),
('New York', '225 E 95th St, New York, NY 10128', '677 Sq Ft. 1 Bedroom / 1 Bathroom', 4.5, 165, 'Wifi', 'Washer/Dryer', 'Pool', 'A/C', 'Valet', null),


('Chicago', '400 E South Water St, Chicago, IL 60601', '677 Sq Ft. 1 Bedroom / 1 Bathroom', 4.5, 165, 'Wifi', 'Washer/Dryer', 'Pool', 'A/C', 'Valet', null), 




-- create table images (
-- id serial Primary key, 
-- listingID integer, 
-- image text); 
        
-- alter table images 
-- ADD listings_id integer references listings (id);

-- insert into images(image, listings_ID) 
-- values('https://firebasestorage.googleapis.com/v0/b/personal-project-d46d6.appspot.com/o
-- /Dallas1.1.jpg?alt=media&token=d3c7929d-b0a5-458b-9326-68ce6f220c85', 1);



