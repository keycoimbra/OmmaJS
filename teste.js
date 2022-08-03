const nomeEmpresa = "Omma";
console.log(nomeEmpresa);
const listaDeReceitas = [ // isso é uma lista
 { // isso é um atributo name: value, ;
   id: 1, //a
   titulo: "Bolo", //b
   dificuldade: "moderada", //c
   ingredientes: ['Blá','Blá','Blá','Blá','Blá' ],   //d
   preparo: "Assar", //e
   link: 'vimeo.com', //f
   vegano: false

 } // isso é um objeto é uma receita 
];
const cadastrarReceita = (
   id, titulo, dificuldade,ingredientes,preparo,link, vegano

) => {
  const novaReceita = {
    id, 
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link, 
    vegano
  };
  listaDeReceitas.push(novaReceita);
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
}
cadastrarReceita(
    2, 
    "Panqueca",
    "simples", 
    ['Ovo', 'Leite', 'Farinha' ], 
    "Fritar", 
    'youtube.com', 
    true
);

console.log(listaDeReceitas)
function exibirReceitas() {
  for (let i=0; i<listaDeReceitas.length; i++){
    const receita = listaDeReceitas [i];
    console.log("------------------------------");
    console.log("Titulo:" +receita.titulo);
  } //a 
  for (let i=0; i<listaDeReceitas.length; i++){
    const receita = listaDeReceitas [i];
    console.log("------------------------------");
    console.log("Ingredientes:" +receita.ingredientes);
  } //b
  for (let i=0; i<listaDeReceitas.length; i++){
    const receita = listaDeReceitas [i];
    console.log("------------------------------");
    console.log("Vegano sim ou não:" +receita.vegano);
  } //b

}
exibirReceitas();
const deletarReceita = (id) =>{
  for(let i=0; i< listaDeReceitas.length;i ++){
   if(listaDeReceitas[i].id=== id){
    listaDeReceitas.splice(i,1);
    console.log("Receita deletada");
    console.log(listaDeReceitas)

   }
  else{
    console.log("Receita não encontrada");
  }
    
  }
}
deletarReceita(1);