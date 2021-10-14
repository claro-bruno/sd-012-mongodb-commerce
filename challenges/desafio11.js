db.produtos.updateMany(
    {}, // adiciona pra tags em todos os objetos da coleção PRODUTOS
    {
        $push: { // o push adiciona valor(es) em arrays, ou pra criar arrays novos.
          tags: { // O $each adiciona mais de um valor no array .
             $each: ["combo", "tasty"],
             $sort: +1, // quero os elementos do array tags em ordem alfabética ascendente
          },
 // depois de $push se usa {}.  Depois de tags também vai se usar {}.   Depois de $each se usa [].
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
