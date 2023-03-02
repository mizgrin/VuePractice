
<template>
    <div class="container">
        <Header headingText="Task " subheading="Tracker"/>
    <div class="button-holder">
        <Button buttontext="Add Task"/>
        <Button buttontext="Update Task"/>
        <Button buttontext="Delete Task"/>
    </div>
    </div>
   
</template>

<script lang="ts" setup>
    import Header from '@/components/Header.vue';
    import Button from '@/components/Button.vue';
</script>