import { Newsletter } from '../snippets/newsletter';
import { ProductBanners } from '../snippets/product-banners';
import { ProductSlider } from '../snippets/product-slider';
import { ProductsTeaserList } from '../snippets/products-teaser-list';

export const HomePage = () => {
  return (
    <>
      <ProductSlider></ProductSlider>
      <ProductBanners></ProductBanners>
      <ProductsTeaserList headline="Popular products" dataTestId="popular-products"></ProductsTeaserList>
      <ProductsTeaserList headline="Latest products" dataTestId="latest-products"></ProductsTeaserList>
      <Newsletter></Newsletter>
    </>
  );
};
