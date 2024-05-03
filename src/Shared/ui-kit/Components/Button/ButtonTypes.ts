interface PropsButton extends React.HTMLAttributes<HTMLButtonElement>{
    disabled?: boolean;
    size: 's' | 'l';
    template: React.ReactElement,
    squared?: boolean,
}
export default PropsButton