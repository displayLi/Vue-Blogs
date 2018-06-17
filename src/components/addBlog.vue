<template>
  <div id="addBlog">
    <h2>{{title}}</h2>
    <form v-if='!show'>
      <!-- 标题部分 -->
      <div>
        <label>主题：</label>
        <input type="text" v-model='input_datas.blog_title'>
      </div>
      <!-- 内容部分 -->
      <div>
        <label>内容：</label>
        <textarea rows="10" v-model='input_datas.content'></textarea>
      </div>
      <!-- 分类复选框 -->
      <div class="blog-class">
        <p>分类：</p>
        <label>生活</label>
        <input type="checkbox" value="生活" v-model='input_datas.classed'>
        <label>it</label>
        <input type="checkbox" value="it" v-model='input_datas.classed'>
        <label>养生</label>
        <input type="checkbox" value="养生" v-model='input_datas.classed'>
        <label>八卦</label>
        <input type="checkbox" value="八卦" v-model='input_datas.classed'>
      </div>
      <!-- 下拉框作者 -->
      <div>
        <label>作者：</label>
        <select v-model='input_datas.author'>
          <option v-for='key in selects'>{{key}}</option>
        </select>
      </div>
      <!-- 提交部分 -->
      <div>
        <input type="button" value="发布博客" @click='posts' v-if='!show'>
      </div>
    </form>
    <!-- 博客发送成功弹出层 -->
    <div class="ok_show" v-if='show'>
      <h1>{{succoes}}</h1>
    </div>
    <!-- 博客展示部分 -->
    <div class="look_box" v-if='show'>
      <h3>博客总览</h3>
      <div class="look_title">
        <span>标题：</span>
        <span>{{input_datas.blog_title}}</span>
      </div>
      <div class="look_content">
        <span>内容：</span>
        <span>{{input_datas.content}}</span>
      </div>
      <div class="look_class">
        <span>分类：</span>
        <span class="class_box" v-for='key in input_datas.classed'>{{key}}</span>
      </div>
      <div class="look_author">
        <span>作者：</span>
        <span>{{input_datas.author}}</span>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "addBlog",
            data() {
                return {
                    title: "写博客",

                    input_datas: {
                      blog_title: "",
                      content: "",
                      classed: [],
                      author: ""
                    },
                selects: ["Mondor", "Yoyo", "Selina", "Jack", "Alalei"],
                show: false,
                succoes: "博客发送成功,正在跳回首页..."
            };
        },
        methods: {
            posts() {
                this.$http
                    .post("https://vue-blogs-d3171.firebaseio.com/blogs.json", this.input_datas)
                    .then(result => {
                      this.show = true;
                      setTimeout(()=>{
                        window.location.href = '/';
                      },1000)
                });
            }
        }
    };

</script>
<style scoped>

    #addBlog * {
      box-sizing: border-box;
      font-family: 'Microsoft YaHei', '黑体', '宋体';
    }

    #addBlog {
      max-width: 600px;
      margin: 30px auto;
      padding: 20px;
    }

    #addBlog h2 {
      margin: 0 0 30px 0;
    }

    label {
      display: block;
    }

    input[type=text],
    textarea,
    select {
      width: 100%;
      padding: 8px;
      margin: 20px 0;
      outline: none;
    }

    textarea {
      resize: vertical;
    }

    input[type=button] {
      margin-top: 30px;
      border: 0;
      padding: 10px 18px;
      color: #fff;
      font-size: 16px;
      background-color: crimson;
      border-radius: 5px;
      outline: none;
    }

    .blog-class label {
      display: inline-block;
      margin: 20px 0 20px 20px;
      color: #333;
      font-size: 14px;
    }

    .blog-class label:nth-of-type(1) {
      margin: 0;
    }

    .ok_show {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .6);
      position: absolute;
      left: 0;
      top: 0;
    }

    .ok_show h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -96px;
      color: #fff;
    }

    .look_box {
      margin: 50px 0;
      padding: 30px;
      border: 1px solid #ccc;
    }

    .look_box div {
      margin: 20px 0;
    }

    .class_box {
      padding: 3px 20px;
      border: 1px solid #ccc;
      margin-right: 20px;
    }

</style>
