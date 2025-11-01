// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

// Crée un tableau `notes` contenant 5 nombres
const notes = [19, 7, 9, 35, 10];

// Fonction averageNote
function averageNote(notes) {
  // Si le tableau est vide, on retourne "Échoué"
  if (notes.length === 0) return "Échoué";

  // Calcule la somme
  const somme = notes.reduce((total, note) => total + note, 0);

  // Calcule la moyenne
  const moyenne = somme / notes.length;

  // Retourne le message selon la moyenne
  return moyenne >= 10 ? "Réussi" : "Échoué";
}

console.log(averageNote(notes));

module.exports = {
	averageNote,
};



