import './Select.scss'
export default function Select({ children, placeholder, onChange }: { children: any, placeholder: string, onChange: any}) {
    return (
        <select placeholder="Categoria" onChange={ onChange }>
            { children }
        </select>
    );
}