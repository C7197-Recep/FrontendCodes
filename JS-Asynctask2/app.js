/* eslint-disable no-unused-expressions */
/* eslint-disable arrow-body-style */

const renderCountry = (data, className = '') => {
  const countryElm = document.querySelector('.countries');
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countryElm.insertAdjacentHTML('beforeend', html);
  countryElm.style.opacity = 1;
};

// // AJAX Calls
// // XMLHttpRequest - XHR
// // old way, not common anymore
// const getCountryData = (country) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
//     });
// };

// getCountryData('turkey');

// const request = fetch('https://restcountries.eu/rest/v2/nam/turkey');
// console.log(request);

// const request = fetch('');
// console.log(request);

// request
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     renderCountry(data[0]);
//   });

// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/nam/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`something went wrong (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch((err) => console.log(err.message));
// };

// getCountryData('Turkey');
// // getCountryData('Germany');
// // getCountryData('Canada');

// const getCountryNeighbourData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`something went wrong (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`No neighbour (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch((err) => console.log(err.message));
// };
/*
const getCountryJSONData = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
*/
/*
const getCountryNeighbourData = (country) => {
  getCountryJSONData(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'No such country'
  )
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      console.log(neighbour);
      return getCountryJSONData(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'No Neighbour'
      );
    })

    .then((data) => {
      renderCountry(data, 'neighbour');
    })
    .catch((err) => console.log(err.message));
};

getCountryNeighbourData('Turkey');

*/

// building promise

// const flipCoinPromise = new Promise((resolve, reject) => {
//   console.log('Welcome to toss game');
//   console.log('Flipping the coin');
//   setTimeout(() => {
//     Math.random() >= 0.5
//       ? resolve('Here Head Comes! You Win!')
//       : reject(new Error('Tail comes'));
//   }, 5000);
// });

// flipCoinPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// setTimeout(() => {
//   console.log('1 second passed');
// }, 1000);
// setTimeout(() => {
//   console.log('2 second passed');
// }, 1000);
// setTimeout(() => {
//   console.log('3 second passed');
// }, 1000);
// setTimeout(() => {
//   console.log('4 second passed');
// }, 1000);
/*
const wait = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed');
    return wait(1);
  });
*/

// const getCountryNeighbourDataAsync = async (country) => {
//   try {
//     let response = await fetch(
//       `https://restcountries.eu/rest/v2/name/${country}`
//     );
//     console.log(response);

//     if (!response.ok)
//       throw new Error(`something went wrong (${response.status})`);

//     let data = await response.json();

//     renderCountry(data[0]);

//     const neighbour = data[0].borders[0];

//     response = await fetch(
//       `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//     );

//     if (!response.ok) throw new Error(`No neighbour (${response.status})`);

//     data = await response.json();
//     renderCountry(data, 'neighbour');
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// getCountryNeighbourDataAsync('New Zealand');

/*fetch internet bağlantısı giderse hata verir onun dışında hata vermiyor.
404 ü hata olarak kabul etmiyor. ama axios bunu hata kabul ediyor.
bir de axios kullanmak için js de require ya da cdn ile dahil etmek gerekiyor
reactte ise import ile dahil etmek gerekiyor.*/
const getCountryNeighbourDataAsyncAxios = async (country) => {
  try{
    const response=await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    renderCountry(response.data[0]);

    response.data[0].borders.forEach (async (neighbour) => {
      const neighbourResponse = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`
      );
      renderCountry(neighbourResponse.data,"neighbour");
    });

  }catch(err){
    console.log(err.message);
  }
}

// getCountryNeighbourDataAsyncAxios("Turkey");

const wait = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const createImage = (imgPath) => {
  const imgContainer = document.querySelector(".images");
  return new Promise((resolve, reject) =>{
    const img = document.createElement("img");
    /*img lere src yüklemesi asenkron bir işlemdir. browser kendisi yapar.*/
    img.src=imgPath;

    img.addEventListener("load", ()=>{
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", ()=>{
      reject(new Error("image not found"));
    });
  });
}

let currentImg;

// createImage("./images/image1.jpg")
// .then((img)=>{
//   currentImg=img;
//   console.log("Image1 loaded");
//   return(wait(3));
// })
// .then(()=>{
//   currentImg.style.display="none";
//   return createImage("./images/image2.jpg");
// })
// .then((img)=>{
//   currentImg=img;
//   console.log("image2 loaded");
//   return(wait(3));
// })
// .then(()=>{
//   currentImg.style.display="none";
// });


async function displayImages(){
  let img = await createImage("images/image1.jpg");
  console.log("image 1 loaded");
  await wait(3);
  img.style.display="none";
  img = await createImage("images/image2.jpg");
  console.log("image 2 loaded");
  await wait(3);
  img.style.display="none";
}
//displayImages();

const loadImages = async function (number){
  const imagePaths=Array.from(
      {length:number}, 
      (_,index)=>`images/image${index+1}.jpg`
  ); 

  const images = imagePaths.map((img) => createImage(img));
  const imageElms = await Promise.all(images);
  imageElms.forEach((img)=>img.classList.add("parallel"));
}
loadImages(6);



const get3Countries = async function (c1,c2,c3){
  try{    
    /*bu şekildeawaitler birbirini bekliyor.
    buna gerek yok. birbirini beklememesi için 
    parallel promising geliştirilmiş*/
    // const res1=await axios.get(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const res2=await axios.get(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const res3=await axios.get(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // renderCountry(res1.data[0]);
    // renderCountry(res2.data[0]);
    // renderCountry(res3.data[0]);

    /*Parallel Promising
    diğer parallel promising metodları aşağıda*/
    const data = await Promise.all(
      [
        axios.get( `https://restcountries.eu/rest/v2/name/${c1}`),
        axios.get( `https://restcountries.eu/rest/v2/name/${c2}`),
        axios.get( `https://restcountries.eu/rest/v2/name/${c3}`),
      ]
    );
  }catch (err){
    console.log(err.message);
  }
}

get3Countries("Turkey", "Canada", "Germany");

const timeOut = (sec) => {
  return new Promise ((_,reject)=>{
    setTimeout(reject(new Error("Request took too long"),sec *1000),);
  });
}

/*ilk tamamlanan promisi döndürür
bu şekilde promisinlerin tamamlanma zamanı ya da
sırasını ölçebiliriz*/
// Promise.race([
//   axios.get( `https://restcountries.eu/rest/v2/name/Turkey`),
//   timeOut(0.01),
//   axios.get( `https://restcountries.eu/rest/v2/name/Germany`),
// ])
// .then((res)=>renderCountry(res.data[0]))
// .catch((err)=>console.log(err.message));

// Promise.allSettled([
//   axios.get( `https://restcountries.eu/rest/v2/name/Turkey`),
//   timeOut(1),
//   axios.get( `https://restcountries.eu/rest/v2/name/Germany`),
// ])
// .then((res)=>renderCountry(res[0].value.data[0]))
// .catch((err)=>console.log(err.message));

// Promise.all([
//   Promise.resolve("Success"),
//   Promise.reject(new Error("Error, something went wrong")),
//   Promise.resolve("Success")
// ])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err.message));


// /*rejected olanı görmez, ilk successful olanı döndürür*/
// Promise.any([
//   Promise.resolve("Success"),
//   Promise.reject(new Error("Error, something went wrong")),
//   Promise.resolve("Success")
// ])
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err.message));