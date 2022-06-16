import { Answers } from "../../domain/entities/AnswerVacancy/AnswerVacancy";

export class Score {
    static calculate(skills: Answers[]): number {
        let leftValue: number = 0
        let rightValue: number = 0
        let result: number = 0

        skills.forEach(skill => {
            const answer = skill.answer
            const height = skill.height
            let multipliedValues = answer * height
            
            leftValue += multipliedValues
            rightValue += height
        });
        result = leftValue / rightValue
        result = parseFloat(result.toFixed(2))
        return result
    }
}