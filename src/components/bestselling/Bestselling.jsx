import React from 'react';
import Card from '../card/Card';

const Latest = () => {
  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="text-3xl font-bold text-black text-center mb-8">Best Selling</div>
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cards */}
          <Card
            imageUrl="https://evostore.com.np/image/cache/catalog/4-OUTLET%20SURGE%20PROT%201.5M%20CORD%20GREY/4-OUTLET%20SURGE%20PROT%201.5M%20CORD%20GREY%201-200x200.jpg"
            title="Belkin 4-Outlet Surge Protector 1.5M Cord"
            description="Belkin | Belkin 4-Outlet Surge Protector 1.5M Cord"
            price="NPR 2,500"
          />
          <Card
            imageUrl="https://evostore.com.np/image/cache/catalog/USB-C%20TO%20HDMI%202.1%20CABLE%20(2M)/USB-C%20TO%20HDMI%202.1%20CABLE%20(2M)%201-200x200.jpg"
            title="Belkin USB-C TO HDMI 2.1 CABLE (2M)"
            description="Belkin | Belkin USB-C TO HDMI 2.1 CABLE (2M)"
            price="NPR 7,500"
          />
          <Card
            imageUrl="https://evostore.com.np/image/cache/catalog/belkin/BRAIDED%20USB-C%20TO%20LIGHTNING%20CABLE%201M%20WHT%201-200x200.jpg"
            title="Belkin BRAIDED USB-C TO LIGHTNING CABLE 1M WHT"
            description="Belkin | Belkin BRAIDED USB-C TO LIGHTNING CABLE 1M WHT"
            price="NPR 3,000"
          />
          <Card
            imageUrl="https://evostore.com.np/image/cache/catalog/belkin/Belkin%20USB-C%20TO%20HDMI%202.1%20ADAPTER%201-200x200.jpg"
            title="Belkin USB-C TO HDMI 2.1 ADAPTER"
            description="Belkin | Belkin USB-C TO HDMI 2.1 ADAPTER"
            price="NPR 6,900"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-150">
          View More
        </button>
      </div>
    </div>
  );
};

export default Latest;
