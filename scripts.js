    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwHm2wRu7Gguwuo_AkXjsTLEQK8xuw4j40Vvn3P1i4M8pfhW4xm7vhZszJLVLKIUHftyQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
    const toggleButton = document.getElementById('languageToggle');

  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if(toggleButton.textContent === 'English'){
                msg.innerHTML = "Envoyé"
            }
            else{
                msg.innerHTML = "Sent"
            }
            
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
    document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('languageToggle');
    const content = document.getElementById('content');

    toggleButton.addEventListener('click', () => {
        if (toggleButton.textContent === 'English') {
            toggleButton.textContent = 'Français';
            
        } else {
            toggleButton.textContent = 'English';

        }
    });
});
    document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('languageToggle');
    let currentLanguage = 'fr'; // Default language

    function updateTexts() {
        const texts = document.querySelectorAll('[id]'); // Get all elements with an ID
        texts.forEach(text => {
            const key = text.id; // The ID should match the key in the translations object
            if (translations[currentLanguage][key]) {
                text.textContent = translations[currentLanguage][key];
            }
        });
    }

    toggleButton.addEventListener('click', () => {
        currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr'; // Toggle language
        toggleButton.textContent = (currentLanguage === 'fr') ? 'Français' : 'English';
        updateTexts(); // Update the page texts to the new language
    });

    updateTexts(); // Initial update in case the default language is not English
});
    document.getElementById('languageToggle').addEventListener('click', function() {
        var button = this;
        // Determine the direction of the animation based on the current language
        var animationClass = button.textContent.includes("English") ? 'animate-from-right' : 'animate-from-left';
        
        // Optionally, remove the previous animation class if any
        button.classList.remove('animate-from-right', 'animate-from-left');
    
        // Trigger reflow to restart the animation
        void button.offsetWidth;
    
        // Add the new animation class
        button.classList.add(animationClass);
    });
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('languageToggle');
        const downloadCVEnglish = document.getElementById('downloadCVEnglish');
        const downloadCVFrench = document.getElementById('downloadCVFrench');
    
        function toggleDownloadButtons(language) {
            if (language === 'en') {
                downloadCVEnglish.style.display = "block";
                downloadCVFrench.style.display = "none";
            } else {
                downloadCVEnglish.style.display = "none";
                downloadCVFrench.style.display = "block";
            }
        }
    
        toggleButton.addEventListener('click', () => {
            let currentLanguage = (toggleButton.textContent.includes('English')) ? 'en' : 'fr';
            toggleButton.textContent = (currentLanguage === 'fr') ? 'English' : 'Français';
            toggleDownloadButtons(currentLanguage);
        });
    
        // Initial toggle based on the default language displayed
        let initialLanguage = toggleButton.textContent.includes('English') ? 'fr' : 'en';
        toggleDownloadButtons(initialLanguage);
    });
    