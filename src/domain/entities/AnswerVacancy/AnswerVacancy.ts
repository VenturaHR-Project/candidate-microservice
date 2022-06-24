import mongoose, { Document, Schema } from "mongoose"

type Answers = {
    description: string
    answer: number
    height: number
}

interface IAnswerVancancy extends Document {
    userUid: string
    vacancyId: string
    userName: string
    userPhone: string
    answers: Answers[]
    score: number
    createdDate: string
}

const schema = new Schema<IAnswerVancancy>({
    userUid: {
        type: String,
        require: true,
        trim: true,
    },
    vacancyId: {
        type: String,
        require: true,
        trim: true,
    },
    userName: {
        type: String,
        require: true,
        trim: true,
    },
    userPhone: {
        type: String,
        require: true,
        trim: true,
    },
    answers: [{
        description: {
            type: String,
            require: true,
            trim: true
        },
        answer: {
            type: Number,
            require: true,
            min: 1,
            max: 5
        },
        height: {
            type: Number,
            require: true,
            min: 1,
            max: 5
        },
    }],
    score: {
        type: Number,
        require: true
    },
    createdAt: {
        type: String,
        require: true,
        trim: true
    },
})

const AnswerVacancy = mongoose.model("Answer", schema)

export { AnswerVacancy, Answers }
