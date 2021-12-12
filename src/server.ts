import express from "express";
import routes from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";

const app = express();
const PORTA = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(PORTA, () => {
  console.log(`Servidor inicializado em http://localhost:${PORTA}`);
});