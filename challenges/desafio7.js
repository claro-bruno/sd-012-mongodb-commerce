db.produtos.updateMany(
  { },
  { $pull: { ingredientes: { $elemMatch: { $eq: "cebola" } } } },
);

db.produtos.find({ }, { nome: true, ingredientes: true, _id: false });