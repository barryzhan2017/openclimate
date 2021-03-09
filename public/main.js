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
    
    const progress = $('.progress-animation');
    if(progress){
        const currentValue = progress.data("value");
        let counter = 0;
        const progressBar = progress.children(".progress-bar");
        const remaning = progress.find("h6 strong span");
        const interval = setInterval(function(){
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
        // cityPercent = progress.data("city")
        // statePercent = progress.data("state")
        // countryPercent = progress.data("country")

        $('.progress-link').each(function(index, el) {
            $(el).removeClass('active');
        });
        $(this).addClass('active');
        if ($(this).attr('id')=='country-progress'){
            // progress.data('value', countryPercent);
            // displayProgress();

        }
        if ($(this).attr('id')=='state-progress'){
            // progress.data('value', statePercent);
            // displayProgress();

        }
        if ($(this).attr('id')=='city-progress'){
            // progress.data('value', cityPercent);
            // displayProgress();

        }
    });



});