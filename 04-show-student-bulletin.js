// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue

function showStudentBulletin(eleves) {
  return eleves.map((eleve) => {
    // Si l'élève n'a pas de notes, on considère la moyenne = 0
    let moyenne = 0;
    if (eleve.notes.length > 0) {
      const somme = eleve.notes.reduce((total, note) => total + note, 0);
      moyenne = somme / eleve.notes.length;
    }

    // Arrondir à 2 décimales
    moyenne = Number(moyenne.toFixed(2));

    // Déterminer le commentaire
    let commentaire = "";
    if (moyenne >= 16) commentaire = "Excellent";
    else if (moyenne >= 14) commentaire = "Très Bien";
    else if (moyenne >= 12) commentaire = "Bien";
    else if (moyenne >= 10) commentaire = "Passable";
    else commentaire = "À revoir";

    // Retourner le bulletin de cet élève
    return {
      nom: eleve.nom,
      moyenne,
      commentaire,
    };
  });
}

// Exemple d’utilisation :
const eleves = [
  { nom: "Randy", notes: [15, 17, 16] },
  { nom: "David", notes: [12, 13, 14] },
  { nom: "Dimitri", notes: [8, 9, 7] },
  { nom: "Nina", notes: [] }, // pas de notes
];

console.log(showStudentBulletin(eleves));

module.exports = {
  showStudentBulletin,
};
