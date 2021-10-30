db.produtos.updatemany(
    {},
    {
        $set: { 
            vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
        },
    },
);

db.produtos.updatemany(
    {
        nome: "Big Mac",
    },
    {
        $inc: { 
            "vendasPorDia.4": 60,
        },
    },
);

db.produtos.updatemany(
    {
        tags: {
            $in: ["bovino", "pão"],
        },
    },
    {
        $inc: { 
            "vendasPorDia.7": 120,
        },
    },
);

db.produtos.find(
    {},
    {
        _id: 0, nome: 1, ingredientes: 1,
    },
);
