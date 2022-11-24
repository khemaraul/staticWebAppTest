const body = document.body;

const container = create('div')('container')(body)({});
const heading = create('div')('heading')(container)({});
heading.innerText = config.interfaceTexts.headingText;

//Form elements creation section starts here...
let form = create('form')('form')(container)({action: '', method: 'POST'});
let displaySectionTop = create('div')('display-section-top')(form)({});
let displaySection1 = create('div')('display-section-one')(displaySectionTop)({});
let displaySection2 = create('div')('display-section-two')(displaySectionTop)({});
let mainArea = create('div')('main-area')(form)({});
let editorArea = create('div')('editor-main')(mainArea)({});
// let noOfLives = inputer('', {type: "text", value: 'No of Lives', disabled: true}, editorArea, {parent: "age-limit", label: "", input: "input-tag"});
let diseaseWiseSubLimits = create('div')('display-section-sublimits')(form)({});
let limitSection = create('div')('limit-section')(diseaseWiseSubLimits)({});
let defaultLimitLabel = create('label')('label-limit')(limitSection)({});
defaultLimitLabel.innerText = 'Default';
let defaultLimitSwitch = switcher('', {type: 'checkbox', checked: true}, limitSection, {parent: 'switch-tab-limits-section', label: 'switch', input: 'input-switch', span: 'slider round'});
let higherLimitLabel = create('label')('label-limit')(limitSection)({});
higherLimitLabel.innerText = 'Higher Limit';
let higherLimitSwitch = switcher('', {type: 'checkbox'}, limitSection, {parent: 'switch-tab-limits-section', label: 'switch', input: 'input-switch', span: 'slider round'});
let lowerLimitLabel = create('label')('label-limit')(limitSection)({});
lowerLimitLabel.innerText = 'Lower Limit';
let lowerLimitSwitch = switcher('', {type: 'checkbox'}, limitSection, {parent: 'switch-tab-limits-section', label: 'switch', input: 'input-switch', span: 'slider round'});
let noLimitLabel = create('label')('label-limit')(limitSection)({});
noLimitLabel.innerText = 'No Limit';
let noLimitSwitch = switcher('', {type: 'checkbox'}, limitSection, {parent: 'switch-tab-limits-section', label: 'switch', input: 'input-switch', span: 'slider round'});
let displaySection3 = create('div')('display-section-three')(diseaseWiseSubLimits)({});
// let inputTabDivOne = create('div')('section-one-point-one')(displaySection1)({});
// let businessTypeSection = create('div')('business-type-section')(displaySection1)({});
let formContentQuoteDet = config.field.basic_quote_details.map((data, index) => {

    if(data.format === 'number bounds'){
        let inputTab = legend({type: 'number', placeholder: ' ', min: data.min, max: data.max, step: '.01', required: data.required}, displaySection1, {parent: 'card', label: 'input', input: 'input__field', span: 'input__label__basic__det'}, {'style': data.column});
        inputTab[3].innerText = data.name;
        return inputTab;
    }else if(data.format === 'text'){
        let inputTab = legend({type: 'text', placeholder: ' ', required: data.required}, displaySection1, {parent: 'card', label: 'input', input: 'input__field', span: 'input__label__basic__det'}, {'style': data.column}, {'style': data.column});
        inputTab[3].innerText = data.name;
        return inputTab;
    }else if(data.format === 'dropdown'){
        let inputTab = selector(data.name, ["Select Option",...data.options], displaySection1, {unit: {'style': data.column}, dropdown: {required: data.required}}, {unit: 'input-tab-dropdwon', dropdown: 'field', option: 'optional'});
        // inputTab[1].innerText = data.name;
        return inputTab;
    }else if(data.format === 'number words'){
        let inputTab = legend({type: 'text', placeholder: ' ', pattern: `[0-9\,]{${data.min},${data.max}}`, required: data.required}, displaySection1, {parent: 'card', label: 'input', input: 'input__field', span: 'input__label__basic__det'}, {'style': data.column});
        inputTab[3].innerText = data.name;
        return inputTab;
    }else if(data.format === 'autocomplete'){
        let inputTab = autocompletesearch(data.name, displaySection1, {unit: {'style': data.column}, dropdown: {type: 'text', placeholder:"search city 🔍", required: data.required}}, {unit: 'input-tab-dropdwon', dropdown: 'input_customer_city'});
        // inputTab[1].innerText = data.name;
        return inputTab;
    }
});

let formContentCoveragesOne = config.field.coverages1.map((data, index) => {
    if(data.format === 'switch'){
        if(data.coverType === 'default'){
            let inputTab = switcher(data.name, {type: 'checkbox', checked: data.check}, displaySection2, {parent: 'switch-tab', label: 'switch', input: 'input-switch', span: 'slider round'});
            return inputTab;
        }else{
            let inputTab = switcher(data.name, {type: 'checkbox'}, displaySection2, {parent: 'switch-tab', label: 'switch', input: 'input-switch', span: 'slider round'});
            return inputTab;
        }
    }
});

let extraCoverages = legendSwitcher(displaySection2, {fieldset: 'fieldset_default_coverages', legend: 'legend'});
extraCoverages[1].innerText = `Coverages out of model's purview`;
let formContentDefaultCoverages = config.field.default_coverages_1.map((data, index) => {
    if(data.format === 'dropdownswitch'){
        let inputTab = legendSwitcher(extraCoverages[0], {fieldset: 'fieldset', legend: 'legend'});
        inputTab[1].innerText = data.name;
        let field = switcher('', {type: 'checkbox'}, inputTab[0], {parent: 'input__field__default__coverages', label: 'switch space-top', input: 'input-switch', span: 'slider round'});
        let dropdown = selector('', ["Select Option",...data.dropdown.options], field[0], {unit: {}, dropdown: {disabled: data.dropdown.disabled, required: data.dropdown.required}}, {unit: 'input-tab-dropdwon space-top', dropdown: 'field-copay disabled', option: 'optional__default_coverages'});
        return [inputTab, field, dropdown];
    }else if(data.format === 'inputswitch'){
        let inputTab = legendSwitcher(extraCoverages[0], {fieldset: 'fieldset', legend: 'legend'});
        inputTab[1].innerText = data.name;
        let field = switcher('', {type: 'checkbox'}, inputTab[0], {parent: 'input__field__default__coverages', label: 'switch space-top', input: 'input-switch', span: 'slider round'});
        let inputElement = legend({type: 'text', placeholder: ' ', pattern: `[0-9\,]{${data.input.min},${data.input.max}}`, disabled: data.input.disabled, required: data.input.required}, field[0], {parent: 'card', label: 'input', input: 'input__field disabled', span: 'input__label__Ambcover disabled'});
        inputElement[3].innerText = data.input.name;
        return [inputTab, field, inputElement];
    }else{
        let inputTab = switcher(data.name, {type: 'checkbox'}, extraCoverages[0], {parent: 'switch-tab', label: 'switch', input: 'input-switch', span: 'slider round'});
        return inputTab;
    }
})

