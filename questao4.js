/* 4. Será preciso criar uma função que permita cadastrar uma receita dentro
da lista de receitas, seguindo os padrões do objeto estipulado na etapa
anterior. A função deve se chamar cadastrarReceita e deverá receber
cada informação da receita por parâmetro devolver um feedback no
console que o cadastro foi concluído.*/

const cadastrarReceita = (
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
  ) => {
    const novaReceita = {
      2,
      macarrão,
      simples,
      ['macarrão','temperos'],
      cozinhar,
      'youtube.com'
      false
    };
    listaDeReceitas.push(novaReceita);
      
  };
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);