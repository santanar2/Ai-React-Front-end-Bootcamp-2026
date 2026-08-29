export function formatCurrencyMask(value: string): string {
    const digits = value.replace(/\D/g, '')
    const number = Number(digits) / 100

    if(isNaN(number)) {
        return ''
    }

    return number.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}

export function parseCurrency(value: string): number {
    const normalized = value
        .replace(/R\$/g, '')
        .replace(/\./g, '')
        .replace(',', '.')
        .trim()

    return Number.parseFloat(normalized) || 0
}
