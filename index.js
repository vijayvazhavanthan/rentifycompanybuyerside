import {rentifyFetchHomepage,rentify} from 'rentify-details.js';
import {save} from 'common.js';
import {view,changeviewtype,loginuser} from 'common.js';
import {anotherTimeSave,anotherTimesaved,viewbutton,savelength} from 'commonfunction.js';

rentifyFetchHomepage(loadRentify);

function loadRentify(){
    console.log('hi');
    console.log(rentify)
    let three_dots='no';


    document.querySelector('.js-threedots').addEventListener('click',()=>{
        console.log('hi')
        if(three_dots === 'no'){
            /*document.querySelector('.js-no-display').innerHTML=``;*/
            let html = `
                <div class="other-details">
                    <div class="others-details-text">
                        Home
                    </div>
                    <div class="others-details-text">
                        About
                    </div>
                </div>

            `;
            document.querySelector('.js-other-details').innerHTML=html;
            three_dots = 'yes';
        }else{
            let html = ` `;
            document.querySelector('.js-other-details').innerHTML=html;
            three_dots = 'no';
            /*document.querySelector('.js-no-display').innerHTML=`
                <div class="filter">
                    <div class="filter-option ">
                        <div class="js-filter filter-text">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img style="width:16px; margin-right:6px;" src="../rentify-images/filter.png">
                                Filter
                            </div>
                        </div>
                        <div class="js-option">
                            <!--js-filter-option show or not-->
                        </div>
                    </div>
                </div>
            `;
            filtershow();
            */
        } 
    });



    document.querySelector('.js-threedot').addEventListener('click',()=>{
        console.log('hi')
        if(three_dots === 'no'){
            /*document.querySelector('.js-no-display').innerHTML=``;*/
            let html = `
                <div class="other-details">
                    <div class="others-details-text">
                        Home
                    </div>
                    <div class="others-details-text">
                        About
                    </div>
                </div>

            `;
            document.querySelector('.js-other-details').innerHTML=html;
            three_dots = 'yes';
        }else{
            let html = ` `;
            document.querySelector('.js-other-details').innerHTML=html;
            three_dots = 'no';
           /*document.querySelector('.js-no-display').innerHTML=`
                <div class="filter">
                    <div class="filter-option ">
                        <div class="js-filter filter-text">
                            <div style="display:flex; justify-content: center; align-items: center;">
                                <img style="width:16px; margin-right:6px;" src="../rentify-images/filter.png">
                                Filter
                            </div>
                        </div>
                        <div class="js-option">
                            <!--js-filter-option show or not-->
                        </div>
                    </div>
                </div>
            `;
            filtershow();
            */
        } 
    });





    /*
    let filter_option='no';

    function filtershow(){
        document.querySelector('.js-filter').addEventListener('click',()=>{
            if(filter_option === 'no'){
                let html = `
                <div class="options">
                             <div class="container" style="width:300px;">

                                <h3>Select Country State and City</h3>

                                <div class="select_option">
                                    <select class="form-select country" aria-label="Default select example" onchange="loadStates(){
                                        
                                    
                                    }">
                                        <option selected>Select Country</option>
                                    </select>
                                    <select class="form-select state" aria-label="Default select example" onchange="loadCities()">
                                        <option selected>Select State</option>
                                    </select>
                                    <select class="form-select city" aria-label="Default select example">
                                        <option selected>Select City</option>
                                    </select>
                                </div>
                                <div style="display: flex; margin-top:10px; justify-content: center;">
                                    <button class="search js-search">
                                        <img class="search-image" src="../rentify-images/search.svg">
                                        Search
                                        <!--<div class="search-tooltip">Search</div>-->
                                    </button>
                                </div> 
                            </div>   
                </div>
        
                `;
                document.querySelector('.js-option').innerHTML=html;
                filter_option = 'yes';
                var config = {
                    cUrl: 'https://api.countrystatecity.in/v1/countries',
                    ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
                }
                
                
                var countrySelect = document.querySelector('.country'),
                    stateSelect = document.querySelector('.state'),
                    citySelect = document.querySelector('.city')
                
                
                function loadCountries() {
                
                    let apiEndPoint = config.cUrl
                
                    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
                    .then(Response => Response.json())
                    .then(data => {
                        console.log(data);
                
                        data.forEach(country => {
                            const option = document.createElement('option')
                            option.value = country.iso2
                            option.textContent = country.name 
                            countrySelect.appendChild(option)
                        })
                    })
                    .catch(error => console.error('Error loading countries:', error))
                
                    stateSelect.disabled = true
                    citySelect.disabled = true
                    stateSelect.style.pointerEvents = 'none'
                    citySelect.style.pointerEvents = 'none'
                }
                function loadStates() {
                    try{
                            
                    stateSelect.disabled = false
                    citySelect.disabled = true
                    stateSelect.style.pointerEvents = 'auto'
                    citySelect.style.pointerEvents = 'none'
                
                    const selectedCountryCode = countrySelect.value
                    // console.log(selectedCountryCode);
                    stateSelect.innerHTML = '<option value="">Select State</option>' // for clearing the existing states
                    citySelect.innerHTML = '<option value="">Select City</option>' // Clear existing city options
                
                    fetch(`${config.cUrl}/${selectedCountryCode}/states`, {headers: {"X-CSCAPI-KEY": config.ckey}})
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                
                        data.forEach(state => {
                            const option = document.createElement('option')
                            option.value = state.iso2
                            option.textContent = state.name 
                            stateSelect.appendChild(option)
                        })
                    })
                    .catch(error => console.error('Error loading countries:', error))
                    }catch(error){
                        console.log('hi')    
                    }
                }
                
                function loadCities() {
                    citySelect.disabled = false
                    citySelect.style.pointerEvents = 'auto'
                
                    const selectedCountryCode = countrySelect.value
                    const selectedStateCode = stateSelect.value
                    // console.log(selectedCountryCode, selectedStateCode);
                
                    citySelect.innerHTML = '<option value="">Select City</option>' // Clear existing city options
                
                    fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, {headers: {"X-CSCAPI-KEY": config.ckey}})
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                
                        data.forEach(city => {
                            const option = document.createElement('option')
                            option.value = city.iso2
                            option.textContent = city.name 
                            citySelect.appendChild(option)
                        })
                    })
                }
                
                loadCountries();
            }else{
                let html = ` `;
                document.querySelector('.js-option').innerHTML=html;
                filter_option = 'no';
            } 
        });
        
    }
    
    filtershow();
    */

    let loginopacity = 'no';

    document.querySelector('.js-header-login').addEventListener('click',()=>{
        if(loginopacity === 'no'){
            let html = `
            <div class="login-side" style="background-color:rgba(255, 255, 255, 0.299);">
                <div class="buyer-tooltip">
                    <a href="save.html">
                            <div class="save-image">
                                <img class="header-save-image" src="—Pngtree—line icon save_5784773.png">
                                <div class="save-total js-save-total">
                                    <div class="save-total-number ">
                                                    ${save.length}
                                    </div>
                                </div>   
                            </div>
                        </a>
                </div>
                <div class="seller-tooltip">
                    <div class="header-login" style="margin:0px;" >
                        <img class="header-save-image" style="width:30px; height:30px; margin:0px;" src="user.png">
                        
                    </div>
                </div>
            </div>  
            `;
            document.querySelector('.js-loginopacity').innerHTML=html;
            loginopacity = 'yes';
        }else{
            let html = ` `;
            document.querySelector('.js-loginopacity').innerHTML=html;
            loginopacity = 'no';
        } 
    });



    let html = '';

    document.querySelector('.js-main-rentify-details').innerHTML = html;

    rentify.forEach((rentify)=>{
        console.log(rentify.image[0].id)

        html += `<div class="flex-rentify" id="${rentify.image[0].id}">
                    <div class="rentifydetail">
                        <div class="rentify-image">
                                <img class="images" src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${rentify.image[0].id}">
                        </div>
                        <div class="rentify-details">
                            <img class="location" src="pngwing.com.png">
                            <div class="rentify-place">${rentify.district}, ${rentify.state}</div>
                            <div class="some-details">
                                <div class="some-detail">
                                    <img style="width:12px;margin-right:8px;" src="double-bed.png">
                                    Bedroom : ${rentify.numberofbedroom}
                                </div>
                                <div class="dots">
                                    .
                                </div>
                                <div class="some-detail">
                                    <img style="width:12px;margin-right:8px;" src="shower.png">
                                    Bath : ${rentify.numberofbathroom}
                                </div>
                            </div>
                            <div class="design-line">

                            </div>
                            <div class="amount">
                                &#8377;  ${rentify.price}/-
                            </div>
                            <div>
                                <button class="save js-save"  data-rentify-id="${rentify.image[0].id}">Save</button>
                                
                                <button class="view js-view-button" data-rentify-id="${rentify.image[0].id}"  data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
        `;
        document.querySelector('.js-main-rentify-details').innerHTML = html;
    });


    anotherTimeSave(1);
    filteroperation();

    function filteroperation(){
        document.querySelector('.js-search').addEventListener('click',()=>{

            html='';
        
            let state = document.getElementById('2').options[document.getElementById('2').selectedIndex].text;
            let district = document.getElementById('3').options[document.getElementById('3').selectedIndex].text;
            console.log(district,state)/*
            let rentify_type = document.querySelector('.js-text3').value;
            let price= document.querySelector('.js-text4').value;*/
            district=district.trim();
            document.querySelector('.js-main-rentify-details').innerHTML = html;
        
            let no_item = 'yes';
        
            rentify.forEach((rentify)=>{  
                console.log(district.toLowerCase(),rentify.district.toLowerCase(), state.toLowerCase(),rentify.state.toLowerCase() )
                console.log((district.toLowerCase()===rentify.district.toLowerCase().trim()))  
                console.log( (state.toLowerCase()===rentify.state.toLowerCase()))
                if((district.toLowerCase().split("").join("")===rentify.district.toLowerCase().trim().split("").join(""))&&(state.toLowerCase().split("").join("")===rentify.state.toLowerCase().split("").join(""))){
                    console.log('hlo');
                        html +=`<div class="flex-rentify" id="${rentify.image[0].id}">
                                    <div class="rentifydetail">
                                        <div class="rentify-image">
                                                <img class="images" src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${rentify.image[0].id}">
                                        </div>
                                        <div class="rentify-details">
                                            <img class="location" src="pngwing.com.png">
                                            <div class="rentify-place">${rentify.district}, ${rentify.state}</div>
                                            <div class="some-details">
                                                <div class="some-detail">
                                                    <img style="width:12px;margin-right:8px;" src="double-bed.png">
                                                    Bedroom : ${rentify.numberofbedroom}
                                                </div>
                                                <div class="dots">
                                                    .
                                                </div>
                                                <div class="some-detail">
                                                    <img style="width:12px;margin-right:8px;" src="shower.png">
                                                    Bath : ${rentify.numberofbathroom}
                                                </div>
                                            </div>
                                            <div class="design-line">
        
                                            </div>
                                            <div class="amount">
                                                &#8377;  ${rentify.price}/-
                                            </div>
                                            <div>
                                                <button class="save js-save"  data-rentify-id="${rentify.image[0].id}">Save</button>
                                                
                                                <button class="view js-view-button" data-rentify-id="${rentify.image[0].id}" data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                                            
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        `;
                        no_item = 'no';
                }
                document.querySelector('.js-main-rentify-details').innerHTML = html;
            })
        
            if(no_item==='yes'){
                html=`No related item`;
                document.querySelector('.js-main-rentify-details').innerHTML = `
                    <div>
                        ${html}
                    </div>
                `;
            }
        /*
            document.querySelector('.js-text1').value='';
            document.querySelector('.js-text2').value='';
            document.querySelector('.js-text3').value='';
            */
            console.log(html);
            anotherTimeSave(1);
            anotherTimesaved();
            viewbutton(view);
            document.querySelector('.js-next-button').innerHTML=``;
            /*
            let icnor = ` `;
            document.querySelector('.js-option').innerHTML=icnor;*/
            
        });
        
    }

    console.log(save);



    anotherTimesaved();

    document.querySelector('.js-save-total').innerHTML=`${save.length}`;


    viewbutton(view);

    changeviewtype();
}


