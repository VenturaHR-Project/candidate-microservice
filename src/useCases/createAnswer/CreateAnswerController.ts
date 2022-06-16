import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { CreateAnswerVacancyUseCase } from "./CreateAnswerUseCase";

export class CreateAnswerVacancyController {
    constructor(
        private createAnswerVacancyUseCase: CreateAnswerVacancyUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            await this.createAnswerVacancyUseCase.execute(request.body)
            return response.status(201).json({ message: 'Answer vacancy created with success' });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.status).json({
                    message: error.message
                })
            }
        }
    }
}