let formContentAgeLimit = config.field.ageLimit.map((data, index) => {
    if(data.format === 'input'){
        let editableDiv = legend({type: 'number', placeholder: ' ', step: '.01', required: data.required}, editorArea, {parent: 'card', label: 'input', input: 'input__field', span: 'input__label'}, {});
        editableDiv[3].innerText = data.name;
        editableDiv[3].style.background = "#fff5f1";
        // let editableDiv = inputer(data.name, {placeholder: ' ', min: data.min, max: data.max, step: '.01', required: data.required}, editorArea, {parent: "age-limit", label: "age-number", input: "editor"});
        return editableDiv;
    }else{
        let totalNoOfLives = inputer('Total Lives', {type: "text", value: 0, disabled: true}, editorArea, {parent: "age-limit", label: "", input: "input-tag"});
        return totalNoOfLives;
    }
})

// let totalNoOfLives = inputer('Total Lives', {type: "text", value: 0, disabled: true}, editorArea, {parent: "age-limit", label: "", input: "input-tag"});

let formContentCoveragesTwo = config.field.coverages2.map((data, index) => {
    if(data.format === 'switch'){
        if(data.hasOwnProperty('metro') && data.hasOwnProperty('nonMetro')){
                let inputTab = legendSwitcher(displaySection3, {fieldset: 'fieldset', legend: 'legend'});
                inputTab[1].innerText = data.name;
                let metro = legend({type: 'text', placeholder: ' ', value: data.metro.default_limit, pattern: `[0-9\,]{${data.metro.min},${data.metro.max}}`, required: data.metro.required}, inputTab[0], {parent: 'card', label: 'input', input: 'input__field', span: 'input__label'});
                metro[3].innerText = data.metro.name;
                let nonMetro = legend({type: 'text', placeholder: ' ', value: data.nonMetro.default_limit, pattern: `[0-9\,]{${data.nonMetro.min},${data.nonMetro.max}}`, required: data.nonMetro.required}, inputTab[0], {parent: 'card', label: 'input', input: 'input__field', span: 'input__label'});
                nonMetro[3].innerText = data.nonMetro.name;
                return [inputTab, metro, nonMetro];
        }
    }else if(data.format === 'withswitch'){
        let inputTab = legendSwitcher(displaySection3, {fieldset: 'fieldset', legend: 'legend'});
        inputTab[1].innerText = data.name;
        let field = switcher('', {type: 'checkbox'}, inputTab[0], {parent: 'input__field__switch', label: 'switch space-top', input: 'input-switch', span: 'slider round'});
        let metro = legend({type: 'text', placeholder: ' ', pattern: `[0-9\,]{${data.metro.min},${data.metro.max}}`, required: data.metro.required, disabled: data.metro.disabled}, field[0], {parent: 'card', label: 'input', input: 'input__field disabled', span: 'input__label disabled'});
        metro[3].innerText = data.metro.name;
        let nonMetro = legend({type: 'text', placeholder: ' ', pattern: `[0-9\,]{${data.nonMetro.min},${data.nonMetro.max}}`, required: data.nonMetro.required, disabled: data.nonMetro.disabled}, field[0], {parent: 'card', label: 'input', input: 'input__field disabled', span: 'input__label disabled'});
        nonMetro[3].innerText = data.nonMetro.name;
        return [inputTab, field, metro, nonMetro];
    }
});
let submitBtn = create('input')('quote-btn')(form)({type: 'submit', value: 'Get Quote'});
let abortDiv = create('div')('tooLong')(form)({});
abortDiv.innerText = 'Request took too long to respond, kindly try again';
abortDiv.style.display ="none";
let outputSection = create('div')('display-section-output')(form)({});
let outputOneText = create('div')('display-output-section-one')(outputSection)({});
let outputTwoText = create('div')('display-output-section-one')(outputSection)({});
let outputBtnOne = legend({type: 'number', placeholder: ' '}, outputSection, {parent: 'card-UW-estimate', label: 'input', input: 'input__field', span: 'input__label'});
outputBtnOne[3].innerText = config.outputSection.section3.name;
let outputBtnTwo = create('textarea')(config.outputSection.section4.name)(outputSection)({placeholder : "Enter your Remarks here"});
let outputSubmitBtn = create('input')('submit-btn disabled')(form)({type: 'button', value: config.buttons.names[0], disabled: true});
let successMsg = create('div')('success-msg')(form)({});
let errorPopup = create('div')('error-popup')(container)({});
let errorPopupMessage = create('div')('error-msg')(errorPopup)({});
let closeBtnDiv = create('div')('close-btn-div')(errorPopup)({});
closeBtnDiv.innerText = 'Close';
let overlay = create('div')('overlay')(container)({});
//Form elements creation section ends here...

console.log('FORMCONTENT', formContentQuoteDet, formContentCoveragesOne, formContentCoveragesTwo, formContentDefaultCoverages);

