import { Platform, PlatformDescription } from './platform.entity';

export interface IPlatformRepository {
	getAll: () => Promise<PlatformDescription[]>;
	getPlatformById: (id: string) => Promise<Platform>; 
}
