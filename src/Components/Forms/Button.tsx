import './Button.scss';
export default function Button ({ text, type, disabled,  buttonClass }: { text: string, type?: string, disabled?: boolean, buttonClass?: string }) {

    return (
        <button disabled={ disabled ? true : false } className={ type === 'search' ? 'search ' + buttonClass : buttonClass}>
            { text }
        </button>
    );


}