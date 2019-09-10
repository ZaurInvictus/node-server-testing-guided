const request = require('supertest')
const db = require('../data/dbConfig.js');
const server = require('./server.js')

describe('server', () => {
// guarantees the table is cleaned out before any tests run
  beforeEach(async () => {
    await db('hobbits').truncate() 
 })

  // cross-env DB_ENV = testing
  it('tests are running with DB_ENV set as "testing"', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

   // TESTING GET TO '/'
   describe('GET /', () => {
     it('returns 200 ok', () => {
       // make a GET request to / on our server
        return request(server)
        .get('/')
        .then(res => {
          // check that the status code is 200
          expect(res.status).toBe(200)
        })
      })
   

    // it.skip - to skip the test
    // it.only - only run this test
   it('returns JSON', () => {
    return request(server)
    .get('/')
    .then(res => {
      // check that the type of code is JSON
      // expect(res.type).toBe('application/json')
       expect(res.type).toMatch(/json/)
    })
  })
})

 describe('GET /hobbits', () => {
   it('should return an array', () => {
    return request(server)
    .get('/hobbits')
    .then(res => {
      // expect(typeof res).toBe('object')
       expect(Array.isArray(res.body)).toBe(true)
    })
   })
  })


   describe('POST /hobbits', () => {
     it('should insert a hobbit into the db', async () => {
       // insert one
       //return request(server)
       await request(server)
       .post('/hobbits')
       .send({
         name: 'Zaur'
       })
       // check if there is one hobbit in the table
       const hobbits = await db('hobbits')
       expect(hobbits).toHaveLength(1)
       //.then(res => {
       //expect(res.body.length).toBe(1)
       //})
     })

     it('should insert more than one hobbit', async () => {
         await request(server)
         .post('/hobbits')
         .send([
           {
             name: 'sam'
           },
           {
             name: 'rose'
           }
          ])
          // check there is one hobbit in the table
         const hobbits = await db('hobbits')
         expect(hobbits).toHaveLength(2)
     })
   })

 })

