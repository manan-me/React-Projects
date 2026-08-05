export function HexColor() {
    let hexcolor='#'
    const str = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

    for (let i = 0; i < 6; i++) {
           const val=Math.floor(Math.random()*16)

           hexcolor+=str[val]
        
    }


    return ( 
                hexcolor
   );
}




export function RgbColor() {  
    const r = Math.floor(Math.random() * 256)  
    const g = Math.floor(Math.random() * 256)  
    const b = Math.floor(Math.random() * 256) 

     let rgbColor=`rgb(${r}, ${g}, ${b})`
       return(     
                  rgbColor

     );
}

