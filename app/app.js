import * as MODEL from "./model.js";

function route(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    let pageIDArray = pageID.split("/");
    pageID = pageIDArray[0];
    let subPageID = pageIDArray[1];
    // console.log("sub" + subPageID);

    if(pageID == ""){
        MODEL.changePage("home");
    } else {
        if (pageID == subPageID) {
            MODEL.changePage(pageID)
        } else {
            MODEL.changePage(pageID, subPageID);
        }
    }
}


function initApp(){
    $(window).on("hashchange", route);
    route();
}

function initListeners(){
    $("submit").on("click", function (e) {
        e.preventDefault();

        let un = $("#uName").val();
        let pw = $("#passWord").val();

        let em = $("#eMail").val();
        let ps = $("#pWord").val();



        if (un == "") {
        alert("Username Entered");
        } else if(pw == "") {
            alert("Password Entered");
        }
        if (em == "") {
          alert("Email Entered");
          } else if(ps == "") {
              alert("Password Entered");
          }
        
    });
}




$(document).ready(function () {
    // MODEL.setCurrentPageContent("home");
    console.log("ready");
    initListeners();
    initApp();
});

$(window).on("load", function (){
    console.log("loaded");
});

