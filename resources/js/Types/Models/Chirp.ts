import type User from "./User";

export default interface Chirp {
	id: number;
	user: User;
	message: string;
	created_at: string;
	updated_at: string;
}
