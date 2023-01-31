function receivesAFunction(fxn){
    fxn();
}

function returnsANamedFunction(){
    return fxn = x => console.log('x');
}

function returnsAnAnonymousFunction(){
    return x => console.log('x');
}