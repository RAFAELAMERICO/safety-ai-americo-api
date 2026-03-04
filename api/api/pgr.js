export default function handler(req, res) {
  const limit = Number(req.query.limit ?? 10);
  const offset = Number(req.query.offset ?? 0);

  return res.status(200).json({
    data: [],
    total: 0,
    limit,
    offset,
  });
}
