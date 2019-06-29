var form = document.querySelector(".write-us");
var popupform = document.querySelector(".modal-form");
var close = document.querySelector(".close-modal");
var formcheck = popupform.querySelector("form");
var nameFocus = popupform.querySelector("[name=name]");
var email = popupform.querySelector("[name=email]");
var text = popupform.querySelector("[name=text");
var storage = localStorage.getItem("nameFocus");
var showMap = document.querySelector(".contacts-map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".close-modal");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("nameFocus");
} catch (err) {
    isStorageSupport = false
};

form.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupform.classList.add("modal-show");
    nameFocus.focus();
    if (storage) {
        nameFocus.value = storage;
        text.focus();
    } else {
        nameFocus.focus();
    }
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popupform.classList.remove("modal-show");
    popupform.classList.remove("modal-error");
});

formcheck.addEventListener("submit", function(evt) {
    if (!nameFocus.value || !email.value || !text.value) {
        evt.preventDefault();
        popupform.classList.remove("modal-error");
        popupform.offsetWidth = popupform.offsetWidth;
        popupform.classList.add("modal-error");
    } else {
        if (isStorageSupport) 
        localStorage.setItem("nameFocus", nameFocus.value);
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popupform.classList.contains("modal-show")) {
            evt.preventDefault();
            popupform.classList.remove("modal-show");
            popupform.classList.remove("modal-error");
        }
    }
});

showMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
})
closeMap.addEventListener("click", function(evt){
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
})
window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("modal-show")) {
            evt.preventDefault();
            popupMap.classList.remove("modal-show");
        }
    }
})

var services = document.querySelectorAll(".services-description > div");
    if (0 !== services.length) {
        var servicesNav = document.querySelector(".services-nav"),
            servicesItem = document.querySelectorAll(".services-item");
        servicesNav.addEventListener("click", function(evt) {
            evt.preventDefault();
            var s = evt.target;
            if (s.classList.contains("services-link")) {
                for (var a = s.parentElement, o = 0; o < services.length; o++) services[o].classList.remove("description-active"), servicesItem[o].classList.remove("active");
                var d = ".description-" + s.id.split("-")[0];
                document.querySelector(d).classList.add("description-active"), a.classList.add("active");
            }
        })
    }