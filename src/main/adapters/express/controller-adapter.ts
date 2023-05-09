import { adaptResponseExpress } from "@main/adapters/express"
import { type Request, type Response } from "express"

import { type IController } from "@app/ports/presentation"

export function adaptControllerExpress(
  controller: IController
): (req: Request, res: Response) => void {
  return async (req: Request, res: Response) => {
    adaptResponseExpress(await controller.handle(req))(res)
  }
}
