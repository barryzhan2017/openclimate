const COUNTER_INTERVAL_TIME = 40;
$(document).ready(function() {
    console.log("DOCUMENT READY");

    $('.close-menu-mobile').click(function(){
        $('.navbar-collapse.collapse').removeClass('show');
    });

    $('.toggle-text').click(function(){
        var text = this.nextElementSibling;
        if (text.style.display == "block") {
            text.style.display = "none";
            this.innerHTML = this.getAttribute('data-initial-text');
        } else {
            text.style.display = "block";
            this.innerHTML = this.getAttribute('data-hide-text');
        }

    });

        
    $('.btn-test').click(function(){
        $(this).hide();
        $('.panel-search').addClass("visible");
    });   


    $('.state-selection').click(function(){
        $(this).toggleClass("active");
        let state = $(this).data('value');
        let id=`${state.replace(/\s/g, '')}Column`;
        $(`#${id}`).toggleClass('hidden');
    });     


    $('.state-progress').each(function(i, obj) {
        let currentValue = $(this).data("value");
        let progressBar = $(this).children(".progress-bar");
        let remaning = $(this).find("h6 strong span");
        progressBar.css("width", currentValue+"%");
        progressBar.text(currentValue + "% ");
        remaning.text((100-currentValue)+ "% ");
    });
    
    const progress = $('.progress-animation');

    if(progress){
        let currentValue = progress.data("value");
        let counter = 0;
        let progressBar = progress.children(".progress-bar");
        let remaning = progress.find("h6 strong span");
        let interval = setInterval(function(){
            progressBar.css("width", counter+"%");
            progressBar.text(counter + "% ");
            remaning.text((100-counter)+ "% ");
            if(counter===currentValue){
                clearInterval(interval);
            }
            counter++;
        },COUNTER_INTERVAL_TIME);
    }   
    

    // click progress bar- change active class. load city/state/country, change aria-value and data-value
    // 
    $('.progress-link').click(function(){
        statePercent = progress.data("state")
        countryPercent = progress.data("country")

        $('.progress-link').each(function(index, el) {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
        if ($(this).attr('id')=='country-progress'){
            progress.data('value', countryPercent);
            let currentValue = progress.data("value");
            let counter = 0;
            let progressBar = progress.children(".progress-bar");
            let remaning = progress.find("h6 strong span");
            let interval = setInterval(function(){
                progressBar.css("width", counter+"%");
                progressBar.text(counter + "% ");
                remaning.text((100-counter)+ "% ");
                if(counter===currentValue){
                    clearInterval(interval);
                }
                counter++;
            },COUNTER_INTERVAL_TIME);
        }
        if ($(this).attr('id')=='state-progress'){
            progress.data('value', statePercent);
            let currentValue = progress.data("value");
            let counter = 0;
            let progressBar = progress.children(".progress-bar");
            let remaning = progress.find("h6 strong span");
            let interval = setInterval(function(){
                progressBar.css("width", counter+"%");
                progressBar.text(counter + "% ");
                remaning.text((100-counter)+ "% ");
                if(counter===currentValue){
                    clearInterval(interval);
                }
                counter++;
            },COUNTER_INTERVAL_TIME);
        }

    });

    $(".show-country-goal").click(function() {
        document.getElementById("UnitedStatesColumn").scrollIntoView({behavior: "smooth", block: "center"});

    });


});