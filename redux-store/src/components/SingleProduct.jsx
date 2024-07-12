import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../features/productsSlice";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState();
  console.log(product);
  useEffect(() => {
    dispatch(singleProduct(id));
  }, [id, dispatch]);

  return (
    <div>
      {product.map((item, index) => {
        return (
          <div key={index} className="flex justify-center items-center py-8">
            <div className="pl-44 grow-[2]">
              <img
                className="h-[500px] rounded-lg"
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className="grow-[3]">
              <div className="max-w-lg">
                <h5 className="text-2xl font-inter font-bold">{item.name}</h5>
                <p className="text-orange-700 text-xl font-inter pb-4 font-bold">
                  15% OFF
                </p>
                <p className="text-2xl text-gray-600 font-inter font-bold pb-4 ">
                  {item.text}
                </p>
                <div className="pb-4">
                  {item.size ? (
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.size.map((item, index) => {
                          return (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((color, index) => {
                        return (
                          <option key={index} value={color}>
                            {color}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SingleProduct;
/*<
     
     */
