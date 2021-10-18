db.produtos.updateMany({}, { $push: { tags: { $each: ["combo", "tasty"], $sort: { tags: 1 } } } });
db.produtos.find({}, { _id: false, nome: true, tags: true });