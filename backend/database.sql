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
        'Beautiful apartment located in the heart of Paris',
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
        'Large house with garden located in Lyon',
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
        'Cozy flat located in the heart of London',
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
        'Stunning penthouse located in New York',
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
        'Contemporary apartment located in Berlin',
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
        'Gorgeous townhouse located in Brussels',
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