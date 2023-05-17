import { type ICreateRaceCar } from "@core/use-cases"
import { AdaptError } from "@pre/utils"
import {
    IRequest, 
    IResponse, 
    IController,
    IValidator
} from "@app/ports/presentation"

export class CreateRaceCar implements IController {
    constructor(
        private readonly useCase: ICreateRaceCar,
        private readonly bodyValidate: IValidator
    ) {}
    async handle(req: IRequest): Promise<IResponse> {
        try {
            const error = this.bodyValidate.validate(req.body)
            if (error) throw error
            return {
                statusCode: 201,
                body: {
                    message: "Race car created successfully",
                    data: await this.useCase.create(req.body),
                },
            } 
        } catch (error) {
            return AdaptError(error)  
        }  
    }
}