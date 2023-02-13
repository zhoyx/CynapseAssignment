/**
 * Randomly allocates money to a set number of participants.
 * @param {number} n - The number of participants to distribute money to.
 * @param {number} amt - The amount of money in dollars to distribute.
 * @param {number} granularity - Level of granularity in distribution.
 * @returns {Array} An array containing the distributed amount to each participant.
 */
function distributeMoney(n, amt, granularity = 100) {
    if (typeof n !== 'number' || typeof amt !== 'number' || typeof granularity !== 'number') {
        throw new TypeError('All input parameters must be of type number');
    }
    let dist = Array(n).fill(1);
    amt *= granularity;
    amt -= n;
    for (let i = 0; i < amt; i++) {
        let index = Math.floor(Math.random()*n);
        dist[index]++;
    }
    dist = dist.map(x => x/granularity);
    return dist;
}

module.exports = { distributeMoney };