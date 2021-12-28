"use strict";
const wrapper = document.querySelector(".wrapper");

class CarveryMain {
    constructor(meat){
      this.meat = meat;
    }
    render(){
      const line = document.createElement("div");
      line.classList.add("wrapper_line");
      line.innerHTML = `
      <div class="line">
      <span class="meat">${this.meat}</span>
      <input class="temperature" type="text">
      <select name="select" id="select">
          <option value="blank"></option>
          <option value="sold">Sold</option>
          <option value="discard">Discard</option>
          <option value="returned">Returned to Shaam</option>
          <option value="nod">Not on Deck</option>
      </select>
  </div>
  `;
  wrapper.append(line);
  
    }
  }
  
  function carveryMain() {
    axios.get("http://localhost:3000/carveryMains").then((data) => {
      data.data.forEach(({ meat }) => {
        new CarveryMain(meat).render();
      });
      console.log("carvery main is called");
    });
  }
  
  carveryMain();