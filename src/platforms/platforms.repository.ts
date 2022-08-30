import { injectable } from 'inversify';
import { Platform, PlatformDescription } from './platform.entity';
import { IPlatformRepository } from './platforms.repository.interface';


@injectable()
export class PlatformsRepository implements IPlatformRepository {

	async getAll(): Promise<PlatformDescription[]> {
		const platforms = await import('../../data/platforms.json');
		return platforms.default;
	}

	async getPlatformById (id: string): Promise<Platform>
	{
		const platform = await import(`../../../data/${id}.json`);
		console.log();
		return platform.default;
	}
}
