db.produtos.find({ vendidos: { $mod: [5, 0] } }, { _id: 0, nome: 1, vendidos: 1 });

// tem que ser multiplo de 5 e sobrar 0. primeira e segunda posicao respectivamente no array de parametros do $mod. Somente McChiken obedece o filtro
