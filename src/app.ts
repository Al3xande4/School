import 'reflect-metadata';
import express, {Express} from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import { inject, injectable } from 'inversify';
import { TYPES } from './types';
import { ExeptionFilter } from './errors/exeption.filter';
import { PlatformsController } from './platforms/platforms.controller';

@injectable()
export class App 
{
    app: Express;
    port: number | string;
    server: Server;

    constructor(
        @inject(TYPES.PlatformController) private platformController: PlatformsController,
		@inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,
    )
    {
        this.app = express();
        this.port = process.env.PORT || 3000;
    }

    useRoutes(): void {
		this.app.use('/platforms', this.platformController.router);
	}

	useMiddlewares(): void {
		this.app.use(bodyParser.json());
	}

	useExeptionFilters(): void {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
	}

    public async init(): Promise<void>
    {
        this.useMiddlewares();
		this.useRoutes();
		this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        
    }
}