let page=2;
next();
function next(){
        document.querySelector('.js-read-more-next').addEventListener('click',()=>{
            let next = (page-1)*12;
            console.log(next);
            document.querySelector('.js-previous-button').innerHTML=`
                <button class="read-more-button js-read-more-pre">Previous</button>
            `;
            previous();
            
            function wait(){
                console.log(rentify.length,'vijay');
                if(rentify.length<12){
                    document.querySelector('.js-next-button').innerHTML=``; 
                }
                page+=1;
            }
            rentifyFetchHomepage(loadRentify,next,wait);
            
        })
}
function nxt(){
        document.querySelector('.js-read-more-next').addEventListener('click',()=>{
            let next = (page-1)*12;
            console.log(next);
            document.querySelector('.js-previous-button').innerHTML=`
                <button class="read-more-button js-read-more-pre">Previous</button>
            `;
            previous();
            
            function wait(){
                console.log(rentify.length,'vijay');
                if(rentify.length<12){
                    document.querySelector('.js-next-button').innerHTML=``; 
                }
                page+=1;
            }
            rentifyFetchHomepage(loadRentify,next,wait);
            
        })
}
function previous(){
        document.querySelector('.js-read-more-pre').addEventListener('click',()=>{
            page-=2;
            let next = (page-1)*12;
            console.log(next);
            if(page===1){
                document.querySelector('.js-previous-button').innerHTML=``;
            }
            function wait(){
            if(rentify.length===12){
                document.querySelector('.js-next-button').innerHTML=`
                    <button class="read-more-button js-read-more-next">Next</button>
                `; 
                nxt();
            }
            page+=1;
            }
            rentifyFetchHomepage(loadRentify,next,wait);
            
        })
}

console.log(loginuser,'hi');
if(loginuser==="m"){
    let data='index.html';
    localStorage.setItem('windowside',JSON.stringify(data));
    document.querySelector('.js-login').innerHTML=`
        <a href="login.html">
                <img class="header-save-image" src="user.png">
                <div class="login-tooltip">Login</div>
        </a>
    `;
}else{
    document.querySelector('.js-login').innerHTML=`
    <div style="display:flex; padding-top:5px;  justify-content: center; align-items: center;color:rgb(95, 10, 9); font-size:16px; font-weight: bold;">
            ${loginuser.firstname.charAt(0)}
    </div>  
 `; 
}
