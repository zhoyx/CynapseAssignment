const distr = require('../src/distributeMoney');

describe('distributeMoney Tests', () => { 
    test('correct number of participants in output array', () => {
        for (let i = 1; i < 20; i++) {
            let distribution = distr.distributeMoney(i, 10);
            expect(distribution.length).toEqual(i);
        }
    })

    test('each participant receive at least 1 cent', () => {
        for (let i = 0; i < 100; i++) {
            let distribution = distr.distributeMoney(10, 1);
            for (let j = 0; j < 10; j++) {
                expect(distribution[j]).toBeGreaterThanOrEqual(0.01);
            }
        }
    })

    test('sum of distribution equals to input amount', () => {
        for (let amount = 1; amount <= 100; amount += 10) {
            for (let participants = 1; participants <= 10; participants++) {
                let distribution = distr.distributeMoney(participants, amount);
                let sum = distribution.reduce((partialSum, currentVal) => partialSum + currentVal, 0);
                expect(sum).toBeCloseTo(amount);
            }
        }
    })
})