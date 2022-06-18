import { CandidateRepository } from "../../repository/implementations/CandidateRepository"
import { FetchAnswersByVacancyController } from "./FetchAnswersByVacancyController"
import { FetchAnswersByVacancyUseCase } from "./FetchAnswersByVacancyUseCase"

const candidateRepository = new CandidateRepository()
const fetchAnswersByVacancyUseCase = new FetchAnswersByVacancyUseCase(candidateRepository)
const fetchAnswersByVacancyController = new FetchAnswersByVacancyController(fetchAnswersByVacancyUseCase) 

export { fetchAnswersByVacancyUseCase, fetchAnswersByVacancyController }