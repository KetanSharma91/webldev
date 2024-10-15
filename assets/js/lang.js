function detectDeviceType() {
    // Check the screen width
    if (window.innerWidth <= 768) {
        // Mobile device
        console.log("mobile");
        return 'mobile';

    } else {
        // Laptop/desktop
        console.log("pC");
        return 'laptop';
    }
}


function toggleDropdown() {
    document.querySelector('.svg-container').classList.toggle('active');
    // const svgContainer = document.querySelector('.svg-container');
    // if (svgContainer.classList.contains('active')) {
    //     svgContainer.classList.remove('active');
    // } else {
    //     svgContainer.classList.add('active');
    // }
}

function selectOption(value, event) {
    console.log(`Selected value: ${value}`); // Debugging log
    event.stopPropagation();

    const options = document.querySelectorAll('.options div');
    options.forEach(option => {
        if (option.getAttribute('data-value') === value) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });

    localStorage.setItem('selectedLanguage', value);

    // Update page content
    updateContent(value);

    // Close the dropdown
    document.querySelector('.svg-container').classList.remove('active');
}

function loadLanguage() {
    // Retrieve the selected language from localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage');

    // If a language is saved, update the content accordingly
    if (savedLanguage) {
        updateContent(savedLanguage);
        console.log("updatedlang");
    }
}

// Call this function when the page loads
// window.onload = loadLanguage;


