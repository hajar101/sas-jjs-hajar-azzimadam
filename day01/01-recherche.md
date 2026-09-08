# 🔎 Jour 01 — Recherche

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

> Quelle est la différence fondamentale entre `let`, `const` et `var` en JavaScript ?


---

### Question 02

> Quels sont les 7 types primitifs de données en JavaScript ?


---

### Question 03

> Que signifie `typeof null` en JavaScript, et pourquoi est-ce considéré comme une erreur historique ?



---

### Question 04

> Quelle est la différence entre l'opérateur d'égalité souple `==` et l'opérateur d'égalité stricte `===` ? Lequel faut-il privilégier ?

[== est l'opérateur d'égalité avec conversion implicite des types. JavaScript peut convertir les valeurs avant de les comparer.
=== est l'opérateur d'égalité stricte. Il compare la valeur et le type sans effectuer cette conversion.]


---

### Question 05

> Que se passe-t-il si j'essaie de changer la valeur d'une variable déclarée avec `const` ?


---

### Question 06

> Comment JavaScript gère-t-il l'addition entre un nombre et une chaîne de caractères (ex: `5 + "5"`) ? Comment appelle-t-on ce phénomène ?

L'opérateur + peut effectuer une addition numérique ou une concaténation de chaînes.
Lorsque l'une des valeurs est une chaîne de caractères, JavaScript convertit généralement l'autre valeur en chaîne et effectue une concaténation.

Exemple

let resultat = 5 + "5";
console.log(resultat);
console.log(typeof resultat);

Résultat :

55
string
---

### Question 07

> À quoi sert l'opérateur modulo `%` et donnez un cas d'usage classique ?

retourne le reste de la division du premier nombre par le deuxième.Il est notamment utilisé pour déterminer si un nombre est pair ou impair.
---

### Question 08

> Quelle est la différence entre `&&` (ET logique) et `||` (OU logique) dans une condition ?

&& est l'opérateur logique ET. Il nécessite que les deux conditions soient vraies pour que l'expression soit vraie.
|| est l'opérateur logique OU. Il suffit qu'au moins une des conditions soit vraie.

---

### Question 09

> Est-il possible d'utiliser une condition `switch` à la place d'une série de `if / else if` ? Dans quel cas est-ce préférable ?

if / else if permet de tester des conditions générales ou complexes.

switch permet principalement de comparer une expression à plusieurs valeurs précises avec des clauses case.

---

### Question 10

> Qu'est-ce qu'une valeur "falsy" en JavaScript ? Citez 3 exemples.




## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
