// import wombatReducer from './reducers/wombatReducer'
const wombatReducer =  require('./reducers/wombatReducer').default

test('ADD_WOMBAT', () => {
  // Arrange
  let wombatName = 'Ross'
  let action = {
    type: 'ADD_WOMBAT',
    wombat: wombatName
  }

  // Act
  let actual = wombatReducer({wombats: []}, action)

  // Assert
  expect(actual.wombats).toContain(wombatName)
})