//Events listeners section starts here...
let formValues = {};
config.field.basic_quote_details.map((ele, index) => {
    if(ele.format === 'number words'){
        formContentQuoteDet[index][2].onkeyup = (e) => {
            if(e.target.value != ''){
                    formContentQuoteDet[index][2].value = indianCountComma(e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,''));
                    formValues[ele.dbFieldName] = e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,'');
                }else{
                    formContentQuoteDet[index][2].innerText = '';
                }
        }
    }else if(ele.format === 'text'){
        formContentQuoteDet[index][2].onkeyup = (e) => {
            if(e.target.value != ''){
                formValues[ele.dbFieldName] = e.target.value;
            }else{
                
            }
        }
    }else if(ele.format === 'dropdown'){
        formContentQuoteDet[index][1].onchange = (e) => {
            if(ele.name === 'Family definition'){
                formValues[ele.dbFieldName] = String(e.target.value);
                if(e.target.value === ''){
                    formContentQuoteDet[10][2].disabled = false;
                    formContentQuoteDet[11][2].disabled = false;
                    formContentQuoteDet[12][2].disabled = false;
                    formContentQuoteDet[9][2].value = '';
                    formContentQuoteDet[10][2].value = '';
                    formContentQuoteDet[11][2].value = '';
                    formContentQuoteDet[12][2].value = '';
                    formContentQuoteDet[10][2].classList.remove('disabled');
                    formContentQuoteDet[11][2].classList.remove('disabled');
                    formContentQuoteDet[12][2].classList.remove('disabled');
                    formContentQuoteDet[10][3].classList.remove('disabled');
                    formContentQuoteDet[11][3].classList.remove('disabled');
                    formContentQuoteDet[12][3].classList.remove('disabled');
                    formContentQuoteDet[13][2].value = '';
                }else if(e.target.value === 'ESC'){
                    formContentQuoteDet[10][2].disabled = true;
                    formContentQuoteDet[11][2].disabled = false;
                    formContentQuoteDet[12][2].disabled = false;
                    formContentQuoteDet[9][2].value = '';
                    formContentQuoteDet[10][2].value = '';
                    formContentQuoteDet[11][2].value = '';
                    formContentQuoteDet[12][2].value = '';
                    formContentQuoteDet[10][2].classList.add('disabled');
                    formContentQuoteDet[10][3].classList.add('disabled');
                    formContentQuoteDet[11][2].classList.remove('disabled');
                    formContentQuoteDet[11][3].classList.remove('disabled');
                    formContentQuoteDet[12][2].classList.remove('disabled');
                    formContentQuoteDet[12][3].classList.remove('disabled');
                    formContentQuoteDet[13][2].value = '';
                    formValues['No of Parents'] = '0';
                }else if(e.target.value === 'EMP'){
                    formContentQuoteDet[10][2].disabled = true;
                    formContentQuoteDet[11][2].disabled = true;
                    formContentQuoteDet[12][2].disabled = true;
                    formContentQuoteDet[9][2].value = '';
                    formContentQuoteDet[10][2].value = '';
                    formContentQuoteDet[11][2].value = '';
                    formContentQuoteDet[12][2].value = '';
                    formContentQuoteDet[10][2].classList.add('disabled');
                    formContentQuoteDet[11][2].classList.add('disabled');
                    formContentQuoteDet[12][2].classList.add('disabled');
                    formContentQuoteDet[10][3].classList.add('disabled');
                    formContentQuoteDet[11][3].classList.add('disabled');
                    formContentQuoteDet[12][3].classList.add('disabled');
                    formContentQuoteDet[13][2].value = '';
                    formValues['No of Parents'] = '0';
                    formValues['No of children'] = '0';
                    formValues['No of spouse'] = '0';
                }else{
                    formContentQuoteDet[10][2].disabled = false;
                    formContentQuoteDet[11][2].disabled = false;
                    formContentQuoteDet[12][2].disabled = false;
                    formContentQuoteDet[9][2].value = '';
                    formContentQuoteDet[10][2].value = '';
                    formContentQuoteDet[11][2].value = '';
                    formContentQuoteDet[12][2].value = '';
                    formContentQuoteDet[10][2].classList.remove('disabled');
                    formContentQuoteDet[11][2].classList.remove('disabled');
                    formContentQuoteDet[12][2].classList.remove('disabled');
                    formContentQuoteDet[10][3].classList.remove('disabled');
                    formContentQuoteDet[11][3].classList.remove('disabled');
                    formContentQuoteDet[12][3].classList.remove('disabled');
                    formContentQuoteDet[13][2].value = '';
                }
            }else if(ele.name === 'Business type'){
                formValues[ele.dbFieldName] = String(e.target.value);
                if(e.target.value === ''){
                    formContentQuoteDet[5][2].disabled = false;
                    formContentQuoteDet[6][2].disabled = false;
                    formContentQuoteDet[7][2].disabled = false;
                    formContentQuoteDet[14][2].disabled = false;
                    formContentQuoteDet[5][2].value = '';
                    formContentQuoteDet[6][2].value = '';
                    formContentQuoteDet[7][2].value = '';
                    formContentQuoteDet[14][2].value = '';
                    formContentQuoteDet[5][2].classList.remove('disabled');
                    formContentQuoteDet[6][2].classList.remove('disabled');
                    formContentQuoteDet[7][2].classList.remove('disabled');
                    formContentQuoteDet[14][2].classList.remove('disabled');
                    formContentQuoteDet[5][3].classList.remove('disabled');
                    formContentQuoteDet[6][3].classList.remove('disabled');
                    formContentQuoteDet[7][3].classList.remove('disabled');
                    formContentQuoteDet[14][3].classList.remove('disabled');
                }else if(e.target.value === 'New'){
                    formContentQuoteDet[5][2].disabled = true;
                    formContentQuoteDet[6][2].disabled = true;
                    formContentQuoteDet[7][2].disabled = true;
                    formContentQuoteDet[14][2].disabled = true;
                    formContentQuoteDet[5][2].value = '';
                    formContentQuoteDet[6][2].value = '';
                    formContentQuoteDet[7][2].value = '';
                    formContentQuoteDet[14][2].value = '';
                    formContentQuoteDet[5][2].classList.add('disabled');
                    formContentQuoteDet[5][3].classList.add('disabled');
                    formContentQuoteDet[6][2].classList.add('disabled');
                    formContentQuoteDet[6][3].classList.add('disabled');
                    formContentQuoteDet[7][2].classList.add('disabled');
                    formContentQuoteDet[7][3].classList.add('disabled');
                    formContentQuoteDet[14][2].classList.add('disabled');
                    formContentQuoteDet[14][3].classList.add('disabled');
                    formValues['Loss_Ratio'] = 'Null';
                    formValues['Claims_with_IBNR'] = 'Null';
                    formValues['Inception_lives'] = 'Null';
                    formValues['Weighted_avg_lives'] = 'Null';
                }else{
                    formContentQuoteDet[5][2].disabled = false;
                    formContentQuoteDet[6][2].disabled = false;
                    formContentQuoteDet[7][2].disabled = false;
                    formContentQuoteDet[14][2].disabled = false;
                    formContentQuoteDet[5][2].value = '';
                    formContentQuoteDet[6][2].value = '';
                    formContentQuoteDet[7][2].value = '';
                    formContentQuoteDet[14][2].value = '';
                    formContentQuoteDet[5][2].classList.remove('disabled');
                    formContentQuoteDet[6][2].classList.remove('disabled');
                    formContentQuoteDet[7][2].classList.remove('disabled');
                    formContentQuoteDet[14][2].classList.remove('disabled');
                    formContentQuoteDet[5][3].classList.remove('disabled');
                    formContentQuoteDet[6][3].classList.remove('disabled');
                    formContentQuoteDet[7][3].classList.remove('disabled');
                    formContentQuoteDet[14][3].classList.remove('disabled');
                }
            }else{
                formValues[ele.dbFieldName] = String(e.target.value);
            }
        }
    }else if(ele.format === 'autocomplete'){
        formContentQuoteDet[index][1].onkeyup = (e) => {
            autocomplete(formContentQuoteDet[index], ele.options);
            // console.log("AUTOCOM", e.target.value);
            // formValues[ele.dbFieldName] = formContentQuoteDet[index][2].value;
        }           
    }
});

