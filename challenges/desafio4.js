db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate:
    {
      ultimaModificação: { $type: "date" },
    },  
  },
);
db.produtos.find(
  { 
    ultimaModificação: { $exists: true },
  },
  { 
    nome: true,
    _id: false,
  },
);