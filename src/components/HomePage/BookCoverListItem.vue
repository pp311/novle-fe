<template>
    <RouterLink :to="'/books/' + props.id">
        <div
            class="card indicator relative group cursor-pointer w-auto h-full bg-base-100 z-10 hover:z-30 hover:scale-105 transition-all shadow-xl dark:shadow-none image-full [&.card]:before:opacity-0 rounded-xl">
            <div class="indicator bg-primary"></div>
            <figure>
                <img :src="props.coverUrl" class="" />
            </figure>
            <div class="card-body bg-gray-800 bg-opacity-70 py-2 px-2 rounded-b-xl bottom-0 mt-auto">
                <h2 class="card-title line-clamp-2 text-sm text-center">{{ props.title }}</h2>
            </div>
            <!-- Hover content -->
            <div
                class="absolute invisible lg:group-hover:visible opacity-0 group-hover:opacity-90 duration-300 transition-all pointer-events-none h-fit w-52 z-40 px-4 py-2 bg-base-200 left-[70%] top-[50%] -translate-y-1/2 rounded-xl">
                <div class="w-3 h-3 -mt-2 rotate-45 bg-base-200 absolute top-[20%] left-0 -translate-x-1/2"></div>
                <h2 class='font-bold text-md line-clamp-3 text-primary'>{{ props.title }}</h2>
                <!-- {/* <div class="rating rating-sm flex items-center space-x-2"> */} -->
                <!-- {/*   <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" /> */} -->
                <!-- {/*   <span>3.82</span> */} -->
                <!-- {/* </div> */} -->
                <p class='line-clamp-6'><b>Mô tả: </b>{{ props.description }}</p>
                <!-- <p class=''><b>Thể loại: </b>{{ genreList.join(", ") }}</p> -->
            </div>
        </div>
    </RouterLink>
</template>

<script setup lang="ts">
import type { Book } from '../../common/types/Book'

const props = defineProps<Book>()

const indicator = '<div class="indicator bg-primary" > </div>'

</script>
