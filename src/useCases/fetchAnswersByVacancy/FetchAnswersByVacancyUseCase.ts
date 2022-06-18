import { ICandidateRepository } from "../../repository/ICandidateRepository";
import { AppError } from "../../shared/error/AppError";
import { IFetchAnswersByVacancyRequestDTO } from "./IFetchAnswersByVacancyRequestDTO";

export class FetchAnswersByVacancyUseCase {
    constructor(
        private repository: ICandidateRepository
    ) {}

    async execute(data: IFetchAnswersByVacancyRequestDTO) {
        try {
            const vacancies = await this.repository.fetchAnswersByVacancyId(data.vacancyId)
            return vacancies  
        } catch (error) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}