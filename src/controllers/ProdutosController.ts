import { Request, Response } from "express";
import knex from "../database/connection";

export default {
  async create(request: Request, response: Response) {
    try {
      const data = request.body;
      await knex("produtos").insert(data);
      return response.status(201).json({ data: "Produto cadastrado com sucesso" });
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async all(request: Request, response: Response) {
    try {
      const produtos = await knex("produtos").join("categorias", "produtos.id_categoria", "categorias.id_categoria");
      return response.status(200).json(produtos);
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async one(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produto = await knex("produtos").where({ id }).join("categorias", "produtos.id_categoria", "categorias.id_categoria");
      return response.status(200).json(produto);
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async oneCategory(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const produtos = await knex("produtos").where({ id_categoria: id });
      return response.status(200).json(produtos);
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const data = request.body;
      await knex("produtos").update(data).where({ id });
      return response.status(200).json({ data: "Produto atualizado com sucesso" });
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;
      await knex("produtos").delete().where({ id });
      return response.status(200).json({ message: "Produto excluido com sucesso" });
    } catch (error) {
      return response.status(404).json({
        message: `Erro inesperado no servidor! ${error}`,
      });
    }
  },
};
