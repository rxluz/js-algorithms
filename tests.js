const car = [
    {
        name: 'Palio',
        company: 'Fiat'
    },
    {
        name: 'Celta',
        company: 'GM'
    },
    {
        name: 'GOl',
        company: 'Volks'
    },
    {
        name: 'Uno',
        company: 'Fiat'
    },
    {
        name: 'Sandero',
        company: 'GM'
    },
]


console.log(car.some(({ company }) => company === "GM"))