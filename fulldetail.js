import { view, loginuser  } from './common.js';
import {rentify,rentifyFetch} from './rentify-details.js';


rentifyFetch(loadFulldetailpage);

function loadFulldetailpage(){
    let fulldetailhtml='';

    view.forEach((view)=>{
        rentify.forEach((rentify)=>{
            console.log(view.userid,rentify.userid);
            if(Number(view.userid)===Number(rentify.image[0].id)){
                fulldetailhtml+=`
                <div>
                    <img class="slideimage"src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${rentify.image[0].id}" style="width:100%">
                </div>
                `;
                
                document.querySelector('.js-myslides').innerHTML=fulldetailhtml;
            }
            
        })
    })

    let fulldetailhtml2='';
    view.forEach((view)=>{
        rentify.forEach((rentify)=>{
            console.log(view.userid,rentify.userid);
            if(Number(view.userid)===Number(rentify.image[0].id)){
                fulldetailhtml2+=`
                <div>      
                    <table border="0">
                        <tr>
                            <td colspan="2"></td>
                            <td  class="texts" align="end">
                                <img class="logos" src="pngwing.com.png">
                            </td>
                            <td  class="texts" align="end">
                                Area :
                            </td>
                            <td colspan="7"  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">
                                ${rentify.street}, ${rentify.district},${rentify.state}.
                            </td>
                        </tr>
                        <tr>
                            <td align="end" colspan="2"  class="texts">
                                <img class="logos" src="shower.png">
                            
                            </td>
                            <td  class="texts" align="end">
                                Bath :
                            </td>
                            <td class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">${rentify.numberofbathroom}</td>
                            <td align="end" colspan="2"  class="texts">
                                <img class="logos" src="double-bed.png">
                                
                            </td>
                            <td  class="texts" align="end">
                                Bedroom :
                            </td>
                            <td class="texts" style="color:rgb(12, 9, 95); padding-left:10px;
                            ">${rentify.numberofbedroom}</td>
                        </tr>
                        <tr>
                            <td align="end" class="texts">
                                <img class="logos" src="hospital-buildings (1).png">
                                
                            </td>
                            <td  class="texts" align="end">
                                Hospital :
                            </td>
                            <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">${rentify.hospital}km</td>
                            <td align="end" class="texts">
                                <img class="logos" src="school.png">
                            
                            </td>
                            <td  class="texts" align="end">
                                School :
                            </td>
                            <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">${rentify.school}km</td>
                            <td align="end" class="texts">
                                <img class="logos" src="college.png">
                                
                            </td>
                            <td  class="texts" align="end">
                                College :
                            </td>
                            <td  class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">${rentify.college}km</td>
                        </tr>
                        <tr>
                            <td align="end" colspan="3"  class="texts">
                                <img class="logos" src="email.png">
                            
                            </td>
                            <td  class="texts" align="end">
                                Email :
                            </td>
                            <td colspan="5"  class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">
                                vijayvazhavantha@gmail.com
                            </td>
                            
                        </tr>
                        <tr>
                            <td align="end" colspan="3"  class="texts">
                                <img class="logos" src="phone-call.png">
                            
                            </td>
                            <td  class="texts" align="end">
                                call :
                            </td>
                            <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">
                                9943358011
                            </td>
                        </tr>
                    </table>
                </div>
                `;
                
                document.querySelector('.js-full-details-more').innerHTML=fulldetailhtml2;
            }
            
        })
    })

    let fulldetailhtml3='';
    view.forEach((view)=>{
        rentify.forEach((rentify)=>{
            console.log(view.userid,rentify.userid);
            if(Number(view.userid)===Number(rentify.image[0].id)){
                fulldetailhtml3+=`
                <div>
                    <table>
                            <tr>
                                        <td class="texts">
                                            <img class="logos" src="account.png">
                                            Name :
                                        </td>
                                        <td class="texts" style="color:black; padding-left:10px;">${rentify.name}</td>
                            </tr>
                    </table>
                </div>
                `;
                
                document.querySelector('.js-owner-details').innerHTML=fulldetailhtml3;
            }
            
        })
    })

}

document.querySelector('.js-interested-button').addEventListener('click',()=>{
   /* 
    const data = {
        email: rentify.email,
        phonenumber: rentify.phonenumber,
        name: firstname,
    };

    fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/aboutabout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        */


    view.forEach((view)=>{
        rentify.forEach((rentify)=>{
            console.log(view.userid,rentify.userid);
            if(Number(view.userid)===Number(rentify.image[0].id)){
                async function mailside(){
                    console.log()
                    const email = loginuser.email;
                    const firstname = rentify.name;
                    const lastname = "hiiiii";
                    const phonenumber = "9123457896";
                    
                    const data = {
                        name: firstname,
                        mail: email,
                        phonenumber: phonenumber,
                        message: lastname
                    };
                    try{
                        const response = await fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/aboutabout',{
                                 method: 'POST',
                                 headers:{
                                     'Content-Type':'application/json'
                                 },
                                 body:JSON.stringify(data)
                             });
                         const order =await response.json();
                         console.log(order,'u');
                         document.querySelector('.js-mail-response').innerHTML="You Receive  the seller details in email";
                         mailsideseller();
                        }catch(error){
                             console.log(error,'hlo')
                        }
                }
                mailside();

                async function mailsideseller(){
                    console.log('hi');
                    console.log(`rentifycompany@gmail.com`);
                    const email = `rentifycompany@gmail.com`;
                    
                    console.log(`rentifycompany@gmail.com`,email);
                    const firstname = loginuser.firstname;
                    const lastname = "hiiiii";
                    const phonenumber = `${loginuser.phonenumber}`;
                    
                    const data = {
                        name: firstname,
                        mail: email,
                        phonenumber: phonenumber,
                        message: lastname
                    };
                    try{
                        const response = await fetch('https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/aboutabout',{
                                 method: 'POST',
                                 headers:{
                                     'Content-Type':'application/json'
                                 },
                                 body:JSON.stringify(data)
                             });
                         const order =await response.json();
                         console.log(order,'u');
                         document.querySelector('.js-mail-response').innerHTML="You Receive  the seller details in email";
                        }catch(error){
                             console.log(error,'hlo')
                        }
                }
                mailside();
            }
            
        })
    })

})
