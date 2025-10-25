import { Router } from "express";
import {
  getAllServices,
  getAllBarbeiros,
  getAllUsuarios,
  getAllAgendamentos,
  createUsuario,
  createAgendamento,
  createServico,
  createBarbeiro,
  updateAgendamentoStatus,
  deleteAgendamento,
  test,
} from "../controllers/controllers";

const barbeariaRoutes = Router();

barbeariaRoutes.get("/teste", test);
// ✅ Serviços
barbeariaRoutes.get("/servicos", getAllServices);
barbeariaRoutes.post("/servicos", createServico);

// ✅ Barbeiros
barbeariaRoutes.get("/barbeiros", getAllBarbeiros);
barbeariaRoutes.post("/barbeiros", createBarbeiro);

// ✅ Usuários
barbeariaRoutes.get("/usuarios", getAllUsuarios);
barbeariaRoutes.post("/usuarios", createUsuario);

// ✅ Agendamentos
barbeariaRoutes.get("/agendamentos", getAllAgendamentos);
barbeariaRoutes.post("/agendamentos", createAgendamento);
barbeariaRoutes.put("/agendamentos/:id/status", updateAgendamentoStatus);
barbeariaRoutes.delete("/agendamentos/:id", deleteAgendamento);

export default barbeariaRoutes;
