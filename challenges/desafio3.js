db.produtos.updateMany(
  {},
  { $set: { avaliacao: NumberInt(0) } },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino" ] } },
  { $inc: { avalicao: 5 } },
);

db.produtos.find({}, { _id: 0, nome:1, avaliacao: 1 } );
