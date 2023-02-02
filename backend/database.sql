CREATE TABLE
    type_logement (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        nom varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO type_logement (nom) VALUES ('Appartement'), ('Maison');

CREATE TABLE
    type_energie (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        nom varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO type_energie (nom) VALUES ('Electricité'), ('Gaz');

CREATE TABLE
    annonces (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        url_image varchar(255) NOT NULL,
        code_postal varchar(255) NOT NULL,
        ville varchar(255) NOT NULL,
        titre varchar(255) NOT NULL,
        description text NOT NULL,
        id_type int(11) NOT NULL,
        prix_hc int(11) NOT NULL,
        prix_charges int(11) NOT NULL,
        prix_energie int(255) NOT NULL,
        id_type_energie int(11) NOT NULL,
        nb_pieces int(11) NOT NULL,
        surface int(11) NOT NULL,
        garage TINYINT(1) NOT NULL,
        dpe int(11) NOT NULL,
        ges int(11) NOT NULL,
        pays varchar(255) NOT NULL,
        CONSTRAINT idType FOREIGN KEY (id_type) REFERENCES type_logement (id) ON DELETE CASCADE,
        CONSTRAINT idTypeEnergie FOREIGN KEY (id_type_energie) REFERENCES type_energie (id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO
    annonces (
        url_image,
        code_postal,
        ville,
        titre,
        description,
        id_type,
        prix_hc,
        prix_charges,
        prix_energie,
        id_type_energie,
        nb_pieces,
        surface,
        garage,
        dpe,
        ges,
        pays
    )
VALUES (
        'https://i.postimg.cc/hPc7QWyS/Visuel5.jpg',
        '75000',
        'Paris',
        'Luxury apartment',
        'This stunning apartment is located in the heart of Paris, offering breathtaking views of the city. With its spacious and bright rooms, it is the perfect place for those who want to experience the best of Parisian living. The apartment features three spacious bedrooms, each with its own private bathroom, a fully equipped kitchen, and a large living room with elegant furnishings. The building also provides its residents with a range of amenities, including a fitness center, 24-hour concierge service, and an on-site parking garage.',
        1,
        500,
        100,
        50,
        1,
        3,
        80,
        1,
        200,
        300,
        'France'
    ), (
        'https://i.postimg.cc/hPc7QWyS/Visuel5.jpg',
        '69000',
        'Lyon',
        'Spacious house',
        'This beautiful house is located in Lyon, and features five spacious bedrooms and a large garden. With its charming and cozy interior, it is perfect for families looking for a comfortable home. The house includes a fully equipped kitchen, a large living room with a fireplace, and a cozy dining room. The garden is the perfect place to relax, offering stunning views of the surrounding area.',
        2,
        800,
        200,
        100,
        2,
        5,
        120,
        0,
        150,
        250,
        'France'
    ), (
        'https://i.postimg.cc/hPc7QWyS/Visuel5.jpg',
        'NW1 9LH',
        'London',
        'Charming flat',
        'This charming flat is located in the heart of London, and features two bedrooms, each with its own private bathroom. The interior is decorated in a classic style, with elegant furnishings and bright, airy rooms. The flat also includes a fully equipped kitchen, a cozy living room with a fireplace, and a large balcony with breathtaking views of the city.',
        1,
        700,
        150,
        75,
        1,
        2,
        60,
        1,
        250,
        350,
        'United Kingdom of Great Britain and Northern Ireland'
    ), (
        'https://i.postimg.cc/hPc7QWyS/Visuel5.jpg',
        '10019',
        'New York',
        'Stylish penthouse',
        'This stunning penthouse is located in New York and offers breathtaking views of the city. The penthouse features three spacious bedrooms, each with its own private bathroom, a fully equipped kitchen, and a large living room with elegant furnishings. The building also provides its residents with a range of amenities, including a fitness center, 24-hour concierge service, and an on-site parking garage.',
        2,
        1200,
        250,
        150,
        2,
        3,
        90,
        1,
        300,
        400,
        'Usa'
    ), (
        'https://i.postimg.cc/hPc7QWyS/Visuel5.jpg',
        '10117',
        'Berlin',
        'Modern apartment',
        'This contemporary apartment is located in Berlin, and features two bedrooms, each with its own private bathroom. The interior is decorated in a sleek and modern style, with elegant furnishings and bright, airy rooms. The apartment also includes a fully equipped kitchen, a cozy living room, and a large balcony with breathtaking views of the city.',
        1,
        650,
        120,
        60,
        1,
        2,
        70,
        0,
        200,
        300,
        'Germany'
    ), (
        'https://i.postimg.cc/hPc7QWyS/Visuel5.jpg',
        '1050',
        'Brussels',
        'Elegant townhouse',
        'This gorgeous townhouse is located in Brussels and features four spacious bedrooms, each with its own private bathroom. The interior is decorated in an elegant style, with luxurious furnishings and bright, airy rooms. The townhouse also includes a fully equipped kitchen, a large living room with a fireplace, and a cozy dining room. The building is conveniently located near some of the city\'s best shopping, dining, and entertainment destinations.',
        2,
        900,
        200,
        100,
        2,
        4,
        100,
        1,
        250,
        350,
        'Belgium'
    );