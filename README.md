# AppliFrigoIonic

## Présentation
- Projet d'etudes du cour d'IONIC du M2 Ingesup
- Le projet s'articule autour d'un fonctionnement en microservices
- Chaque partie possède donc son API en nodeJS

## Configuration du serveur qui détiens la BDD

- Utilisation de WAMP/MAMP conseillée

## Configuration de la base MySQL

* Configuration MySQL:

`host` localhost
`port` 8889

* SQL pour générer la base, les tables et quelques donées:

```sql
CREATE DATABASE IF NOT EXISTS `kitchen` DEFAULT CHARACTER SET utf8;
USE `kitchen`;
DROP TABLE IF EXISTS `ingredients`;
CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `unit` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `ingredients` VALUES (1,'Tomate',300,'g'),(2,'Sel',100,'g');

DROP TABLE IF EXISTS `recipes`;
CREATE TABLE `recipes` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` text,
  `image` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `recipes` VALUES (1,'Tomates au sel','Prenez des tomates fraiches, parsemez les de sel marin et savourez !');

DROP TABLE IF EXISTS `listings`;
CREATE TABLE `listings` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `ingredients` text NOT NULL,
  `main` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `listings` (`id`, `name`, `ingredients`, `main`) VALUES
(1, 'Une liste', '[{\"name\":\"tomate\",\"quantity\":3,\"unit\":\"g\"},{\"name\":\"sel\",\"quantity\":30,\"unit\":\"g\"}]', 'FALSE'),
(2, 'Liste principale', '[{\"name\":\"tomate\",\"quantity\":3,\"unit\":\"g\"},{\"name\":\"sel\",\"quantity\":30,\"unit\":\"g\"}]', 'TRUE');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `nickname` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
INSERT INTO `users` VALUES (1,'clem_ios@hotmail.com','Clemios','wordrave'),(2,'oliv.murat@gmail.com','Oliv','azerty');
```

* Créer les utilsateurs (vous pouvez facultativement configurer des permissions):

- Il y a un utilisateur par table (ingredients, recipes, listings, schedules, users)
- Son nom et mot de passe sont identiques et correspondent aux noms des tables


### Démarrer le projet
Rendez vous dans le repertoire du projet :
```bash
cd AppliFrigoIonic/
```
Pour que le projet fonctionne, il faut installer et démarrer chacun des microservices

* Installation multiple (experimental):
```bash
cd ingredient && npm install & cd .. && cd recipe && npm install & cd .. && cd listing && npm install & cd .. && cd schedule && npm install
```
* Installation et lancement manuels :
```bash
cd AppliFrigoIonic/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `ionic serve` -- démarre l'app angular
```bash
cd AppliFrigoIonic/ingredient/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API ingredient
```bash
cd AppliFrigoIonic/recipe/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API recipe
```bash
cd AppliFrigoIonic/listing/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API listing
```bash
cd AppliFrigoIonic/schedules/
```
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `npm start` -- démarre l'API schedules
