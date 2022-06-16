import { Router } from "express"
import { createAnswerVacancyController } from "../../useCases/createAnswer"

const routes = Router()

routes.post("/answers", (request, response) => {
    return createAnswerVacancyController.handle(request, response)
})

export default routes