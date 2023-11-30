const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    let initial_count = 0;
    let final_count = counter.dataset.count;
    // console.log(final_count);

    const counting = setInterval(updateCounting, 1);




    function updateCounting(){
        initial_count = initial_count + 1 ;
        counter.innerText = initial_count;

        if(initial_count >= final_count){
            clearInterval(counting)
        }
    }
});