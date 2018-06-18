<template>
    <div id="show_blog">
        <h2>{{title}}</h2>
        <input type="text" v-model='search' placeholder="搜索博文">
     	<div class="show_box" v-for='key in searched'>
            <h3><router-link v-changColor v-bind:to="'blog/' + key.id ">{{key.blog_title}}</router-link></h3>
            <p>{{key.content | length}}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'show-blog',
        data(){
            return {
                blogsData:[],
                title:'博客总览',
                search:'',
            }
        },
        created(){
            axios.get('/blogs.json')
            .then( reult => {
                return reult.data;
            })
            .then(data => {
                console.log(data);
                var dataArray = [];
                for( let key in data ){
                    data[key].id = key;
                    dataArray.push(data[key]);
                }
                this.blogsData = dataArray;
            })
        },
        computed:{
          searched(){
            return this.blogsData.filter(data =>{
                return data.blog_title.match(this.search);
            })
          }
        },
    }
 
</script>

<style scoped>
    #show_blog h2{
        max-width: 500px;
        margin: 50px auto 0;
        padding-left: 20px;
    }
    .show_box{
        max-width:500px;
        padding: 20px;
        margin: 20px auto;
        box-sizing: border-box;
        background-color: #eee;
    }
    .show_box h3{
        padding: 0  0 20px 0;
        cursor: pointer;
    }
    .show_box h3 a{
        text-decoration: none;
        color:#000;
    } 
    #show_blog input{
        display: block;
        padding: 6px; 
        max-width:500px;
        width: 100%;
        box-sizing: border-box;
        margin: 30px auto;
    }
</style>
