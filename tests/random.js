var random = require('../').Random
var test = require('tape')


test('Random | Invalid parameters arrayGeneratorInt', function (t) {
    t.deepEqual(random.arrayGeneratorInt(10,9,19),false);
    t.deepEqual(random.arrayGeneratorInt(-10,-11,19),false);

    t.end()
});
