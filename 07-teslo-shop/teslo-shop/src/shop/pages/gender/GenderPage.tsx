import { CustomPagination } from '@/components/custom/CustomPagination';
import { products } from '@/mocks/products.mock';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { useParams } from 'react-router';

export const GenderPage = () => {
  const { gender = '' } = useParams();

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
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  );
};
