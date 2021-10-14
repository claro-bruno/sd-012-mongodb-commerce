db.produtos.updateMany(
    { 
            valoresNutricionais: {
                $elemMatch: {
                    tipo: { $eq: "sódio" },
                    percentual: { $gt: 20, $lt: 40 }, // greater then/ less then
                }, // tem que adicionar ao array valoresNutricionais onde: o tipo = sódio e o percentual é maior que 20 e menor que 40.
               
            }, 
         
    }, 
    { // aí nesses adiciona o contém sódio ao array valoresNutricionais
        $push: { 
          tags: "contém sódio", 
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
