 function getElementWidth( content, padding, border) {

    // const cont= parseInt (content);
   //  const padd= parseInt (padding);
    // const bord=  parseInt (border);

    const cont= Number.parseFloat (content);
    const padd= Number.parseFloat (padding);
    const bord= Number.parseFloat (border);

     return  cont+ 2* padd + 2* bord ;

 }   

 const content= "50px";
 const padding= "8.5px";
 const border= "4px";

 console.log(getElementWidth(content, padding, border));



