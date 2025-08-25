// Interactive About Me Tabs
const tabs = document.querySelectorAll('.about-tab');
const panels = document.querySelectorAll('.about-panel');
const underline = document.getElementById('tab-underline');

function updateUnderline(activeTab) {
    underline.style.left = `${activeTab.offsetLeft}px`;
    underline.style.width = `${active-tab.offsetWidth}px`;
}

// Set initial underline position
updateUnderline(document.querySelector('.about-tab.active-tab'));

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Deactivate all tabs and panels
        tabs.forEach(t => t.classList.remove('active-tab'));
        panels.forEach(p => p.classList.remove('active-panel'));

        // Activate clicked tab and corresponding panel
        tab.classList.add('active-tab');
        const activePanel = document.getElementById(tab.dataset.tab);
        activePanel.classList.add('active-panel');

        // Move underline
        updateUnderline(tab);
    });
});