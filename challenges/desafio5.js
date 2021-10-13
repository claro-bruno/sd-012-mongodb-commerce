db.produtos.updateMany(
  { 
    $and: [
      { nome: { $not: { $eq: "McChicken" } } },
      { ingredientes: { $not: { $in: ["ketchup"] } } },
   ],
  },
  { $push: { ingredientes: "ketchup" } },
  );

  db.produtos.find(
    { },
    { nome: true, ingredientes: true, _id: false },
  );
