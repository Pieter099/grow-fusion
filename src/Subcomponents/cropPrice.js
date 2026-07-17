import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCropPrices } from "../Redux/CropPriceSlice";


const CropPrice = () => {
    const dispatch = useDispatch();
    const { prices, status, error } = useSelector((state) => state.cropPrices);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchCropPrices());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <p>Loading crop prices...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

  return (
    <>    
    <section className="crop-price-section">
        <pre>
            {JSON.stringify(prices, null, 2)}
        </pre>
    </section>
    </>
  )
};

export default CropPrice;