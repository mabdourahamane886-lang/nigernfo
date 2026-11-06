# Niger Info — matrice des menus et fonctionnalités

Référence d'inspection : site public nigernfo.com, 6 novembre 2026.
Dépôt : mabdourahamane886-lang/nigernfo (branche main).

## Identité visuelle à reproduire
- Couleur d'accent et boutons : #F25C05 (orange).
- Fond : #FFFFFF ; texte principal : #151515.
- Typographie détectée : Inter (corps) et Archivo (titres, à confirmer par comparaison visuelle).
- Boutons très arrondis ; cartes avec rayon proche de 8 px.
- Logo du site : /logo.jpeg ; favicon : /img/favicon.svg.
- Images éditoriales publiques : bucket Supabase public sous /storage/v1/object/public/medias/.
- Le thème-color déclaré par la page est #006B2E : à vérifier visuellement avant de l'appliquer à l'en-tête.

## Navigation principale
| Menu | Route FR | Route EN | État |
|---|---|---|---|
| Accueil | /fr | /en | À reconstruire |
| Actualités | /fr/actualites | /en/actualites | À reconstruire |
| Événements | /fr/evenements | /en/evenements | À reconstruire |
| Émissions | /fr/emissions | /en/emissions | À reconstruire |
| Emplois | /fr/emplois | /en/emplois | À reconstruire |
| Appels d'offres | /fr/appels-offres | /en/appels-offres | À reconstruire |
| Publicités | /fr/publicite | /en/publicite | À reconstruire |
| Sélecteur FR/EN | présent dans l'en-tête | présent dans l'en-tête | À reconstruire |
| Menu mobile inférieur | Accueil, Actualités, Emplois, Appels d'offres, Menu | Home, News, Jobs, Tenders, Menu | À reconstruire |

## Blocs de la page d'accueil
- Bandeau d'actualité urgente / breaking news.
- Article principal avec grande image, date, titre, résumé et lien.
- Dernières actualités et filtres : Tous, Politique, Économie, Société, Sport, Culture, Technologie, International.
- Articles à la une.
- Événements à venir.
- Émissions (podcasts, vidéos, interviews, débats, chroniques).
- Aperçu Niger Info Emploi.
- Aperçu Appels d'offres.
- Espace publicitaire, formats et partenaires.
- Inscription à la newsletter.
- Pied de page avec rubriques, services, contact, réseaux sociaux, conditions et confidentialité.

## Fonctionnalités par rubrique à implémenter
### Actualités
- Liste paginée ou chargement progressif (comportement exact à vérifier).
- Filtrage par catégorie.
- Recherche si présente sur la page source.
- Fiche article : image, titre, catégorie, date, auteur/source, corps, partage et articles liés (à vérifier).
### Événements
- Liste des événements, dates, lieux, visuels et fiches détaillées.
- État passé / à venir et filtres à confirmer.
### Émissions
- Catalogue par type (podcast, vidéo, interview, débat, chronique).
- Fiche émission et lecteur média ; comportement du lecteur à inspecter.
### Emplois
- Offres, stages, concours et appels à candidatures.
- Filtres visibles à vérifier : ville, domaine, type de contrat, date.
- Fiche détaillée, statut ouvert/clôturé et candidature si disponible.
### Appels d'offres
- Liste, organisme, échéance, documents joints et fiche détaillée ; filtres à inspecter.
### Publicités
- Présentation des formats, formulaire de demande/publication, suivi ou paiement uniquement si confirmé par le propriétaire.

## Fonctions transversales et privées
À inspecter avec les accès du propriétaire avant implémentation :
- Authentification et récupération de compte.
- Espace administrateur et rôles/permissions.
- Création, modification, publication et archivage des actualités.
- Gestion des événements, émissions, offres d'emploi et appels d'offres.
- Gestion des bannières publicitaires, campagnes, clics et statistiques.
- Newsletter : inscription, désinscription et consentement.
- API, base de données, stockage privé et journaux.
Ne pas considérer ces éléments comme récupérés depuis une simple exploration publique.

## Ordre de livraison
1. [ ] Shell commun : en-tête, navigation desktop/mobile, sélecteur de langue, pied de page.
2. [ ] Accueil FR/EN : sections, hiérarchie, images et publicités.
3. [ ] Actualités : listing, catégories, pagination/recherche et page article.
4. [ ] Événements : listing et fiches.
5. [ ] Émissions : listing, détails et lecteurs.
6. [ ] Emplois : filtres, fiches et candidatures si confirmées.
7. [ ] Appels d'offres : listing, documents et détails.
8. [ ] Publicités : formats, formulaires et parcours de publication autorisé.
9. [ ] Authentification et administration selon les accès réels.
10. [ ] Import des médias dans Smooth Bundle et remplacement des URL sources.
11. [ ] Tests responsive, accessibilité, SEO, sécurité et non-régression.
12. [ ] Déploiement Vercel de prévisualisation, puis validation avant production.

## Règles de migration des médias
- Copier seulement les médias couverts par l'autorisation du propriétaire.
- Conserver un manifeste source → fichier local → URL Smooth Bundle.
- Vérifier HTTP, type MIME, taille et intégrité de chaque fichier.
- Ne pas exposer de secrets ni de bucket privé dans le dépôt.
- Les images listées par Firecrawl ne sont pas encore réputées importées.
