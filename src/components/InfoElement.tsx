import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

interface InfoElementProps {
    icon: JSX.Element;
    label: string;
    value: string | boolean;
}

const InfoElement: React.FC<InfoElementProps> = ({ icon, label, value }) => {
    const getValue = () => {
        if (typeof value === 'string') return value;

        return value ? (
            <IoMdCheckmark size={20} className='text-meadow' />
        ) : (
            <IoMdClose size={20} className='text-fox' />
        );
    };

    return (
        <div
            className='
            flex
            flex-col
            items-center
            justify-between
            bg-stone
            w-24 
            rounded-full
            py-3
            mr-5       
        '>
            <div
                className=' 
                flex
                flex-col
                items-center
                mb-5
            '>
                {icon}
                <p className='text-xs mt-2'>{label}</p>
            </div>
            <div
                className='
                rounded-full
                bg-stonewet
                text-snow
                w-20
                h-20
                flex
                items-center
                justify-center
                font-extrabold
                text-xs
                whitespace-pre-wrap
            '>
                <p>{getValue()}</p>
            </div>
        </div>
    );
};

export default InfoElement;
