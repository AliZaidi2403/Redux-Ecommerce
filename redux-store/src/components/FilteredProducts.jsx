import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
function FilteredProducts() {
  const { type } = useParams();
  const products = useSelector((state) => state.products.filteredProducts);
  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div></div>
          </div>
        </div>
        <div className="mx-5">
          <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <ProductCard
                    id={product.id}
                    price={product.price}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    color={product.color}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilteredProducts;
