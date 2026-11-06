# Niger Info — dossier de reconstruction

## Objectif
Reproduire le site public https://nigernfo.com à l'identique autant que les éléments observables et les accès autorisés le permettent : même identité visuelle, mêmes rubriques, mêmes parcours et mêmes fonctionnalités. Aucune fonctionnalité nouvelle ne doit être ajoutée pendant cette première phase.

## État du dépôt
Dépôt de travail : https://github.com/mabdourahamane886-lang/nigernfo
Branche : main
Le dépôt ne contient actuellement que LICENSE. Le présent document est le premier dossier de spécification ; il ne constitue pas encore l'application.

## Éléments confirmés par inspection publique (6 novembre 2026)
- Site bilingue : français (/fr) et anglais (/en).
- Navigation principale : Actualités, Événements, Émissions, Emplois, Appels d'offres, Publicité.
- Page d'accueil : bandeau d'actualités urgentes, article principal, dernières actualités, filtres par catégories, contenus à la une, publicités et liens sociaux.
- Catégories d'actualités visibles : politique, économie, société, sport, culture, technologie, international.
- Emplois : filtres par ville, domaine, type de contrat et date de publication ; carte d'offre avec employeur, localisation, domaine et statut.
- Contact public observé : téléphone +227 80 82 30 01 et nigerinfo227@gmail.com.
- Police détectée : Inter.
- Couleur principale détectée : #F25C05 ; fond blanc ; texte #151515 ; boutons arrondis.
- Logo et plusieurs médias sont servis depuis le domaine du site et un bucket Supabase public.

## Routes publiques observées
- /fr et /en
- /fr/actualites et /en/actualites
- /fr/evenements et /en/evenements
- /fr/emissions et /en/emissions
- /fr/emplois et /en/emplois
- /fr/appels-offres et /en/appels-offres
- /fr/publicite et /en/publicite
- Pages de détail sous /{lang}/actualites/{slug}, /{lang}/evenements/{slug}, /{lang}/emissions/{slug} et /{lang}/emplois/{slug}.

## Sources médias observées
Les pages publiques référencent notamment le bucket :
https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/
Certaines images passent aussi par le proxy Netlify. Les fichiers devront être téléchargés uniquement dans le cadre de l'autorisation du propriétaire, contrôlés, puis importés dans Smooth Bundle. L'inventaire d'URL ne signifie pas que tous les médias ont déjà été copiés.

## Anomalie à corriger
Le sitemap lu pendant l'inspection contient des URL sur glittery-gnome-0e16aa.netlify.app. La version reconstruite devra générer un sitemap canonique cohérent avec le domaine de production choisi et ne jamais publier ces URL de prévisualisation.

## Fonctionnalités non encore vérifiées
Les formulaires, connexions, espace administrateur, rôles, gestion éditoriale, gestion des annonces, statistiques, stockage privé, schéma de base et API privées ne peuvent pas être considérés comme récupérés depuis les pages publiques. Ils devront être inspectés avec les accès du propriétaire et réimplémentés/testés ; ne pas inventer leur comportement.

## Outils et rôles
- Firecrawl : cartographie et extraction des pages publiques.
- Browser : inspection des interactions accessibles.
- Context7 : documentation officielle des frameworks et bibliothèques ; ce n'est pas un extracteur de code du site.
- Smooth Bundle : stockage/optimisation des médias après transfert autorisé.
- GitHub : dépôt du code et des spécifications.
- Supabase : à migrer ou remplacer seulement après obtention des accès, du schéma et des sauvegardes autorisées.

## Étapes de réalisation
1. Compléter l'inventaire des pages et interactions publiques en français et en anglais.
2. Constituer l'inventaire des médias, vérifier leur téléchargement, puis importer les fichiers dans Smooth Bundle.
3. Reconstituer les composants et pages avec une comparaison visuelle responsive.
4. Reconstituer les fonctionnalités privées à partir des accès et consignes du propriétaire.
5. Migrer les données autorisées et vérifier les médias associés.
6. Tester routes, formulaires, authentification, permissions, SEO, accessibilité et responsive.
7. Préparer le déploiement VPS avec build de production, sauvegardes, SSL et monitoring.

## Critère d'acceptation
Ne déclarer la copie terminée qu'après comparaison des pages clés en français/anglais, tests des interactions et validation du propriétaire. Aucun secret, mot de passe ou jeton ne doit être commité dans Git.
