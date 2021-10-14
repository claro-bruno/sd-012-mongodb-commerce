db.produtos.count(
    { ingredientes: { $size: 4 } },
  );
  // o $size verifica array que tenha um número específico.
  // o req 16 pede produtos que tenham 4 elementos no array ingredientes.
