import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import barbeariaRoutes from "./routes/barbearia_routes";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", barbeariaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
