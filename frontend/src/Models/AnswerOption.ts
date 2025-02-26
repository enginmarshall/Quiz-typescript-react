import { Profession } from "./Profession";

export type AnswerOption = {
    text: string;
    id: number;
    professions: Array<Profession>;
}