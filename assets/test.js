QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 == "1", "1=1 success!");
});

QUnit.test('Testing batsmanaverage function with four sets of inputs', function (assert) {
    assert.strictEqual(averagebatsman( 10000, 100, 10), "111.11", 'All positive numbers');
    assert.throws(averagebatsman(-1000,-100,-10), 'All Negative numbers');
    assert.throws(averagebatsman(0,100,20), 'Innings cannot be equal to zero');
    assert.throws(averagebatsman(10,-100,0), 'Positive and negative numbers');
});