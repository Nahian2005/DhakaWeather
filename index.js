const h1=document.getElementById("h1")
const h2=document.getElementById("h2")

const h3=document.getElementById("h3")
const h4=document.getElementById("h4")

const h5=document.getElementById("h5")
const h6=document.getElementById("h6")

const h7=document.getElementById("h7")
const h8=document.getElementById("h8")

const h9=document.getElementById("h9")
const h10=document.getElementById("h10")

const h11=document.getElementById("h11")
const h12=document.getElementById("h12")

const h13=document.getElementById("h13")
const h14=document.getElementById("h14")

const h15=document.getElementById("h15")
const h16=document.getElementById("h16")

const h17=document.getElementById("h17")
const h18=document.getElementById("h18")

const h19=document.getElementById("h19")
const h20=document.getElementById("h20")

const h22=document.getElementById("h22")
const h23=document.getElementById("h23")

const h24=document.getElementById("h24")
const h25=document.getElementById("h25")

const h26=document.getElementById("h26")
const h27=document.getElementById("h27")

const h28=document.getElementById("h28")
const h29=document.getElementById("h29")

const h30=document.getElementById("h30")
//const h31=document.getElementById("h31")


const dweather= async()=>{
const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/retrievebulkdataset?&key=YU33GLDF3RS5YX62N58BUZ37F&taskId=2233bc92ae3ede8c27470298492dfeec&zip=false"

const dhakaweather= await fetch(`${url}`)
.then(res=>res.json())
console.log(dhakaweather);
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h3.innerHTML=`For Date :${dhakaweather.days[1].datetime}`
h4.innerHTML=`Temp: ${dhakaweather.days[1].temp}°C, (${dhakaweather.days[1].conditions}), <br/> Max Temp: ${dhakaweather.days[1].tempmax}°C <br/> Min Temp:${dhakaweather.days[1].tempmin}°C`
h5.innerHTML=`For Date :${dhakaweather.days[2].datetime}`
h6.innerHTML=`Temp: ${dhakaweather.days[2].temp}°C, (${dhakaweather.days[2].conditions}), <br/> Max Temp: ${dhakaweather.days[2].tempmax}°C <br/> Min Temp:${dhakaweather.days[2].tempmin}°C`
h7.innerHTML=`For Date :${dhakaweather.days[3].datetime}`
h8.innerHTML=`Temp: ${dhakaweather.days[3].temp}°C, (${dhakaweather.days[3].conditions}), <br/> Max Temp: ${dhakaweather.days[3].tempmax}°C <br/> Min Temp:${dhakaweather.days[3].tempmin}°C`
h9.innerHTML=`For Date :${dhakaweather.days[4].datetime}`
h10.innerHTML=`Temp: ${dhakaweather.days[4].temp}°C, (${dhakaweather.days[4].conditions}), <br/> Max Temp: ${dhakaweather.days[4].tempmax}°C <br/> Min Temp:${dhakaweather.days[4].tempmin}°C`
h11.innerHTML=`For Date :${dhakaweather.days[5].datetime}`
h12.innerHTML=`Temp: ${dhakaweather.days[5].temp}°C, (${dhakaweather.days[5].conditions}), <br/> Max Temp: ${dhakaweather.days[5].tempmax}°C <br/> Min Temp:${dhakaweather.days[5].tempmin}°C`
h13.innerHTML=`For Date :${dhakaweather.days[6].datetime}`
h14.innerHTML=`Temp: ${dhakaweather.days[6].temp}°C, (${dhakaweather.days[6].conditions}), <br/> Max Temp: ${dhakaweather.days[6].tempmax}°C <br/> Min Temp:${dhakaweather.days[6].tempmin}°C`
h15.innerHTML=`For Date :${dhakaweather.days[7].datetime}`
h16.innerHTML=`Temp: ${dhakaweather.days[7].temp}°C, (${dhakaweather.days[7].conditions}), <br/> Max Temp: ${dhakaweather.days[7].tempmax}°C <br/> Min Temp:${dhakaweather.days[7].tempmin}°C`
h17.innerHTML=`For Date :${dhakaweather.days[8].datetime}`
h18.innerHTML=`Temp: ${dhakaweather.days[8].temp}°C, (${dhakaweather.days[8].conditions}), <br/> Max Temp: ${dhakaweather.days[8].tempmax}°C <br/> Min Temp:${dhakaweather.days[8].tempmin}°C`
h19.innerHTML=`For Date :${dhakaweather.days[9].datetime}`
h20.innerHTML=`Temp: ${dhakaweather.days[9].temp}°C, (${dhakaweather.days[9].conditions}), <br/> Max Temp: ${dhakaweather.days[9].tempmax}°C <br/> Min Temp:${dhakaweather.days[9].tempmin}°C`
h21.innerHTML=`For Date :${dhakaweather.days[10].datetime}`
h22.innerHTML=`Temp: ${dhakaweather.days[10].temp}°C, (${dhakaweather.days[10].conditions}), <br/> Max Temp: ${dhakaweather.days[10].tempmax}°C <br/> Min Temp:${dhakaweather.days[10].tempmin}°C`
h23.innerHTML=`For Date :${dhakaweather.days[11].datetime}`
h24.innerHTML=`Temp: ${dhakaweather.days[11].temp}°C, (${dhakaweather.days[11].conditions}), <br/> Max Temp: ${dhakaweather.days[11].tempmax}°C <br/> Min Temp:${dhakaweather.days[11].tempmin}°C`
h25.innerHTML=`For Date :${dhakaweather.days[12].datetime}`
h26.innerHTML=`Temp: ${dhakaweather.days[12].temp}°C, (${dhakaweather.days[12].conditions}), <br/> Max Temp: ${dhakaweather.days[12].tempmax}°C <br/> Min Temp:${dhakaweather.days[12].tempmin}°C`
h27.innerHTML=`For Date :${dhakaweather.days[13].datetime}`
h28.innerHTML=`Temp: ${dhakaweather.days[13].temp}°C, (${dhakaweather.days[13].conditions}), <br/> Max Temp: ${dhakaweather.days[13].tempmax}°C <br/> Min Temp:${dhakaweather.days[13].tempmin}°C`
h29.innerHTML=`For Date :${dhakaweather.days[14].datetime}`
h30.innerHTML=`Temp: ${dhakaweather.days[14].temp}°C, (${dhakaweather.days[14].conditions}), <br/> Max Temp: ${dhakaweather.days[14].tempmax}°C <br/> Min Temp:${dhakaweather.days[14].tempmin}°C`
/*h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`
h1.innerHTML=`For Date :${dhakaweather.days[0].datetime}`
h2.innerHTML=`Temp: ${dhakaweather.days[0].temp}°C, (${dhakaweather.days[0].conditions}), <br/> Max Temp: ${dhakaweather.days[0].tempmax}°C <br/> Min Temp:${dhakaweather.days[0].tempmin}°C`*/
}
dweather();
