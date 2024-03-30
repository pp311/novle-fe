<template>
    <div>
        <h2 className="font-bold text-lg lg:text-xl xl:text-2xl text-primary">{{ props.title }}</h2>
        <div className="divider my-0"></div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    title: String
}>()

</script>
