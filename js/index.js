
var app=new Vue({
    el: "#app",
    data: {
        message: "hello vue"
    }
});

var app2=new Vue({
    el:'#app-2',
    data:{
        message:"页面加载于"+new Date()
    }
});

var app3=new Vue({
    el:"#app-3",
    data:{
        seen:true
    }
});

var app4=new Vue({
    el:'#app-4',
    data:{
        todos:[{
            text:"学习JavaScript"
        },{
            text:"学习Vue"
        },{
            text:"整个项目"
        }]
    }
});

app4.todos.push({text:"新项目"});

var app5=new Vue({
    el:'#app-5',
    data:{
        message:"Hello Vue.js！"
    },
    methods:{
        reverseMessage:function(){
            this.message=this.message.split("").reverse().join("");
        }
    }
});

var app6=new Vue({
    el:'#app-6',
    data:{
        message:"Hello Vue"
    }
});