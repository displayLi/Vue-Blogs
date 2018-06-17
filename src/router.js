
import showBlog from './components/showBlog.vue'
import addBlog from './components/addBlog.vue'
import blogsId from './components/blogsId.vue'
import edit from './components/edit.vue'

export default [
	{path:'/',component:showBlog},
	{path:'/addBlog',component:addBlog},
	{path:'/blog/:id',component:blogsId},
	{path:'/edit/:id',component:edit},
]