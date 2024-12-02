import type { ITechnologies } from "./ITechnologies";

export interface IProjects {
    title : string,
    description : string,
    image : string,
    technologies : ITechnologies[],
    status : "In Progress" | "Completed",
    link?: string
}   