window.onload = function() {
    var input = document.getElementById("inputString");
    var button = document.getElementById("reverseButton");

    button.onclick = function() {
        input.value = reversal(input.value);
    };

    var reversal = function (s) {
        var reversed = "";
        for (var i = s.length - 1; i >= 0; i--) {
            reversed = reversed + s.charAt(i);
        }
        return reversed;
    };
};
