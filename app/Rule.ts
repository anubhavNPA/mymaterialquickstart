export class Rule {
    constructor ( 
        public DPDvalue: string,
        public DefaultAmount: string,
        public IsSecured: boolean,
        public Gender: string,
        public LoanType: string,
        public LoanSettlementLimit: string
        ) {
    }
}