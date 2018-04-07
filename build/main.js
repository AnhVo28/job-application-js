

  // add skill
let btn = document.getElementById('btn-add');

btn.addEventListener('click',()=>{
  let counter = 5;
  let job = document.getElementById('job-skill');
  let val = document.getElementById("add").value;

  // let out= '<div class="q-box">';
  // out+= `<input type="checkbox"  value=${val}>`;
  // out+= `<label for="c3"> ${val} </label>`;
  // out+=`<span>✘</span>`;
  // out+=`<br>`;
  // out+=`</div>`



  let block = document.createElement("div")
  block.className = "q-box";
  let ip = document.createElement("input");
  ip.setAttribute("type", "checkbox");
  ip.setAttribute("value", val);
  ip.setAttribute("id", counter);


  let label = document.createElement("label");

  label.setAttribute("for", counter);
  label.innerText= val;

    let newCross = document.createElement("span");
    newCross.textContent="✘"

  let br = document.createElement('br');

counter++;

  block.appendChild(ip);
  block.appendChild(label);
  block.appendChild(newCross);
  block.appendChild(br);
  job.appendChild(block);

  deleteSkill();

})

// End add skill



// deleteSkill
const deleteSkill = ()=>{
  const cross = document.querySelectorAll('.job-q span');

  // for (var i = 0; i < cross.length; i++) {
  //   cross[i].addEventListener('click', (e)=>{
  //     var label = e.target.previousElementSibling;
  //     label.parentElement.removeChild(label);
  //     e.target.parentElement.removeChild(e.target);
  //   })
  // }

  Array.from(cross).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      let label = e.target.previousElementSibling;
      let box = label.parentElement;
      // label.parentElement.removeChild(label);
      // e.target.parentElement.removeChild(e.target);
      box.parentElement.removeChild(box);
    })
  })
}

// and deleteSkill

deleteSkill()


const checkEmail = (e)=>{
  let email = document.querySelector('input[name="email"]');
  let reEmail = document.querySelector('input[name="re-email"]');
  let feedback = document.getElementById('feedback');
  if(email.value !== reEmail.value){
    reEmail.style.borderColor = 'red';
    // select all text and set mouse focus on the field
    // reEmail.select();
    // reEmail.focus();
    feedback.innerHTML = "Please re-enter the email!"

  } else {
    feedback.innerHTML = " "
    reEmail.style.borderColor = 'white';
    

  }
}

let reEmail = document.querySelector('input[name="re-email"]');

reEmail.addEventListener('input', (e)=>{
  console.log('haha');
  checkEmail(e);
})
