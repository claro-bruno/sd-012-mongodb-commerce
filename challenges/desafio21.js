db.produtos.find({ $expr: { $gt: ["$curtidas", "$vendidos"] } },
 { nome: 1, _id: 0 });

 // gt = maior que - primeira posicao do array é a posicao que tem que ser maior, no caso $curtidas.
 