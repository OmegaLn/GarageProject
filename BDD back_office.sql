/* TABLE STRUCTURE FOR TABLE UTILISATEUR */

CREATE DATABASE utilisateur (
	`idutilisateur` int(100) NOT NULL AUTO_INCREMENT,
	`nom` varchar(15) NOT NULL,
	`prenom` int(11) NOT NULL,	
	PRIMARY KEY ('idutilisateur' , 'nom' ));
	Engine = InnoDB DEFAULT CHARSET = latin1;
SHOW WARNINGS;
USE utilisateur;


 /* TABLE STRUCTURE FOR TABLE VEHICULE */


CREATE DATABSE vehicule (
	'id_vehicule' int(100) NOT NULL AUTO_INCREMENT?
	'nom_de_marque' varchar(15) NOT NULL,
	'numero_de_modele' bigint(9999999999) NOT NULL,
	PRIMARY KEY ('id_vehicule','numero_de_modele'));
	Engine = InnoDB DEFAULT CHARSET = latin1;
SHOW WARNINGS;
USE vehicule;





