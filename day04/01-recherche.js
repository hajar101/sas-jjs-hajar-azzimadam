# 🔎 Jour 03 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence entre un *paramètre* et un *argument* d'une fonction ?

Un paramètre est une variable définie dans la déclaration d'une fonction, tandis qu'un argument est la valeur donnée à ce paramètre lors de l'appel de la fonction

---

### Question 02

> Quelle est la différence entre l'instruction `return` et `console.log()` dans une fonction ?

return renvoie une valeur que l'on peut réutiliser, tandis que console.log() affiche simplement une valeur dans la console.
---

### Question 03

> Que se passe-t-il si l'on oublie le mot-clé `return` dans une fonction censée renvoyer une valeur ?
Sans return une fonction qui doit renvoyer une valeur retourne undefined
---

### Question 04

> Qu'est-ce que la **portée (scope)** des variables en JavaScript ? Une variable définie dans une fonction avec `let` est-elle accessible à l'extérieur ?

La portée (scope) détermine où une variable peut être utilisée. Une variable déclarée avec let à l'intérieur d'une fonction est locale à cette fonction et n'est pas accessible à l'extérieur.
---
### Question 05

> Quelle est la syntaxe d'une **fonction fléchée** (arrow function) par rapport à une fonction classique ?
Fonction classique:
function nom(paramètre) {
    return résultat;
}

Fonction fléchée:
const nom = (paramètre) => {
    return résultat;
}

---

### Question 06

> Dans quel cas peut-on mettre les accolades `{}` et le mot-clé `return` dans une fonction fléchée ?

oui c'est la fonction contient un seule instruction.
ex: const double =x=> x*2;


---

### Question 07

> Qu'est-ce que le *Hoisting* (hissage) en JavaScript, et comment s'applique-t-il aux fonctions classiques `function nom()` versus les variables `const maFunc = () => {}` ?



---

### Question 08

> Qu'est-ce qu'une fonction **Callback** ?

c'est fonction passé en argument a une autre fonction pour etre exécutée
ex: setTimeput(moncallback,1000);
---

### Question 09

> Peut-on donner une valeur par défaut à un paramètre (ex: `function saluer(nom = "Invité")`) ?


---

### Question 10

> Qu'est-ce que la *récursivité* en programmation ?

c'est le principe d'une fonction qui s'appelle elle-meme jusqu'à atteindre une condition d'arret (calcule factorielle).

## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
