export default function handler(req, res) {
  const { uid } = req.query;
  const cookise = req.cookise;

  //   res.status(200).json({ name: `디디디 ${uid} ${JSON.stringify(cookise)}` });
  //   res.status(404).send({ error: "error" });
  res.redirect(307, "/api/user");
}
