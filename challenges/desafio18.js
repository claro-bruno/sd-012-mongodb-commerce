// 18.1
db.produtos.createIndex({ descricao: "text" });

// 18.2
db.produtos.count({ $text: { $search: "\"feito com\"" } });
