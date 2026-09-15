/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


let candidats = [
    { nom: "Hajar", score: 15 },
    { nom: "Sara", score: 8 },
    { nom: "Aya", score: 12 }
];

function candidatsAdmis(candidats) {
    let resultat = [];

    for (let candidat of candidats) {
        if (candidat.score >= 10) {
            resultat.push(candidat);
        }
    }
    return resultat;
}
console.log(candidatsAdmis(candidats));