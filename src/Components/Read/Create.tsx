import * as React from 'react'; 
import Categories from '../../Services/Categories';
import { Observable } from 'rxjs';
import './Create.scss';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import TextArea from '../Forms/TextArea';
import Select from '../Forms/Select';

class FormReader {
    title: string;
    description: string;
    category: string;
    image: Object;

    constructor(){
        this.title = '';
        this.description = ""
        this.category = ""
        this.image = {}
    }

}

export default function CreateRead () {
    const [ form, setForm ] =  React.useState({title: '',description: '',category: '',image: ''})
    const [ categories, setCategories ] = React.useState([])


    async function loadCategories(){
        setCategories( await Categories.getCategories() )
    }

    function handleBlur({ target  }: { target: any}) {
        //console.log("nome: ", target.name)
    }
    

    function formValidator( formControl: string, value: string = ''): boolean {
        if( value ) {
            return true
        }
        return false
    }

    function createReading( event: any ) {
        event.preventDefault()
        console.log("target: ", form)
    }

    React.useEffect( () => {
        loadCategories()
    }, [])


    return (
        <form className="form-wrapper" onSubmit={createReading}>
            <Input type="text" placeholder="Título" name="title" onChange={ 
                ( { target } : { target: any } ) => { setForm({...form, title: target.value }) }
            }/>

            <TextArea placeholder="Resumo do conteúdo" text={ form['description'] } onChange={ 
                ( { target } : { target: any  } ) => setForm({ ...form, description: target.value }) }
            />
            
            <Select placeholder="Categoria" onChange={ ( { target }: { target: any} ) => setForm({ ...form, category: target.value }) }>
                {
                    categories.map(
                        (category: { id: number, title: string }) => {
                            return (
                                <option key={ category.id } value={ category.title }> {category.title }</option>
                            )
                        }
                    )
                }
            </Select>
            <input type="file" onChange={ ( { target } ) => console.log(target.value)}/>
            <Button disabled={false} buttonClass="success large" text="CADASTRAR" />
        </form>
    )
}