import { Container, ContainerModule, interfaces } from 'inversify';
import 'reflect-metadata';
import { App } from './app';
import { ExeptionFilter } from './errors/exeption.filter';
import { IExeptionFilter } from './errors/exeption.filter.interface';
import { PlatformService } from './platforms/platform.service';
import { IPlatformService } from './platforms/platform.service.interface';
import { PlatformsController } from './platforms/platforms.controller';
import { IPlatformController } from './platforms/platforms.controller.interface';
import { PlatformsRepository } from './platforms/platforms.repository';
import { IPlatformRepository } from './platforms/platforms.repository.interface';
import { TYPES } from './types';

const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<App>(TYPES.Application).to(App);
	bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
	bind<IPlatformController>(TYPES.PlatformController).to(PlatformsController);
	bind<IPlatformService>(TYPES.PlatformService).to(PlatformService);
	bind<IPlatformRepository>(TYPES.PlatformsRepository).to(PlatformsRepository).inSingletonScope();
})

function bootstrap()
{
    const appContainer = new Container();
    appContainer.load(appBindings);

    const app = appContainer.get<App>(TYPES.Application);
    app.init();
    return { app, appContainer }
}

bootstrap();