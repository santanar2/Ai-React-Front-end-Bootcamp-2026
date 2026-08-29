import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from './components/shared/layout/RootLayout'
import { SimulationForm } from './pages/SimulationForm'
import { SimulationResults } from './pages/SimulationResults'

export const router = createBrowserRouter([
   {
    element: <RootLayout />,
       children:[
        {
            path: '/',
            element: <SimulationForm />,
        },
        {
            path: '/resultado',
            element: <SimulationResults />,
        },
        {
            path: '/historico',
            element: <h1>Histórico de Simulações</h1>,
        },
    ] 
    } 
    
])