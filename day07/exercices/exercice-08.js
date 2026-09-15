/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let candidats = [
    { nom: "Hajar", score: 15 },
    { nom: "Sara", score: 18 },
    { nom: "Aya", score: 14 }
];

function meilleurCandidat(candidats) {
    let meilleur = candidats[0];

    for (let candidat of candidats) {
        if (candidat.score > meilleur.score) {
            meilleur = candidat;
        }
    }

    return meilleur.nom;
}
console.log(meilleurCandidat(candidats));