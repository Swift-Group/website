# Dernières modifications par rapport au projet initial

## 📌 Modifications :

- **`index.html`** : Mise à jour du footer et du header.
- **`styles.css`** : Ajout du CSS pour le header et le footer.
  - 🔹 _Note_ : La section responsive est toujours dans ce fichier en vue d’une éventuelle restructuration pour .NET.
- **`globals.css`** : Ajout de certaines propriétés par défaut pour le site _(voir commentaires dans le code)_.
- **`styleguide.css`** : Inchangé par rapport au code généré par Figma.
- **`custom.js`** : Ajout de fonctions pour l’animation du menu de navigation.
- **`icons`** : Légères modifications des icônes des réseaux sociaux en raison de dimensions incorrectes.

## ❌ Suppressions :

- **Dossier `image/`** → Remplacé par **`img/`**.
- **Dossier `video/`** → Supprimé.
- **Fichier `style.scss`** → Je ne sais pas vraiment à quoi ca servait. Si nécessaire, il faudra le récupérer dans une ancienne version git du projet.
- **Dossier `fonts/`** → Supprimé.

## 🔧 À modifier pour ce code :

- 📁 **Réorganisation de la structure des fichiers et du code** _(notamment le code responsive, à vérifier avec la compatibilité avec structure .NET si nécessaire)._
- 📝 **Section "content" dans `index.html`** et son style correspondant dans `styles.css`.
- ⚡ **Ajout de fonctions JavaScript** _(si besoin ou inspiration)_.
- 🏷️ **Renommage des fichiers** pour correspondre à la nouvelle maquette.
- 🔗 **Mise à jour des liens de navigation** pour refléter les changements de fichiers.
- 😉 **Vos code pour le `RandomBody()`**

---

Commentaires Dylan :

- `RandomBody()` => `RenderBody()`
- On va prendre ton code pour les choses partagées ( global.css , styleguide.css , Navbar Header et Footer) pcq c bien fait et que t'a ton js.\*\*\*\*
