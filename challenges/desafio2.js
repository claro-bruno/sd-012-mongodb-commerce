db.produtos.updateMany(
    { valorUnitario: { $exists: false } }, // esse filtro é uma forma de codificar que só quero adicionar valorUnitario somente onde não existir um valorUnitario antes.
    { $set: { valorUnitario: NumberDecimal("0.00") } }, // req pede pra mostrar que deve ser tipo NumberDecimal
);

db.produtos.find(
    {},
    { 
        nome: true,
        valorUnitario: true,
        _id: false,
    },
);
