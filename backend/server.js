import express from "express";

const app = express();

const port = 3000;

app.use(express.json());

app.use("/home", (req, res) => {
  res.json({ message: "Bienvenue sur ma home avec le déploiment CI/CD check !!" });
});

app.listen(port, () => {
  console.log(`server lancé sur http://localhost:${port}`);
});
