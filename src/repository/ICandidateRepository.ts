import { Document } from "mongoose"
import { ICreateAnswerVacancyRequestDTO } from "../useCases/createAnswer/ICreateAnswerRequestDTO"

export interface ICandidateRepository {
    createVacancy(data: ICreateAnswerVacancyRequestDTO): Promise<void>
    checkIfUserHasAlreadyAnsweredVacancy(userUid: String, vacancyId: String): Promise<boolean>
    fetchAnswersByVacancyId(name: string): Promise<Document[]>
}