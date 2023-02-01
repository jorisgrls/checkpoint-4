CREATE TABLE
    type_logement (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        nom varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

CREATE TABLE
    type_energie (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        nom varchar(255) NOT NULL
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;

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
        CONSTRAINT idType FOREIGN KEY (id_type) REFERENCES type_logement (id) ON DELETE CASCADE,
        CONSTRAINT idTypeEnergie FOREIGN KEY (id_type_energie) REFERENCES type_energie (id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = latin1;