const Read = {
    
    create: function( form: any) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify( form )
        }
        
    },

    list: function( ){

    },

    get: function( title: any ) {

    }
}