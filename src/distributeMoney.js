/**
 * Randomly allocates money to a set number of participants.
 * @param {number} participantCount - The number of participants to distribute money to.
 * @param {number} amt - The amount of money in dollars to distribute.
 * @param {number} granularity - Level of granularity in distribution.
 * @throws {TypeError} If any input parameters are not of type number.
 * @throws {RangeError} If any input parameters are less than or equals to zero.
 * @returns {Array} An array containing the distributed amount to each participant.
 */
function distributeMoney(participantCount, amt, granularity = 100) {
    if (typeof participantCount !== 'number' || typeof amt !== 'number' || typeof granularity !== 'number') {
        throw new TypeError('All input parameters must be of type number');
    }
    if (participantCount <= 0 || amt <= 0 || granularity <= 0) {
        throw new RangeError('Input parameters must be greater than zero');
    }

    let dist = Array(participantCount).fill(1);
    amt *= granularity;
    amt -= participantCount;
    for (let i = 0; i < amt; i++) {
        let index = Math.floor(Math.random()*participantCount);
        dist[index]++;
    }
    dist = dist.map(x => x/granularity);
    return dist;
}

module.exports = { distributeMoney };