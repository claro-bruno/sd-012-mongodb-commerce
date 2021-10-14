db.produtos.updateMany(
    { // elemMatch vai fazer tipo um filtro pra array.
            valoresNutricionais: {
                $elemMatch: {
                    tipo: { $eq: "sódio" },
                    percentual: { $gte: 40 },
                },
               
            }, // o filtro quer coisas específicas pro TIPO e PERCENTUAL, ambos são elementos dentro do array valoresNutricionais. Portanto, devo colocar o $elemMatch dentro do valoresNutricionais.. Aí dentro do $elemMatch eu coloco o que serão os filtros(pra tipo e percentual).
         
    }, 
    {
        $push: { // aí adiciona o elemento muito sódio no array
          tags: "muito sódio", // Tentava com [], mas não passava no teste local.
 
        },
    }, 
    
);

db.produtos.find(
    {},
    { 
        nome: true,
        tags: true,
        _id: false,
    },
);
