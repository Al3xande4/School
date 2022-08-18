import { Response, Router } from 'express';
import { injectable } from 'inversify';
import { ExpressReturnType, IControllerRoute } from './route.interface';
import 'reflect-metadata';

@injectable()
export abstract class BaseController {

	private readonly _router: Router;

	get router(): Router {
		return this._router;
	}

	constructor() {
		this._router = Router();
	}

	bindRoutes(routes: IControllerRoute[]): void {
		for (const route of routes) {
			const middleware = route.middlewares?.map((m) => m.execute.bind(m));
			const handler = route.func.bind(this);
			const pipeline = middleware ? [...middleware, handler] : handler;
			this.router[route.method](route.path, pipeline);
		}
	}

	public send<T>(res: Response, message: T, statusCode: number): ExpressReturnType {
		return res.status(statusCode).send(message);
	}

	public ok<T>(res: Response, message: T): ExpressReturnType {
		return this.send<T>(res, message, 200);
	}
}