config.field.coverages1.map((ele, index) => {
    if(ele.format === 'switch'){
        if(ele.coverType === 'default'){
            formContentCoveragesOne[index][2].onchange = (e) => {
                if(e.target.checked === true){
                    ele.subFields.map((fields) => {
                        formValues[fields.dbFieldName] = fields.options[1];
                    })
                }else{
                    ele.subFields.map((fields) => {
                        formValues[fields.dbFieldName] = fields.options[0];
                    })
                }
            }
        }else{
            formContentCoveragesOne[index][0].children[0].children[0].onchange = (e) => {
                if(e.target.checked === true){
                    formValues[ele.dbFieldName] = ele.options[1];
                }else{
                    formValues[ele.dbFieldName] = ele.options[0];
                }
            }
        }
    }
})

config.field.default_coverages_1.map((ele, index) => {
    if(ele.format === 'switch'){
        formContentDefaultCoverages[index][0].children[0].children[0].onchange = (e) => {
            if(e.target.checked === true){
                if(ele.name === 'Check Applicability OPD'){
                    errorPopup.style.display = 'flex';
                    overlay.style.display = 'block';
                    errorPopupMessage.innerText = `OPD cases are out of model's purview`;
                }
                formValues[ele.dbFieldName] = ele.options[1];
            }else{
                formValues[ele.dbFieldName] = ele.options[0];
            }
        }
    }else if(ele.format === 'dropdownswitch'){
        formContentDefaultCoverages[index][1][2].onchange = (e) => {
            if(e.target.checked === true){
                formValues[ele.dbFieldName] = ele.options[1];
                formContentDefaultCoverages[index][2][1].classList.remove('disabled');
                formContentDefaultCoverages[index][2][1].disabled = false;
                formContentDefaultCoverages[index][2][1].onchange = (e) => {
                    formValues[ele.dropdown.dbFieldName] = e.target.value;                        
                }
            }else{
                formContentDefaultCoverages[index][2][1].classList.add('disabled');
                formContentDefaultCoverages[index][2][1].disabled = true;
                formContentDefaultCoverages[index][2][1].value = '';
                formValues[ele.dbFieldName] = ele.options[0];
                formValues[ele.dropdown.dbFieldName] = 'nil';
            }
        }
    }else if(ele.format === 'inputswitch'){
        formContentDefaultCoverages[index][1][2].onchange = (e) => {
            if(e.target.checked === true){
                formContentDefaultCoverages[index][2][2].classList.remove('disabled');
                formContentDefaultCoverages[index][2][3].classList.remove('disabled');
                formContentDefaultCoverages[index][2][2].disabled = false;
                formValues[ele.dbFieldName] = ele.options[1];
                formContentDefaultCoverages[index][2][2].onkeyup = (e) => {
                    formContentDefaultCoverages[index][2][2].value = indianCountComma(e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,''));
                    formValues[ele.input.dbFieldName] = e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,'');                      
                }
            }else{
                formContentDefaultCoverages[index][2][2].classList.add('disabled');
                formContentDefaultCoverages[index][2][3].classList.add('disabled');
                formContentDefaultCoverages[index][2][2].disabled = true;
                formContentDefaultCoverages[index][2][2].value = '';
                formValues[ele.dbFieldName] = ele.options[0];
                formValues[ele.input.dbFieldName] = '0';
            }
        }
    }
})

editorArea.onpaste = (e) => {
    const pastedText = e.clipboardData.getData('text/plain')
    console.log(pastedText)
    const result = pastedText.trim().split(/\s+/);
    console.log(result);
    let sumOfLives = 0;
    result.forEach((ele, index) => {
    //   console.log(eval("editorArea"+Number(index+1)))
    //   eval("editorArea"+Number(index+1)).innerText = ele;
    formContentAgeLimit[index][2].value = ele;
    sumOfLives += Number(ele);
    })
    formContentAgeLimit[9][2].value = sumOfLives;
    if(formContentQuoteDet[13][2].value !== ""){
        if(Number(formContentQuoteDet[13][2].value) !== sumOfLives){
            errorPopup.style.display = 'flex';
            overlay.style.display = 'block';
            errorPopupMessage.innerText = `${config.successMsg.mismatchVal}`; 
        }
    }
    // console.log(sumOfLives);
    e.preventDefault();
  }

