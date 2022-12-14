let image_url = "https://pixabay.com/api/?per_page=51&safesearch=true&key=31428133-e0d835b270c6700b8e271b5f4&q=flowers"
let video_url = "https://pixabay.com/api/videos/?per_page=51&safesearch=true&key=31428133-e0d835b270c6700b8e271b5f4&q=flowers"

let images = []

var section = 1


if (section == 1) {
    $('#videos').css("display", "none")
} else {
    $('#gallery').css("display", "none")
}


$('.home').on("click", () => {
    $('#videos').css("display", "none")
    $('#gallery').css("display", "block")
    $('.home').css("background-color", "black")
    $('.home').css("color", "white")
    $('.video').css("background-color", "transparent")
    $('.video').css("color", "black")
    section = 1
})
$('.video').on("click", () => {
    $('#gallery').css("display", "none")
    $('#videos').css("display", "block")
    $('.video').css("background-color", "black")
    $('.video').css("color", "white")
    $('.home').css("background-color", "transparent")
    $('.home').css("color", "black")
    section = 2
})


function IMAGE_FETCH(image_url) {
    fetch(image_url)
        .then(async function (response) {
            const res = await response.json()
            images = res.hits
            let i = 0
            let image_set = 0
            images.map((hit) => {
                if (i % 4 != 0) {
                    console.log("run1")
                    var img = document.createElement("img")
                    img.src = hit.largeImageURL
                    img.height = Math.random() * (520 - 400) + 400
                    console.log('.image_set_' + image_set)
                    document.querySelector('.image_set_' + image_set).appendChild(img)
                    console.log('image')

                }

                else {
                    console.log("run2")
                    var image_set_div = document.createElement("div")
                    console.log('.image_set_' + image_set)
                    image_set_div.classList.add("image_set_" + image_set);

                    document.querySelector('.gallery').appendChild(image_set_div)



                }


                i += 1


                if (i % 4 == 0) {
                    console.log("run3")
                    image_set += 1
                }






            })
        })
        .catch(function (e) {
            console.log(e);
        });
}
function VIDEO_FETCH(video_url) {
    fetch(video_url)
        .then(async function (response) {
            let v = await response.json()
            let v_hits = v.hits
            // console.log(v_hits)
            let videos = []
            let i = 0
            let video_set = 0
            v_hits.map((hit) => {
                let video = hit.videos.medium.url
                videos.push(video)
            })


            videos.map((vv) => {
                if (i % 4 != 0) {
                    console.log("run1")
                    var video = document.createElement("VIDEO")
                    video.id = "videos_"
                    if (video.canPlayType("video/mp4")) {
                        video.setAttribute("src", vv);
                    }

                    video.setAttribute("width", "320");
                    video.setAttribute("height", Math.random() * (340 - 300) + 180);
                    video.setAttribute("autoplay", true)
                    document.querySelector('.video_set_' + video_set).appendChild(video)
                    console.log('.video_set_' + video_set)
                }


                else {
                    console.log("run2")
                    var video_set_div = document.createElement("div")
                    console.log('.video_set_' + video_set)
                    video_set_div.classList.add("video_set_" + video_set);

                    document.querySelector('.videos').appendChild(video_set_div)



                }


                i += 1


                if (i % 4 == 0) {
                    console.log("run3")
                    video_set += 1
                }
            })

        }).catch(function (e) {
            console.log(e);
        });
}


VIDEO_FETCH(video_url)

IMAGE_FETCH(image_url)

$('.search').on("click", (e) => {
    e.preventDefault()
    let keyword = document.getElementById('search').value
    document.getElementById("gallery").innerHTML = ""
    image_url = "https://pixabay.com/api/?per_page=51&safesearch=true&key=31428133-e0d835b270c6700b8e271b5f4&q=" + keyword
    IMAGE_FETCH(image_url)
})



