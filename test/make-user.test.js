// IMPORT MODULES under test here:
import { makeUser } from '../common/utils.js';

const test = QUnit.test;

test('test makerUser function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'Jaime');
    formData.set('type', 'dogwalker');

    const expected = {
        name: 'Jaime',
        type: 'dogwalker',
        energy: 50,
        money: 50,
        completed: {},
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(user, expected);
});
