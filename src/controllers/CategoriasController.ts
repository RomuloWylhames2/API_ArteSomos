import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(request: Request, response: Response) {
    try {
      const categoria = request.body;
      await knex("categorias").insert(categoria);
      return response.status(201).json("Categoria cadastrada com sucesso");
    } catch (error) {
      return response.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async all(request: Request, response: Response) {
    try {
      const categorias = await knex("categorias").orderBy("id_categoria");
      return response.status(200).json(categorias);
    } catch (error) {
      return response.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async one(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const categoria = await knex("categorias").where({ id_categoria: id });
      return response.status(200).json(categoria);
    } catch (error) {
      return response.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data =  request.body;
      await knex("categorias").update(data).where({ id_categoria: id });
      return response.status(200).json({ message: "Categoria atualizada com sucesso" });
    } catch (error) {
      return response.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await knex("categorias").delete().where({ id_categoria: id });
      return response.status(200).json({ message: "Categoria excluida com sucesso" });
    } catch (error) {
      return response.status(500).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};