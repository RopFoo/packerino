import { ButtonProps } from './types/ButtonProps';

const FAPButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    const handleClick = () => {
        onClick && onClick();
        window.scrollTo({ top: 0 });
    };
    return (
        <button
            onClick={handleClick}
            className='
            bg-meadow
            hover:bg-meadowsun
            text-night 
            shadow-xl
            shadow-slate-900
            font-bold
            text-md 
            rounded-full 
            flex
            justify-center
            items-center
            px-5 py-3 
            fixed 
            bottom-5 md:bottom-10
            right-5 md:right-16 lg:right-40 xl:right-60
            hover:transition-all
        '>
            <p>{label}</p>
        </button>
    );
};

export default FAPButton;
