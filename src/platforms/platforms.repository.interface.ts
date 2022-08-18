import { Platform } from './platform.entity';

export interface IPlatformRepository {
	getAll: () => Promise<Platform[]>;
}
