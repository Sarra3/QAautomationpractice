const pet ={
    "id": 101,
    "name": "ella",
    "category": {
        "id": 1,
        "name": "cat"
    },
    "tags": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "status": "available"
}

const petOrder = {
    "id": 10,
    "petId": 101,
    "quantity": 7,
    "shipDate": "2022-10-27T17:40:37.068+00:00",
    "status": "approved",
    "complete": true
}




describe('pet Order test', () =>
        {

            it('pet created ',  () =>{
                cy.request('POST' , 'https://petstore3.swagger.io/api/v3/pet', pet)
                    .then((data) =>{
                        JSON.stringify(data.status, undefined, 2)
                        expect(data.status).to.eq(200)
                    })

            });

            it('place an pet order', () => {
                cy.request('POST', 'https://petstore3.swagger.io/api/v3/store/order', petOrder)
                    .then((data) => {
                        JSON.stringify(data.status, undefined, 2)
                        expect(data.status).to.eq(200)
                        expect(data.allRequestResponses[0]['Response Body'].id).to.eq(petOrder.id)
                        expect(data.allRequestResponses[0]['Response Body'].petId).to.eq(petOrder.petId)
                        expect(data.allRequestResponses[0]['Response Body'].quantity).to.eq(petOrder.quantity)
                        expect(data.allRequestResponses[0]['Response Body'].shipDate).to.eq(petOrder.shipDate)
                        expect(data.allRequestResponses[0]['Response Body'].status).to.eq(petOrder.status)
                        expect(data.allRequestResponses[0]['Response Body'].complete).to.eq(petOrder.complete)

                    })

            });
        }
    )

describe('get an order', () =>{
    it('get an order by id ',  () => {
                cy.request('GET', 'https://petstore3.swagger.io/api/v3/store/order/10')
                    .then((data) => {
                        let orderPetID = JSON.parse(data.allRequestResponses[0]['Response Body'])
                        expect(orderPetID.id).to.eq(petOrder.id)
                        expect(orderPetID.petId).to.eq(petOrder.petId)
                        expect(orderPetID.quantity).to.eq(petOrder.quantity)
                        expect(orderPetID.shipDate).to.eq(petOrder.shipDate)
                        expect(orderPetID.status).to.eq(petOrder.status)
                        expect(orderPetID.complete).to.eq(petOrder.complete)
                    })
            });
})

describe('delete an order pet', () => {
    it('delete an ordered pet ',  () => {
                cy.request('DELETE', 'https://petstore3.swagger.io/api/v3/store/order/10', petOrder)
                    .then((data) => {
                        expect(data.allRequestResponses[0]['Response Status']).to.eq(200)
                        expect(data.allRequestResponses[0]['Response Body']).to.eq(null)
                        })
                    });

})




