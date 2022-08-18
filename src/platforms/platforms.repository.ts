import { injectable } from 'inversify';
import { Platform } from './platform.entity';
import { IPlatformRepository } from './platforms.repository.interface';
import platfroms from './platforms.json';

@injectable()
export class PlatformsRepository implements IPlatformRepository {

	async getAll(): Promise<Platform[]> {
		return platfroms.platforms;
	}
}
