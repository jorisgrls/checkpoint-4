## Concept

Checkpoint 4 :
Site de gestion de biens immobiliers : possibilité de créer une annonce, la modifier et la supprimer.

Technologies utilisés : ReactJS - Express - Tailwind - React query

## Mise en place et utilisation

### Installation du projet

- Clone with `git clone https://github.com/jorisgrls/checkpoint-4.git`
- Setup with `npm run setup`
- Run with `npm run dev`


## Création du site

## Maquette et modélisation

<img src="https://i.postimg.cc/TPQC1cyG/IMG-2305.jpg" alt="maquette">

<img src="https://i.postimg.cc/tgH4JhKr/Capture-d-e-cran-2023-02-02-a-09-38-44.png" alt="miro">

<img src="https://i.postimg.cc/tCpT9tH2/Capture-d-e-cran-2023-02-02-a-09-40-34.png" alt="modelisation_bdd">


## Fonctionnalités

# Site fullstack avec CRUD
<ul>
  <li>Création d'une annonce : ouverture d'un overlay pour rentrer les informations de son bien (notamment le type de bien (possibilité de gérer dans la bdd) et le type d'energie (possibilité de gérer dans la bdd))</li>
  <li>Read d'une annonce : affichage des annonces disponibles, affichage des types de bien, affichage des types d'énergie</li>
  <li>Update d'une annonce : ouverture d'un overlay pour modifier l'annonce</li>
  <li>Delete d'une annonce : possibilité de supprimer une annonce (modale de confirmation de suppression)</li>
</ul>

Le tout avec des appels maîtrisés grâce à React query !

# Utilisation d'une API externe
<ul>
  <li>API utilisée : https://restcountries.com</li>
  <li>Affichage du drapeau du pays de l'annonce (actuellement site prévu pour la france)</li>
</ul>



