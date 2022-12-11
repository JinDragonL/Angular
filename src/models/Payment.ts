export interface Payment {
    key: string;

    getPaymentByMethod(method: string): void;
}