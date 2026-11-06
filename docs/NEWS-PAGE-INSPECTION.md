# Complément d'inspection — Actualités et charte verte
Date : 6 novembre 2026
Source inspectée : https://nigernfo.com/fr/actualites et une fiche article publique.
Autorisation de reconstruction déclarée par l'utilisateur.

## Couleurs : distinction importante
L'analyse visuelle/branding de la page Actualités confirme :
- Couleur principale, accent et liens : #F25C05 (orange).
- Fond : #FFFFFF.
- Texte : #151515.
- Police du corps : Inter ; titres : Archivo.
- Boutons primaires : orange avec texte blanc, forme pilule.
- Métadonnée HTML theme-color : #006B2E (vert).

Le vert est donc confirmé dans la métadonnée theme-color, pas comme couleur principale des boutons/liens relevés par l'analyse de branding. Sur certains téléphones, theme-color peut teinter la barre d'interface du navigateur. Il faut comparer visuellement le site original sur mobile avant de décider si le vert doit être conservé uniquement pour cette zone ou supprimé dans la copie. Ne pas recolorer arbitrairement les composants éditoriaux.

## Fonctionnalités confirmées sur /fr/actualites
- Bandeau « Urgent » avec plusieurs titres défilants/liens d'articles.
- Introduction de rubrique « Actualités » et description.
- Filtres : Toutes, Politique, Économie, Société, Sport, Culture, Technologie, International.
- Compteur : 35 résultats au moment de l'inspection.
- Cartes d'articles : image, date, titre, extrait et lien « Lire la suite ».
- Emplacements publicitaires insérés dans le flux, avec clic de suivi via /api/ads/{id}/click.
- Pagination : pages 1 à 4 et lien « Suivant ».
- Bloc « Les plus lus » avec nombre de vues.
- Newsletter : texte d'incitation et action « Je m'abonne ».
- Pied de page : description, réseaux sociaux, rubriques, services, contact, conditions et confidentialité.
- Navigation mobile inférieure : Accueil, Actualités, Emplois, Appels d'offres, Menu.
- En-tête : date, slogan, action « Publier une publicité », sélecteur de langue, Facebook, logo et menus principaux.

## Fonctionnalités confirmées sur une fiche article
- Image principale et contenu éditorial.
- Partage Facebook, X, WhatsApp et copie d'URL.
- Bloc « À lire également ».
- Bloc « Dernières informations ».
- Emplacements publicitaires et newsletter.
- Navigation mobile et pied de page communs.

## Médias observés
Exemples de médias publics détectés :
- https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010686279-a375d546.jpg
- https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010674976-228f67cd.jpg
- https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010666888-f735925a.jpg
- https://qgvhpeqwwolqrmiovjks.supabase.co/storage/v1/object/public/medias/1010640181-965a1bc2.jpg
- Logo : https://nigernfo.com/_next/image?url=%2Flogo.jpeg&w=384&q=75
Ces liens sont un échantillon : aucun de ces fichiers n'est déclaré importé dans Smooth Bundle à ce stade.

## Point d'attention sur les langues
La route testée /en/news retourne 404. Il ne faut donc pas supposer que cette URL anglaise existe. La cartographie doit identifier les véritables routes anglaises depuis les liens du sélecteur de langue et le sitemap, puis enregistrer les routes exactes.

## Prochaine séquence de reconstruction
1. Reproduire le bandeau supérieur, en-tête, menu desktop et navigation mobile.
2. Reproduire le bandeau Urgent et la page liste Actualités avec filtres, compteur et cartes.
3. Ajouter pagination, publicités et suivi des clics.
4. Reproduire « Les plus lus », newsletter et footer.
5. Reproduire la fiche article avec partage et recommandations.
6. Migrer les images après inventaire et import vérifié dans Smooth Bundle.
7. Inspecter avec les accès du propriétaire les fonctionnalités non publiques (admin, connexion, publication, gestion publicitaire, API et données).

## État
Cette note décrit des fonctions observées sur la partie publique. Elle ne signifie pas que les fonctionnalités sont déjà codées ni que les médias ont été copiés.