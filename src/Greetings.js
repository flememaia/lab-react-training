const Greetings = ({children, lang}) =>{

        const greetings=(params)=>{
         switch(params){
       
            case "de":
              return "Hallo"
            case "en":
              return "Hello"
            case "es":
              return "Hola"
            case "fr":
                return "Bonjour"
            default: 
                return "n/a";
         }}
       
          return(
       
                <div className="saludos">
                    {greetings(lang)}  {children}
                </div>
          )}
       
    // const obj = {
    //     de: "Hallo",
    //     en: "Hello",
    //     es: "Ola",
    //     fr: "Bonjour"
    // };

    // function renderText() {
    //     let text = "";
        
    //         for (let key in obj) {
    //           if (props[key]) {
    //             text += obj[key] + " ";
    //           }
    //         }
    //         return text;
    //     }

    // // return (
    // //     <div>
    // //         <p lang={props.lang}>
    // //             {renderText()}{props.children}
    // //         </p>
    // //     </div>
    // //     );

    //     return (
    //         <div>
    //             <p lang={props.lang}>
    //                 props.lang === "de" ? `"Hallo"${props.children}``
    //             </p>
    //         </div>
    //         );
    //     }
    // }

export default Greetings
