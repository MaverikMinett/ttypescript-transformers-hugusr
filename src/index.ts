
import "reflect-metadata";


function Put( url: string ) {
    return function Put( target: any, name: string ) {

    }
}


class FooController {

    @Put('/api/foo/:id')
    update( body: any, params: { id: string } ) {

    }
    
}

console.log(Put)