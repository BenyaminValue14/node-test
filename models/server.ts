import express, {Application} from 'express';
import cors from 'cors';
import db from '../db/connection';

import userRoutes from '../routes/usuario';

class Server {

  private app: Application;
  private port: string;
  private dbName: string;
  private apiPaths = {
    usaurios: '/api/usuarios'
  }
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
    this.dbName = process.env.DB_NAME || 'node_curso';
    
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Error de conexion en la base de datos:');
      
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server run in port ${this.port}`);
      
    })
  }
  routes() {
    this.app.use(this.apiPaths.usaurios, userRoutes);
  }
  middlewares() {
    //CORS
    this.app.use( cors() );
    //lectura de body
    this.app.use( express.json() );
    //carpeta publica
    this.app.use( express.static('public') )
  }
}



export default Server;
