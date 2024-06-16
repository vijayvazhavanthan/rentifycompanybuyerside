import {rentify,rentifyFetch} from 'rentify-details.js';
import {save,changes,view} from 'common.js';
import {viewbutton} from 'commonfunction.js';

rentifyFetch(loadSaveRentify);

//console.log(save);

function loadSaveRentify(){
    
    document.querySelector('.js-savedpage-save').innerHTML=`Saved properties (${save.length})`;


    let savehtml='';

    save.forEach((save)=>{
        
        rentify.forEach((rentify)=>{
        
            if(rentify.image[0].id===Number(save.userid)){
                savehtml += `
                    <div class="save-rentify-inorder js-removerid${rentify.image[0].id}">
                            <div class="saved-rentify">
                                <div class="right-side">
                                        <img class="images" src="https://web-6nxbzmltd9q5.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/image/show?id=${rentify.image[0].id}">
                                </div>
                                <div class="left-side">
                                    <div>
                                        <img class="location-icon" style="display:inline-block" src="pngwing.com.png">
                                        <div class="detail" style="display:inline-block">${rentify.district}, ${rentify.state}.</div>
                                        <div class="amount">
                                            $ ${rentify.price}/-
                                        </div>
                                        <button style="cursor:pointer;" class="save-button js-delete" data-rentify-id="${rentify.image[0].id}">Delete</button>
                                        <button style="cursor:pointer;" class="view-button js-view-button" data-rentify-id="${rentify.image[0].id}"  data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                `;
                console.log(savehtml);
                document.querySelector('.js-saved-rentify').innerHTML=savehtml;
            }
        })
        viewbutton(view);
    })

    document.querySelectorAll('.js-delete').forEach((button)=>{
        button.addEventListener('click',()=>{
            let id = button.dataset.rentifyId;
            //console.log(id);
            let emp = [];
            save.forEach((save)=>{
                //console.log(Number(save.userid),id);
                if((Number(save.userid))!==(Number(id))){
                    emp.push({userid:`${Number(save.userid)}`});
                }
            });
            //console.log(emp);
            changes(emp);
            //console.log(document.querySelector(`.js-removerid${id}`));
            document.querySelector(`.js-removerid${id}`).remove();
            //console.log(save);
            //console.log('hlo');
            document.querySelector('.js-savedpage-save').innerHTML=`Saved properties (${save.length})`;
        });
    });

    //console.log(document.querySelector('.js-removerid1'))

}
