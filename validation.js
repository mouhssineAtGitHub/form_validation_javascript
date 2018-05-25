/* Get the input values */
const form = document.querySelector("#form_1");
const mySubmit = document.querySelector("#mySubmit");
const fname = document.querySelector('#fname');
const fphone = document.querySelector('#fphone');
const femail1 = document.querySelector('#femail1');
const femail2 = document.querySelector('#femail2');
const faddress1 = document.querySelector('#faddress1');
const faddress2 = document.querySelector('#faddress2');
const fcity = document.querySelector('#fcity');
const fstate = document.querySelector('#fstate');
const fcountryRegion = document.querySelector('#fcountryRegion');
const fzipPostalCode = document.querySelector('#fzipPostalCode');
const fhearAboutUs = document.querySelector('#fhearAboutUs');
const fportfolioLink = document.querySelector('#fportfolioLink');
const fsubject = document.querySelector('#fsubject');

/* Creat the Regex for inputs */
const reg_fname = /^[a-z][ a-z|A-Z]{1,49}$/;
const reg_fphone = /^[0][-][0-9]{3}[-][0-9]{3}[-][0-9]{3}$/;
const reg_femail1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reg_femail2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reg_faddress1 = /^[a-z0-9][ a-z|A-Z|0-9-]{1,99}$/;
const reg_faddress2 = /^[a-z0-9][ a-z|A-Z|0-9-]{1,99}$/;
const reg_fcity = /^[a-z][ a-z|A-Z]{1,49}$/;
const reg_fstate = /^[a-z][ a-z|A-Z]{1,49}$/;
const reg_fcountryRegion = /^[a-z][ a-z|A-Z]{1,49}$/;
const reg_fzipPostalCode = /^[0-9]{5}$/;
const reg_fhearAboutUs = /^[a-z][ a-z|A-Z|0-9]{1,99}$/;
const reg_fportfolioLink = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
const reg_fsubject = /^[ a-z|A-Z|0-9]{0,150}$/;

/* Validiting the inputs during the typing */
form.addEventListener('input', e => {
    const element_id = e.target.id;
    let myRegex = null;
    let value = e.target.value;
   if(e.target.type == 'text'){


    switch (element_id){
        case 'fname':
             myRegex=reg_fname;
            break;
        case 'fphone':
            myRegex=reg_fphone;
            break;
        case 'femail1':
            myRegex=reg_femail1;
            break;
        case 'femail2':
            myRegex=reg_femail2;
           break;
        case 'faddress1':
           myRegex=reg_faddress1;
           break;
        case 'faddress2':
           myRegex=reg_faddress2;
           break;    
        case 'fcity':
           myRegex=reg_fcity;
          break;
        case 'fstate':
          myRegex=reg_fstate;
          break;
        case 'fcountryRegion':
          myRegex=reg_fcountryRegion;
          break;
          case 'fzipPostalCode':
          myRegex=reg_fzipPostalCode;
          break;    
          case 'fhearAboutUs':
          myRegex=reg_fhearAboutUs;
          break;    
          case 'fportfolioLink':
          myRegex=reg_fportfolioLink;
          break;    
          case 'fsubject':
          myRegex=reg_fsubject;
          break;              
    }

	if (myRegex.test(e.target.value)) {
        e.target.classList.remove('invalid');
        e.target.classList.add('valid');
	} else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
	}

    
   }
});


