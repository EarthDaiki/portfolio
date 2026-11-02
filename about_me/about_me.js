const iconGroups = {
    Language: ["python", "cpp", "csharp", "java", "sql", "html", "css", "swift", "rust", "go"],
    technologies: ["sqlite", "postgresql", "react", "aws", "spotify", "unity", "ue"]
};

function addIcons() {
    const elements = document.querySelectorAll(".center-svg");
    elements.forEach(element => {
        const group = element.dataset.iconGroup;
        const icons = iconGroups[group] || [];

        element.innerHTML = icons
            .map(icon => window.sharedIcons[icon] || "")
            .join("")
    });
}

const sharedIconsScript = document.createElement("script");
sharedIconsScript.src = "/assets/icons.js";
sharedIconsScript.onload = addIcons;
document.body.appendChild(sharedIconsScript);

