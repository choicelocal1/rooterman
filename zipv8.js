Webflow.push(function() {
    $("#wf-form-Zip-Form").submit(function() {
       var zip = document.getElementById("zip-2").value;
        $(document).ajaxComplete(function() {
            var url = "https://www.rooterman.com/area-served/";
location.href = url.concat(zip.toLowerCase());    });
    })
});