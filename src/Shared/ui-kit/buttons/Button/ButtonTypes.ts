interface PropsButton extends React.HTMLAttributes<HTMLButtonElement>{
    disabled?: boolean;
    size: 's' | 'l';
    template: React.ReactElement
}
export default PropsButton