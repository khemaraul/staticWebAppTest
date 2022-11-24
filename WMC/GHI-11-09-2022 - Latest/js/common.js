const create = tag => name => parent => attributes => {
  let x = document.createElement(tag);
  x.className = name;
  parent.appendChild(x);
  for(el in attributes){
    x.setAttribute(el, attributes[el]);
  }
  return x;
}

let diver = (title, parent)=>{
  let x = create('div')('unit')(parent)({});
   x.innerText = title;
   return x;
}

let inputer = (title, attributes, parent, classes) =>{
  let unit = create('div')(classes.parent)(parent)({});
  let label = create('div')(classes.label)(unit)({})
      label.innerText = title;
  let field = create('input')(classes.input)(unit)(attributes);
return [unit,label,field];
}

let legend = (attributes, parent, classes, inlineStyle) =>{
  let unit = create('div')(classes.parent)(parent)(inlineStyle);
  let label = create('label')(classes.label)(unit)({})
  let field = create('input')(classes.input)(label)(attributes);
  let fieldText = create('span')(classes.span)(label)({});
return [unit,label,field,fieldText];
}

let legendSwitcher = (parent, classes)=>{
  let unit = create('fieldset')(classes.fieldset)(parent)({});
  let fieldText = create('legend')(classes.legend)(unit)({});
return [unit, fieldText];
}

let switcher = (title, attributes, parent, classes)=>{
  let unit = create('div')(classes.parent)(parent)({});
  unit.innerHTML = title;
  let label = create('label')(classes.label)(unit)({});
  let field = create('input')(classes.input)(label)(attributes);
  let slider = create('span')(classes.span)(label)({});
return [unit,label,field,slider];
}

let selector = (title, data, parent, attributes, classes) => {
  let unit = create('div')(classes.unit)(parent)(attributes.unit);
  unit.innerText = title;
  // let label = create('div')('label')(unit)({});
  let select = create('select')(classes.dropdown)(unit)(attributes.dropdown);
      data.map(y=>{
          let option = create('option')(classes.option)(select)({});
          if(y === 'Select Option'){
            option.value = ''; 
            option.innerText = y;
          }else{
            option.value = y;
            option.innerText = y;
          }
      });
return [unit,select];
}

let autocompletesearch = (title, parent, attributes, classes) => {
  let unit = create('div')(classes.unit)(parent)(attributes.unit);
  unit.innerText = title;
  let autocomplete = create('div')('autocomplete')(unit)({});
  let field = create('input')(classes.dropdown)(autocomplete)(attributes.dropdown);
return [unit,field];
}

// let editableContainer = (title, attributes, parent, classes) =>{
//   let unit = create('div')(classes.parent)(parent)({});
//   let label = create('label')(classes.label)(unit)({})
//       label.innerText = title;
//   let field = create('input')(classes.input)(unit)(attributes);
// return [unit,label,field];
// }

let setAttr = attrArray => {
  return attrArray.map((ele) => ele.id.setAttribute('class', ele.className));
}

let addClass = classArray => {
  return classArray.map((ele) => ele.id.classList.add(ele.className))
}

let removeClass = classArray => {
  return classArray.map((ele) => ele.id.classList.remove(ele.className))
}

let eleDisabled = classArray => {
  return classArray.map((ele) => ele.id.disabled = ele.prop)
}

var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

let inWords = num => {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substring(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

let padTo2Digits = num => {
  return num.toString().padStart(2, '0');
}

let formatDate = date => {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    '' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

let indianCountComma = n =>{
  let a = String(n);
  if(a.length>3){
  terminal = a.slice(-3);
  let ap = [...a.slice(0,-3)];
  for(let i=ap.length-2;i>=0;i-=2){
      ap[i] = ',' + ap[i];
  }
  return [ap.join('').replace(/^,/g,''),terminal].join(',');
  }
  else return a;
}

let autocomplete = (inp, arr) => {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  let autocompleteElement;
  /*execute a function when someone writes in the text field:*/
  inp[1].addEventListener("input", function(e) {
      var b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      autocompleteElement = create("div")('autocomplete-items')(inp[1])({'id': 'autocomplete-list'});
      inp[0].children[0].appendChild(autocompleteElement);
      // a.setAttribute("id", this.id + "autocomplete-list");
      // a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      // this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          let b = create("DIV")('')(inp[0].children[0])({});
          let option = create('strong')('strong-element')(b)({});
          option.innerHTML = arr[i].substr(0, val.length);
          b.appendChild(option);
          let span = create('span')('span-element')(b)({});
          span.innerHTML = arr[i].substr(val.length);
          b.appendChild(span);
          /*make the matching letters bold:*/
          /*insert a input field that will hold the current array item's value:*/
          let hiddenInput = create('input')('hidden-input')(b)({type: 'hidden', value: arr[i]});
          b.appendChild(hiddenInput);
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp[1].value = hiddenInput.value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          autocompleteElement.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp[1].addEventListener("keydown", function(e) {
      if (autocompleteElement) var x = autocompleteElement.children;
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  let addActive = x => {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  let removeActive = x => {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  let closeAllLists = elmnt => {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  console.log("URL", url);
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
   
    return response;
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}