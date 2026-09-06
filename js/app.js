const previousLabel = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
};

let data = [];
let currentTimeframe = 'weekly';

async function init() {
    const response = await.fetch('../data.json');
    data = await response.json();
    // render ();

    document.querySelectorAll('.period-nav button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.period-nav .is-active')?.classList.remove('is-active');
            btn.classList.add('is-active');
            currentTimeframe = btn.textContent.toLowerCase();
            // render ();
        });
    });
}

    // FUNC render (call many times)
    // for each card, learn its category, 
    // find and obj w/ same name in DATA
    // take data for currentTimeframe
    // get current hours into card's text
    // get old hours + label(yest.,last w.,last mo.)
// init(); 