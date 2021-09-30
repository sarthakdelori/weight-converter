let btn = document.querySelector('#submit');
let converterType = document.querySelector('#list');
let main = document.querySelector('#main'); 
let output = document.querySelector('#output');
let weight = document.querySelector('#input1');
let kgout = document.querySelector('#KgOutput');
let gout = document.querySelector('#gOutput');
let lbsout = document.querySelector('#lbsOutput');
let ozout = document.querySelector('#OzOutput');


output.style.visibility = 'hidden';
weight.style.visibility = 'hidden';
btn.addEventListener('click', function display(e){
  e.preventDefault();
  let typec = converterType.value;
  console.log(typec);
  if(typec === "nothing"){
    alert("Select a valid converter");
  }
  else if(typec === "Kgtoall"){
    let show = `<h3> Kg Converter: </h3>`;
    main.innerHTML = show;
    weight.style.visibility = 'visible';
    weight.addEventListener('input',function(e){
      output.style.visibility = 'visible';
      let result = e.target.value;
      kgout.innerHTML = result;
      gout.innerHTML = result * 1000;
      lbsout.innerHTML = (result * 2.20462).toFixed(3);
      ozout.innerHTML = (result * 35.274).toFixed(3);
    });
  }
  else if(typec === "gtoall"){
    let show = `<h3> Grams Converter: </h3>`;
    main.innerHTML = show;
    weight.style.visibility = 'visible';
    weight.addEventListener('input',function(e){
      output.style.visibility = 'visible';
      let result = e.target.value;
      kgout.innerHTML = result / 1000;
      gout.innerHTML = result;
      lbsout.innerHTML = (result * 0.00220462).toFixed(3);
      ozout.innerHTML = (result * 0.035274).toFixed(3);
    });
  }
  else if(typec === "lbstoall"){
    let show = `<h3> Pounds Converter: </h3>`;
    main.innerHTML = show;
    weight.style.visibility = 'visible';
    weight.addEventListener('input',function(e){
      output.style.visibility = 'visible';
      let result = e.target.value;
      kgout.innerHTML = (result / 2.20462).toFixed(3);
      gout.innerHTML = (result / 0.00220462).toFixed(3);
      lbsout.innerHTML = result;
      ozout.innerHTML = result * 16;
    });
  }
  else if(typec === "oztoall"){
    let show = `<h3> Ounces Converter: </h3>`;
    main.innerHTML = show;
    weight.style.visibility = 'visible';
    weight.addEventListener('input',function(e){
      output.style.visibility = 'visible';
      let result = e.target.value;
      kgout.innerHTML = (result / 35.274).toFixed(3);
      gout.innerHTML = (result / 0.035274).toFixed(3);
      lbsout.innerHTML = (result / 16).toFixed(3);
      ozout.innerHTML = result;
    });
  }      
});

