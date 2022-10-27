describe('Pet API test', () => {
    const pet = {
        "id": 100,
        "name": "cat",
        "category": {
            "id": 1,
            "name": "animal"
        },
        "tags": [
            {
                "id": 0,
                "name": "string"
            },
            {
                "id": 1000,
                "name": "hello"
            }
        ],
        "status": "available"
    }


    it('Creat pet API test', () => {
        cy.request('POST', 'https://petstore3.swagger.io/api/v3/pet', pet)
            .then((data) => {
                // cy.log('dataInfo' + JSON.stringify(data, undefined, 2));
                const response = data.allRequestResponses[0]['Response Body']
                expect(response.id).to.eq(pet.id)
                expect(response.name).to.eq(pet.name)
                expect(response.category.id).to.eq(pet.category.id)
                expect(response.category.name).to.eq(pet.category.name)
                expect(response.status).to.eq(pet.status)


                for (let i = 0; i < pet.tags.length; i++) {
                    cy.log(pet.tags)
                    expect(data.allRequestResponses[0]['Response Body'].tags[i].id).to.eq(pet.tags[i].id)
                    expect(data.allRequestResponses[0]['Response Body'].tags[i].name).to.eq(pet.tags[i].name)
                }
            })

    });

    it('get pet by id', () => {
            cy.request('GET', 'https://petstore3.swagger.io/api/v3/pet/100')
                .then((data) => {
                    let responseBody = JSON.parse(data.allRequestResponses[0]['Response Body'])
                    expect(responseBody.id).to.eq(pet.id)
                    expect(responseBody.name).to.eq(pet.name)
                    expect(responseBody.category.id).to.eq(pet.category.id)
                    expect(responseBody.category.name).to.eq(pet.category.name)
                    for (let i = 0; i < pet.tags.length; i++) {
                        expect(responseBody.tags[i].id).to.eq(pet.tags[i].id)
                        expect(responseBody.tags[i].name).to.eq(pet.tags[i].name)
                    }

                })


        }
    );
})