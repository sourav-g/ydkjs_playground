function printDetails(t,a,d){
    console.log(t,a,d);
}

export function create(t,a,d){
    var publicAPI = {
        print(){
            printDetails(t,a,d);
        }
    }
    return publicAPI;
}