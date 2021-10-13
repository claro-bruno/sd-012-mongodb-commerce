db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
  {
    $upsert: true,
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
