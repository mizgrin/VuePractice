<script setup>
    import q from "../data/quizes.json";

    import {ref, watch} from "vue";
    </script>
<template>
     <div class="card-wrap">
            <div class="card-single" v-for="quiz in quizes" >
                <img :src= "quiz.img" alt="">
                <h1>{{ quiz.name  }}</h1>
                <p>13 question</p>
            </div>

        </div>
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