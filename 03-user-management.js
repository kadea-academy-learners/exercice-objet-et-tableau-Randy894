// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(utilisateurs) {
  // Filtrer uniquement les utilisateurs dont estAdmin est vrai
  const admins = utilisateurs
    .filter(utilisateur => utilisateur.estAdmin === true)
    .map(utilisateur => utilisateur.nom);

  return admins;
}

// Exemple d’utilisation
const users = [
  { nom: "Randy", age: 19, estAdmin: true },
  { nom: "David", age: 19, estAdmin: false },
  { nom: "Dimitri", age: 20, estAdmin: true },
];

console.log(whoIsAdmin(users)); 

module.exports = {
  whoIsAdmin,
};



