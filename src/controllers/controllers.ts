import { Request, Response } from "express";
import { prisma } from "../prismaClient";

export const test = async (req: Request, res: Response) => {
  res.status(200).json({ message: "está funcionando!" });
};
// ---------------- SERVIÇOS ----------------
export const getAllServices = async (req: Request, res: Response) => {
  const servicos = await prisma.servico.findMany();
  res.json(servicos);
};

export const createServico = async (req: Request, res: Response) => {
  const { nome, preco, duracao, descricao, imagem } = req.body;
  const novo = await prisma.servico.create({
    data: { nome, preco, duracao, descricao, imagem },
  });
  res.status(201).json(novo);
};

// ---------------- BARBEIROS ----------------
export const getAllBarbeiros = async (req: Request, res: Response) => {
  const barbeiros = await prisma.barbeiro.findMany();
  res.json(barbeiros);
};

export const createBarbeiro = async (req: Request, res: Response) => {
  const { nome, especialidade, foto, avaliacao } = req.body;
  const novo = await prisma.barbeiro.create({
    data: { nome, especialidade, foto, avaliacao },
  });
  res.status(201).json(novo);
};

// ---------------- USUÁRIOS ----------------
export const getAllUsuarios = async (req: Request, res: Response) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
};

export const createUsuario = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  const novo = await prisma.usuario.create({
    data: { nome, email, senha },
  });
  res.status(201).json(novo);
};

// ---------------- AGENDAMENTOS ----------------
export const getAllAgendamentos = async (req: Request, res: Response) => {
  const agendamentos = await prisma.agendamento.findMany({
    include: { usuario: true, barbeiro: true, servico: true },
  });
  res.json(agendamentos);
};

export const createAgendamento = async (req: Request, res: Response) => {
  const { usuarioId, barbeiroId, servicoId, data, hora, status } = req.body;
  const novo = await prisma.agendamento.create({
    data: {
      usuarioId,
      barbeiroId,
      servicoId,
      data: new Date(data),
      hora,
      status,
    },
  });
  res.status(201).json(novo);
};

export const updateAgendamentoStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const atualizado = await prisma.agendamento.update({
    where: { id: Number(id) },
    data: { status },
  });
  res.json(atualizado);
};

export const deleteAgendamento = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.agendamento.delete({ where: { id: Number(id) } });
  res.json({ message: "Agendamento removido com sucesso" });
};
