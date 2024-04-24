import styles from './WorkoutsActions.module.scss'
import pencilSVG from "~Shared/ui-kit/icons/pencil.svg" //TODO: Remove the import and it's dependencies
import PropsWorkoutsActions from "./WorkoutsActions.ts";
import classIterator from '~Shared/ui-kit/_ComponentSharedMethods/ClassIterator/ClassIterator.ts';

const WorkoutsActions: React.FC<PropsWorkoutsActions> = ({
        className,
        isActive = false,
        text = "button",
        icon = pencilSVG, //TODO: Remove the import and it's dependencies
        ...rest
    }) => {

    const classNames = classIterator(
        styles.btn_container,
        isActive ? styles.btn_container_active : '',
        className? className: ''
    )
    return (
        <button {...rest} className={classNames}>
            <div className={styles.icon_box}>
                <img className={styles.icon} src={icon} alt=""/>
            </div>
            <span className={styles.span}>{text}</span>
        </button>
    )
}
export {WorkoutsActions}