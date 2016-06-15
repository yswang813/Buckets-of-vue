<template>
    <div>
        <group title="">
         <x-input title="" placeholder="输入想转换成uniCode的文字" :value.sync="word"></x-input>
        </group>

        <group title="">
         <x-input title="" placeholder="" :value.sync="word2unicode"></x-input>
        </group>

        <br>

        <group title="">
         <x-input title="" placeholder="输入想转换成文字的unicode" :value.sync="unicode"></x-input>
        </group>

        <group title="">
         <x-input title="" placeholder="" :value.sync="unicode2word"></x-input>
        </group>
    </div>
</template>

<script>
    import { XInput, Group, XButton, Tip } from 'vux'

    export default {
        components: {
            XInput,
            XButton,
            Group,
            Tip, 
        },
        data () {
            return{
                word:"",
                unicode:""
            }
        },
        computed:{
            word2unicode: function(){
                var res=[];
                if(this.word === ''){
                    return '';
                }else{
                    for(var i=0;i < this.word.length;i++)
                        res[i]=("000"+this.word.charCodeAt(i).toString(16)).slice(-4);
                    return "\\u"+res.join("\\u");
                }
            },
            unicode2word: function(){
                let str=this.unicode.replace(/\\/g,"%");
                return unescape(str);
            }
        }
    }
</script>

<style scoped>
    p{
        width:100%;
    }
</style>