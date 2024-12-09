import React from 'react';
import Image from 'next/image';
import pinkhero from "../../../public/images/Rectangle.png"
import addcart from '../../../public/images/Auto Layout Horizontal (1).png'
import Footer from '../components/Footer';
const ProductDetail: React.FC = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full [653px] lg:h-auto h-[653px] top-[110px] left-[-22px] object-cover object-center rounded"
            src={pinkhero}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-[#111111] text-3xl title-font font-extrabold mb-1 p-4 ">Nike Air Force 1 <br />
            PLT.AF.ORM</h1>
        
            <p className="leading-relaxed p-2 font-light">
            Turn style on its head with this crafted take on the  <br />
            Air Jordan 1 Mid. Its "inside out"-inspired <br />
            construction, including unique layering and <br />
             exposed foam accents, ups the ante on this <br /> timeless Jordan Brand silhouette. Details like the <br />
             deco stitching on the Swoosh add coveted <br />
             appeal, while the unexpected shading, rich <br />
              mixture of materials and aged midsole aesthetic <br />
               give this release an artisan finish.
               <br />
            </p>
            <p className='font-extrabold p-4 pt-32 gap-4 bottom-24 right-[65.44px] ' >₹ 8 695.00</p>
             <Image 
             alt='addcartpic'
             src={addcart}
             />
            </div>
            </div>
            <Footer/>
            </div>
            </section>
  );
};

export default ProductDetail;
