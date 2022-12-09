function getRandom(min, max) {
    console.log('random');
    return (Math.random() * (max - min) + min).toFixed(2);
}

module.exports = { getRandom }