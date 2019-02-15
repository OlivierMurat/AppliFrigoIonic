# AppliFrigoIonic

## Authors
@Clemios, @OlivierMurat

## Présentation
- Projet d'etudes du cour d'IONIC du M2 Ingesup
- Le projet s'articule autour d'un fonctionnement en microservices
- Chaque partie possède donc son API en nodeJS

## Explications techniques
- Le projet suis la structure de projet vue en cours
- Chaque entité utilisée d'ans laplication (ingrédient, recette...) possède son interface et provider dédié
- Les données sont gérées avec @ionic/storage

## Répartition des taches
- @OlivierMurat plutot front
- @Clemios plutot back

## Voies d'amélioration
- Implémenter la plannification
- Intégrer la possibilité d'upload des images avec stockage en base64
- Le code est un peu en mode quick and dirty

## Démarrer le projet
Rendez vous dans le repertoire du projet :
```bash
git clone https://github.com/OlivierMurat/AppliFrigoIonic.git
cd AppliFrigoIonic/
```
* `npm install -g ionic` -- (seulement la première fois) installe les nodes_modules
* `npm install` -- (seulement la première fois) installe les nodes_modules
* `ionic serve` -- démarre l'app angular
