

let createBlogBtn = document.getElementById("createBlogBtn");
let searchInput = document.getElementById("searchInput");

let cardData = document.getElementById("cardData");


let backDrop = document.getElementById("backDrop");
let form = document.querySelectorAll("form");
let formClose = document.querySelectorAll(".formClose");

let formUpdate = document.getElementById("formUpdate");
let formDelete = document.getElementById("formDelete");
let formSubmit = document.getElementById("formSubmit");

let formControlInput1 = document.getElementById("formControlInput1");
let formControlInput2 = document.getElementById("formControlInput2");
let formControlInput3 = document.getElementById("formControlInput3");
let formControlTextarea4 = document.getElementById("formControlTextarea4");

let allLi = document.getElementById("allLi");
let sportsli = document.getElementById("sportsli");
let travelli = document.getElementById("travelli");
let politicsli = document.getElementById("politicsli");
let entertainmentli = document.getElementById("entertainmentli");
let favouriteli = document.getElementById("favouriteli");



function create_UUID() {
    // Get the current time in milliseconds since the Unix epoch.
    var dt = new Date().getTime();
    // Replace the placeholders in the UUID template with random hexadecimal characters.
    var uuid = 'axxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // Generate a random hexadecimal digit.
        var r = (dt + Math.random() * 16) % 16 | 0;
        // Update dt to simulate passage of time for the next random character.
        dt = Math.floor(dt / 16);
        // Replace 'x' with a random digit and 'y' with a specific digit (4 for UUID version 4).
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    // Return the generated UUID.
    return uuid;
}
// ------------------------create_UUID----------------

