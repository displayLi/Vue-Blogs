<template>
    <div id="routes">
        <nav>
            <ul>
                <li v-for="key in navList"><router-link exact :to='key.path'>{{key.name}}</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name:'routes',
        data(){
            return {
                navList:[
                    {name:'我的博客',path:'/'},
                    {name:'写博客',path:'/addBlog'},
                ],
            }
        },
    }
 
</script>

<style scoped>
    #routes nav{
        width: 100%;
        box-sizing: border-box;
        background-color: crimson;
    }
    ul {
        list-style: none;
        margin: auto;
        text-align: center;
    }
    li{
        display: inline-block;
        line-height: 60px;
    }
    a{
        text-decoration: none;
        color:#fff;
        padding: 10px 10px;
        margin: 0 20px;
    }
    .router-link-active {
        background-color: #fff;
        color:#333;
        border-radius:5px;
    }
    
</style>
