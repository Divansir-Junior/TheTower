videos = ["Teste" , "Teste 2"]

function playVideo(name,index,videos) {
  const btn = document.getElementById("btn").addEventListener("click", ()=> {
    
    
  })
}

function selectVideo(index) {
  if(index === 0) {
    playVideo("pRIMEIRO VIDEO",0,videos[0]);
  }
  if(index === 1) {
    playVideo("Segundo video",1,videos[1])
  }
}

selectVideo(1)