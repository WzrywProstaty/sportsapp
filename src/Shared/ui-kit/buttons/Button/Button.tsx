import styles from './Button.module.scss'
import PropsButton from "./ButtonTypes.ts";
import classIterator from '~Shared/ui-kit/_ComponentSharedMethods/ClassIterator/ClassIterator.ts';

const Button: React.FC<PropsButton> = ({
                                           className,
                                           size,
                                           disabled = false,
                                           template,
                                           ...rest }) => {
const classNames: string = classIterator(
    {
        c: true,
        s: styles.btn
    },
    {
        c: !!className,
        s: className || '',
    },
    {
        c: disabled,
        s: styles.btn__disabled,
    },
    {
        c: true,
        s: sizeSwitch(size)
    }
);
    return (
        <>
            <button {...rest} className={classNames}>
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