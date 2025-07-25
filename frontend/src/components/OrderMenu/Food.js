import React, { useEffect, useState } from "react";
import DailyMenuItemRequest from "services/Requests/DailyMenuItem";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Food() {
  const [categoryOneItems, setCategoryOneItems] = useState([]);

  useEffect(() => {
    const getAllDailyMenuItems = async () => {
      try {
        const dailyMenuItems = await DailyMenuItemRequest.getAllDailyMenuItem();
        setCategoryOneItems(dailyMenuItems?.data || []);
      } catch (error) {
        console.error("Error fetching daily menu items:", error);
      }
    };

    getAllDailyMenuItems();
  }, []);

  const foodItems = categoryOneItems.filter(item => item.category_id === 1);

  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >

        {foodItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white my-5 justify-between rounded-lg items-center shadow-md overflow-hidden h-[30rem] flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  className="h-44 w-44 object-cover rounded-lg my-2"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="px-6 py-4 flex-grow w-full">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 h-4 text-base">{item.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 w-full">
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    LKR {item.price}
                  </span>
                  <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    ⭐ {item.rating || 4.5}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Food;
