import React, { useState, useEffect } from "react";
import "../../Css/Slider.css";

const AccessoriesSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const category = "Accessories";
      try {
        const allProducts = [];
        let page = 1;
        const limit = 9;
        let totalPages = 1;

        while (page <= totalPages) {
          const response = await fetch(
            `https://reliance-clone-3.onrender.com/product/view-pro?filterBy=category&filterValue=${category}&page=${page}&limit=${limit}`
          );
          const data = await response.json();
          allProducts.push(...data.products);
          totalPages = data.totalPages;
          page++;
        }

        setProducts(allProducts);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? 0 : newIndex;
    });
  };
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= products.length ? prevIndex : prevIndex + 3
    );
  };

  return (
    <div className="sliderContainer">
      {error && <p className="error">{error}</p>}
      <button className="sliderBtn Prev" onClick={handlePrev}>
        &#60;
      </button>

      <div className="sliderWrapper">
        <div
          className="Slider"
          style={{
            transform: `translateX(-${currentIndex * 33.33}%)`,
            display: "flex",
          }}
        >
          {products.map((product) => (
            
            <div className="sliderItem" key={product._id}>
                <a href={`#/Accessories/${product._id}`}  >
                <div>
                  <div>
                                            {product.image.length > 0 && (
                                                <img
                                                    src={product.image[0]}
                                                    alt={product.name}
                                                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                                                />
                                            )}
                                        </div>

              <div className="product-name">{product.name}</div>
              <div className="product-price">
                ₹{new Intl.NumberFormat("en-IN").format(product.price)}
              </div>
            </div>
            </a>

            </div>
            
          ))}
        </div>
      </div>

      <button className="sliderBtn Next" onClick={handleNext}>
        &#62;
      </button>
    </div>
  );
};

export default AccessoriesSlider;
