// 11.1
db.produtos.updateMany(
  {},
  { $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
  } },
);

// 11.2
db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
