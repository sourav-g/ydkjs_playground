import {create as createPub} from './publication';


function printDetails(pub,url){
    pub.print();
    console.log(url);
}

function create(t,a,d,url){
    var pub = createPub(t,a,d);
    var publicAPI = {
        print(){
            printDetails(pub,url);
        }
    }
    return publicAPI;
}