import ProductList from "@/components/shared/product/product-list";
import {getLatestProducts} from "@/lib/actions/product.action";

const Home = async () => {

    const latestProducts = await getLatestProducts();

    return (
    <>
      <ProductList
          data={latestProducts}
          title="Newest arrivals"
          limit={12}
      />
    </>
  );
}

export default Home;