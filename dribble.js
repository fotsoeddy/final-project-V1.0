document.getElementById('popular').style.color = 'pink';

const openfilter = document.querySelector('.dropbtn2');

const filter  = document.querySelector('#filter-content1');


openfilter.addEventListener('click', () =>{
    // filter.classList.remove('filter-content2')
    // filter.classList.add('filter-content')
    filter.classList.toggle('filter-content')
    filter.classList.toggle('filter-content2')
})

const dropbtn = document.querySelector('.dropbtn1');
const dropdowncontent = document.querySelector('#drop-content-popular');

dropbtn.addEventListener('click', (e) =>{
    e.stopPropagation()
    dropdowncontent.classList.remove('show')
    dropdowncontent.classList.add('drop-content-popular1')
})

document.addEventListener('click',(e)=>{
    if(!dropdowncontent.contains(e.target)){
        dropdowncontent.classList.remove('drop-content-popupalr1')
        dropdowncontent.classList.add('show')
    }
})


const opennav = document.querySelector('.burger, .burger-2');
const showcontent = document.querySelector('#new-list-2');

opennav.addEventListener('click', (e) =>{
    opennav.classList.toggle('burger-2')
    opennav.classList.toggle('burger')
    e.stopPropagation()
    showcontent.classList.toggle('new-list-1');
    showcontent.classList.toggle('new-list');
})
document.addEventListener('click', (e) =>{
    if(!showcontent.contains(e.target)){
        if(opennav.className == 'burger-2' && showcontent.className == 'new-list') {
            opennav.className = 'burger'
        }
        showcontent.classList.add('new-list-1')
        showcontent.classList.remove('new-list')        
    }
})
 const imageContainer = document.querySelector('.images')
 async function fetchPhotos(){
         const r = await fetch('https://picsum.photos/v2/list?page=2&limit=20')
     if(r.ok == true){
             return r.json()
     }
     throw new Error('Cannot contact the server')
 }

// fetchPhotos().then((photos)=>{
//     const images = photos.map(element => {
//         return `
//                 <div class="image-infomation">
//                     <div class="image1">
//                         <img src=${element.download_url}>
//                         <div class="image-content">
//                             <p>stuff here Okay...</p>
//                             <div class="icon1">
//                                 <i class="fa fa-bookmark" aria-hidden="true"></i></div>
//                                 <div class="icon2"><i class="fa fa-heart" aria-hidden="true"></i></div>
//                         </div>
//                     </div>
//                     <div class="user-information">
//                         <div class="user-information-logo">
//                             <img src=${element.download_url}>
//                         </div>
//                         <div class="display-name">
//                             <h4>Eddy</h4>
//                         </div>
//                         <div class="team-pro">
//                             <p>PRO</p> 
//                         </div>
//                     </div>
//                 </div>
//             `
//     });
//     imageContainer.innerHTML = images.join('')
// })

fetchPhotos().then((photos) => {
    const images = photos.map((element) => {
      return `
        <div class="image-infomation">
          <div class="image1">
            <img src=${element.download_url}>
            <div class="image-content">
              <p>stuff here Okay...</p>
              <div class="icon1">
                <i class="fa fa-bookmark" aria-hidden="true"></i>
              </div>
              <div class="icon2">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="user-information">
            <div class="user-information-logo">
              <img src=${element.download_url}>
            </div>
            <div class="display-name">
              <h4>${element.author}</h4>
            </div>
            <div class="team-pro">
              
            </div>
          </div>
        </div>
      `;
    });
    imageContainer.innerHTML = images.join('');
  });