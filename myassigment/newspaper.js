const loadNewsIteam = () => {
fetch('https://openapi.programming-hero.com/api/news/categories')
.then(res => res.json())
.then(data => displayNews(data.data.news_category))

}
const displayNews = newses =>{

const newsContainer = document.getElementById('users-container')

for(const news of newses){
    // console.log(news);

const userDiv = document.createElement('div');
userDiv.innerHTML =`


<h6>${news.category_name}</h6>

`;

newsContainer.appendChild(userDiv)





}

}


loadNewsIteam();


// card section
const loadNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res => res.json())
    .then(data =>displaycard(data.data));


     
    
    }

    const displaycard = data =>{

     const cardcontainer = document.getElementById('container-newsCard')

     data.forEach(data => {
        console.log(data);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML =`
        <div class="card mb-3 d-flex justify-content-center mt-5">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${data.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.details}</p>
            



                <img class="rounded-circle" src="${data.image_url}" alt="" width="50" height="50">
                    <h5 >${data.author}</h5>
                    <p>september-3-2022</p> 
                <div class="d-flex justify-content-evenly">
                    
                <P><i class="fa-solid fa-eye">${data.total_view}</i></P>
                <p><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i></p>
                <button onclick="loadnewsdetails('${data.title}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Show details</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

        `;
  

        cardcontainer.appendChild(newsDiv);



     });

    }
    

const loadnewsdetails =  async  id =>{
const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a${id}`;
const res = await fetch(url);
const data = await res.json();
 displaymodel(data.data);

   const displaymodel = news =>{
    console.log(news);
    const modelContainer = document.getElementById('model');
    modelContainer.innerText = news.name;
    const modeldetails = document.getElementById('modeldetails');
    modeldetails.innerText =`
    <p>name:${author.image ? author.image: 'not fount author image'}</p>
    
    
    
    `
}

}






    















    
    


    

    loadNews();