function CreditCard(props){

        function numberProtection (){
            let a = props.number.split('');
            
            for (let i = 0; i < a.length; i++) {
              if (i <= 11) {
                a[i] = '*';
              }
            }
            
            a.join('');

            return a 
        }

    return (
        <div className="Felipe-Vai-Escolher" uk-grid>
            <div>
                <div
                className="Felipe_Vai_Escolher_Tambem"
                    // eslint-disable-next-line 
                style= "backgroundColor"{props.bgColor}
                >
                    <font color= {props.color}>
                        <p>'props.type'</p>
                        <h3 className="card-title">{numberProtection}</h3>
                        <p>{props.expirationMonth}</p> 
                        <p>{props.expirationYear}</p>
                        <p>'props.bank'</p>
                        <p>'props.owner'</p>
                    </font>
                </div>
            </div>
        </div>
  ); 

}

export default CreditCard;
  