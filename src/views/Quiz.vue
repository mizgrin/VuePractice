<script setup>
    import MathImage from "../assets/Images/12.jpg"
    import q from "../data/quizes.json";
    import {ref, watch} from "vue";
    import Card from "../components/Card.vue"
    const quizes = ref(q);  // wrting all quizes data from json file to quizes constant
    const search  =  ref("") // making search empty state
    watch(search, ()=> {
        
        quizes.value = q.filter(quiz=>quiz.name.toLowerCase().includes(search.value.toLowerCase())) // filter quiz item according to search
    })
</script>
<template>
    <div class="container">
        <h2>Quiz</h2>
        <form>
            <input type="text" name="" id="" v-model.trim = "search" placeholder="search.."> <!--here v-model is used to  change instant data according to input -->
        </form>
        <div class="card-wrap"  >
            <Card v-for="quiz in quizes" :key="quiz.id" :quizData = "quiz" />
       </div>
    </div>
   
</template>

<style scoped>
    h2{
        color: white;
        margin-bottom: 10px;
    }
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