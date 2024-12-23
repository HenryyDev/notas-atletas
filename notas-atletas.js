let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];
function nota() {
  for (let i = 0; i < atletas.length; i++) {
    let notasCrescente = atletas[i].notas.sort((a, b) => a - b);
    let notasComputadas = notasCrescente.slice(1, 4);

    let total = notasComputadas.reduce((soma, nota) => soma + nota);
    let media = total / notasComputadas.length;
    console.log(
      `Atleta: ${atletas[i].nome} 
Notas obtidas: ${atletas[i].notas} 
Média válida: ${media.toFixed(2)} \n`
    );
  }
}
nota();
