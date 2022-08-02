/* 1. Precisamos armazenar o nome da empresa, e sempre que for executado o
sistema ( Execução do arquivo index.js) deve exibir no console esse nome.
Essa informação nunca deve ser alterada durante o uso do sistema. para isso
eu uso a constante*/

const nomeEmpresa = "Omma";
console.log(nomeEmpresa);

/* 2. Precisamos armazenar a lista de receitas em nosso sistema chamada
receitas: Para isso iremos usar o recurso de Arrays do Javascript. Essa lista
deve ter acesso global para todas as funcionalidades do sistema.*/

const listaDeReceitas = [

]

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

const listaDeReceitas = [ //lista
    {
        id: 1; //letra a
        titutlo: "Bolo", //letra b - é uma string 
        dificuldade: "moderada", //letra c
        ingredientes: ['bla','blá','blá'] // letra d
        preparo: "Assar", // letra e
        link: 'vimeo.com', // letra f
        vegano: false
    } // isso é o objeto da receita
]; // tem que colocar ";" pra finalizaar alista

/* 4. Será preciso criar uma função que permita cadastrar uma receita dentro
da lista de receitas, seguindo os padrões do objeto estipulado na etapa
anterior. A função deve se chamar cadastrarReceita e deverá receber
cada informação da receita por parâmetro devolver um feedback no
console que o cadastro foi concluído.*/

const cadastrarReceita = (
    id, titulo, dificuldade, ingredientes, preparo, link, vegano
) => {
    const novaReceita={
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
};

listaDeReceitas.push(novaReceita);
console.log(`Cadastro da receita ${titulo}feito com sucesso`);
}
cadastrarReceita(
    2
    "pudim"
    "simples"
    ['leite','creme de leite','leite condensado']
    "bater"    
   'youtube.com',
    false
);