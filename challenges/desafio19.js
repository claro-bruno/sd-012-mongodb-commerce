db.produtos.updateMany(
    {}, 
    { $rename: { descricao: "descricaoSite" } }, // o lint não me deixou colocar "" também em descricao.
); // o $rename serve pra renomear os campos dentro da coleção produtos. Nesse caso vai renomear o campo "descricao" pra "descricaoSite".

db.produtos.find(
    {},
    { 
        nome: true,
        descricao: true,
        descricaoSite: true,
        _id: false,
    },
);
