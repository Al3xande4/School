import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { HttpExeption } from '../errors/http-error';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IPlatformService } from './platform.service.interface';
import { IPlatformController } from './platforms.controller.interface';


@injectable()
export class PlatformsController extends BaseController implements IPlatformController {
	constructor(
		@inject(TYPES.PlatformService) private platformService: IPlatformService,
	) {
		super();

		this.bindRoutes([
			{
				path: '/',
				method: 'get',
				func: this.platforms,
				middlewares: [],
			},
		]);
	}

	async platforms(req: Request, res: Response, next: NextFunction): Promise<void>
	{
		this.ok(res, {platforms: await this.platformService.getPlatforms()});
	}

}
