import { useQuery } from "react-query"
import { IBrand } from "./IBrand"
import { UseBrandData } from "./UseBrandData";

export const UseBrandWithArticleQuery = (brandArticle: string | undefined) => {
  return useQuery<IBrand | undefined>(
    ['brand', brandArticle],
    () => {
      if (!brandArticle) return undefined;
      return UseBrandData.getBrandWithArticle(brandArticle);
    },
    {
      enabled: !!brandArticle,
    }
  )
}