async function loadSection(name) {
    const res = await fetch(`sections/${name}.html`);
    const html = await res.text();
    document.querySelector("#content").innerHTML = html;
}

// Load hero by default
loadSection("hero");
