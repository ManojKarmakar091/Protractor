
var api= require('./api');


describe('API Testing', ()=>{

it('API:GET CALL', async()=>{

const res= await api.getRequest('https://reqres.in/api/users?page=2');
console.log('data = ', await res.data); // Print all data
console.log('status:  ', await res.status); // Print ststus code
console.log('DATA[0]:  ', await res.data.data[0]); // Print first set of data
console.log('DATA[0] id:  ', await res.data.data[0].id); 
console.log('DATA[0] email:  ', await res.data.data[0].email); 
console.log('DATA[0] first_name: ', await res.data.data[0].first_name); 


const fisrtName= await res.data.data[0].first_name
await expect(fisrtName).toEqual("Michael")
await expect(res.status).toEqual(200)


})




})