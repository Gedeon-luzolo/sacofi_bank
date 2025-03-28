# Sakofi Bank

Bienvenue dans **Sakofi Bank**, une plateforme bancaire moderne et intuitive construite avec des technologies de pointe pour offrir une expérience utilisateur fluide et sécurisée.

## 📚 Description du projet
Sakofi Bank est une application bancaire en ligne conçue avec **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion** et d'autres technologies modernes pour offrir une interface rapide, réactive et accessible.

## ⚙️ Technologies utilisées
- **React 19** - Framework JavaScript moderne pour la construction d'interfaces utilisateur dynamiques.
- **Vite** - Outil de build ultra-rapide pour React.
- **Tailwind CSS v4** - Framework CSS utilitaire pour un design responsive et optimisé, sans fichier de configuration.
- **Framer Motion** - Librairie d'animations fluide pour une meilleure expérience utilisateur.
- **TypeScript** - Typage statique pour un code plus robuste.
- **Prisma** - ORM pour gérer la base de données.
- **Mysql** - Base de données relationnelle performante.

## ⚡ Fonctionnalités principales
- Authentification sécurisée (OAuth, JWT, 2FA)
- Gestion de comptes bancaires et transactions
- Tableau de bord interactif avec visualisation des données
- Centre de notifications en temps réel
- Espace utilisateur personnalisé
- Interface réactive et adaptée à tous les appareils
- Navigation fluide et animations optimisées
- Pages dédiées pour chaque élément du tableau de bord
- Autres fonctionnalités clés typiques d'un dashboard bancaire moderne

## 📝 Installation et exécution

### Prérequis
- **Node.js** >= 18
- **pnpm** ou **npm**
- **Base de données PostgreSQL**

### Installation
```sh
# Cloner le référentiel
git clone https://github.com/Gedeon-luzolo/sacofi_bank.git
cd sakofi-bank

# Installer les dépendances
pnpm install
```

### Configuration
Créez un fichier `.env.local` et ajoutez les variables nécessaires :
```ini
DATABASE_URL=postgresql://user:password@localhost:5432/sakofi_bank
AUTH_SECRET=your_secret_key
```

### Démarrer le projet
```sh
pnpm run dev
```
L'application sera disponible sur **http://localhost:5173**.

## 💪 Contribution
Les contributions sont les bienvenues ! Pour contribuer :
1. Forker le repo
2. Créer une branche (`git checkout -b feature/ma-feature`)
3. Committer (`git commit -m "Ajout de ma fonctionnalité"`)
4. Pousser (`git push origin feature/ma-feature`)
5. Ouvrir une Pull Request

## 🌐 Déploiement
L'application peut être déployée sur **Vercel** ou **Netlify** avec la configuration `vite.config.ts` déjà préparée.

```sh
pnpm run build
pnpm preview
```

## 👥 Auteurs
- **Votre Nom** - [GitHub](https://github.com/Gedeon-luzolo/)

## ✅ Licence
Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

