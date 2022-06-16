import { ICreateAnswerVacancyRequestDTO } from "../../../useCases/createAnswer/ICreateAnswerRequestDTO"
import { AnswerVacancy } from "./AnswerVacancy"

export class AnswerVacancyFactory {
    static create() { 
        return new AnswerVacancy()
    }

    static createWith(data: ICreateAnswerVacancyRequestDTO): ICreateAnswerVacancyRequestDTO {
        return new AnswerVacancy(data)
    }
}