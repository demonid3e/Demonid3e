

function setCurrentTime (dateSelector){
    dateSelector.value = new Date().toISOString().slice(0,16);  
  }


  export default setCurrentTime;