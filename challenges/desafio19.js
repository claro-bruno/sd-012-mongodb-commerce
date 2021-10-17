db.voos.find(
  { litrosCombustivel: { $exists: 1 } },
  {
    _id: 0,
    vooId: 0,
  },
).limit(1);
