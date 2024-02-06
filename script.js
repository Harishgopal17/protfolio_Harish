$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbyvCeqGX_IkJ0J1Kwwk8O-8Au59aZWxYXFtd4l-o-IFHuH_7VTt00gdiS2l8mb4cbDR/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Thank you")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})

const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Everything";
    }, 0);
    setTimeout(() => {
        text.textContent = "Love";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Addiction";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Fun";
    }, 12000);
};

textLoad();
setInterval(textLoad, 16000);


