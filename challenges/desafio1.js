db.produtos.updateMany(
    {}, // filtro
    { $set: { criadoPor: "Ronald McDonald" } },
);
// como o filtro é chaves vazia, vai atualizar todos os documentos na coleção Produtos(É o que é pedido no req 1).
// como não existia o criadoPor, o $set vai criar esse campo em todos os documentos da coleção Produtos.
db.produtos.find(
    {},
    { 
        nome: true,
        criadoPor: true,
        _id: false,
    },
);
// depois o req pede pra usar query que retorne apenas nome e o criadoPor.