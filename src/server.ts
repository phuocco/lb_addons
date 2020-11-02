import {once} from 'events';
import express, {Request, Response} from 'express';
import http from "http";
import path from 'path';
import {ApplicationConfig, TestdbApplication} from './application';
export {ApplicationConfig};

export class ExpressServer {
  public readonly app: express.Application;
  public readonly lbApp: TestdbApplication;
  private server?: http.Server;

  constructor(options: ApplicationConfig = {}) {
    this.app = express();
    this.lbApp = new TestdbApplication(options);
    this.app.use('/api', this.lbApp.requestHandler);
    // Serve static files in the public folder
    this.app.use(express.static('public'));

      // Custom Express routes
      this.app.get('/', function (_req: Request, res: Response) {
        res.sendFile(path.resolve('public/express.html'));
      });
      this.app.get('/hello', function (_req: Request, res: Response) {
        res.send('Hello world!');
      });

  }


  async boot() {
    await this.lbApp.boot();
  }

  public async start() {
    await this.lbApp.start();
    const port = this.lbApp.restServer.config.port ?? 3000;
    const host = this.lbApp.restServer.config.host || '127.0.0.1';
    this.server = this.app.listen(port, host);
    await once(this.server, 'listening');
  }

}
