let state ="still"
let grabber;
const form = document.getElementById('disapear');
const screen = document.querySelector('.container');
const pics = document.createElement('img');
const stopButton = document.getElementById('stop-button');
stopButton.classList.add('unsee1');
let grabber1;
document.getElementById('submit-button').addEventListener('click', function() {
   
    const yourSearch = document.getElementById('word-input').value
    state = "run"
    if (yourSearch){
    
    console.log('checkpoint 1')
        grabber = yourSearch;
        console.log(grabber);
        runFetch(yourSearch);
    form.classList.add('unsee');
    stopButton.classList.remove('unsee1');
    return state;
    
}})

  document.getElementById('stop-button').addEventListener('click', function(){
    form.classList.remove('unsee');
    state = "still"
    const deleteImages = document.querySelector('img')
    deleteImages.remove();
    stopButton.classList.add('unsee1');
    form.classList.remove('unsee1');
    return state;
  })

   

  function runFetch (word){
    fetch(`http://www.reddit.com/search.json?q=${word}+nsfw:no`)
    .then(res => res.json())
    .then(json => {
        // const screen = document.querySelector('.container');
        // const pics = document.createElement('img');
        const bridge2=getLength(json);
        grabber1 = bridge2;
        
        
       for(let i=0; i < bridge2; i++) {
              
                
                    
            setTimeout(function() {
                if (state ==='run'){
                console.log(state);
                const bridge1=getImage(json, i);
                appendImage(bridge1,screen,pics)
                console.log(i);}}, 
                i * 3000, i)
                
            } 
            if (state === 'run'){
                //const deleteImages2 = document.querySelector('img')
    //deleteImages2.rem5ove();
    // function setFoo(callback) {
    //     setTimeout(function() {
    //       foo = 'bar';
    //       callback();
    //     }, 100);
    //   };
    //   setFoo(function() {
    //     console.log(foo);
    //   });
              
    setTimeout(function() {
        runFetch (grabber);
    }, 
        grabber1 * 3000, grabber1)
            
      };
    })
            }
   


//}  

function getImage(a,b){
    const noVideo = a.data.children.filter(pic => pic.data['post_hint'] ==='image')
    const image = noVideo[b].data.url;
    return image;
    }
    
function getLength(a){
    const noVideo = a.data.children.filter(pic => pic.data['post_hint'] ==='image')
    const length = noVideo.length;
    return length; 
}

function appendImage(link,output,image){
    // const output = document.querySelector('.container');
    // const image = document.createElement('img');
    image.setAttribute('src',link);
    output.appendChild(image);
}