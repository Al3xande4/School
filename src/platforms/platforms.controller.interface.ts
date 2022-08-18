import { NextFunction, Request, Response } from 'express';

export interface IPlatformController {
	platforms: (req: Request, res: Response, next: NextFunction) => void;
}
