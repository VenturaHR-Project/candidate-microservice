import { Document } from "mongoose"
import { AnswerVacancy } from "../../domain/entities/AnswerVacancy/AnswerVacancy";
import { ICreateAnswerVacancyRequestDTO } from "../../useCases/createAnswer/ICreateAnswerRequestDTO";
import { ICandidateRepository } from "../ICandidateRepository";

export class CandidateRepository implements ICandidateRepository {
    async checkIfUserHasAlreadyAnsweredVacancy(userUid: string, vacancyId: string): Promise<boolean> {
       const searchResult = await AnswerVacancy.find({ userUid, vacancyId }).countDocuments()
       const result: boolean = searchResult == 1 ? true : false
       return result 
    }

    async createVacancy(data: ICreateAnswerVacancyRequestDTO): Promise<void> {
        await AnswerVacancy.create(data)
    }

    async fetchAnswersByVacancyId(vacancyId: string): Promise<Document<any, any, any>[]> {
        const response = await AnswerVacancy.find({ vacancyId }).sort({'score': -1})
        return response
    }
}