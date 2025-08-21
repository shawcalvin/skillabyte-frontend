import { Organization } from "./organization";

export type User = {
    first_name: string;
    last_name: string;
    email: string;
    uuid: string;
    date_joined: string;
};

export type Learner = {
    id: number;
    user: User;
}

export type OrganizationLearnerProfile = {
    id: number;
    organizaton: Organization;
    date_added: string;
    learner: Learner;
}