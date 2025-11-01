// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
const baseDeDonnees = [];

// 2. Fonction d'inscription
function signUp(nom, email, password, confirmPassword) {
  // Vérifier si l'email existe déjà
  const utilisateurExiste = baseDeDonnees.some(
    (user) => user.email === email
  );
  if (utilisateurExiste) {
    return "Erreur : cet email est déjà utilisé.";
  }

  // Vérifier si les mots de passe correspondent
  if (password !== confirmPassword) {
    return "Erreur : les mots de passe ne correspondent pas.";
  }

  // Créer un nouvel utilisateur
  const nouvelUtilisateur = {
    id: baseDeDonnees.length + 1, // identifiant unique simple
    nom,
    email,
    password,
    estConnecte: false,
    estBloque: false,
  };

  // Ajouter à la base
  baseDeDonnees.push(nouvelUtilisateur);

  return nouvelUtilisateur;
}

// 3. Fonction de connexion
function login(email, password) {
  // Trouver l'utilisateur dans la base
  const utilisateur = baseDeDonnees.find((user) => user.email === email);

  if (!utilisateur) {
    return "Erreur : utilisateur non trouvé.";
  }

  // Vérifier si le mot de passe est correct
  if (utilisateur.password !== password) {
    return "Erreur : mot de passe incorrect.";
  }

  // Vérifier si le compte est bloqué
  if (utilisateur.estBloque) {
    return "Erreur : ce compte est bloqué.";
  }

  // Mettre à jour l'état de connexion
  utilisateur.estConnecte = true;

  return utilisateur;
}

// --- Exemple d'utilisation ---
console.log(signUp("Randy", "randy@email.com", "1234", "1234"));
// 👆 crée un utilisateur

console.log(signUp("Sarah", "randy@email.com", "abcd", "abcd"));
// 👆 email déjà pris

console.log(login("randy@email.com", "1234"));
// 👆 connexion réussie

console.log(login("randy@email.com", "0000"));
// 👆 mot de passe incorrect

module.exports = { baseDeDonnees, signUp, login };
