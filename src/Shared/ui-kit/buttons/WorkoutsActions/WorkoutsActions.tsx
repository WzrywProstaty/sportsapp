import styles from './WorkoutsActions.module.scss'
import pencilSVG from "~Shared/ui-kit/icons/pencil.svg" //TODO: Remove the import and it's dependencies
import PropsWorkoutsActions from "./WorkoutsActions.ts";
const WorkoutsActions: React.FC<PropsWorkoutsActions> = ({
        className,
        isActive = false,
        text = "button",
        icon = pencilSVG, //TODO: Remove the import and it's dependencies
        ...rest
    }) => {
    return (
        <button
            {...rest}
            className={`
                ${styles.btn_container + ' '}
                ${isActive? styles.btn_container_active: '' + ' '}
                ${className? className : ''}
            `}>
            <div className={styles.icon_box}>
                <img className={styles.icon} src={icon} alt=""/>
            </div>
            <span className={styles.span}>{text}</span>
        </button>
    )
}
export {WorkoutsActions}