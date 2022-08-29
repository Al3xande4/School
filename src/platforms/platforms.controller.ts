import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { HttpExeption } from '../errors/http-error';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IPlatformService } from './platform.service.interface';
import { IPlatformController } from './platforms.controller.interface';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';


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
			{
				path: '/android',
				method: 'get',
				func: this.android,
				middlewares: [],
			},
			{
				path: '/flutter',
				method: 'get',
				func: this.flutter,
				middlewares: [],
			}
		]);
	}

	async platforms(req: Request, res: Response, next: NextFunction): Promise<void>
	{
		this.ok(res, await this.platformService.getPlatforms());
	}

	async android(req: Request, res: Response, next: NextFunction): Promise<void>
	{
		this.ok(res, await this.platformService.getPlatformById('android'));
	}

	async flutter(req: Request, res: Response, next: NextFunction): Promise<void>
	{
		this.ok(res, await this.platformService.getPlatformById('flutter'));
	}
}
