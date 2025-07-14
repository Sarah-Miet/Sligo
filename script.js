document.addEventListener("DOMContentLoaded", function () {
    const videoBtn = document.getElementById("VideoButton");
    if (videoBtn) {
        videoBtn.addEventListener("click", function () {
            window.location.href = "videos.html";
        });
    }

    const memberBtn = document.getElementById("MemberButton");
    if (memberBtn) {
        memberBtn.addEventListener("click", function () {
            window.location.href = "member.html";
        });
    }

    const toMemberBtn = document.getElementById("ToMemberButton");
    if (toMemberBtn) {
        toMemberBtn.addEventListener("click", function () {
            window.location.href = "member.html";
        });
    }

    const toVideoBtn = document.getElementById("ToVideoButton");
    if (toVideoBtn) {
        toVideoBtn.addEventListener("click", function () {
            window.location.href = "videos.html";
        });
    }
    const toHomeBtn = document.getElementById("ToHomeButton");
    if (toHomeBtn) {
        toHomeBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});