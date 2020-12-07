const COUNTER_INTERVAL_TIME = 40;
$(document).ready(function() {
    console.log("DOCUMENT READY");

    $('.close-menu-mobile').click(function(){
        $('.navbar-collapse.collapse').removeClass('show');
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
});