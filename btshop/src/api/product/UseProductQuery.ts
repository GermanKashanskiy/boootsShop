import { useQuery } from 'react-query';
import { UseProductData } from '../../api/product/UseProductData';
import { IProduct } from './IProduct';

export const UseProductQuery = (article: string | undefined) => {
  return useQuery<IProduct | undefined>(
    ['product', article],
    () => {
      if (!article) return undefined;
      return UseProductData.getProductWithArticle(article);
    },
    {
      enabled: !!article,
    }
  );
};
