import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { FetchAnswersByVacancyUseCase } from "./FetchAnswersByVacancyUseCase"

export class FetchAnswersByVacancyController {
    constructor(
        private fetchAnswersByVacancyUseCase: FetchAnswersByVacancyUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { vacancyId } = request.params

        try {
            const vacancies = await this.fetchAnswersByVacancyUseCase.execute({ vacancyId })
            return response.json(vacancies)
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}