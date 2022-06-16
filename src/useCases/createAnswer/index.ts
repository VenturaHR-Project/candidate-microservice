import { CandidateRepository } from "../../repository/implementations/CandidateRepository";
import { CreateAnswerVacancyController } from "./CreateAnswerController";
import { CreateAnswerVacancyUseCase } from "./CreateAnswerUseCase";

const candidateRepository = new CandidateRepository()
const createAnswerVacancyUseCase = new CreateAnswerVacancyUseCase(candidateRepository)
const createAnswerVacancyController = new CreateAnswerVacancyController(createAnswerVacancyUseCase)

export { createAnswerVacancyUseCase, createAnswerVacancyController };

