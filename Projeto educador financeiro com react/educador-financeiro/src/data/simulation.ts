import {
  CalendarClock,
  CreditCard,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react'

import type { FormStepProps } from '../components/features/SimulationResults/FormStep'

export const simulationFormSteps = [
  {
    id: 'income',
    icon: PiggyBank,
    title: 'Renda mensal',
    question: 'Quanto é depositado na sua conta todo mês?',
    inputProps: { placeholder: '5.000,00', prefix: 'R$', maxLength: 12 },
  },
  {
    id: 'expenses',
    icon: CreditCard,
    title: 'Custos fixos de vida',
    question: 'Quanto você gasta com despesas fixas por mês?',
    inputProps: { placeholder: '2.000,00', prefix: 'R$', maxLength: 12 },
  },
  {
    id: 'debts',
    icon: Landmark,
    title: 'Dívidas e parcelas',
    question: 'Quanto você paga mensalmente em parcelas ou empréstimos?',
    inputProps: { placeholder: '500,00', prefix: 'R$', maxLength: 12 },
  },
  {
    id: 'goalName',
    icon: Goal,
    title: 'Nome da meta',
    question: 'Qual objetivo financeiro você deseja alcançar?',
    inputProps: { placeholder: 'Viagem para o Japão', maxLength: 50 },
  },
  {
    id: 'goalAmount',
    icon: Wallet,
    title: 'Custo da meta',
    question: 'Quanto custa realizar esse objetivo?',
    inputProps: { placeholder: '15.000,00', prefix: 'R$', maxLength: 12 },
  },
  {
    id: 'goalDeadline',
    icon: CalendarClock,
    title: 'Prazo da meta',
    question: 'Em quantos meses você deseja alcançar essa meta?',
    inputProps: {
      placeholder: '12',
      suffix: 'meses',
      min: '1',
      max: '120',
      type: 'number',
    },
    submitButtonProps: { label: 'Gerar simulação', emojiIcon: '🎯' },
  },
] satisfies FormStepProps[]

export type SimulationFormData = Record<
  (typeof simulationFormSteps)[number]['id'],
  string
>
export type SimulationRecord = SimulationFormData & { id: string }