formContentAgeLimit[0][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[7][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[1][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[7][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[2][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[7][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[3][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[7][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[4][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[7][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[5][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[7][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[6][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[7][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[7][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[8][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

formContentAgeLimit[8][2].onkeyup = (e) => {
    let newSumOfLives = Number(formContentAgeLimit[0][2].value) + Number(formContentAgeLimit[1][2].value) + Number(formContentAgeLimit[2][2].value) + Number(formContentAgeLimit[3][2].value) + Number(formContentAgeLimit[4][2].value) + Number(formContentAgeLimit[5][2].value) + Number(formContentAgeLimit[6][2].value) + Number(formContentAgeLimit[7][2].value) + Number(e.target.value);
    formContentAgeLimit[9][2].value = newSumOfLives;
    console.log("NEWSUMOFLIVES", newSumOfLives, Number(e.target.value), formContentAgeLimit[1][2].value);
}

config.field.coverages2.map((ele, index) => {
    if(ele.format === 'switch'){
        if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                if(ele.metro.format === 'number words'){
                    formContentCoveragesTwo[index][1][2].onkeyup = (e) => {
                        if(e.target.value != ''){
                            formContentCoveragesTwo[index][1][2].value = indianCountComma(e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,''));
                            formValues[ele.dbFieldName] = String(ele.options[1]);
                            formValues[ele.metro.dbFieldName] = e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,'');
                        }else{
                                
                        }
                    }
                }

                if(ele.nonMetro.format === 'number words'){
                    formContentCoveragesTwo[index][2][2].onkeyup = (e) => {
                        if(e.target.value != ''){
                            formContentCoveragesTwo[index][2][2].value = indianCountComma(e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,''));
                            formValues[ele.dbFieldName] = String(ele.options[1]);
                            formValues[ele.nonMetro.dbFieldName] = e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,'');
                        }else{
                                
                        }
                    }
                }
            }
        }else if(ele.format === 'withswitch'){
            formContentCoveragesTwo[index][1][2].onchange = (e) => {
                if(e.target.checked === true){
                    formContentCoveragesTwo[index][2][2].classList.remove('disabled');
                    formContentCoveragesTwo[index][2][2].disabled = false;
                    formContentCoveragesTwo[index][2][3].classList.remove('disabled');
                    formContentCoveragesTwo[index][3][2].classList.remove('disabled');
                    formContentCoveragesTwo[index][3][2].disabled = false;
                    formContentCoveragesTwo[index][3][3].classList.remove('disabled');
                    formValues[ele.dbFieldName] = String(ele.options[1]);
                    if(ele.metro.format === 'number words'){
                        formContentCoveragesTwo[index][2][2].onkeyup = (e) => {
                            if(e.target.value != ''){
                                formContentCoveragesTwo[index][2][2].value = indianCountComma(e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,''));
                                formValues[ele.metro.dbFieldName] = e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,'');
                            }else{
                                    
                            }
                        }
                    }

                    if(ele.nonMetro.format === 'number words'){
                        formContentCoveragesTwo[index][3][2].onkeyup = (e) => {
                            if(e.target.value != ''){
                                formContentCoveragesTwo[index][3][2].value = indianCountComma(e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,''));
                                formValues[ele.nonMetro.dbFieldName] = e.target.value.replace(/[a-zA-Z\.\!\@\#\$\%\^\&\*\,\(\)]+/g,'');
                            }else{
                                    
                            }
                        }
                    }
                }else{
                    formContentCoveragesTwo[ele.dbFieldName] = String(ele.options[0]);
                    formContentCoveragesTwo[index][2][2].classList.add('disabled');
                    formContentCoveragesTwo[index][2][2].disabled = true;
                    formContentCoveragesTwo[index][2][3].classList.add('disabled');
                    formContentCoveragesTwo[index][3][2].classList.add('disabled');
                    formContentCoveragesTwo[index][3][2].disabled = true;
                    formContentCoveragesTwo[index][3][3].classList.add('disabled');
                    formContentCoveragesTwo[index][2][2].value = '';
                    formContentCoveragesTwo[index][3][2].value = '';
                    formValues[ele.metro.dbFieldName] = '0';
                    formValues[ele.nonMetro.dbFieldName] = '0';
                }
            }
    }
})
//Number with bounds format for basic quote details section starts here...

//Active lives calculation on the basis of no of (self count, parents, children, spouse) section starts here...
    let self_count = 0;
    let no_of_parents = 0;
    let no_of_children = 0;
    let no_of_spouse = 0;
    let inception_lives = 0;
    formContentQuoteDet[9][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['Self_count'] = String(e.target.value);
                formContentQuoteDet[9][2].value === '' ? self_count = 0 : self_count = Number(formContentQuoteDet[9][2].value);
                formContentQuoteDet[10][2].value === '' ? no_of_parents = 0 : no_of_parents = Number(formContentQuoteDet[10][2].value);
                formContentQuoteDet[11][2].value === '' ? no_of_children = 0 : no_of_children = Number(formContentQuoteDet[11][2].value);
                formContentQuoteDet[12][2].value === '' ? no_of_spouse = 0 : no_of_spouse = Number(formContentQuoteDet[12][2].value);
                formContentQuoteDet[13][2].value = Number(self_count+no_of_parents+no_of_children+no_of_spouse);
                formValues['Active_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse));
                
                // if(formContentAgeLimit[9][2].value !== "" && formContentQuoteDet[9][2].value !== "" && formContentQuoteDet[10][2].value !== "" && formContentQuoteDet[11][2].value !== "" && formContentQuoteDet[12][2].value !== "" && formContentQuoteDet[13][2].value !== ""){
                //     if(Number(formContentAgeLimit[9][2].value) !== Number(formContentQuoteDet[13][2].value)){
                //         errorPopup.style.display = 'flex';
                //         overlay.style.display = 'block';
                //         errorPopupMessage.innerText = `Active lives count and No of Lives count is different`; 
                //     }
                // }

                if(!formContentQuoteDet[14][2].disabled){
                    formContentQuoteDet[7][2].value === '' ? inception_lives = 0 : inception_lives = Number(formContentQuoteDet[7][2].value);
                    formContentQuoteDet[14][2].value = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                    formValues['Weighted_avg_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                }
        }else{
           
        }
    }

    formContentQuoteDet[10][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['No of Parents'] = String(e.target.value);
                formContentQuoteDet[9][2].value === '' ? self_count = 0 : self_count = Number(formContentQuoteDet[9][2].value);
                formContentQuoteDet[10][2].value === '' ? no_of_parents = 0 : no_of_parents = Number(formContentQuoteDet[10][2].value);
                formContentQuoteDet[11][2].value === '' ? no_of_children = 0 : no_of_children = Number(formContentQuoteDet[11][2].value);
                formContentQuoteDet[12][2].value === '' ? no_of_spouse = 0 : no_of_spouse = Number(formContentQuoteDet[12][2].value);
                formContentQuoteDet[13][2].value = Number(self_count+no_of_parents+no_of_children+no_of_spouse);
                formValues['Active_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse));

                // if(formContentAgeLimit[9][2].value !== "" && formContentQuoteDet[9][2].value !== "" && formContentQuoteDet[10][2].value !== "" && formContentQuoteDet[11][2].value !== "" && formContentQuoteDet[12][2].value !== "" && formContentQuoteDet[13][2].value !== ""){
                //     if(Number(formContentAgeLimit[9][2].value) !== Number(formContentQuoteDet[13][2].value)){
                //         errorPopup.style.display = 'flex';
                //         overlay.style.display = 'block';
                //         errorPopupMessage.innerText = `Active lives count and No of Lives count is different`; 
                //     }
                // }

                if(!formContentQuoteDet[14][2].disabled){
                    formContentQuoteDet[7][2].value === '' ? inception_lives = 0 : inception_lives = Number(formContentQuoteDet[7][2].value);
                    formContentQuoteDet[14][2].value = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                    formValues['Weighted_avg_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                }
        }else{
           
        }
    }

    formContentQuoteDet[11][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['No of children'] = String(e.target.value);
                formContentQuoteDet[9][2].value === '' ? self_count = 0 : self_count = Number(formContentQuoteDet[9][2].value);
                formContentQuoteDet[10][2].value === '' ? no_of_parents = 0 : no_of_parents = Number(formContentQuoteDet[10][2].value);
                formContentQuoteDet[11][2].value === '' ? no_of_children = 0 : no_of_children = Number(formContentQuoteDet[11][2].value);
                formContentQuoteDet[12][2].value === '' ? no_of_spouse = 0 : no_of_spouse = Number(formContentQuoteDet[12][2].value);
                formContentQuoteDet[13][2].value = Number(self_count+no_of_parents+no_of_children+no_of_spouse);
                formValues['Active_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse));

                // if(formContentAgeLimit[9][2].value !== "" && formContentQuoteDet[9][2].value !== "" && formContentQuoteDet[10][2].value !== "" && formContentQuoteDet[11][2].value !== "" && formContentQuoteDet[12][2].value !== "" && formContentQuoteDet[13][2].value !== ""){
                //     if(Number(formContentAgeLimit[9][2].value) !== Number(formContentQuoteDet[13][2].value)){
                //         errorPopup.style.display = 'flex';
                //         overlay.style.display = 'block';
                //         errorPopupMessage.innerText = `Active lives count and No of Lives count is different`; 
                //     }
                // }

                if(!formContentQuoteDet[14][2].disabled){
                    formContentQuoteDet[7][2].value === '' ? inception_lives = 0 : inception_lives = Number(formContentQuoteDet[7][2].value);
                    formContentQuoteDet[14][2].value = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                    formValues['Weighted_avg_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                }
            }else{
           
        }
    }

    formContentQuoteDet[12][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['No of spouse'] = String(e.target.value);
                formContentQuoteDet[9][2].value === '' ? self_count = 0 : self_count = Number(formContentQuoteDet[9][2].value);
                formContentQuoteDet[10][2].value === '' ? no_of_parents = 0 : no_of_parents = Number(formContentQuoteDet[10][2].value);
                formContentQuoteDet[11][2].value === '' ? no_of_children = 0 : no_of_children = Number(formContentQuoteDet[11][2].value);
                formContentQuoteDet[12][2].value === '' ? no_of_spouse = 0 : no_of_spouse = Number(formContentQuoteDet[12][2].value);
                formContentQuoteDet[13][2].value = Number(self_count+no_of_parents+no_of_children+no_of_spouse);
                formValues['Active_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse));

                // if(formContentAgeLimit[9][2].value !== "" && formContentQuoteDet[9][2].value !== "" && formContentQuoteDet[10][2].value !== "" && formContentQuoteDet[11][2].value !== "" && formContentQuoteDet[12][2].value !== "" && formContentQuoteDet[13][2].value !== ""){
                //     if(Number(formContentAgeLimit[9][2].value) !== Number(formContentQuoteDet[13][2].value)){
                //         errorPopup.style.display = 'flex';
                //         overlay.style.display = 'block';
                //         errorPopupMessage.innerText = `Active lives count and No of Lives count is different`; 
                //     }
                // }

                if(!formContentQuoteDet[14][2].disabled){
                    formContentQuoteDet[7][2].value === '' ? inception_lives = 0 : inception_lives = Number(formContentQuoteDet[7][2].value);
                    formContentQuoteDet[14][2].value = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                    formValues['Weighted_avg_lives'] = String(Number(self_count+no_of_parents+no_of_children+no_of_spouse+inception_lives)/2);
                }
            }else{
           
        }
    }

    formContentQuoteDet[13][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['Active_lives'] = String(e.target.value);
            formContentQuoteDet[13][2].value = e.target.value;

            // if(formContentAgeLimit[9][2].value !== ""){
            //     if(Number(formContentAgeLimit[9][2].value) !== Number(formContentQuoteDet[13][2].value)){
            //         errorPopup.style.display = 'flex';
            //         overlay.style.display = 'block';
            //         errorPopupMessage.innerText = `Active lives count and No of Lives count is different`; 
            //     }
            // }

            if(!formContentQuoteDet[14][2].disabled){
                formContentQuoteDet[7][2].value === '' ? inception_lives = 0 : inception_lives = Number(formContentQuoteDet[7][2].value);
                formContentQuoteDet[14][2].value = String(Number(Number(e.target.value)+inception_lives)/2);
                formValues['Weighted_avg_lives'] = String(Number(Number(e.target.value)+inception_lives)/2);
            }
        }else{
           
        }
    }
//Active lives calculation on the basis of no of (self count, parents, children, spouse) section ends here...

    formContentQuoteDet[5][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['Loss_Ratio'] = String(e.target.value);
            formContentQuoteDet[5][2].value = e.target.value;
        }else{
           
        }
    }

    formContentQuoteDet[7][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['Inception_lives'] = String(e.target.value);
            formContentQuoteDet[7][2].value = e.target.value;
            inception_lives = Number(e.target.value);
            if(formContentQuoteDet[13][2].value !== ''){
                formContentQuoteDet[14][2].value = String(Number(Number(formContentQuoteDet[13][2].value)+inception_lives)/2);
                formValues['Weighted_avg_lives'] = String(Number(Number(formContentQuoteDet[13][2].value)+inception_lives)/2);
            }
        }else{
           
        }
    }

    formContentQuoteDet[14][2].onkeyup = (e) => {
        if(e.target.value != ''){
            formValues['Weighted_avg_lives'] = String(e.target.value);
            formContentQuoteDet[14][2].value = e.target.value;
        }else{
           
        }
    }
//Number with bounds format for basic quote details section ends here...

//limit level value populating section starts here...
    defaultLimitSwitch[2].onchange = (e) => {
        if(e.target.checked === true){
            higherLimitSwitch[2].checked = false;
            lowerLimitSwitch[2].checked = false;
            noLimitSwitch[2].checked = false;
            config.field.coverages2.map((ele, index) => {
                if(ele.format === 'switch'){
                    if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                        formContentCoveragesTwo[index][1][2].value = ele.metro.default_limit;
                        formContentCoveragesTwo[index][2][2].value = ele.nonMetro.default_limit;
                        formValues[ele.metro.dbFieldName] = ele.metro.default_limit.replace(/,/g, "");
                        formValues[ele.nonMetro.dbFieldName] = ele.nonMetro.default_limit.replace(/,/g, "");
                    }
                }
            })
        }else{
            
        }
    }

    higherLimitSwitch[2].onchange = (e) => {
        if(e.target.checked === true){
            defaultLimitSwitch[2].checked = false;
            lowerLimitSwitch[2].checked = false;
            noLimitSwitch[2].checked = false;
            config.field.coverages2.map((ele, index) => {
                if(ele.format === 'switch'){
                    if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                        formContentCoveragesTwo[index][1][2].value = ele.metro.higher_limit;
                        formContentCoveragesTwo[index][2][2].value = ele.nonMetro.higher_limit;
                        formValues[ele.metro.dbFieldName] = ele.metro.higher_limit.replace(/,/g, "");
                        formValues[ele.nonMetro.dbFieldName] = ele.nonMetro.higher_limit.replace(/,/g, "");
                    }
                }
            })
        }else{
            defaultLimitSwitch[2].checked = true;
            config.field.coverages2.map((ele, index) => {
                if(ele.format === 'switch'){
                    if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                        formContentCoveragesTwo[index][1][2].value = ele.metro.default_limit;
                        formContentCoveragesTwo[index][2][2].value = ele.nonMetro.default_limit;
                        formValues[ele.metro.dbFieldName] = ele.metro.default_limit.replace(/,/g, "");
                        formValues[ele.nonMetro.dbFieldName] = ele.nonMetro.default_limit.replace(/,/g, "");
                    }
                }
            })
        }
    }

    lowerLimitSwitch[2].onchange = (e) => {
        if(e.target.checked === true){
            defaultLimitSwitch[2].checked = false;
            higherLimitSwitch[2].checked = false;
            noLimitSwitch[2].checked = false;
            config.field.coverages2.map((ele, index) => {
                if(ele.format === 'switch'){
                    if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                        formContentCoveragesTwo[index][1][2].value = ele.metro.lower_limit;
                        formContentCoveragesTwo[index][2][2].value = ele.nonMetro.lower_limit;
                        formValues[ele.metro.dbFieldName] = ele.metro.lower_limit.replace(/,/g, "");
                        formValues[ele.nonMetro.dbFieldName] = ele.nonMetro.lower_limit.replace(/,/g, "");
                    }
                }
            })
        }else{
            defaultLimitSwitch[2].checked = true;
            config.field.coverages2.map((ele, index) => {
                if(ele.format === 'switch'){
                    if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                        formContentCoveragesTwo[index][1][2].value = ele.metro.default_limit;
                        formContentCoveragesTwo[index][2][2].value = ele.nonMetro.default_limit;
                        formValues[ele.metro.dbFieldName] = ele.metro.default_limit.replace(/,/g, "");
                        formValues[ele.nonMetro.dbFieldName] = ele.nonMetro.default_limit.replace(/,/g, "");
                    }
                }
            })
        }
    }

    noLimitSwitch[2].onchange = (e) => {
        if(e.target.checked === true){
            defaultLimitSwitch[2].checked = false;
            lowerLimitSwitch[2].checked = false;
            higherLimitSwitch[2].checked = false;
            config.field.coverages2.map((ele, index) => {
                if(ele.format === 'switch'){
                    if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                        formContentCoveragesTwo[index][1][2].value = ele.metro.no_limit;
                        formContentCoveragesTwo[index][2][2].value = ele.nonMetro.no_limit;
                        formValues[ele.metro.dbFieldName] = ele.metro.no_limit.replace(/,/g, "");
                        formValues[ele.nonMetro.dbFieldName] = ele.nonMetro.no_limit.replace(/,/g, "");
                    }
                }
            })
        }else{
            defaultLimitSwitch[2].checked = true;
            config.field.coverages2.map((ele, index) => {
                if(ele.format === 'switch'){
                    if(ele.hasOwnProperty('metro') && ele.hasOwnProperty('nonMetro')){
                        formContentCoveragesTwo[index][1][2].value = ele.metro.default_limit;
                        formContentCoveragesTwo[index][2][2].value = ele.nonMetro.default_limit;
                        formValues[ele.metro.dbFieldName] = ele.metro.default_limit.replace(/,/g, "");
                        formValues[ele.nonMetro.dbFieldName] = ele.nonMetro.default_limit.replace(/,/g, "");
                    }
                }
            })
        }
    }
//limit level value populating section ends here...

//Events listeners section ends here...

//Popup box UI...
errorPopup.onclick = () => {
    errorPopup.style.display = 'none';
    overlay.style.display = 'none';
}

let clubbedFormValues = {};
//Form submit event listener section starts here...
form.onsubmit = (e) => {
    if(Number(formContentAgeLimit[9][2].value) !== Number(formContentQuoteDet[13][2].value)){
        errorPopup.style.display = 'flex';
        overlay.style.display = 'block';
        errorPopupMessage.innerText = `${config.successMsg.mismatchVal}`;
        return false;
    }else{
        e.preventDefault();
        outputOneText.innerText =  '';
        outputTwoText.innerText = '';
        successMsg.innerText = '';
        submitBtn.value = 'Getting Quote';
        submitBtn.disabled = true;
        submitBtn.classList.add('submit-btn-loader');
        outputOneText.style.display = 'block';
        outputTwoText.style.display = 'block';
        outputSection.style = 'grid-template-rows: 1fr 1fr 1fr;';
        outputOneText.classList.add('loading');
        outputTwoText.classList.add('loading');
        formValues['Customer_city'] = formContentQuoteDet[1][1].value;
        config.field.ageLimit.map((element, index) => {
            if(element.format === "input"){
                formValues[element.dbFieldName] = formContentAgeLimit[index][2].value;
            }else{
                formValues[element.dbFieldName] = formContentAgeLimit[index][2].value; 
            }
        })

        let newFormValues = {};
        config.field.coverages1.map((element) => {
            if(!formValues.hasOwnProperty(element.dbFieldName)){    
                if(element.format === 'switch'){
                        if(element.coverType === 'default'){
                            element.subFields.map((fields) => {
                                if(formValues.hasOwnProperty(fields.dbFieldName)){
                                    newFormValues[fields.dbFieldName] = formValues[fields.dbFieldName];
                                }else{
                                    newFormValues[fields.dbFieldName] = fields.options[1];
                                }
                            })
                        }else{
                            newFormValues[element.dbFieldName] = element.options[0];
                    }
                }
            }
        });

        config.field.default_coverages_1.map((element) => {
            if(!formValues.hasOwnProperty(element.dbFieldName)){
                if(element.format === 'dropdownswitch'){
                    newFormValues[element.dbFieldName] = element.options[0];
                    newFormValues[element.dropdown.dbFieldName] = 'nil';
                }else if(element.format === 'inputswitch'){
                    newFormValues[element.dbFieldName] = element.options[0];
                    newFormValues[element.input.dbFieldName] = '0';
                }else{
                    newFormValues[element.dbFieldName] = element.options[0];
                }
            }
        })

        config.field.coverages2.map((element) => {
            if(!formValues.hasOwnProperty(element.dbFieldName)){    
                if(element.format === 'switch'){
                        if(element.hasOwnProperty('metro') || element.hasOwnProperty('nonMetro')){
                                newFormValues[element.dbFieldName] = element.options[1];
                                if(formValues[element.metro.dbFieldName] === undefined && formValues[element.nonMetro.dbFieldName] === undefined){
                                    newFormValues[element.metro.dbFieldName] = element.metro.default_limit.replace(/,/g, "");
                                    newFormValues[element.nonMetro.dbFieldName] = element.nonMetro.default_limit.replace(/,/g, "");
                                }
                        }else{
                            newFormValues[element.dbFieldName] = element.options[0];
                        }
                    }else if(element.format === 'withswitch'){
                            newFormValues[element.dbFieldName] = element.options[0];
                            newFormValues[element.metro.dbFieldName] = "0";
                            newFormValues[element.nonMetro.dbFieldName] = "0";
                    }
                }
        })
        if(formValues['Quote_Number'].match(/\\/g)){
            formValues['Quote_Number'] = formValues['Quote_Number'].replace(/\\/g, '$backwardslash$');
        }
        if(formValues['Quote_Number'].match(/\//g)){
            formValues['Quote_Number'] = formValues['Quote_Number'].replace(/\//g, '$forwardslash$');
        }

        clubbedFormValues = {...formValues, ...newFormValues};
        let modelData = Object.assign(formValues, newFormValues);
        // let {pre_existing_diseases,one_Year_Waiting_period,thirty_Day_waiting_period,copay,copay_in_percentage,parental_copay,parental_copay_percentage,ambulance_cover,ambulance_cover_val,room_rent,room_rent_icu,room_rent_normal,Business_Type,Loss_Ratio,Claims_with_IBNR,Weighted_avg_lives,Inception_lives,0to18,19to35,36to45,46to55,56to60,61to65,66to70,71to75,76to80_Above,Total_Lives,...modelData} = clubbedFormValues;
        let notReqFields = 'pre_existing_diseases,one_Year_Waiting_period,thirty_Day_waiting_period,copay,copay_in_percentage,parental_copay,parental_copay_percentage,ambulance_cover,ambulance_cover_val,room_rent,room_rent_icu,room_rent_normal,Business_Type,Loss_Ratio,Claims_with_IBNR,Weighted_avg_lives,Inception_lives,age_0to18,age_19to35,age_36to45,age_46to55,age_56to60,age_61to65,age_66to70,age_71to75,age_76to80_Above,Total_Lives'.split(',');
        for(let i = 0; i<notReqFields.length; i++){
            delete modelData[notReqFields[i]];
        }
        console.log("ONSUBMIT", formValues, modelData, clubbedFormValues);
        getRequest(config.URLS.getQuote, modelData, 'getquote');
        outputSubmitBtn.classList.remove('disabled');
        outputSubmitBtn.disabled = false;
        return true;
    }
}
//Form submit event listener section ends here...

//Final submit event listener section starts here...
outputSubmitBtn.onclick = () => {
    outputSubmitBtn.value = 'Submitting';
    outputSubmitBtn.disabled = true;
    outputSubmitBtn.classList.add('submit-btn-loader');
    let date = formatDate(new Date());
    let lowPremium = outputOneText.innerText.replace(/\s/g, '');
    let lossCostLowPremium = lowPremium.substr(lowPremium.indexOf(':')+1);
    let highPremium = outputTwoText.innerText.replace(/\s/g, '');
    let lossCostHighPremium = highPremium.substr(highPremium.indexOf(':')+1);
    
    //Transform keys which has space and hyphens
    let formDataWithDbFormat = Object.keys(clubbedFormValues).reduce(function(o, prop) {
        var value = clubbedFormValues[prop];
        var newProp = prop.replace(/[\s-]+/g, '_');
        o[newProp] = value;
        return o;
      }, {});

    console.log("ONSUBMIT", clubbedFormValues, formDataWithDbFormat);
    let afterPredictionData = {...formDataWithDbFormat, PartitionKey: clubbedFormValues['Quote_Number'],RowKey:clubbedFormValues['Quote_Number']+'_'+date, Predicted_Lower_LossCost:lossCostLowPremium,Predicted_Upper_LossCost:lossCostHighPremium,Actual_Premium:outputBtnOne[2].value,Additional_Remarks:outputBtnTwo.value, Underwriter_Id: '1027577', Underwriter_Name: 'KHEMA'};
    getRequest(config.URLS.submit, afterPredictionData, 'submit');
}
//Final submit event listener section ends here...