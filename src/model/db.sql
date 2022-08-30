CREATE TABLE categories(
    categorie_id serial not null primary key, 
    categorie_name varchar(32) not null, 
    categorie_img text not null
);

INSERT INTO categories(categorie_name, categorie_img) VALUES('Milliy Taomlar', 'https://uzbekistan.travel/storage/app/media/nargiza/cropped-images/kuhnyaj-0-0-0-0-1589979425.jpg'), 
                                            ('Fast-Food', 'https://s-english.ru/images/topik/fast-food.jpg');
                    




CREATE TABLE restaurants(
    restaurant_id serial not null primary key, 
    restaurant_name varchar(32) not null, 
    restaurant_img text not null,
    categorie_ref_id int, 
              FOREIGN KEY(categorie_ref_id)
              REFERENCES categories(categorie_id)
              ON DELETE CASCADE
);

INSERT INTO restaurants(restaurant_name, restaurant_img, categorie_ref_id) 
                                    VALUES('Oddiy restoran', 'https://www.dizainvfoto.ru/wp-content/uploads/2018/03/dizayn-kafe-foto.jpg', 1), 
                                        ('FeedUp', 'https://static.tildacdn.com/tild3433-3335-4663-b633-393138303263/feed_up.png', 2);


CREATE TABLE foods(
    food_id serial not null primary key, 
    food_name varchar(64) not null, 
    food_price decimal not null, 
    food_img text not null,
    restaurant_ref_id int,
            FOREIGN KEY(restaurant_ref_id)
            REFERENCES restaurants(restaurant_id)
            ON DELETE CASCADE
);

INSERT INTO foods(food_name, food_price, food_img, restaurant_ref_id) 
                VALUES('Osh', 20000, 'https://media-cdn.tripadvisor.com/media/photo-s/16/2f/b7/53/img-20190104-153508-644.jpg', 1),
                ('Lavash', 20000, 'https://cashback.click.uz/uploads/companies/media/28dd2c7955ce926456240b2ff0100bde/1afa34a7f984eeabdbb0a7d494132ee5.jpg', 2);


CREATE TABLE admins(
    admin_id serial not null primary key, 
    admin_name VARCHAR(64) not null, 
    admin_password text not null
);

INSERT INTO admins(admin_name, admin_password) VALUES('tohirjon', 'tohir123'),
                                                                        ('mashrab', 'mashrab-oo3');

CREATE TABLE orders(
    order_id serial not null primary key, 
    order_client VARCHAR(128) not null, 
    order_location TEXT not null, 
    order_phone_number VARCHAR(16) not null, 
    order_purchase text not null,
    order_time text not null
);
