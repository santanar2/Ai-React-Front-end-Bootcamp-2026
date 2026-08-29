import { CalendarClock, Goal, PiggyBank } from 'lucide-react'

import { Card } from '@/components/features/SimulationResults/Card'
import { PageHero } from '@/components/shared/PageHero'
import type { SimulationFormData } from '@/data/simulation'
import { calcMonthlySavings } from '@/utils/simulation'

const mock: SimulationFormData = {
    income: 'R$ 5.000,00',
    expenses: 'R$ 2.000,00',
    debts: 'R$ 500,00',
    goalAmount: 'R$ 15.000,00',
    goalDeadline: '12',
    goalName: 'Reserva de emergência',
}

export function SimulationResults() {
    const data: SimulationFormData = mock
    const monthlySavings = calcMonthlySavings(data)
    
    return(
             <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
                <PageHero
                    title="Resultado da sua simulação"
                    subtitle="Com base no seu perfil financeiro e objetivos."
                />

                <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <Card
                       icon={Goal}
                       label="Custo da Meta"
                       value={data.goalAmount}
                       subtitle={data.goalName} 
                    />

                    <Card 
                        icon={CalendarClock}
                        label="prazo"
                           value={`${data.goalDeadline} meses`}
                        subtitle={'Prazo para atingir a meta'}
                    />

                    <Card
                        variant="primary"
                        icon={PiggyBank}
                        label="Economia mensal"
                        value={`R$ ${monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        subtitle={'Economia mensal necessária'}
                    />
                </div>

                
            </main> 
    )
}