let blogData = [
    {
        title: "BG Trophy",
        category: "Sport",
        image: "https://newsroompost.com/wp-content/uploads/2024/09/Border-Gavaskar-2024.jpg",
        description: "The Border–Gavaskar Trophy (BGT)[3] is an International Test cricket trophy played between India and Australia. The series is named after distinguished former captains, Australia's Allan Border and India's Sunil Gavaskar. It is played via Test series scheduled using International Cricket Council's Future Tours Programme. The winner of a Test series wins the trophy. If a series is drawn, the country holding the trophy retains it. Given the competitive nature of the India–Australia rivalry and the high standings of both teams, the Border–Gavaskar trophy is considered to be one of the most prestigious bilateral trophies in 5-day cricket. Throughout the history of the BGT, India have maintained competitive success against Australian teams. Out of 16 test series, India have been victorious 10 times, Australia have won 5 times, and one series was drawn.",
        id: create_UUID(),
    },
    {
        title: "Maharastra Vidhansabha War @2024",
        category: "Politics",
        image: "https://i.ytimg.com/vi/UZgTDEL7Gyo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBqA2wOg4RrGKC1eusD894qRUokJg",
        description: "Maharashtra is India's third largest state by area and has over 112 million inhabitants. Its capital, Mumbai, has a population of approximately 18 million; Nagpur is Maharashtra's second, or winter, capital.[1] Government in the state is organized on the parliamentary system. Power is devolved to large city councils, district councils (zilla parishad), subdistrict (taluka) councils, and village parish councils (gram panchayat). The numerically strong Maratha–Kunbi community dominates the state's politics. The state has national and regional parties serving different demographics, such as those based on religion, caste, and urban and rural residents.",
        id: create_UUID(),
    },
    {
        title: "My Travel Diary",
        category: "Travel",
        image: "https://media.licdn.com/dms/image/v2/D4D12AQE_qG3ZOERvhQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1665298567815?e=2147483647&v=beta&t=rq3R8MrGvCOf1uGOFqPRg6iu9Wl1bmHUtnbRAvNWNXw",
        description: "Travel blogging can be an exhilarating journey, filled with new experiences and storytelling opportunities. But what if you could harness the skills you've developed as a travel blogger to embark on a new career path in travel marketing? Your ability to create engaging content, understand audience needs, and leverage social media platforms can be a powerful asset in the marketing industry. By considering your blogging experience as a foundation, you can transition into a role that not only values your expertise but also offers new challenges and growth opportunities.",
        id: create_UUID(),
    },
    {
        title: "ICC Champions Trophy 2025",
        category: "Sport",
        image: "https://insightpakistan.pk/wp-content/uploads/2024/10/Champions-Trophy-2025-Schedule-Heres-Expected-Teams-and-Matches-Details.png",
        description: "The 2025 ICC Champions Trophy will be the ninth edition of the ICC Champions Trophy. It will be hosted by Pakistan and United Arab Emirates from 19 February to 9 March 2025 and will be contested by the top eight ranked men's national teams qualified from the 2023 Cricket World Cup. Pakistan are the defending champions, having won the previous edition in 2017.",
        id: create_UUID(),
    },
    {
        title: "The Evolution of Football Tactics",
        category: "sports",
        image: "https://thefalse9.com/wp-content/uploads/2024/09/Designer-6.jpeg",
        description: "A deep dive into how football strategies have changed over the decades, from the early days of the game to modern-day formations and player roles. A deep dive into how football strategies have changed over the decades, from the early days of the game to modern-day formations and player roles. A deep dive into how football strategies have changed over the decades, from the early days of the game to modern-day formations and player roles. A deep dive into how football strategies have changed over the decades, from the early days of the game to modern-day formations and player roles.",
        id: create_UUID(),
    },
    {
        title: "Breaking Down the Physics of a Perfect Golf Swing",
        category: "sports",
        image: "https://i.ytimg.com/vi/FwQ4k3hGOt8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlTu7bRRIm9ZGrG1RIjvsV9De3yA",
        description: "Explore the science behind a successful golf swing, including clubhead speed, impact angle, and the importance of body rotation. Explore the science behind a successful golf swing, including clubhead speed, impact angle, and the importance of body rotation. Explore the science behind a successful golf swing, including clubhead speed, impact angle, and the importance of body rotation. Explore the science behind a successful golf swing, including clubhead speed, impact angle, and the importance of body rotation.",
        id: create_UUID(),
    },
    {
        title: "The Mental Game: Overcoming Performance Anxiety in Sports",
        category: "sports",
        image: "https://i.ytimg.com/vi/Ct_547L34Cc/maxresdefault.jpg",
        description: "Learn how to manage nerves, build confidence, and maintain focus under pressure to achieve peak performance in any sport.Learn how to manage nerves, build confidence, and maintain focus under pressure to achieve peak performance in any sport. Learn how to manage nerves, build confidence, and maintain focus under pressure to achieve peak performance in any sport. Learn how to manage nerves, build confidence, and maintain focus under pressure to achieve peak performance in any sport. Learn how to manage nerves, build confidence, and maintain focus under pressure to achieve peak performance in any sport.",
        id: create_UUID(),
    },
    {
        title: "The Rise of Esports: A New Era of Competitive Gaming",
        category: "sports",
        image: "https://media.licdn.com/dms/image/v2/D4D12AQFPQLsDWfDsKQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695016059921?e=2147483647&v=beta&t=dP4N4Inok7i0x-R0XnDV5c_1l7BVz2d2HnwSND_iXnc",
        description: "Discover the world of esports, from popular games like League of Legends and Dota 2 to the professional leagues and global competitions. Discover the world of esports, from popular games like League of Legends and Dota 2 to the professional leagues and global competitions. Discover the world of esports, from popular games like League of Legends and Dota 2 to the professional leagues and global competitions. Discover the world of esports, from popular games like League of Legends and Dota 2 to the professional leagues and global competitions. ",
        id: create_UUID(),
    },
    {
        title: "Salman Khan's Sikandar teaser postponed",
        category: "Entertainment",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/27/full/1735290807-9209.png?im=FitAndFill=(826,465)",
        description: "The teaser of Salman Khan's Sikandar was scheduled to release today, but the makers postponed it due to Ex-PM Manmohan Singh's demise The teaser of Salman Khan's Sikandar was scheduled to release today, but the makers postponed it due to Ex-PM Manmohan Singh's demise The teaser of Salman Khan's Sikandar was scheduled to release today, but the makers postponed it due to Ex-PM Manmohan Singh's demise The teaser of Salman Khan's Sikandar was scheduled to release today, but the makers postponed it due to Ex-PM Manmohan Singh's demise The teaser of Salman Khan's Sikandar was scheduled to release today, but the makers postponed it due to Ex-PM Manmohan Singh's demise",
        id: create_UUID(),
    },
    {
        title: "Chala Hava Yeudya",
        category: "Entertainment",
        image: "https://m.media-amazon.com/images/M/MV5BNGVjZDhiOTUtMDYzMi00M2Q2LTllNzEtODRjNzdmYmI0NjBhXkEyXkFqcGc@._V1_.jpg",
        description: `Chala Hawa Yeu Dya (transl. Let the wind blow) was an Indian Marathi language TV reality show which aired on Zee Marathi. It was Zee Marathi's fourth longest running Indian television show in Marathi language.[1][2]

    The show opens with Nilesh Sable's topical comic monologue, then transitions into guest interviews featuring celebrity guests typically from the Marathi film and theatre industry followed by comedic sketches by recurring performers Bhalchandra Kadam, Kushal Badrike, Bharat Ganeshpure, Shreya Bugde, Sagar Karande, Ankur Vadhave, Yogesh Shirsat, Tushar Deol, Umesh Jagtap, Snehal Shidam.[3][4] It premiered from 18 August 2014 by replacing Fu Bai Fu.[5][6]`,
        id: create_UUID(),
    }]


