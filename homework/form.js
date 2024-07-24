$(function () {
    var $select = $(".1-10");
    for (i = 1; i <= 10; i++) {
        $select.append($('<option></option>').val(i).html(i))
    }
});

function clearText() {
    document.getElementById("textarea").value = "";
};