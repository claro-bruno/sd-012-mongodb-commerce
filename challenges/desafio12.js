db.produtos.updateMany(
    {}, 
    {
        $push: { 
          valoresNutricionais: { // esse é um array onde cada elemento é um objeto. Diferente do req 11, onde tags é um array que não tem objetos dentro.
             $each: [], // não adiciona valor novo, mas precisa ter o $each pra poder usar o $sort
             $sort: { percentual: -1 }, // ordeno de forma decrescente o percentual dentro de cada objeto dentro do array valoresNutricionais
          },
 
        },
    }, 
    
);

db.produtos.find(
    {},
    { 
        nome: true,
        valoresNutricionais: true,
        _id: false,
    },
);
