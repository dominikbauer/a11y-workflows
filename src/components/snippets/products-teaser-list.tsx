import { FC, PropsWithChildren } from 'react';
import { ProductTile } from './product-tile';

export type ProductsTeaserListProps = {
  headline?: string;
  dataTestId?: string;
};

export const ProductsTeaserList: FC<PropsWithChildren<ProductsTeaserListProps>> = ({
  headline = 'Latest products',
  dataTestId = null,
}) => {
  return (
    <section className="py-10" data-testid={dataTestId}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">{headline}</h2>
        <div className="flex flex-wrap -mx-4">
          <ProductTile
            id={5}
            fullWidth={true}
            name="Blue women's suit"
            img="assets/images/products/5.jpg"
            imgAlt="Alt text"
            category="Women"
            price="$19.99"
            priceOld="$24.99"
          ></ProductTile>
          <ProductTile
            id={6}
            fullWidth={true}
            name="White shirt with long sleeves"
            img="assets/images/products/6.jpg"
            imgAlt="Alt text"
            category="Women"
            price="$29.99"
          ></ProductTile>
          <ProductTile
            id={7}
            fullWidth={true}
            name="Yellow men's suit"
            img="assets/images/products/7.jpg"
            imgAlt="Alt text"
            category="Men"
            price="$15.99"
            priceOld="$19.99"
          ></ProductTile>
          <ProductTile
            id={8}
            fullWidth={true}
            name="Red dress"
            img="assets/images/products/8.jpg"
            imgAlt="Alt text"
            category="Women"
            price="$39.99"
            priceOld="$49.99"
          ></ProductTile>
        </div>
      </div>
    </section>
  );
};
