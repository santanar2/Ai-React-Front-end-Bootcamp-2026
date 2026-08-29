import type { SimulationFormData, SimulationRecord } from "@/data/simulation"

const LOCAL_STORAGE_KEY = 'simulation-data'

export const useSimulationStorege = () => {
    const saveFormData = (formData: SimulationFormData) => {
        const id = crypto.randomUUID()
        const record: SimulationRecord = { ...formData, id }

        const storage = localStorage.getItem(LOCAL_STORAGE_KEY)
        const savedData = storage
        ? (JSON.parse(storage) as SimulationRecord[])
        :[]

        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...savedData, record]),
        )
    }
    return {saveFormData}
}