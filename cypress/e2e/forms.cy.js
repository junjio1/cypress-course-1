describe('forms tests', () =>{
  beforeEach(()=> {
    cy.visit('/forms')
  })
  it('Test subscribe form', () =>{
    cy.contains(/testing forms/i)
    cy.getDataTest('subscribe-form').find("input").as('subscribe-input')
    cy.get('@subscribe-input').type('hha@hotmail.com')
    cy.contains(/Successfully subbed: hha@hotmail.com!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Successfully subbed: hha@hotmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: hha@hotmail.com!/i).should('not.exist')

    cy.get('@subscribe-input').type('hha@hotmail.io')
    cy.contains(/Invalid email: hha@hotmail.io!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/Invalid email: hha@hotmail.io!/i).should('exist')
    cy.wait(3000)

    cy.contains(/fail!/i).should('not.exist')
    cy.getDataTest('subscribe-button').click()
    cy.contains(/fail!/i).should('exist')
    cy.wait(3000)
    // 1:24 video
  })
})