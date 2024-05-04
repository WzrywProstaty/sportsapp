export default interface PropsContainerDropdown extends React.HTMLAttributes<HTMLDivElement>{
    isDropdown?: boolean | undefined;
    isCollapsed?: boolean | undefined;
    headTitle?: string | undefined;
    contentTemplate: React.ReactElement;
    cellularTemplate?: React.ReactElement | undefined;
    edited?: boolean | undefined;
    removed?: boolean | undefined;
    readonly?: boolean | undefined;
}