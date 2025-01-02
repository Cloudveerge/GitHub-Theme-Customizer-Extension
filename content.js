(function() {
    const darkLink = document.createElement('link');
    darkLink.rel = 'stylesheet';
    darkLink.type = 'text/css';
    darkLink.href = chrome.runtime.getURL('DarkDefault.css');
    document.head.appendChild(darkLink);

    const lightLink = document.createElement('link');
    lightLink.rel = 'stylesheet';
    lightLink.type = 'text/css';
    lightLink.href = chrome.runtime.getURL('LightDefault.css');
    document.head.appendChild(lightLink);

    const darkThemeBlock = document.querySelector('div.position-relative.mb-3.flex-shrink-0.col-6.col-md-4 input[id="option-dark"]');

    if (darkThemeBlock) {
        const parentDiv = darkThemeBlock.parentElement;

        const labelDiv = parentDiv.querySelector('label.radio-label .ml-5.pr-1');
        if (labelDiv) labelDiv.textContent = "Custom Theme";

        const image = parentDiv.querySelector('label.radio-label img');
        if (image) image.src = "https://pbs.twimg.com/media/GIzX7v5XcAAov7X?format=jpg&name=small";
    }

    const lightThemeBlock = document.querySelector('div.position-relative.mb-3.flex-shrink-0.col-6.col-md-4 input[id="option-light"]');

    if (lightThemeBlock) {
        const parentDiv = lightThemeBlock.parentElement;

        const labelDiv = parentDiv.querySelector('label.radio-label .ml-5.pr-1');
        if (labelDiv) labelDiv.textContent = "Custom Theme Light";

        const image = parentDiv.querySelector('label.radio-label img');
        if (image) image.src = "https://pbs.twimg.com/media/GJBj52wbMAA7EzT.jpg";
    }
})();
