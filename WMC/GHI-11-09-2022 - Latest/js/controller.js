
const optionAdder = ()=>{
  const headers = new Headers();
  const bearer = `Bearer Qea06cKIJOt3ZfSuaKHCvGqgI3hHYvye`;
  headers.append("Authorization", bearer);
  const options = {
      method: "GET",
      credentials : "include",
      headers: headers
  };
  return options;
}

async function fetchWithTimeout(url, options,timeoutVal) {
  const { timeout = timeoutVal } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(url, {
    ...options,
    signal: controller.signal  
  });
  clearTimeout(id);
  return response;
}

const getRequest = async (url, requestBody, type)=>{
  let fetchOptions = optionAdder();
  let urlHome = `${url}func_parameters=${requestBody}`;
  
  try{
    let tableValuesRaw = await fetchWithTimeout(urlHome,fetchOptions, 20 * 1000);
  // let tableValuesRaw = await fetch(urlHome,fetchOptions);
  let tableValues = await tableValuesRaw.json();
  console.log(tableValues);
  if(type === 'getquote'){
    outputOneText.classList.remove('loading');
    outputTwoText.classList.remove('loading');
    outputOneText.innerText = `Predicted Lower Loss Cost Per Life : ${tableValues["Predicted_Lower_Premium"][0].toFixed(0)}`;
    outputTwoText.innerText = `Predicted Upper Loss Cost Per Life : ${tableValues["Predicted_Upper_Premium"][0].toFixed(0)}`;
    submitBtn.value = 'Get Quote';
    submitBtn.disabled = false;
    submitBtn.classList.remove('submit-btn-loader');
    abortDiv.style.display = "none";
  }else{
    outputSubmitBtn.value = 'Submit';
    outputSubmitBtn.disabled = false;
    outputSubmitBtn.classList.remove('submit-btn-loader');
    successMsg.innerText = 'Updation is successful 👍';
  }
  return tableValues; 
  }
  catch(error) {
  // Timeouts if the request takes
  // longer than 3 seconds
  console.log(error.name === 'AbortError');
    outputOneText.classList.remove('loading');
    outputTwoText.classList.remove('loading');
    abortDiv.style.display = "block";
    submitBtn.value = 'Get Quote';
    submitBtn.disabled = false;
    submitBtn.classList.remove('submit-btn-loader');
  }
}


