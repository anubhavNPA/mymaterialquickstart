import { Due } from './due';

export class Loan extends Due {
    private dateOfIssue: Date;
    private city: string;

    constructor(p: number, i: number, d: number, city: string) {
        super(p, i, d);
        this.dateOfIssue = new Date(2011, 11, 23);
        this.city = city;
    }
}