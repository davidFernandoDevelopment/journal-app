import { User } from '../store';


export interface Error {
    code: number;
    message: string;
}
export interface Response {
    ok: boolean;
    result: User | Error;
}
