export interface SimulationFormData {
    income: string
    expenses: string
    debts: string
    goalAmount: string
    goalDeadline: string
    goalName: string
}

export type SimulationRecord = SimulationFormData & { id: string }
