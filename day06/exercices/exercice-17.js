/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


function compter(tableau) {
    let resultat = {};

    for (let i = 0; i < tableau.length; i++) {

        if (resultat[tableau[i]]) {
            resultat[tableau[i]]++;
        } else {
            resultat[tableau[i]] = 1;
        }
    }

    console.log(resultat);
}

let mots = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];

compter(mots);

