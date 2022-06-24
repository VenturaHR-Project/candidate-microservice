import { Answers } from "../../domain/entities/AnswerVacancy/AnswerVacancy"

export interface ICreateAnswerVacancyRequestDTO{
    userUid: string
    vacancyId: string
    userName: string
    userPhone: string
    answers: Answers[]
    score: number
    createdDate: string
}