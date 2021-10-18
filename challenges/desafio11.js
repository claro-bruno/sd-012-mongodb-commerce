db.produtos.updateMany(
  {},
  {
    $addToSet: {
      tags: {
        $each: [
          "combo",
          "tasty",
        ],
      },
    },
  },
);
db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
).sort({ tags: 1 });