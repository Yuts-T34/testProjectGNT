//Show roadmap box
const roadmapBox = document.querySelector(".model-box-roadmap");
const btnCloseBox = document.querySelector("#close-btn-boxRoad");
const btnTitleAll = document.querySelectorAll(".title-roadmap");

btnTitleAll.forEach(btnShowID => {
    btnShowID.addEventListener('click', () => {
        // Check content before and remove for new content.
        const checkDiv = document.querySelectorAll(".content-box");
        // const checkImg = document.querySelectorAll(".img-box");

        if (checkDiv.length >= 1) {
            checkDiv[0].remove('content-box');
        }
        // if (checkImg.length >= 1) {
        //     checkImg[0].remove('img-box');
        // }

        // Show content roadmap and add content roadmap.
        RoadmapData.forEach(roadmaps => {
            if (btnShowID.id === roadmaps.id){
                // // Content img.
                // const img = document.createElement('div');
                // img.classList.add('img-box');
                // const imgContent = `<img src="${(order.productImg)}" alt="${(order.productName)}">`;
                // img.innerHTML = imgContent;
                // document.querySelector('.model-left').appendChild(img);

                // Content text.
                const div = document.createElement('div');
                div.classList.add('content-box');
                const textContent = `<h2>${roadmaps.title}</h2>
                                    <p>${roadmaps.description}</p>
                                    <p><b>Benefits to Holders : </b>${roadmaps.benefits}</p>
                              `;
                div.innerHTML = textContent;
                document.querySelector('.show-detail-roadmap').appendChild(div);
            }
        })
        roadmapBox.style.display = 'block';
    })
})

// Close roadmapBox
btnCloseBox.addEventListener('click', () => {
    roadmapBox.style.display = "none";
})
// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});