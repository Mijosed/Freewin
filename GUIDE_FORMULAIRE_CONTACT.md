# Guide d'implémentation du formulaire de contact

Ce guide vous aidera à choisir et mettre en place une solution pour rendre votre formulaire de contact fonctionnel sur le site Freewin.

## Options disponibles

Nous avons préparé différentes solutions pour vous, de la plus simple (gratuite) à la plus professionnelle (payante) :

### 1. Solutions gratuites

#### A. Formspree (solution la plus simple)

Avantages :
- Aucun code à écrire, juste un compte à créer
- 50 soumissions gratuites par mois
- Aucune configuration serveur nécessaire

Comment l'utiliser :
1. Créez un compte sur [Formspree](https://formspree.io/)
2. Créez un nouveau formulaire et obtenez votre ID de formulaire
3. Remplacez le fichier `app/contact/page.tsx` par `app/contact/page-formspree.tsx`
4. Remplacez `"xayprykd"` par votre ID de formulaire Formspree

#### B. EmailJS (solution intermédiaire)

Avantages :
- 100 emails gratuits par mois
- Plus de contrôle sur l'apparence des emails
- Possibilité d'ajouter de la logique personnalisée

Comment l'utiliser :
1. Installez le paquet EmailJS : `npm install @emailjs/browser`
2. Créez un compte sur [EmailJS](https://www.emailjs.com/)
3. Créez un service email et un modèle de message
4. Remplacez le fichier `app/contact/page.tsx` par `app/contact/page-emailjs.tsx`
5. Remplacez les constantes SERVICE_ID, TEMPLATE_ID et PUBLIC_KEY par vos propres valeurs
6. Décommentez le code pour l'appel à EmailJS

### 2. Solutions payantes (professionnelles)

#### A. SendGrid (recommandé pour usage professionnel)

Avantages :
- Service robuste et fiable utilisé par des entreprises du monde entier
- 100 emails gratuits par jour, puis plans payants
- APIs riches et nombreuses intégrations
- Analytics et suivi des emails

Comment l'utiliser :
1. Installez le paquet SendGrid : `npm install @sendgrid/mail`
2. Créez un compte sur [SendGrid](https://sendgrid.com/)
3. Vérifiez votre domaine d'expéditeur et obtenez une API key
4. Ajoutez ces variables d'environnement dans un fichier `.env.local` :
   ```
   SENDGRID_API_KEY=votre_clé_api
   VERIFIED_SENDER_EMAIL=votre_email_vérifié@domaine.com
   ```
5. Remplacez le fichier `app/api/contact/route.ts` par `app/api/contact/route-sendgrid.ts`
6. Décommentez le code pour l'appel à SendGrid

#### B. Amazon SES (option scalable pour grand volume)

Pour des volumes très importants, Amazon SES peut être une option plus économique, mais nécessite une configuration plus complexe.

## Conseils pour choisir

- **Pour un site personnel ou petit projet** : Formspree est parfait pour commencer
- **Pour un site d'entreprise avec volume modéré** : EmailJS offre un bon équilibre
- **Pour un usage professionnel avec haut volume** : SendGrid est la solution à privilégier

## Test du formulaire

Quelle que soit la solution choisie, assurez-vous de tester le formulaire en :
1. Soumettant un test avec votre propre email
2. Vérifiant que vous recevez bien l'email
3. Vérifiant l'expérience utilisateur (messages de confirmation, erreurs, etc.)

## Remarques importantes

- Pour une utilisation en production, assurez-vous de configurer correctement la protection contre le spam
- Respectez le RGPD en ajoutant une déclaration de confidentialité si vous collectez des données personnelles
- Pensez à valider les données côté serveur pour assurer la sécurité 