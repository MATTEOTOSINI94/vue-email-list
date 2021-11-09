Vue.config.devtools = true;


const app = new Vue ({


    el: "#root", 

    data:{

        urlMail :"https://flynn.boolean.careers/exercises/api/random/mail",
        userMail: [],

    },

    methods:{
        generateMailServer(){
            for (let x = 0; x < 10; x++) {
                // const element = array[x];
                axios.get(this.urlMail).then((element) =>{
                    console.log(element.data)
        
                    let rispostaServer = element.data
    
                    this.userMail = rispostaServer.response;
                    console.log(this.userMail)

                })
        }


    },


    mounted(){

        // vado a prendere il api di Boolean per generare randomicamente le mail io in questo caso la vado a mettere nel data per poterla riutilizzare dove vogli

        // let url = "https://flynn.boolean.careers/exercises/api/random/mail"

        // vado a caricare in rete il mio api

       
        }
 

    }


    
})