function updateContent(language) {
    const trans = translations[language];

    const deviceType = detectDeviceType();
    window.addEventListener('DOMContentLoaded', () => {
        if (window.innerWidth <= 393) {
            if (deviceType === 'mobile') {
                document.body.style.fontSize = "100%";
                document.querySelector('header h1 a').style.fontSize = "2rem";
                document.querySelector('header .lan1').style.fontSize = "1.1em";
                if (document.querySelector(`.home .content h1`)) {
                    document.querySelector('.home .content h1').style.fontSize = '55px';
                }
            }
        } else {
            document.body.style.fontSize = "100%";
            document.querySelector('header h1 a').style.fontSize = "61px";
            document.querySelector('header .lan1').style.fontSize = "100%";
            if (document.querySelector(`.home .content h1`)) {
                document.querySelector('.home .content h1').style.fontSize = '95px';
            }
        }
    });


    if (trans) {
        console.log("Updating header");
        document.querySelectorAll(".navbar ul li").forEach((item, index) => {
            item.querySelector("a").textContent = trans.header.navbar[index].text;
            item.querySelector("a").setAttribute('data-hover', trans.header.navbar[index].hover);
        });

        if (document.querySelector('.home .content h1')) {
            document.querySelector('.home .content h1').textContent = trans.hero.text;
            document.querySelector('.home .content a').textContent = trans.hero.contactBtn;
        }

        // Check if the page contains Work section
        if (document.querySelector(".work .content h2")) {
            document.querySelector(".work .content h2").textContent = trans.work.title;
            document.querySelectorAll(".work a").forEach((item, index) => {
                item.querySelector(".work-img img").alt = trans.work.works[index].imgAlt;
                item.querySelector("h3").textContent = trans.work.works[index].text;
                item.querySelector("p").textContent = trans.work.works[index].desc;
            });
        }

        // Check if the page contains Story section
        if (document.querySelector(".story-title")) {
            document.querySelector(".story-title").textContent = trans.story.title;

            document.querySelector('.story form').innerHTML = `
            ${trans.story.form.greeting} <input type="text" name="name" placeholder="${trans.story.form.namePlaceholder}" required>
            ${trans.story.form.and}
         <select name="business-type" required>
         <option value="business">${trans.story.form.businessOwner}</option>
        <option value="start-up">${trans.story.form.founder}</option>
        <option value="company">${trans.story.form.creator}</option>
         </select> ${trans.story.form.at}
         <input type="text" name="business-name" placeholder="${trans.story.form.businessPlaceholder}" required>
         ${trans.story.form.websitePlanning}
         <select name="business-type" required>
           <option value="business">${trans.story.form.business}</option>
           <option value="start-up">${trans.story.form.startup}</option>
           <option value="company">${trans.story.form.company}</option>
         </select>
         ${trans.story.form.buzz}
         <input type="tel" name="phone" placeholder="${trans.story.form.phonePlaceholder}">
         ${trans.story.form.email}
         <input type="email" name="email" placeholder="${trans.story.form.emailPlaceholder}" required> <br>
         <button type="submit" class="story-btn">${trans.story.form.submitBtn} <span>→</span></button>
         `;
        }

        // Check if the page contains Footer section
        if (document.querySelector(".company-name span")) {
            document.querySelector(".links ul li:nth-child(1) a").textContent = trans.footer.pricing;
            document.querySelector(".links ul li:nth-child(2) a").textContent = trans.footer.ourWork;
            document.querySelector(".links ul li:nth-child(3) a").textContent = trans.footer.aboutus;
            document.querySelector("form h3").textContent = trans.footer.heading;
            document.querySelector("input[name='full_name']").placeholder = trans.footer.namePlaceholder;
            document.querySelector("#email_address").placeholder = trans.footer.emailPlaceholder;
            document.querySelector("textarea[name='message']").placeholder = trans.footer.messagePlaceholder;
            document.querySelector("button[name='submitContact']").textContent = trans.footer.submitButton;
            document.querySelector(".email").textContent = trans.footer.emailUs;
            document.querySelector(".reserved-rights").textContent = trans.footer.rightsReserved;
        }

        if (document.querySelector(".sec-title h1")) {
            document.querySelector(".sec-title h1").textContent = trans.services.title;
            document.querySelector(".sec-title p").textContent = trans.services.subtitle;
            document.querySelector(".services h2").textContent = trans.services.whatWeOffer;

            document.querySelector("#webh3").textContent = trans.services.websiteServices.heading;
            document.querySelector("#webp").textContent = trans.services.websiteServices.description;

            document.querySelector("#logoh3").textContent = trans.services.logoDesign.heading;
            document.querySelector("#logop").textContent = trans.services.logoDesign.description;

            document.querySelector("#datah3").textContent = trans.services.dataManagement.heading;
            document.querySelector("#datap").textContent = trans.services.dataManagement.description;

            document.querySelector(".pricing h2").textContent = trans.pricing.heading;
            document.querySelector("#website").nextElementSibling.textContent = trans.pricing.website;

            document.querySelector("#webDesign").nextElementSibling.textContent = trans.pricing.websiteOptions.webDesign;
            document.querySelector("#webDevelopment").nextElementSibling.textContent = trans.pricing.websiteOptions.webDevelopment;
            document.querySelector("#websiteDeployment").nextElementSibling.textContent = trans.pricing.websiteOptions.websiteDeployment;
            document.querySelector("#domainRegistration").nextElementSibling.textContent = trans.pricing.websiteOptions.domainRegistration;

            document.querySelector("#logo").nextElementSibling.textContent = trans.pricing.logo;
            document.querySelector("#logoOptions p").textContent = trans.pricing.logoOptions;

            document.querySelector("#dataManagement").nextElementSibling.textContent = trans.pricing.dataManagement;
            document.querySelector("#dataManagementOptions p").textContent = trans.pricing.dataManagementOptions;

            document.querySelector(".total").textContent = trans.pricing.totalPrice;
        }

        if (document.querySelector(".about .about-text h2")) {
            document.querySelector(".about .about-text h2").textContent = trans.about.abouttitle;
            document.querySelector(".about .content .about-text p").textContent = trans.about.aboutdescription;

            document.querySelector(".whowep").textContent = trans.about.aboutmissiondescription;
            document.querySelector('.about .content a').textContent = trans.about.moreLink;
        }
        
        if (document.querySelector(".about .about-content h2")) {
            document.querySelector(".about .about-content h2").textContent = trans.about.abouttitle;
            document.querySelector(".about .about-content p").textContent = trans.about.aboutdescription;
    
            document.querySelector(".whowe").textContent = trans.about.aboutwho;
            document.querySelector(".whowep").textContent = trans.about.aboutwhodescription;
            document.querySelector(".mis").textContent = trans.about.aboutmission;
            document.querySelector(".misp").textContent = trans.about.aboutmissiondescription;
            document.querySelector(".value").textContent = trans.about.aboutvalues;
            document.querySelector(".inno").textContent = trans.about.valueinnovation;
            document.querySelector(".qual").textContent = trans.about.valuequality;
            document.querySelector(".cust").textContent = trans.about.valuecustomer;
        }

        // Check if the page contains Call-to-Action section
        if (document.querySelector(".call-to-action")) {
            document.querySelector(".call-to-action h2").textContent = trans.calltoaction.ctatitle;
            document.querySelector(".call-to-action p").textContent = trans.calltoaction.ctadescription;
            document.querySelector(".cta-button").textContent = trans.calltoaction.ctabutton;
        }

        if (document.querySelector(".company-name")) {
            document.querySelector(".loc-name").innerHTML = `WeblDev Solutions , <br> ${trans.location.addressline1} , <br> ${trans.location.addressline2} <br> ${trans.location.country}`;
            document.querySelector(".loc").textContent = trans.location.locationheader;
        }

    }

    if (language === 'kn') {
        // if (window.innerWidth <= 393) {
        if (deviceType === 'mobile') {
            document.body.style.fontSize = "75%";
            document.querySelector('header h1 a').style.fontSize = "2rem";
            document.querySelector('header .lan1').style.fontSize = "1.7em";
            // document.querySelector('nav').style.left = '-313px';
            if (document.querySelector(`.home .content h1`)) {
                document.querySelector('.home .content h1').style.fontSize = '40px';
            }
        }
        else {
            document.body.style.fontSize = "75%";
            document.querySelector('header h1 a').style.fontSize = "61px";
            document.querySelector('header .lan1').style.fontSize = "130%";
            if (document.querySelector(`.home .content h1`)) {
                document.querySelector('.home .content h1').style.fontSize = '75px';
            }
        }
    }
}

document.addEventListener('click', function (event) {
    if (!document.querySelector('.select-container').contains(event.target)) {
        document.querySelector('.svg-container').classList.remove('active');
    }
});