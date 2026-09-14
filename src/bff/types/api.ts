import { ROLES } from "../constants";

export interface DbProduct {
    id: string;
    image_url: string;
    name: string;
    description: string;
    price: number;
    count: number;
    category_id: number;
}

export interface DbUser {
    id: string;
    login: string;
    password: string;
    registered_at: string;
    role_id: typeof ROLES[keyof typeof ROLES];
}
