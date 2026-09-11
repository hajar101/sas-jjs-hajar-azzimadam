/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.
let n = 3;
for (let i = 0; i < n; i++) {
    let ligne = '';
    for (let j = 0; j < n; j++) {
        ligne = ligne + '*';
    }
    console.log(ligne);