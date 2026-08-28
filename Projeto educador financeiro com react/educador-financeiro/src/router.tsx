import { createBrowserRouter } from "react-router-dom";

import { SimulationForm } from './pages/SimulationForm'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <SimulationForm />,
    },
    {
        path: '/resultado',
        element: <h1>Resultado da Simulação</h1>,
    },
    {
        path: '/historico',
        element: <h1>Histórico de Simulações</h1>,
    },
])