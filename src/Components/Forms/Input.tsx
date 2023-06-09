import './Input.scss'
export default function Input({ name , placeholder, type,  onChange }: { name: string, placeholder: string, type: string, onChange:any}) {
    return (
        <input 
            className="input"
            type={ type }
            id={ name }
            onChange={ onChange }
        />
    )
}