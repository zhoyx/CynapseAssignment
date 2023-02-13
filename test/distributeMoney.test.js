const distr = require('../src/distributeMoney');

describe('distributeMoney Tests', () => { 
    test('should return an array of numbers', () => {
        const participants = 10;
        const amount = 20;
        const distribution = distr.distributeMoney(participants, amount);
        expect(Array.isArray(distribution)).toBeTruthy();
        for (let i = 0; i < participants; i++) {
            expect(typeof distribution[i]).toBe('number');
        }
    })

    test('should throw exception if input not of type number', () => {
        let participants = Array();
        let amount = 20;
        expect(() => distr.distributeMoney(participants, amount)).toThrow('All input parameters must be of type number');

        participants = 10;
        amount = "20";
        expect(() => distr.distributeMoney(participants, amount)).toThrow('All input parameters must be of type number')
    })

    test('correct number of participants in output array', () => {
        for (let i = 1; i < 20; i++) {
            let distribution = distr.distributeMoney(i, 10);
            expect(distribution.length).toEqual(i);
        }
    })

    test('should distribute correct amount with decimal money input', () => {
        let distribution = distr.distributeMoney(10, 10.23);
        let sum = distribution.reduce((partialSum, currentVal)=> partialSum + currentVal);
        expect(sum).toBeCloseTo(10.23);
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