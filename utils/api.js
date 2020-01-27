var axios= require("axios");

var apiHelper= function(){

this.getRequest= async function(getAPIUrl){

try{

    const headers= {

        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const response = await axios({

method: 'get',
url: getAPIUrl,
headers:headers,

 });
 return await response;

}catch(error){

console.log('Failed to execute GET REQ'+ url & ' Found Error as ',  error )

}



}


}

module.exports= new apiHelper();