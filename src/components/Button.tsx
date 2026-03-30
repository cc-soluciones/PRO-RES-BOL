interface Props {
    children: React.ReactNode;
    onClick?: () => void;
};

export const Button = ({ 
    children,
    onClick
}: Props) => {
    return (
        <button className="bg-tertiary p-3 rounded-full cursor-pointer" onClick={onClick}>
            {children}
        </button>
    )
}