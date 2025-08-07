import heroImgHamburguesa from './heroHamburguesa.png';
import heroBgImage from './heroBackground.png';
import heroBGSM from './heroBackgroundSM.jpg';
import { useState } from 'react';

function HeroSection()
{
    const [clicked, setClicked] = useState(false);

const handleClick = () =>
    {
        setClicked(true);

        setTimeout(() => {
            setClicked(false);
        }, 1500);
    };
return (

            <div className="relative w-full h-screen flex flex-col landscape:flex-row items-center justify-center overflow-hidden landscape:items-center place-content-center">

                <img
                className="absolute inset-0 w-full h-full object-cover z-0  p-0 lg:hidden"
                src={heroBGSM}
                alt="Fondo de la sección hero"
                />

                <img
                src={heroBgImage}
                alt="Fondo de la sección hero"
                className="absolute inset-0 w-full h-full object-cover z-0 hidden lg:block"
                />

                <div className="absolute inset-0 bg-black opacity-90 lg:opacity-50 z-10"/>

                <div className='flex flex-col item-center justify-center w-full h-full z-20 text-white  landscape:w-1/2 landscape:h-full landscape:pb-10 landscape:pl-5 lg:w-1/2 lg:h-full p-4'>
                    <div className=' relative  text-red text-center pb-5 z-20 landscape:pb-0 landscape:items-center landscape:justify-center'>
                        <h1 className='font-Title font-bold text-6xl lg:text-8xl text-shadow-sm text-shadow-mustard lg:text-shadow-sm'> Tu próxima hamburguesa favorita</h1>
                    </div>
                    <div className='flex items-center justify-center z-20 landscape:hidden'>
                        <img src={heroImgHamburguesa} alt="Hamburguesa deliciosa"/>
                    </div>

                    <div className="relative flex flex-col gap-4 z-20 items-center ">
                        <h2 className="text-white font-Text italic text-center text-2xl md:text-3xl">100% Carne, 100% para vos</h2>

                        <a href="#Menu"
                        onClick={handleClick}
                        className={`w-fit font-Text font-bold px-6 py-2 rounded-lg  text-2xl lg:text-4xl shadow text-white  lg:hover:text-5xl transition duration-500 ${clicked ? 'translate-y-px scale-95 bg-red-800 shadow-3xl transition  ease-in-out' : `bg-red-600`}`}>
                        Hace tu pedido ya!
                        </a>

                    </div>
                </div>

                <div className='flex items-center justify-start p-2 z-20 portrait:hidden landscape:pb-10 landscape:pr-5 lg:w-1/2 lg:h-full'>
                    <img src={heroImgHamburguesa} alt="Hamburguesa deliciosa"/>
                </div>
            </div>
)}

export default HeroSection;