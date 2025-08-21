import { KnowledgeLevel, FieldOfStudy, Tag } from "@/lib/enums/courses";
import { Organization } from "./organization";

export type LearningObjective = {
    objective: string;
};

export type PrerequisiteCourse = {
    id: number;
    title: string;
};

type CourseFieldOfStudy = {
    name: FieldOfStudy
}

type CourseKnowledgeLevel = {
    name: KnowledgeLevel
}

type CourseTag = {
    name: Tag
}

export type Course = {
    id: number;
    title: string;
    description: string;
    overview: string;
    knowledge_level: CourseKnowledgeLevel;
    fields_of_study: CourseFieldOfStudy[];
    cpe_credits: number;
    learning_objectives: LearningObjective[];
    prerequisite_courses: PrerequisiteCourse[];
    prerequisite_knowledge: string;
    advance_preparation: string;
    tags: CourseTag[];
    created_at: string;
    reviewed_at: string;
};

export type RegisteredCourse = {
    id: number;
    course: Course;
    organization: Organization;
    expires: string;
    amount_completed: number;
}

export type CourseRatingCategory = {
    id: number;
    title: string;
    prompt: string;
    date_created: string;
}

export type CourseRatingEntry = {
    category_id: number;
    score: number;
}

export type CourseRatingSubmission = {
    entries: CourseRatingEntry[];
    comments: string;
}

export type CompletedCourse = {
    course: Course;
    completed_date: string;
}