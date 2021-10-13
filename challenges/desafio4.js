db.produtos.updateMany(
    { nome: "Big Mac" },
    { $currentDate: {
        ultimaModificação: { $type: "date" },
      }, // o currentDate já vai criar o campo ultimaModificação e já colocar a data corrente, mas somente onde o nome do sanduíche for Big Mac. . O req pede que o tipo seja date, ao invés de timestamp.
      
    },
  );
  db.produtos.find(
    { ultimaModificação: { $exists: true } }, // quer que retorne o nome de todos os documentos mas somente onde ultimaModificação existe
    { 
        nome: true,
        _id: false,
    },
);