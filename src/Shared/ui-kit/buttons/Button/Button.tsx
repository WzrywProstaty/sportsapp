import styles from './Button.module.scss'
import PropsButton from "./ButtonTypes.ts";

const Button: React.FC<PropsButton> = ({
                                           className,
                                           size,
                                           disabled = false,
                                           template,
                                           ...rest }) => {
    return (
        <>
            <button {...rest} className={`
            ${styles.btn + ' '}
            ${className ? className : '' + ' '}
            ${disabled ? styles.btn__disabled : '' + ' '}
            ${sizeSwitch(size)}
            `}>
                {template}
            </button>
        </>
    );
}

function sizeSwitch (size: string): string{
    switch (size){
        case 's':
            return styles.btn_s;
        case 'l':
            return styles.btn_l;
        default:
            return styles.btn_s;
    }
}

export {Button as Button}