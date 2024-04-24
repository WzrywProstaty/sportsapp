import styles from './WorkoutsActions.module.scss'
import pencilSVG from "~Shared/ui-kit/icons/pencil.svg"
import PropsEditActionWorkouts from "./WorkoutsActions.ts";
const WorkoutsActions: React.FC<PropsEditActionWorkouts> = ({
        className,
        isActive = false,
        text = "button",
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
                <img className={styles.icon} src={pencilSVG} alt=""/>
            </div>
            <span className={styles.span}>{text}</span>
        </button>
    )
}
export {WorkoutsActions}