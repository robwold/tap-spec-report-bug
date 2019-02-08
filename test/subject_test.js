const test = require('tape');
const td = require('testdouble');

let subject, unusedDependency, usedDependency;

function setup(){
    unusedDependency = td.replace('../src/dependency');
    usedDependency = td.replace('../src/dependency_two');
    subject = require('../src/subject');
}

function teardown(assert){
    td.reset();
    assert.end();
}

test('this will pass', assert => {
    assert.doesNotThrow(function(){});
    assert.end();
});

test('this will fail - just tape', assert => {
    assert.doesNotThrow(()=> {throw new Error('Foo')});
    assert.end();
});

test('passing td demo', assert=> {
    setup();
    subject();
    assert.doesNotThrow(function(){td.verify(usedDependency())});
    teardown(assert);
});

test('This will fail horribly', assert => {
    setup();
    subject();
    assert.doesNotThrow(function(){td.verify(unusedDependency())});
    teardown(assert);
});

