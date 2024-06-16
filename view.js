import { rentify,rentifyFetch } from "./rentify-details.js";
import { view ,loginuser} from "./common.js";
import {anotherTimeSave,anotherTimesaved,viewbutton} from '../js/commonfunction.js';

rentifyFetch(loadViewpage);


function loadViewpage(){
    console.log(view);

    view.forEach((view)=>{
        document.querySelector('.js-view-header').innerHTML=`View (${view.district},${view.state})`;
    })


    let viewhtml='';

    view.forEach((view)=>{
        rentify.forEach((rentify)=>{

            if(Number(view.userid)===rentify.image[0].id){
                viewhtml+=`
                        <div class="view-image-side">
                            <div class="image-border">
                                <img class="image" style="z-index:50;" src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${rentify.image[0].id}">
                                <div style="width:50px; height:50px;background-color:white;position:absolute; bottom:-35;left:-40; border-style: solid; border-width: 0.5px;border-radius: 8px; border-color:rgba(0, 128, 0, 0.42); ">

                                </div>
                            </div>
                            
                        </div>
                
                        
                        <div class="full-details">
                            <table border="0">
                                <tr>
                                    <td colspan="1"></td>

                                    <td  class="texts" align="end" colspan="1">
                                        <img class="logos" src="../rentify-images/pngwing.com.png">
                                    </td>
                                    <td  colspan="1"class="texts" align="end">
                                        Area :
                                    </td>
                                    <td colspan="6"  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;" align="start">
                                    ${rentify.street}, ${rentify.district},  ${rentify.state}.
                                    </td>
                                </tr>
                                <tr>
                                    <td align="end" colspan="2"  class="texts">
                                        <img class="logos" src="../rentify-images/shower.png">
                                    
                                    </td>
                                    <td  class="texts" align="end">
                                        Bath :
                                    </td>
                                    <td class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">${rentify.numberofbathroom}</td>
                                    <td align="end" colspan="2"  class="texts">
                                        <img class="logos" src="../rentify-images/double-bed.png">
                                        
                                    </td>
                                    <td  class="texts" align="end">
                                        Bedroom :
                                    </td>
                                    <td class="texts" style="color:rgb(12, 9, 95); padding-left:10px;
                                    ">${rentify.numberofbedroom}</td>
                                </tr>
                                <tr>
                                    <td align="end" class="texts">
                                        <img class="logos" src="../rentify-images/hospital-buildings (1).png">
                                        
                                    </td>
                                    <td  class="texts" align="end">
                                        Hospital :
                                    </td>
                                    <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">${rentify.hospital}km</td>
                                    <td align="end" class="texts">
                                        <img class="logos" src="../rentify-images/school.png">
                                    
                                    </td>
                                    <td  class="texts" align="end">
                                        School :
                                    </td>
                                    <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">${rentify.school}km</td>
                                    <td align="end" class="texts">
                                        <img class="logos" src="../rentify-images/college.png">
                                        
                                    </td>
                                    <td  class="texts" align="end">
                                        College :
                                    </td>
                                    <td  class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">${rentify.college}km</td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="9"  class="texts">
                                        
                                        <button class="more js-more">more..</button>
                                        
                                    </td>
                                </tr>
                                
                            </table>
                        </div>
                `;
                document.querySelector('.js-view-side-details').innerHTML=viewhtml;
                fullDetaillogin();
            }
        })
    })

    function fullDetaillogin(){
        document.querySelector('.js-more').addEventListener('click',()=>{
            if(loginuser==="m"){
                localStorage.removeItem('windowside');
                let data='fulldetail.html';
                localStorage.setItem('windowside',JSON.stringify(data));
                window.location.href="login.html";
            }else{
                window.location.href="fulldetail.html";
            }
        })
    }

    let viewhtml2='';

    view.forEach((view)=>{
        //console.log(view);
        rentify.forEach((rentify)=>{
            //console.log(view.state,rentify.state,view.district,rentify.district);
            if(view.state===rentify.state && view.district===rentify.district){
                viewhtml2+= `
                <div class="flex-rentify "  id="${rentify.image[0].id}">
                                    <div class="rentifydetail">
                                        <div class="rentify-image">
                                                <img class="images" src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${rentify.image[0].id}">
                                        </div>
                                        <div class="rentify-details">
                                            <img class="location" src="../rentify-images/pngwing.com.png">
                                            <div class="rentify-place">${rentify.district}, ${rentify.state}</div>
                                            <div class="some-details">
                                                <div class="some-detail">
                                                    <img style="width:12px;margin-right:8px;" src="../rentify-images/double-bed.png">
                                                    Bedroom : ${rentify.numberofbedroom}
                                                </div>
                                                <div class="dots">
                                                    .
                                                </div>
                                                <div class="some-detail">
                                                    <img style="width:12px;margin-right:8px;" src="../rentify-images/shower.png">
                                                    Bath : ${rentify.numberofbathroom}
                                                </div>
                                            </div>
                                            <div class="design-line">
        
                                            </div>
                                            <div class="amount">
                                                &#8377; ${rentify.price}/-
                                            </div>
                                            <div>
                                                <button class="save js-save"  data-rentify-id="${rentify.image[0].id}">Save</button>
                                                
                                                <button class="view js-view-button" data-rentify-id="${rentify.image[0].id}" data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                                            
                                            </div>
                                        </div>
                                    </div>
                            </div>
                    `;
                    document.querySelector('.js-view-grid').innerHTML=viewhtml2;

            }

        })
        anotherTimeSave();
        anotherTimesaved();
        viewbutton(view);

    })
}