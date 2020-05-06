function onAvatarMouseOver() {
    document.getElementById("win-quote").style.display = "inline";
    animateGlasses(3.0, 2.5, 4.5, 5.0, 5.0);
}

function onAvatarMouseOut() {
    document.getElementById("win-quote").style.display = "none";
    animateGlasses(2.5, 3.0, 5.0, 4.5, 5.0);
}

function animateGlasses(rightFrom, rightTo, topFrom, topTo, stepsNumber) {
    let glasses = document.getElementById("glasses");
    let rightStep = (rightTo - rightFrom) / stepsNumber;
    let topStep = (topTo - topFrom) / stepsNumber;
    for (let i = 0; i < stepsNumber; i++) {
        glasses.style.right = rightFrom + "rem"
        glasses.style.top = topFrom + "rem";

        rightFrom += rightStep;
        topFrom += topStep;
    }
}