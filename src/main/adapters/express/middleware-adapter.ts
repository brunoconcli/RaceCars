import { type NextFunction, type Request, type Response } from "express"

import { type IResponse, type IMiddleware } from "@app/ports/presentation"

import { adaptResponseExpress } from "."

export function adaptMiddlewareExpress(
  middleware: IMiddleware
): (req: Request, res: Response, next: NextFunction) => void {
  return async (req: Request, res: Response, next: NextFunction) => {
    const response: any | IResponse = middleware.handle(req, next)
    typeof response === "object" && adaptResponseExpress(response)(res)
  }
}
