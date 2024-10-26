//* Snack 3 (Bonus)
//* Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//* La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const funz = (array, a, b) => {
  const numIntermedi = [];
  for (let i = 0; i < array.length; i++) {
    if (a < i && b > i) {
      numIntermedi.push(array[i]);
    }
  }
  return numIntermedi;
};

const numeri = [2, 1, 6, 5, 8, 5, 7];
const risultato = funz(numeri, 0, 6);
console.log(risultato);
