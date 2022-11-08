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
    "petId": pet.id,
    "quantity": 7,
    "shipDate": "2022-10-27T17:40:37.068+00:00",
    "status": "approved",
    "complete": true
}

const users =[
    {
    "id": 10,
    "username": "theUser",
    "firstName": "John",
    "lastName": "James",
    "email": "john@email.com",
    "password": "12345",
    "phone": "12345",
    "userStatus": 1
    },
    {
        "id": 100,
        "username": "theUser1",
        "firstName": "Jona",
        "lastName": "James",
        "email": "jona@email.com",
        "password": "1234512",
        "phone": "1234545",
        "userStatus": 4
    }
]



describe('pet Order test', () =>
        {

            it('pet created ',  () =>{
                cy.request('POST' , 'https://petstore3.swagger.io/api/v3/pet', pet)
                    .then((data) =>{
                        // JSON.stringify(data.status, undefined, 2)
                        // expect(data.status).to.eq(200)
                        const petInfo = data.allRequestResponses[0]['Response Body']
                        expect(petInfo.id).to.eq(pet.id)
                        expect(petInfo.name).to.eq(pet.name)
                        expect(petInfo.category.id).to.eq(pet.category.id)
                        expect(petInfo.category.name).to.eq(pet.category.name)
                        expect(petInfo.tags[0].id).to.eq(pet.tags[0].id)
                        expect(petInfo.tags[0].name).to.eq(pet.tags[0].name)
                        expect(petInfo.status).to.eq(pet.status)
                    })

            });

            it('place an pet order', () => {
                cy.request('POST', 'https://petstore3.swagger.io/api/v3/store/order', petOrder)
                    .then((data) => {
                        //JSON.stringify(data.status, undefined, 2)
                        expect(data.allRequestResponses[0]['Response Status']).to.eq(200)
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
                cy.request('GET', 'https://petstore3.swagger.io/api/v3/store/order/'+petOrder.id)
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

describe('Create an user', () => {
    it('Create an user', () => {
        cy.request('POST', 'https://petstore3.swagger.io/api/v3/user/createWithList', users)
            .then((data) =>{
                expect(data.allRequestResponses[0]['Response Status']).to.eq(200)
                for (let i = 0; i < users.length; i++) {
                    expect(data.allRequestResponses[0]['Response Body'][i].id).to.eq(users[i].id)
                    expect(data.allRequestResponses[0]['Response Body'][i].username).to.eq(users[i].username)
                    expect(data.allRequestResponses[0]['Response Body'][i].firstName).to.eq(users[i].firstName)
                    expect(data.allRequestResponses[0]['Response Body'][i].lastName).to.eq(users[i].lastName)
                    expect(data.allRequestResponses[0]['Response Body'][i].email).to.eq(users[i].email)
                    expect(data.allRequestResponses[0]['Response Body'][i].password).to.eq(users[i].password)
                    expect(data.allRequestResponses[0]['Response Body'][i].phone).to.eq(users[i].phone)
                    expect(data.allRequestResponses[0]['Response Body'][i].userStatus).to.eq(users[i].userStatus)
                }
            })
    });
})


describe('Login with first user', () => {
    it('Login with first user',  () => {
        cy.request('GET', 'https://petstore3.swagger.io/api/v3/user/login', users[0])
            .then((data) =>{
                expect(data.allRequestResponses[0]['Response Status']).to.eq(200)
                expect(data.allRequestResponses[0]['Response Body']).to.contains('Logged in user session:')
            })

    });
    it('Login with second user',  () => {
        cy.request('GET', 'https://petstore3.swagger.io/api/v3/user/login', users[1])
            .then((data) =>{
                expect(data.allRequestResponses[0]['Response Status']).to.eq(200)
                expect(data.allRequestResponses[0]['Response Body']).to.contains('Logged in user session:')
            })

    });
})
