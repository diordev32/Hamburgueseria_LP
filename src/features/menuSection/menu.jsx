import ProductCard  from "./productCard.jsx";
import ProductListContext from "./productList.jsx";
import {useContext} from "react";
import hamNegra from './hamb-negra.png';
import hamVacia from './hamb-vacia.png';

function Menu()
{
    const {burgerList, garnishList, dipList} = useContext(ProductListContext);

    return (
        <div id="Menu" className="">
            <h1
            className="py-15 font-Title font-bold text-4xl text-center text-red">
                Nuestros Productos
            </h1>

            <h2
            className="py-13 font-Title text-mustard text-center text-3xl font-semibold">
                Hamburguesas
            </h2>

            <div className={'flex flex-wrap justify-center gap-6'}>

                {burgerList.map((burger, index) => (
                    <ProductCard key={index} name={burger.name} description={burger.description} price={burger.price} altCaption={burger.name} bgimage={hamNegra}/>
                ))}
            </div>

            <h2
            className="py-13 font-Title text-mustard text-center text-3xl font-semibold">
                Guarnición
            </h2>

            <div className="flex flex-wrap justify-center gap-6">

                {garnishList.map((garnish, index) => (
                    <ProductCard key={index} name={garnish.name} description={garnish.description} price={garnish.price} altCaption={garnish.name}/>
                    ))}
                </div>

            <h2
            className="py-13 font-Title text-mustard text-center text-3xl font-semibold">
                Salsas de autor
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
                {dipList.map((dip, index) => (
                    <ProductCard key={index} name={dip.name} description={dip.description} price={dip.price} altCaption={dipList.name}/>
                ))}
            </div>

        </div>
    );
}
export default Menu;