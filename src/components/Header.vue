<script lang="ts" setup>
    defineProps<{
        headingText:string,
        subheading:string,
    }>()
</script>
<template>
    <div class="container">
        <header>
            <h1>
                {{ headingText }}
                <span>{{ subheading }}</span>
            </h1>
        </header>
    </div>
   
</template>