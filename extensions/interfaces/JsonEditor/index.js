import{openBlock as e,createElementBlock as t}from"vue";var a={emits:["textarea"],props:{value:String},methods:{handleChange(e){this.$emit("textarea",e)}}};const n=["value"];a.render=function(a,r,i,o,s,u){return e(),t("textarea",{value:i.value,onInput:r[0]||(r[0]=e=>u.handleChange(e.target.value))},null,40,n)},a.__file="src/interface.vue";var r={id:"JsonEditor",name:"Visual Editor",description:"This is my custom interface!",icon:"box",component:a,types:["string"]};export{r as default};