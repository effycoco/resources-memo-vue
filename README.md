# Resources Memo

[Vue - The Complete Guide, Section 10](https://www.udemy.com/course/vuejs-2-the-complete-guide/)

This project is a memo on learning resources, you can add new resources and delete exiting resources.

## What I learned

1. use provide/inject
   ```js
   // in a ancestor component
   export default {
     provide() {
       return {
         resources: this.resources,
         clickHandler: this.clickHandler,
       };
     },
   };
   ```
   ```js
   // in a deep child
   <template>
   <button @click="clickHandler(id)"></button>
   </template>
   <script>
   export default {
       inject:['clickHandler']
   }
   </script>
   ```
2. use `provide/inject` when you need to pass different props to dynamic component
3. if you need to update some data when form being submited, you can either use `v-model` or use `ref`
   ```js
   <template>
   <form @submit.prevent="addNewPost(content)">
        <input v-model="content" />
   </form>
   </template>
   export default{
       data(){
           return{
               content:'',
           }
       },
       inject:['addNewPost']
   }
   ```
   or
   ```js
   <template>
   <form @submit.prevent="submitData">
        <input ref='contentInput' />
   </form>
   </template>
   export default{
       inject:['addNewPost'],
       methods:{
           submitData(){
               const content=this.$refs.contentInput.value;
               this.addNewPost(content);
           }
       }
   }
   ```
4. 若要弹出输入数据无效的对话框，应设置一个 dummy varible, 该值为 true 时才显示 modal 组件(v-if), 并用 teleport 改变组件在 DOM 中的位置
5. provide/inject 所提供的数据如果是通过 `push`, `unshift` 等方法改变，那么提供给下层组件的数据也随之改变，但如果通过 reassign 的方式用全新的数组覆盖旧数组, 提供的数据不会随之改变，这就是为什么使用 `provide/inject` 传递方法
   ```js
    deleteResource(id) {
         this.storedResources = this.storedResources.filter(
             (resource) => resource.id !== id
         );
         console.log(this.storedResources);
     }
   ```
   时虽然可以成功删除 `TheTabs` 组件里对应的 `resource`，但传递给 `ResourceList` 的还是旧的 `storedResources`, 因此在页面上没有体现。但在用 `unshift` 添加 `resource` 时，是更新旧数组，所以在页面上有体现。
   总之，`provide/inject` 的数据要想更新不能用新数组覆盖旧数组，必须在数组本身上更新(modify the original data in place, instead of reassign a new one)。
6. `Teleport` 组件应放在 `BaseDialog` 组件文件最外层，而不是在使用 `BaseDialog` 组件的地方
