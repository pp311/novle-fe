<template>
    <swiper :spaceBetween="30" :centeredSlides="true" :loop="true" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    }" :pagination="{
        clickable: true,
    }" :navigation="true" :modules="modules"
        class="md:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] rounded-xl border-2 border-primary">
        <swiper-slide>
            <img src="https://w0.peakpx.com/wallpaper/352/699/HD-wallpaper-anime-touhou-cirno-touhou.jpg"
                class="w-full" />
        </swiper-slide>
        <swiper-slide>
            <img src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/07/touhou-arcadia-record-thumbnail.jpg"
                class="w-full" />
        </swiper-slide>
        <swiper-slide>
            <img src="https://img.gta5-mods.com/q75/images/touhou-loading-screens/563cb2-9a2bcf719ef17f4a480151f3d5896d38.png"
                class="w-full" />
        </swiper-slide>
        <swiper-slide>
            <img src="https://images5.alphacoders.com/590/590950.jpg" class="w-full" /></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
