# ADERE — Site Web Officiel

Site web institutionnel moderne et responsive du parti politique **ADERE (Alliance Démocratique et Républicaine)**, développé avec **React**, **Vite**, **React Router** et **shadcn/ui**.

L'objectif est de proposer une plateforme élégante, performante et accessible permettant de présenter le parti, son programme politique, son président, ses actualités et de faciliter l'adhésion des citoyens.

---

## Aperçu

Le projet met en avant :

* Une identité visuelle fidèle aux couleurs d'ADERE
* Une navigation fluide entre les différentes pages
* Une interface responsive adaptée aux ordinateurs, tablettes et smartphones
* Des animations modernes et discrètes
* Des formulaires d'adhésion et de contact
* Une galerie multimédia
* Une architecture modulaire et facilement maintenable

---

# Technologies utilisées

* React
* Vite
* TypeScript
* React Router 7
* Tailwind CSS
* shadcn/ui
* Lucide React
* Motion
* React Hook Form
* Embla Carousel
* React Responsive Masonry

---

# Palette graphique

Les couleurs principales utilisées sont :

| Couleur             | Valeur    |
| ------------------- | --------- |
| Vert institutionnel | `#0E8A43` |
| Bleu républicain    | `#123A7A` |
| Jaune doré          | `#F4B400` |
| Gris clair          | `#F6F8FA` |
| Gris texte          | `#4A5568` |

Les polices utilisées sont :

* **Playfair Display** (titres)
* **DM Sans** (contenu)

---

# Structure du projet

```text
src/
│
├── app/
│   ├── App.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ui/
│   │   └── pages/
│   │       ├── HomePage.tsx
│   │       ├── PartiPage.tsx
│   │       ├── PresidentPage.tsx
│   │       ├── ProgrammePage.tsx
│   │       ├── ActualitesPage.tsx
│   │       ├── AgendaPage.tsx
│   │       ├── GaleriePage.tsx
│   │       ├── AdhesionPage.tsx
│   │       └── ContactPage.tsx
│
├── styles/
│   ├── fonts.css
│   └── theme.css
│
└── ...
```

---

# Navigation

L'application comporte **9 pages** :

| Route         | Description              |
| ------------- | ------------------------ |
| `/`           | Accueil                  |
| `/parti`      | Présentation du parti    |
| `/president`  | Biographie du président  |
| `/programme`  | Programme politique      |
| `/actualites` | Actualités               |
| `/agenda`     | Agenda                   |
| `/galerie`    | Galerie photos et vidéos |
| `/adhesion`   | Formulaire d'adhésion    |
| `/contact`    | Contact                  |

---

# Fonctionnalités

## Page d'accueil

La page d'accueil comprend :

* Hero avec image immersive
* Présentation des valeurs
* Présentation du président
* Vision du parti
* Programme politique
* Dernières actualités
* Agenda des événements
* Chiffres clés
* Témoignages
* Inscription à la newsletter

---

## Le Parti

* Historique
* Mission
* Vision
* Valeurs
* Organigramme

---

## Le Président

* Portrait
* Biographie
* Parcours
* Discours
* Galerie photos

---

## Programme

Présentation détaillée des principaux axes :

* Éducation
* Santé
* Agriculture
* Jeunesse
* Entrepreneuriat
* Numérique
* Infrastructures
* Environnement

---

## Actualités

* Recherche
* Filtrage par catégorie
* Cartes d'articles
* Pagination

---

## Agenda

* Calendrier mensuel
* Chronologie des événements
* Informations pratiques

---

## Galerie

* Galerie photos
* Galerie vidéos
* Affichage responsive en Masonry

---

## Adhésion

Formulaire complet comprenant :

* Nom
* Prénom
* Téléphone
* Email
* Profession
* Ville
* Message

---

## Contact

* Carte Google Maps
* Coordonnées
* Formulaire de contact

---

# Animations

Le projet utilise **Motion** afin d'apporter des animations modernes :

* Apparition des sections au défilement
* Animation des cartes au survol
* Compteurs animés
* Transitions fluides

---

# Installation

Cloner le projet :

```bash
git clone <url-du-depot>
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Construire le projet :

```bash
npm run build
```

Prévisualiser la version de production :

```bash
npm run preview
```

---

# Vérifications

Avant la mise en production, vérifier que :

* Toutes les routes fonctionnent correctement.
* La navigation est opérationnelle.
* Le menu mobile s'ouvre correctement.
* Les animations se déclenchent au défilement.
* Les formulaires sont correctement validés.
* La galerie est responsive.
* L'affichage est adapté aux mobiles, tablettes et ordinateurs.

---

# Objectif

Ce projet a pour vocation de fournir une vitrine numérique moderne, professionnelle et évolutive pour le parti **Alliance Démocratique et Républicaine (ADERE)**, en mettant en valeur sa vision, ses engagements et ses actions auprès des citoyens.
