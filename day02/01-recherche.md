# 🔎 Jour 02 — Recherche

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

> Quelle est la différence d'usage principale entre une boucle `for` et une boucle `while` ?

for = nombre de répétitions connu
while = condition, nombre de répétitions inconnu


---

### Question 02

> À quoi sert la boucle `do...while` et en quoi diffère-t-elle de `while` ?

while → condition avant
do...while → exécution avant, condition après

---

### Question 03

> Que se passe-t-il si vous oubliez d'incrémenter ou de modifier la condition d'arrêt dans une boucle `while` ? Comment appelle-t-on ce problème ?

boucle infinie (infinite loop)
---

### Question 04

> À quoi sert le mot-clé `break` à l'intérieur d'une boucle ?

break sert à arrêter immédiatement la boucle
---

### Question 05

> À quoi sert le mot-clé `continue` à l'intérieur d'une boucle ?

permet de passer directement à l'itération suivant sans exécuter le reste du code.
---

### Question 06

> Dans la structure `for(initialisation; condition; incrémentation)`, dans quel ordre exact ces trois parties sont-elles exécutées ?

Initialisation → Condition → Instructions → Incrémentation 
---

### Question 07

> Est-il possible de déclarer la variable d'initialisation en dehors de la boucle `for` ?

oui
let i = 0;

for (i = 0; i < 5; i++) {
    console.log(i);
}
---

### Question 08

> Qu'est-ce qu'une boucle imbriquée (nested loop) et quand en avons-nous besoin ?

boucle à l'intérieur d'autre boucle
---

### Question 09

> Quel est le risque majeur en termes de performances lorsqu'on utilise de multiples boucles imbriquées ?

le programme peut devenir plus lent à cause de divers itération.
---

### Question 10

> Peut-on utiliser un `switch` à l'intérieur d'une boucle ?

oui
for (let i = 1; i <= 3; i++) {

    switch (i) {
        case 1:
            console.log("Un");
            break;

        case 2:
            console.log("Deux");
            break;

        case 3:
            console.log("Trois");
            break;
    }
}

## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
