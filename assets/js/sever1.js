document.addEventListener("DOMContentLoaded", function() {
    const mainServices = document.querySelectorAll("input[name='mainService']");
    const websiteOptions = document.getElementById("websiteOptions");
    const logoOptions = document.getElementById("logoOptions");
    const dataManagementOptions = document.getElementById("dataManagementOptions");
    const totalPriceElement = document.getElementById("totalPrice");

    let totalPrice = 0;

    mainServices.forEach(service => {
        service.addEventListener("change", function() {
            websiteOptions.classList.add("hidden");
            logoOptions.classList.add("hidden");
            dataManagementOptions.classList.add("hidden");

            if (service.value === "website") {
                websiteOptions.classList.remove("hidden");
            } else if (service.value === "logo") {
                logoOptions.classList.remove("hidden");
            } else if (service.value === "dataManagement") {
                dataManagementOptions.classList.remove("hidden");
            }
        });
    });

    const form = document.getElementById("pricingForm");

    form.addEventListener("change", function() {
        totalPrice = 0;
        
        // Add prices for selected website services
        const selectedWebsiteServices = form.querySelectorAll("#websiteOptions input[name='service']:checked");
        selectedWebsiteServices.forEach(service => {
            totalPrice += parseInt(service.value);
        });

        // Add price for Logo Design if selected
        if (document.getElementById("logo").checked) {
            totalPrice += 100;
        }

        // Add price for Data Management if selected
        if (document.getElementById("dataManagement").checked) {
            totalPrice += 120;
        }

        totalPriceElement.textContent = totalPrice;
    });
});
