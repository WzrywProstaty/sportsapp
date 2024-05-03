interface PropsWorkoutsActions extends React.HTMLAttributes<HTMLButtonElement>{
    isActive?: boolean;
    text: string;
    icon?: string; //path to the image; TODO: make the key required
}
export default PropsWorkoutsActions