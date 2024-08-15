import { cn } from '@/lib/utils';
import React from 'react';
import { ProductImage } from './product-image';
import { Title } from './Title';
import { Button } from '../ui';

interface Props {
    imageUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({

    imageUrl,
    name,
    ingredients,
    items,
    onClickAdd,
    className,

}) => {

    const textDetails = '30 см, традиционное тесто 30'
    const totalPrise = 350

    return (
        <div className={cn(className, 'flex flex-1')}>
           <div className="flex items-center justify-center flex-1 relative w-full">

        <img src={imageUrl} alt={name}
        className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
        />

           </div>


            <div className="w-[490px]  bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="mb-1 font-extrabold" />

                <p className="text-gray-400 mt-2">{textDetails}</p>

                <Button className='h-[55px] px-10 mt-4 text-base rounded-[18px] w-full' >
                    Добавить в карзину за {totalPrise} ₽
                </Button>
            </div>

        </div>
    );
};