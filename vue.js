Vue.config.devtools = true;


const app = new Vue ({


    el: "#root", 

    data:{

        urlMail :"https://flynn.boolean.careers/exercises/api/random/mail",
        userMail: [],
        pendigList:0,
        list:0,

    },

    methods:{
        
    //     generateMailServer(){
    //         // let tempMail = []
    //         this.pendigList = 10 
    //         for (let x = 0; x < 10; x++) {
    //             // const element = array[x];
    //             axios.get(this.urlMail).then((element) =>{
    //                 console.log(element.data)
    //                 // this.pendigList--
        
    //                 let rispostaServer = element.data
    //                 this.userMail.push(rispostaServer.response)
    //                 // tempMail.push(rispostaServer.response);
    //                 // if (this.pendigList === 0) {
    //                 //     this.userMail = tempMail
    //                 // }
                   
    //                 console.log(this.userMail)

    //             })

             
    //     }

        

    // },

    generatMail(){
        let tempMail = []
        this.list  = 10

        for (let x = 0; x < 10; x++) {
            axios.get(this.urlMail).then((elMail)=>{
                this.list--


                let server = elMail.data.response

                tempMail.push(server)

                if (this.list === 0) {
                    this.userMail = tempMail
                    
                    console.log(tempMail)
                }
                

            })
            
        }
    }


    // mounted(){

    //     // vado a prendere il api di Boolean per generare randomicamente le mail io in questo caso la vado a mettere nel data per poterla riutilizzare dove vogli

    //     // let url = "https://flynn.boolean.careers/exercises/api/random/mail"

    //     // vado a caricare in rete il mio api

       
    //     }
 

    }


    
})