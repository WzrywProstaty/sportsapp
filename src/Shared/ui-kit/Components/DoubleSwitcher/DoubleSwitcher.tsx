import styles from './DoubleSwitcher.module.scss'
import PropsDoubleSwitch from './DoubleSwitcherTypes.ts';
import {Button} from '~Shared/ui-kit';
import classIterator from '~Shared/ui-kit/_ComponentSharedMethods/ClassIterator/ClassIterator.ts';

const DoubleSwitcher: React.FC<PropsDoubleSwitch> = ({
    btn01IsActive = false,
    btn02IsActive = false,
    className,
    ...rest
}) => {

    const containerClasses = classIterator(
        className ? className : '',
        styles.ds_container
    );
    const btn01Classes = classIterator(
        styles.ds_button__override,
        !btn01IsActive ? styles.ds_button__override__inactive : '',
    );
    const btn02Classes = classIterator(
        styles.ds_button__override,
        !btn02IsActive ? styles.ds_button__override__inactive : '',
    );

    return(
        <div {...rest} className={containerClasses}>
            <Button className={btn01Classes} squared size='l' template={
                <span>Switch</span>
            }>
            </Button>
            <div className={styles.ds_arrows}>
                <div>&#8596;</div>
            </div>
            
            <Button className={btn02Classes} squared size='l' template={
                <span>between</span>
            }>
            </Button>
        </div>
    );
}

export default DoubleSwitcher