document.addEventListener("DOMContentLoaded", (event) => {
    var elements = document.querySelectorAll("#C1, #C2");
    array_1 = {};
    var i;
    
    for (i = 0; i < elements.length; i++) {
        array_1[i] = elements[i].textContent;
    }

    array_2 = {};

    for (i = 0; i<array_1.length; i++) {
        array_2[i+"_placeholder"] = array_1[i];
    }

    console.log(array_1);
    console.log(array_2);

    return [array_1, array_2];
});
