//* Snack 2
//* Creare un array di oggetti di squadre di calcio.
//* Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//* Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//* Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
//* Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const serieA = [
  (squadra1 = {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  }),
  (squadra2 = {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  }),
  (squadra3 = {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  }),
  (squadra4 = {
    nome: "Napoli",
    puntiFatti: 0,
    falliSubiti: 0,
  }),
];

for (let i = 0; i < serieA.length; i++) {
  serieA[i].puntiFatti = parseInt(Math.random() * 114) + 1;
  serieA[i].falliSubiti = parseInt(Math.random() * 500) + 1;
}

const creaSquadra = (nome, falli) => {
  const name = nome;
  const falliSubiti = falli;
  return { name, falliSubiti };
};

const creaLista = () => {
  const ArrayFalliSubiti = [];
  for (let i = 0; i < serieA.length; i++) {
    ArrayFalliSubiti.push(creaSquadra(serieA[i].nome, serieA[i].falliSubiti));
  }
  return ArrayFalliSubiti;
};

console.log(creaLista());
