const constanteOndeVaiALogicaDoVue = {
    data(){
        return {
            tarefas: [],
            novaTarefa: {
                feito: false
            }
        }
    },
    methods: {
        addTarefa: function(){
            if(this.novaTarefa.texto){
                this.tarefas.push(this.novaTarefa);
                this.novaTarefa = {
                    feito: false
                }
                localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
            }
            else{
                alert("Preencha o campo!")
            }
        }
    },
    created(){
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas;
    },
    updated(){
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
    }
}
Vue.createApp(constanteOndeVaiALogicaDoVue).mount("#app");