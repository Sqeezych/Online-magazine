import { ROLES } from "../constants";

export interface Product {
	id: string;
	imageUrl: string;
	name: string;
	description: string;
	price: number;
	count: number;
	categoryId: number;
}

export interface Category {
	id: number;
	name: string;
}

export interface User {
	id: string;
	login: string;
	password: string;
	registeredAt: string;
	roleId: typeof ROLES[keyof typeof ROLES];
}

export interface UserSession {
	id: string;
	login: string;
	roleId: typeof ROLES[keyof typeof ROLES];
	registeredAt: string,
	session: string;
}
