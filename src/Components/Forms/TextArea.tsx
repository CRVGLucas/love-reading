import './TextArea.scss';
export default function TextArea({ placeholder, text, onChange }: { placeholder: string, text: string, onChange: any}){
    return (
        <textarea rows={6} placeholder={placeholder} onChange={ onChange }>
            { text }
        </textarea>
    );
}