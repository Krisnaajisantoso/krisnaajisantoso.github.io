function helloName(params){
    if (params == "Kris"){
        return 'Hello ${params}';
    } else {
        return 'Anda bukan Kris';
    }
}

console.log(helloName("Kris"));