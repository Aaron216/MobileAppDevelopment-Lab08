function showData(data) {
    $("#displayarea").text(data);
}

$(window).on("load", function () {
    $("#fetchBtn").on("click", function () {
        let url = "http://134.7.234.90:8000/data.json";
        fetch(url, {method: "GET"})
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .then(function(data) {
            showData(formatData(data));
        })
        .catch(err => alert("Something bad happened"));
    });

    showData("No data retrieved yet");
});
