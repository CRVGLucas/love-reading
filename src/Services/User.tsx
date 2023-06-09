import { api } from "./api"

const User = {

    create: function( form: User ) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( form )
        }

        try{
            fetch(api + 'users', options)
        } catch (error: any) {
            alert("Erro ao realizar o cadastro")
        }

    },

    edit: function( form: User ) {
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( form )
        }
        
        try {
            fetch(api + 'users', options)
        } catch ( error: any ) {
            alert("Erro ao editar o usuário")
        }

    },

    get: function() {

    }

}