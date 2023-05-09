import { type NextFunction, type Request, type Response } from "express"

import { type IMiddleware } from "@app/ports/presentation"

import { adaptResponseExpress } from "."

export function adaptMiddlewareExpress(
  middleware: IMiddleware
): (req: Request, res: Response, next: NextFunction) => void {
  return async (req: Request, res: Response, next: NextFunction) => {
    adaptResponseExpress(middleware.handle(req, next))(res)
  }
}
