import { useParams } from 'react-router';

import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { useProducts } from '@/shop/hooks/useProducts';

export const GenderPage = () => {
  const { gender = '' } = useParams();
  const { data } = useProducts();

  const genderLabel: Record<string, string> = {
    men: 'Hombres',
    women: 'Mujeres',
    kid: 'Niños',
  };

  return (
    <>
      <CustomJumbotron
        title={`Productos para ${genderLabel[gender] || 'Todos'}`}
      />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
