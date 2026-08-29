export function SimulationForm() {
    return (
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Educador financeiro 
            </p>
            <h1 className="mb-8 text-4xl font-bold">Formulário de Simulação</h1>
            <form className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-sm">
                <label className="grid gap-2 font-semibold" htmlFor="income">
                    Renda mensal
                    <input className="rounded-md border border-border bg-input px-4 py-3 font-normal outline-none focus:border-primary" id="income" name="income" placeholder="R$ 0,00" type="number" />
                </label>
                <label className="grid gap-2 font-semibold" htmlFor="expenses">
                    Gastos mensais
                    <input className="rounded-md border border-border bg-input px-4 py-3 font-normal outline-none focus:border-primary" id="expenses" name="expenses" placeholder="R$ 0,00" type="number" />
                </label>
                <label className="grid gap-2 font-semibold" htmlFor="goal">
                    Objetivo financeiro
                    <input className="rounded-md border border-border bg-input px-4 py-3 font-normal outline-none focus:border-primary" id="goal" name="goal" placeholder="Ex.: montar uma reserva de emergência" type="text" />
                </label>
                <button className="rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90" type="submit">
                    Simular planejamento
                </button>
            </form>
        </main>
    )
}