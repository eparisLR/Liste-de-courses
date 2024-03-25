import React from 'react'
import RecipeView from './RecipeView'

describe('<RecipeView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<RecipeView />)
  })
})