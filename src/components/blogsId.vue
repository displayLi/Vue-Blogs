<template>
    <div id="blogsid">
      <h1>{{blogs.blog_title}}</h1>
      <p class="author">作者：{{blogs.author}}</p>
      <p class="classed" v-for='key in blogs.classed'>分类: {{key}}</p>
      <p class="content">{{blogs.content}}</p>
      <div class="btn">
            <button class="btn-clid-gg"  @click="deleteBlog">{{deletes}}</button>
            <router-link class="btn-clid-gg" :to="'/edit/' + id ">{{bianji}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'blogsId',
  data() {
    return {
      id: this.$route.params.id,
      blogs: {},
      deletes: '删除博客',
      bianji:'编辑博客',
    }
  },
  created() {
    this.$http.get('https://vue-blogs-d3171.firebaseio.com/blogs/' + this.id + '.json')
      .then(data => {
        return data.json();
        // console.log(data.json());
      })
      .then(result => {
        this.blogs = result;
      })
  },
  methods:{
    deleteBlog(){
        this.$http.delete('https://vue-blogs-d3171.firebaseio.com/blogs/' + this.id + '.json')
            .then(result => {
                this.$router.push({path:'/'})
            })
    }
  }
}

</script>
<style scoped>
#blogsid {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  background-color: #eee;
}

h1 {
  text-align: center;
  padding: 30px 0 10px 0;
  margin: 50px 0;
}

p.author,
p.classed {
  padding: 20px 0;
  font-weight: bold;
}

p.content {
  line-height: 30px;
  padding-bottom: 60px;
}

.btn{
  padding-bottom: 30px;
}

.btn-clid-gg{
  text-decoration: none;
  color: #fff;
  background-color:crimson;
  padding: 8px;
  font-size: 16px;
  border: 5px;
  margin: 0 7px;
  outline: none;
}

</style>
