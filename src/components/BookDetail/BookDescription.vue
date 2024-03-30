<template>
    <div>
        <p className="text-justify font-roboto indent-5 whitespace-pre-line">{{ props?.description &&
            props.description.replace(/\n/g, '\n') }}</p>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    description: string
}>()

</script>
