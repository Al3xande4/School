import { Platform } from './platform.entity';
import { IPlatformService } from './platform.service.interface';
import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { TYPES } from '../types';
import { IPlatformRepository } from './platforms.repository.interface';

@injectable()
export class PlatformService implements IPlatformService {
	constructor(
		@inject(TYPES.PlatformsRepository) private platformRepository: IPlatformRepository,
	) {}
	
	async getPlatforms(): Promise<Platform[]>
	{
		return this.platformRepository.getAll();
	}

}
