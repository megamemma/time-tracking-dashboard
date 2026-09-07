const previousLabel = {
    daily: 'Yesterday',
    weekly: 'Last Week',
    monthly: 'Last Month'
};

let data = [];
let currentTimeframe = 'weekly';

async function init() {
    const response = await fetch('../data.json');
    data = await response.json();
    render();

    document.querySelectorAll('.period-nav button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.period-nav .is-active')?.classList.remove('is-active');
            btn.classList.add('is-active');
            currentTimeframe = btn.textContent.toLowerCase();
            render(); 
        });
    });
}

function render() {
    document.querySelectorAll('.card').forEach(card => {
        const category = card.dataset.category;
        const entry = data.find(d => d.title.toLowerCase().replace(' ', '-' === category));
        if (!entry) return;

        const t = entry.timeframes[currentTimeframe];
        card.querySelector('.hours-current').textContent = `${t.current}hrs`;
        card.querySelector('.hours-past').textContent = `${previousLabel[currentTimeframe]} - ${t.previous}hrs`;
        })
}

init();