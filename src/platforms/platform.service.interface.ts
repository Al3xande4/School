import { Platform } from './platform.entity';

export interface IPlatformService {
	getPlatforms: () => Promise<Platform[]>;
}
