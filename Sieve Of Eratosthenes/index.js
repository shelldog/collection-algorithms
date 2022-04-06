console.time('start');
var Eratosthenes = require('./sieveOfEratosthenes');

const era = new Eratosthenes(1000, 10000);
era.check_prime();
era.splice_composite();
era.print_prime();
console.timeEnd('start')
