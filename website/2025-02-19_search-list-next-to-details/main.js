//=========================================================================
// Fake Server Side Code
//=========================================================================

import {advisorResult} from './templates.js';
import { createServer, onGet, onPost } from './server_infrastructure.js';

// data
var contact = {
    "firstName" : "Joe",
    "lastName" : "Blow",
    "email" : "joe@blow.com"
};
const advisors = [
    {nr: '123456', name: 'Advisor 1'},
    {nr: '876543', name: 'Advisor 2'},
]

window.server = createServer();

// routes
/*
init("/contact/1", function(request){
    return displayTemplate(contact);
});

onGet("/contact/1/edit", function(request){
    return formTemplate(contact);
});

onPut("/contact/1", function (req, params) {
    contact.firstName = params['firstName'];
    contact.lastName = params['lastName'];
    contact.email = params['email'];
    return displayTemplate(contact);
});

*/
onPost("/searchadvisor", function(request, params){
    const searchvalue = params['searchvalue'];
    console.log(searchvalue);
    const result = advisors.filter(it => it.name.includes(searchvalue) || it.nr.includes(searchvalue));
    return advisorResult('searchstring', result);
});
