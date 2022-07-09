import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <Swiper
      // install Swiper modules
      modules={[A11y]}
      spaceBetween={50}
      slidesPerView={3}
      grabCursor={true}
      a11y={{
        enabled: true,
        /**
         * Remove dynamic id while running tests in order to pass snapshot tests.
         */
        id: process.env.NODE_ENV === "test" ? "swiper-wrapper-id" : undefined,
      }}
    >
      <SwiperSlide>
        <div className={styles.card}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.card}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.card}>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.card}>Slide 4</div>
      </SwiperSlide>
      ...
    </Swiper>
  );
}
