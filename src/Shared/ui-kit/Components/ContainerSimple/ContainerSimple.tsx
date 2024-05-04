import classNames from "classnames";
import styles from './ContainerSimple.module.scss'
import PropsContainerSimple from "./ContainerSimpleTypes.ts";
const ContainerSimple: React.FC<PropsContainerSimple> = ({
     className,
     template,
     ...rest
                                                         }) => {
    const divClasses = classNames(
        styles.container_simple,
        className
    )

    return (
        <div {...rest} className={divClasses}>
            {template}
        </div>
    );
}
export default ContainerSimple