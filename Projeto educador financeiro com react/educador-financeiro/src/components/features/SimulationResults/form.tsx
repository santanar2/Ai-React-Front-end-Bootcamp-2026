import { PiggyBank } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { type SimulationFormData, simulationFormSteps } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'

import { FormStep } from './FormStep'
import { StepProgress } from './Progress'

export function SimulationForm() {
  const navigate = useNavigate()
  const { saveFormData } = useSimulationStorage()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<Partial<SimulationFormData>>({})
  const currentStep = simulationFormSteps[currentStepIndex]

  const handleNextStep = (value: string) => {
    const updatedFormData = {
      ...formData,
      [currentStep.id]: value,
    } as Partial<SimulationFormData>
    setFormData(updatedFormData)
    if (currentStepIndex === simulationFormSteps.length - 1) {
      saveFormData(updatedFormData as SimulationFormData)
      void navigate('/resultado')
      return
    }
    setCurrentStepIndex((index) => index + 1)
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-4 py-10 sm:px-6">
      <StepProgress
        currentStep={currentStepIndex + 1}
        totalSteps={simulationFormSteps.length}
      />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={() => setCurrentStepIndex((index) => Math.max(0, index - 1))}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
      />
      <div className="text-muted-foreground mt-6 flex items-center justify-center gap-2 text-sm">
        <PiggyBank size={16} /> Seus dados ficam salvos neste dispositivo.
      </div>
    </main>
  )
}
