"use client"
import { ProductType } from '../../../type'
import Container from '../Container';
import ProductCard from './ProductCard';

interface Props{
    products:{
        products: ProductType[];
    }
}

const Products = ({products}:Props) => {
    const product = products?.products;

  return (
    <Container className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {product?.slice(0, 8)?.map((item: ProductType) => (
        <ProductCard key={item?.id} products={item} />
      ))}
    </Container>
  )
}

export default Products