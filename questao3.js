/* 3. Deixaremos previamente deixar cadastrada uma receita dentro da nossa
lista de receitas, o cliente deixará livre a escolha de qual receita será. Além
disso, uma receita será representada por um objeto e deverá ter os
seguintes atributos:
a. Um identificador único que não pode se repetir no sistema ex id
b. titulo da receita
c. nível dificuldade ( com a escala de simples, moderada e complexa)
d. lista de ingredientes já com a medida (Ex: 1 colher de açúcar)
e. instruções de preparo
f. link do video de preparo
g. se é vegana ou não*/

const listaDeReceitas = [
    {
      id: 1,
      titulo: "bolo",
      dificuldade: "simples",
      ingredientes: ["leite", "ovos", "farinha"],
      preparo: "bater e assar",
      link: "youtube.com",
      vegano: false,
    }, 
  ];

