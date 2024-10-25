//* Snack 1
//* Creare un array di oggetti:
//* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//* Stampare a schermo la bici con peso minore.

const arrayBici = [
  (bici1 = {
    nome: "Bici 1",
    peso: {
      valore: 18,
      unità: "kg",
    },
  }),
  (bici2 = {
    nome: "Bici 2",
    peso: {
      valore: 23,
      unità: "kg",
    },
  }),
  (bici3 = {
    nome: "Bici 3",
    peso: {
      valore: 15,
      unità: "kg",
    },
  }),
  (bici4 = {
    nome: "Bici 4",
    peso: {
      valore: 20,
      unità: "kg",
    },
  }),
];

let pesoMin = 0;
let biciLeggera = "";
for (let i = 0; i < arrayBici.length; i++) {
  const biciAttuale = arrayBici[i];
  const pesoBiciAttuale = biciAttuale.peso.valore;

  if (i == 0) {
    pesoMin = pesoBiciAttuale;
    biciLeggera = biciAttuale.nome;
  }

  if (pesoMin > pesoBiciAttuale) {
    pesoMin = pesoBiciAttuale;
    biciLeggera = biciAttuale.nome;
  }
}

console.log(
  "La " + biciLeggera + " è la più leggera con il peso di " + pesoMin + "kg"
);
