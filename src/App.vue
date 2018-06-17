<template>
    <div id="app">
        <routes></routes>
    	<router-view></router-view>
    </div>
</template>

<script>
    import routes from './components/routes'
    export default {
        name:'App',
        data(){
        	return {

        	}
        },
        components:{
            routes,
        }
    }
 
</script>
<style>
    
</style>