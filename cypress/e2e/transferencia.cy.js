describe('Transfencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        // Act
        cy.realizarTransferencia('Priscila', 'Julio', '11')

        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia('Priscila', 'Julio', '6000')
        
        // Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})