/* Validating the form elements after submit click */
mySubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let errorMessage ="";
    let isError = false; 
    
    if (!fname.value || fname.value=='' || fname.value==' ' || !reg_fname.test(fname.value)){
        errorMessage += "Fname:not empty, and no special cars, 2 caracters at least\n";       
        fname.classList.add('invalid2');
        alert("Check full name input!");
        return false;    
    }else{fname.classList.remove('invalid2');}

    if (!fphone.value || fphone.value=='' || fphone.value==' ' || !reg_fphone.test(fphone.value)){
        errorMessage += "fphone:not empty, and no special cars, 2 caracters at least\n";       
        fphone.classList.add('invalid2');
        alert("Check phone input!");
        return false;    
    }else{fphone.classList.remove('invalid2');}

    if (!femail1.value || femail1.value=='' || femail1.value==' ' || !reg_femail1.test(femail1.value)){
        errorMessage += "femail1:not empty, and no special cars, 2 caracters at least\n";       
        femail1.classList.add('invalid2');
        alert("Check email input!");
        return false;    
    }else{femail1.classList.remove('invalid2');}

    if (!femail2.value || femail2.value=='' || femail2.value==' ' || !reg_femail2.test(femail2.value) || femail1.value!==femail2.value){
        errorMessage += "femail2:not empty, and no special cars, 2 caracters at least\n";       
        femail2.classList.add('invalid2');
        alert("Check email input: both emails should be valid and same!");
        return false;    
    }else{femail2.classList.remove('invalid2');}

    if (!faddress1.value || faddress1.value=='' || faddress1.value==' ' || !reg_faddress1.test(faddress1.value)){
        errorMessage += "faddress1:not empty, and no special cars, 2 caracters at least\n";       
        faddress1.classList.add('invalid2');
        alert("Check address input!");
        return false;    
    }else{faddress1.classList.remove('invalid2');}

    if (!faddress2.value || faddress2.value=='' || faddress2.value==' ' || !reg_faddress2.test(faddress2.value)){
        errorMessage += "faddress2:not empty, and no special cars, 2 caracters at least\n";       
        faddress2.classList.add('invalid2');
        alert("Check address second line input!");
        return false;    
    }else{faddress2.classList.remove('invalid2');}

    if (!fcity.value || fcity.value=='' || fcity.value==' ' || !reg_fcity.test(fcity.value)){
        errorMessage += "fcity:not empty, and no special cars, 2 caracters at least\n";       
        fcity.classList.add('invalid2');
        alert("Check city input!");
        return false;    
    }else{fcity.classList.remove('invalid2');}

    if (!fstate.value || fstate.value=='' || fstate.value==' ' || !reg_fstate.test(fstate.value)){
        errorMessage += "fstate:not empty, and no special cars, 2 caracters at least\n";       
        fstate.classList.add('invalid2');
        alert("Check state input!");
    }else{fstate.classList.remove('invalid2');}
 
    if (!fcountryRegion.value || fcountryRegion.value=='' || fcountryRegion.value==' ' || !reg_fcountryRegion.test(fcountryRegion.value)){
        errorMessage += "fcountryRegion:not empty, and no special cars, 2 caracters at least\n";       
        fcountryRegion.classList.add('invalid2');
        alert("Check countryRegion input!");
        return false;    
    }else{fcountryRegion.classList.remove('invalid2');}

    if (!fzipPostalCode.value || fzipPostalCode.value=='' || fzipPostalCode.value==' ' || !reg_fzipPostalCode.test(fzipPostalCode.value)){
        errorMessage += "fzipPostalCode:not empty, and no special cars, 2 caracters at least\n";       
        fzipPostalCode.classList.add('invalid2');
        alert("Check zip postal code input!");
        return false;    
    }else{fzipPostalCode.classList.remove('invalid2');}

    if (!fhearAboutUs.value || fhearAboutUs.value=='' || fhearAboutUs.value==' ' || !reg_fhearAboutUs.test(fhearAboutUs.value)){
        errorMessage += "fhearAboutUs:not empty, and no special cars, 2 caracters at least\n";       
        fhearAboutUs.classList.add('invalid2');
        alert("Check Hear about us input!");
        return false;    
    }else{fhearAboutUs.classList.remove('invalid2');}

    if(!form.test1.checked && !form.test2.checked && !form.test3.checked && !form.test4.checked
        && !form.test5.checked && !form.test6.checked && !form.test7.checked && !form.test8.checked
        && !form.test9.checked) {
        alert("Please you should check at lest one checkbox");
        return false;
    }

    if (!fportfolioLink.value || fportfolioLink.value=='' || fportfolioLink.value==' ' || !reg_fportfolioLink.test(fportfolioLink.value)){
        errorMessage += "fportfolioLink:not empty, and no special cars, 2 caracters at least\n";       
        fportfolioLink.classList.add('invalid2');
        alert("Check potfolio link input!");
        return false;    
    }else{fportfolioLink.classList.remove('invalid2');}    

    if (!fsubject.value || fsubject.value=='' || fsubject.value==' ' || !reg_fsubject.test(fsubject.value)){
        errorMessage += "fsubject:not empty, and no special cars, 2 caracters at least\n";       
        fsubject.classList.add('invalid2');
        alert("Check subject input!");
        return false;    
    }else{fsubject.classList.remove('invalid2');} 
    
    alert("your form is valid for submiting.");
});

