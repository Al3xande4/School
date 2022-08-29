import { Platform, PlatformDescription } from './platform.entity';

export interface IPlatformService {
	getPlatforms: () => Promise<PlatformDescription[]>;
	getPlatformById: (id: string) => Promise<Platform>;
}
