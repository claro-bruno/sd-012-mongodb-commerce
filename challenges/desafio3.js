db.produtos.updateMany(
    {}, 
    { $set: { avaliacao: NumberInt("0") } }, 
); // essa query é pra incluir o campo avaliação em todos os documentos
db.produtos.updateMany(
    { tags: "bovino" }, // tentei usar [] mas não passava no teste. Já vai alcançar o "bovino" dentro do array sem usar colchetes.
    { $inc: { avaliacao: +5 } }, 
); // essa query é pra incrementar avaliação em 5, mas somente onde for o tipo bovino dentro do array tags
db.produtos.updateMany(
    { tags: "ave" }, 
    { $inc: { avaliacao: +3 } }, 
); // pra incrementar avaliação em 3

db.produtos.find(
    {},
    { 
        nome: true,
        avaliacao: true,
        _id: false,
    },
); // e essa é pra retornar nome e avaliação
