import knex from "knex";
import knexfile from "../knexfile";

export default knex(knexfile["development"]);
console.log("Conexão com o banco de dados realizada!");
