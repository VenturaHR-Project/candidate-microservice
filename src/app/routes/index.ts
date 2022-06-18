import { Router } from "express"
import { createAnswerVacancyController } from "../../useCases/createAnswer"
import { fetchAnswersByVacancyController } from "../../useCases/fetchAnswersByVacancy"
import { FetchAnswersByVacancyController } from "../../useCases/fetchAnswersByVacancy/FetchAnswersByVacancyController"

const routes = Router()

routes.post("/answers", (request, response) => {
    return createAnswerVacancyController.handle(request, response)
})

routes.get("/answers/:vacancyId", (request, response) => {
    return fetchAnswersByVacancyController.handle(request, response)
})

export default routes