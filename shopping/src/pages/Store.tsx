import StoreItem from '../components/StoreItem';
import storeItems from '../data/data.json';

const Store = () => {
  return (
    <div className='bg-[#f8f9fa] h-full'>
      <div className='container mx-auto'>
        <h1 className='text-3xl py-3'>Store</h1>
        <div className="grid gap-5 first-line:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5">
          {storeItems.map(item => (
            <StoreItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Store;
