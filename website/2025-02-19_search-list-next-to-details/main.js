//=========================================================================
// Fake Server Side Code
//=========================================================================

import {advisorDetails, advisorResult, initial} from './templates.js';
import { createServer, onPost } from './server_infrastructure.js';

const advisors = [
    {nr: '123456', name: 'Advisor 1'},
    {nr: '876543', name: 'Advisor 2'},
]
const advisorsWithDetails = [
    {billingDate: 'June 2023', nr: '123456', name: 'neuhaus partner ag', brokerageFees: 'PDF', accountStatement: 'PDF'},
    {billingDate: 'November 2023', nr: '123456', name: 'neuhaus partner ag', brokerageFees: 'PDF', accountStatement: 'PDF'},
    {billingDate: 'June 2023', nr: '876543', name: 'Tousure Versicherungsbroker AG', brokerageFees: 'PDF', accountStatement: 'PDF'},
    {billingDate: 'November 2023', nr: '876543', name: 'Tousure Versicherungsbroker AG', brokerageFees: 'PDF', accountStatement: 'PDF'},
]

window.server = createServer();

onPost("/start", function(request, params){
    return initial();
});
onPost("/searchadvisor", function(request, params){
    const searchvalue = params['searchvalue'];
    const result = advisors.filter(it => it.name.includes(searchvalue) || it.nr.includes(searchvalue));
    return advisorResult('searchstring', result);
});
onPost("/advisordetails", function(request, params){
    const advisorid = params['advisorid'];
    console.log(advisorid);
    const resultData = advisorsWithDetails.filter(it => it.nr === advisorid);
    let result = advisorDetails(advisorid, resultData);
    return result;
});
onPost("/searchform", function(request, params){
    let result = searchForm();
    return result;
});
