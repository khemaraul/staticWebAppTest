let body = document.body;
let area = document.createElement('div');
area.className='area';
let editorArea = document.createElement('div');
editorArea.className = "editor-main";
// editorArea.setAttribute("contenteditable", true);
// let fields = [
//   {
//     name: '0-18'
//   },
//   {
//     name: '19-35'
//   },
//   {
//     name: '36-45'
//   },
//   {
//     name: '46-55'
//   },
//   {
//     name: '56-60'
//   },
//   {
//     name: '61-65'
//   },
//   {
//     name: '66-70'
//   },
//   {
//     name: '71-75'
//   },
//   {
//     name: '76-80 Above'
//   }
// ]

// let fieldsArray = fields.map((data, index) => {
//   let ageLimit1 = document.createElement('div');
//   ageLimit1.className = 'age-limit';
//   let label1 = document.createElement('label');
//   label1.innerText = '0-18';
//   let editorArea1 = document.createElement('div');
//   editorArea1.className = "editor";
//   editorArea1.setAttribute("contenteditable", true);
//   ageLimit1.appendChild(label1);
//   ageLimit1.appendChild(editorArea1);
//   editorArea.appendChild(ageLimit1);
// })
let noOfLives = document.createElement('div');
noOfLives.className = 'age-limit';
let labelNoOfLives = document.createElement('label');
labelNoOfLives.innerText = ' ';
let editorAreaNoOfLives = document.createElement('input');
editorAreaNoOfLives.className = 'input';
editorAreaNoOfLives.type = "text";
editorAreaNoOfLives.value = "No Of Lives";
editorAreaNoOfLives.disabled = true;
let ageLimit1 = document.createElement('div');
ageLimit1.className = 'age-limit';
let label1 = document.createElement('label');
label1.innerText = '0-18';
let editorArea1 = document.createElement('div');
editorArea1.className = "editor";
editorArea1.setAttribute("contenteditable", true);
let ageLimit2 = document.createElement('div');
ageLimit2.className = 'age-limit';
let label2 = document.createElement('label');
label2.innerText = '19-35';
let editorArea2 = document.createElement('div');
editorArea2.className = "editor";
editorArea2.setAttribute("contenteditable", true);
let ageLimit3 = document.createElement('div');
ageLimit3.className = 'age-limit';
let label3 = document.createElement('label');
label3.innerText = '36-45';
let editorArea3 = document.createElement('div');
editorArea3.className = "editor";
editorArea3.setAttribute("contenteditable", true);
let ageLimit4 = document.createElement('div');
ageLimit4.className = 'age-limit';
let label4 = document.createElement('label');
label4.innerText = '46-55';
let editorArea4 = document.createElement('div');
editorArea4.className = "editor";
editorArea4.setAttribute("contenteditable", true);
let ageLimit5 = document.createElement('div');
ageLimit5.className = 'age-limit';
let label5 = document.createElement('label');
label5.innerText = '56-60';
let editorArea5 = document.createElement('div');
editorArea5.className = "editor";
editorArea5.setAttribute("contenteditable", true);
noOfLives.appendChild(labelNoOfLives);
noOfLives.appendChild(editorAreaNoOfLives);
ageLimit1.appendChild(label1);
ageLimit1.appendChild(editorArea1);
ageLimit2.appendChild(label2);
ageLimit2.appendChild(editorArea2);
ageLimit3.appendChild(label3);
ageLimit3.appendChild(editorArea3);
ageLimit4.appendChild(label4);
ageLimit4.appendChild(editorArea4);
ageLimit5.appendChild(label5);
ageLimit5.appendChild(editorArea5);
editorArea.appendChild(noOfLives);
editorArea.appendChild(ageLimit1);
editorArea.appendChild(ageLimit2);
editorArea.appendChild(ageLimit3);
editorArea.appendChild(ageLimit4);
editorArea.appendChild(ageLimit5);
area.appendChild(editorArea);
body.appendChild(area);

    // Keyup event
    editorArea.onpaste = (e) => {
      // let clipboardData, pastedData;
      // e.stopPropagation();
      // e.preventDefault();
      // clipboardData = e.clipboardData || window.clipboardData;
      // pastedData = clipboardData.getData('text/plain');
      // document.execCommand('insertText', false, editorArea1);
      // console.log(pastedData, e);
      const pastedText = e.clipboardData.getData('text/plain')
      console.log(pastedText)
      // document.execCommand('insertText', false, pastedText);
      const result = pastedText.trim().split(/\s+/);
      console.log(result);
      result.forEach((ele, index) => {
        console.log(eval("editorArea"+Number(index+1)))
        eval("editorArea"+Number(index+1)).innerText = ele;
        console.log(editorArea1, ele);
      })
      e.preventDefault();
    }

