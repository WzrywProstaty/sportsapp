import styles from './ContainerDropdown.module.scss'
import PropsContainerDropdown from "~Shared/ui-kit/Components/ContainerNamed/ContainerDropdownTypes.ts";
import classNames from "classnames";
const ContainerDropdown: React.FC<PropsContainerDropdown> = ({
    edited = false,
    removed = false,
    isDropdown = true,
    headTitle= 'Container name',
    contentTemplate,
    cellularTemplate,
    isCollapsed = false,
    ...rest
                        }) => {

    const headClasses = classNames(
        styles.cb_head,
        {[styles.cb_head__collapsed] : isCollapsed},
        {[styles.cb_head__opened] : !isCollapsed},
        {[styles.cb_head__black] : !isCollapsed},
    );
    const contentWrapperClasses = classNames(
        styles.cb_content_wrapper,
        {[styles.cb_content_wrapper__collapsed] : isCollapsed}
    );
    const contentClasses = classNames(
        styles.cb_content__shadow,
        styles.cb_content
    );
    const headTextareaClasses = classNames(
        styles.cb_head_textarea,
        {[styles.cb_head_textarea__readonly] : removed || isDropdown},
        {[styles.cb_head_textarea__edited] : edited},
        {[styles.cb_head_textarea__removed] : removed},
    );
    const cellularClasses = classNames(
        styles.cb_cellular,
    );

    return(
        <div {...rest} className={styles.cb__dropdown}>
            <div className={headClasses}>
                <textarea value={headTitle} rows={1} readOnly={!edited || removed} className={headTextareaClasses}></textarea>
            </div>

            <div className={contentWrapperClasses}>
                <div>
                    <div className={contentClasses}>{contentTemplate}</div>
                    {cellularTemplate &&
                        <div className={cellularClasses}>{cellularTemplate}</div>
                    }
                </div>

            </div>


        </div>
    );
}

export default ContainerDropdown