const handlefavouriteIcon = (ele) => {
    const getId = ele.getAttribute("data-id");
    const localData = getUserData();
    const localObj = localData.find(e => e.id === getId);

    localObj.isFavourite = !localObj.isFavourite;

    // Find the object's index and replace it in the array
    // const indexOfLocalObj = localData.findIndex(e => e.id === getId);
    
    // localData.splice(indexOfLocalObj, 1, localObj);

   // [{}{t>f || f>-}{}{}{}]

    // Save updated data to localStorage
    localStorage.setItem("blogData", JSON.stringify(localData));
    templating(localData);
};

function handleShowFavourited() {
    let localData = getUserData();  

    let favouritedBlog = localData.filter(blog => blog.isFavourite === true)
    templating(favouritedBlog)
}
favouriteli.addEventListener("click", handleShowFavourited)


// -------------------------- Adding to Favourite is done here Functionality Completed Here --------------------------


handleEditBlog = (eve) => {
    console.log(eve);
    formSubmit.classList.add("d-none");
    formUpdate.classList.remove("d-none");
    backDrop.classList.toggle("createFormBackground");

    let createBlogForm = document.getElementById("createBlogForm");
    createBlogForm.classList.toggle("d-none");

    let getId = eve.getAttribute("data-id");
    localStorage.setItem("id", JSON.stringify(getId));

    let localData = getUserData();
    let localObj = localData.find(e => e.id === getId);

    formControlInput1.value = localObj.title;
    formControlInput2.value = localObj.image;
    formControlInput3.value = localObj.category;
    formControlTextarea4.value = localObj.description;
   
}

handleDeleteBlog = (eve) => {
    let getId = eve.getAttribute("data-id");
    let localData = getUserData();
    let localObj = localData.find(e => e.id === getId)
    let modifiedData = localData.filter(obj => obj.id !== getId);
    localStorage.setItem("blogData", JSON.stringify(modifiedData));
    templating(modifiedData);
    Swal.fire({
        icon: "error",
        title: "Deleted",
        text: "Blog Deleted Successfully !",
        footer: '<a href="#">Why do I have this issue?</a>',
        timer: 2000
      });

}

handleupdateBlog = (eve) => {
    let getId = localStorage.getItem("id");
    let parsed = JSON.parse(getId);

    // let localData = JSON.parse(localStorage.getItem("blogData"));
    let localData = getUserData();

    let localObj = localData.find(e => e.id === parsed);

    // console.log(localObj);

    let indexNo = localData.findIndex(e => e === localObj);
    // console.log(indexNo);

    if (localObj) {
        localObj.title = formControlInput1.value,
            localObj.image = formControlInput2.value,
            localObj.category = formControlInput3.value,
            localObj.description = formControlTextarea4.value
    }

    // console.log(localObj);
    localData.splice(indexNo, 1, localObj)
    // console.log(localData);
    localStorage.setItem("blogData", JSON.stringify(localData))
    templating(localData)
    form[1].reset();
    handleFormClose();
    Swal.fire({
        title: "Successfully Updated !",
        icon: "success",
        draggable: true,
        timer : 1500
    });
}
formUpdate.addEventListener("click", handleupdateBlog)

// -------------------------- Edit / Delete / Update Functionality Completed Here --------------------------


function handleSortByAll() {
    templating(initialUserData);
}
allLi.addEventListener("click", handleSortByAll);

function handleSortBySport() {
    let createSportArr = initialUserData.filter(e => e.category.toLowerCase() === "sport")
    templating(createSportArr);
}
sportsli.addEventListener("click", handleSortBySport);

function handleSortBytravel() {
    let createtravelArr = initialUserData.filter(e => e.category.toLowerCase() === "travel")
    templating(createtravelArr);
}
travelli.addEventListener("click", handleSortBytravel);

