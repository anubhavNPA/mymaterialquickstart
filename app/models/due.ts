export class Due {
    private principal: number;
    private interest: number;
    private daysSinceDue: number;

    constructor(p: number, i: number, days: number) {
        this.principal = p;
        this.interest = i;
        this.daysSinceDue = days;
    }

    getPrincipal(): number {
        return this.principal;
    }

    setPrincipal(p: number): void {
        this.principal = p;
    }

    getInterest(): number {
        return this.interest;
    }

    setInterest(i: number): void {
        this.interest = i;
    }

    getDaysSinceDue(): number {
        return this.daysSinceDue;
    }

    setDaysSinceDue(d: number): void {
        this.daysSinceDue = d;
    }
}