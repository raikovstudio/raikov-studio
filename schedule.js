const form = document.getElementById("projectForm");

const fields = form.querySelectorAll("input, textarea, select");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    document.querySelectorAll(".error").forEach(error => {

        error.textContent = "";

    });

    fields.forEach(field => {

        field.classList.remove("invalid");

    });

    fields.forEach(field => {

        if (field.hasAttribute("required")) {

            if (field.value.trim() === "") {

                valid = false;

                field.classList.add("invalid");

                let error = field.nextElementSibling;

                while (error && !error.classList.contains("error")) {
                    error = error.nextElementSibling;
                }

                if (error) {

                    error.textContent = "PREENCHE BROOOO";

                }

            }

        }

    });

    if (valid) {

        alert("Project request sent successfully!");

        form.reset();

    }

});