function handleSortBypolitics() {
    let createpoliticsArr = initialUserData.filter(e => {
        if (e.category.toLowerCase() === "politics") {
            return e;
        }
    })
    templating(createpoliticsArr);
}
politicsli.addEventListener("click", handleSortBypolitics);

function handleSortByentertainment() {
    let createentertainmentArr = initialUserData.filter(e => {
        if (e.category.toLowerCase() === "entertainment") {
            return e;
        }
    })
    templating(createentertainmentArr);
}
entertainmentli.addEventListener("click", handleSortByentertainment);

// -------------------------- (REFACCTOR)Sorting Functionality Completed Here --------------------------

function handleSearch(eve) {
    // console.log(eve.target.value);
    // [{}{}{}{}{}]

    let searchQuery = eve.target.value.toLowerCase().trim();
    // console.log(searchQuery);
    let serchedBlogs = initialUserData.filter(ele => {

        if (ele.title.toLowerCase().includes(searchQuery) || ele.description.toLowerCase().includes(searchQuery) || ele.category.toLowerCase().includes(searchQuery)) {
            return ele;
        }
    })
    templating(serchedBlogs);
}
searchInput.addEventListener("keyup", handleSearch)

// -------------------------- Search Functionality Completed Here --------------------------

let handleForm = (e) => {
    let createBlogForm = document.getElementById("createBlogForm");
    backDrop.classList.toggle("createFormBackground");
    createBlogForm.classList.toggle("d-none");
    formUpdate.classList.add("d-none");
    formSubmit.classList.remove("d-none");
    // if(createBlogForm.classList.contains("d-none")){
    //     createBlogForm.classList.remove("d-none")
    // }else{
    //     createBlogForm.classList.add("d-none")
    // }
}
createBlogBtn.addEventListener("click", handleForm);

function handleFormClose(eve) {
    let createBlogForm = document.getElementById("createBlogForm");
    backDrop.classList.toggle("createFormBackground");
    form[1].reset()
    createBlogForm.classList.toggle("d-none");
}
formClose.forEach(obj => obj.addEventListener("click", handleFormClose))

function handleFormSubmit(eve) {
    eve.preventDefault();
    let obj = {
        title: formControlInput1.value,
        image: formControlInput2.value,
        category: formControlInput3.value,
        description: formControlTextarea4.value,
        id: create_UUID()
    }

    initialUserData.unshift(obj)

    localStorage.setItem("blogData", JSON.stringify(initialUserData));
    templating(initialUserData);
    form[1].reset()
    handleFormClose()

    Swal.fire({
        title: "Blog Created Successfully !",
        icon: "success",
        draggable: true,
        timer : 2000
    });
}
form[1].addEventListener("submit", handleFormSubmit);

// -------------------------- Form Open / Close / Submit Functionality Completed Here --------------------------

let templating = (data) => {
    let result = ``;
    data.forEach(d => {
        result += `
            <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
              <div class="card cardBg">
                <div class="cardBg favouriteIcon" data-id="${d.id}" onclick = "handlefavouriteIcon(this)"><a href="#." class="cardBg" ><i class="fa-solid fa-star cardBg" style="color:${d.isFavourite ? 'gold' : ''}"></i></a></div>
                    <div class="card-header d-inline d-flex justify-content-between">
                    <h4 class="cardBg">${d.title}<h4>
                    </div>  
                <div class="card-body cardBg d-flex justify-content-center align-items-center">
                  <img class="cardImage cardBg img-fluid" src="${d.image}" alt="${d.title}">
                </div>
                <div class="card-footer cardBg">
                    <h5 class="cardBg text-capitalize">${d.category}</h5>
                    <p class="cardBg">${d.description}</p>
                    <div class="cardFooterIcons d-flex justify-content-between">
                        <a href="#." data-id="${d.id}" onclick="handleEditBlog(this)"><i class="fa-regular fa-pen-to-square cardBg"><span class="cardBg ml-1">Edit</span></i></a>
                        <a href="#." data-id="${d.id}" onclick="handleDeleteBlog(this)" ><i class="fa-solid fa-trash"></i></a>
                    </div>
                </div>
              </div>
            </div>
        `
    })
    cardData.innerHTML = result;
}

// let blogArray = [];
let initialUserData = getUserData();

function getUserData() {
    // console.log(localStorage.getItem("user")); //if empty then null
    if (localStorage.getItem("blogData")) {
        return JSON.parse(localStorage.getItem("blogData"))
    }
    return blogData;
}

templating(initialUserData)


// ---------------------Templating of Initial Data is Completed Here---------------------