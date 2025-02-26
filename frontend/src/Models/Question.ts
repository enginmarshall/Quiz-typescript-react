import { AnswerOption } from "./AnswerOption";

export type Question = {
    questionText: string;
    id: number;
    answerOptions: Array<AnswerOption>;
}