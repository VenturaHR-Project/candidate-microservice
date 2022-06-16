import { Score } from "../../shared/Utils/Score"
import { AppError } from "../../shared/error/AppError"
import { ICandidateRepository } from "../../repository/ICandidateRepository"
import { ICreateAnswerVacancyRequestDTO } from "./ICreateAnswerRequestDTO"

export class CreateAnswerVacancyUseCase {
    constructor(
        private repository: ICandidateRepository
    ) { }

    async execute(data: ICreateAnswerVacancyRequestDTO) {
        const alreadyAnswered = await this.repository.checkIfUserHasAlreadyAnsweredVacancy(data.userUid, data.vacancyId)

        if (alreadyAnswered) {
            throw new AppError(403, "User has already answered this job")
        }

        data.score = Score.calculate(data.answers)

        try {
            await this.repository.createVacancy(data)
        } catch (error) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}