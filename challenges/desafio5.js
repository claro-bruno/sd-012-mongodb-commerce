db.produtos.updateMany(
    { nome: { $ne: "McChicken" } }, // $ne = NOT EQUAL.  É pra fazer o addToSet onde o nome for diferente de McChicken. O req 5 pede isso
    {
  $addToSet: { ingredientes: "ketchup" },
    }, // o addToSet garante que não existam valores repitidos no array. O addToSet vai adicionar ketchup ao array ingredientes(mas nos objetos PRODUTOS onde não tiver ketchup previamente e onde o name não seja igual McChicken). 
  );
  db.produtos.find(
    {},
    { 
        nome: true,
        ingredientes: true,
        _id: false,
    },
);