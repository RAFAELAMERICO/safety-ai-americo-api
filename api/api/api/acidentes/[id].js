export default function handler(req, res) {
  const { id } = req.query;

  // MVP: se não achar, retorna 404. Você vai trocar isso pelo banco depois.
  return res.status(404).json({
    code: "NOT_FOUND",
    message: `Acidente não encontrado para id=${id}`,
  });
}
