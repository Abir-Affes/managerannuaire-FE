import { Specialities } from "../specialities/specialities";

export interface Users {
    id: number;
    email: string;
    username: string;
    password:string;
    speciality: Specialities;
}
