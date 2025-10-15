import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router';

export type ProductTileProps = {
  id: number;
  fullWidth?: boolean;
  img: string;
  imgAlt: string;
  name: string;
  category?: string;
  price: string;
  priceOld?: string;
  dataTestId?: string;
};

export const ProductTile: FC<PropsWithChildren<ProductTileProps>> = ({
  id = 0,
  fullWidth = false,
  img,
  imgAlt,
  name = 'Product Name',
  category,
  price,
  priceOld,
  dataTestId = 'product-tile',
}) => {
  return (
    <div className={fullWidth ? 'w-full sm:w-1/2 lg:w-1/4 px-4 mb-8' : ''} data-testid={dataTestId}>
      <div className="bg-white p-3 rounded-lg shadow-lg">
        <img src={img} alt={imgAlt} className="w-full object-cover mb-4 rounded-lg" />
        <Link to={`/product/${id}`} className="text-lg font-semibold mb-2">
          {name}
        </Link>
        <p className="my-2">{category}</p>
        <div className="flex items-center mb-4">
          <span className={priceOld ? 'text-lg font-bold text-primary' : 'text-lg font-bold text-gray-900'}>
            {price}
          </span>
          {priceOld && <span className="text-sm line-through ml-2">{priceOld}</span>}
        </div>
        <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
