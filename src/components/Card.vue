<script setup>
    
    import {defineProps} from  "vue"
    import {RouterLink} from "vue-router"
     const {quizCard} = defineProps(['quizData']) // define props which i want to get  from another page
     console.log({quizCard});
    //  debugger
    </script>
<template>
    
            <RouterLink :to = "`/quizQuestion/${quizData.id}`" class="card-single">
            <img :src= "quizData.img" alt="">
                <h1>{{ quizData.name  }}</h1>
                <p>{{ quizData.questions.length }} Questions</p>
            </RouterLink>
</template>

<style scoped>
 .card-wrap{
       padding:40px 0px;
       display: flex;
       flex-wrap: wrap;
    }
    .card-single{
            background-color: white;  
            width: 30%;
            padding: 20px;
            margin: 10px;
            
    }
    img{
        max-width: 100%;
        height: auto;
    }

</style>