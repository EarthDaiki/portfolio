window.addEventListener("load", adjustZigZag);
window.addEventListener("resize", adjustZigZag);

const works = [
    {
        title: "RPG Game",
        img: "",
        thumbnailLabel: "Development Suspended",
        href: "/work/rpg_game/rpg_game.html",
        tech: ["ue", "cpp"],
        aiStatus: "noAi"
    },
    {
        title: "Old House",
        img: "",
        thumbnailLabel: "Development Suspended",
        href: "/work/old_house/old_house.html",
        tech: ["ue", "cpp"],
        aiStatus: "noAi"
    },
    {
        title: "Security Camera",
        img: "/images/security_camera/earth-daiki-camera-thumbnail.png",
        href: "/work/security_camera/security_camera.html",
        tech: ["python", "aws", "postgresql", "html", "css", "js"],
        aiStatus: "noAi"
    },
    {
        title: "Spotify Playlist Automation",
        img: "/images/spotify/thumbnail.png",
        href: "/work/spotify_playlist_automation/spotify_playlist_automation.html",
        tech: ["python", "aws", "spotify"],
        aiStatus: "noAi"
    },
    {
        title: "AI Agent: Minefia",
        img: "",
        thumbnailLabel: "Development Suspended",
        href: "/work/minefia/minefia.html",
        tech: ["react", "rust"],
        aiStatus: "noAi"
    },
    {
        title: "AI To-Do App: Minefia Task XP",
        img: "/images/task_xp/thumbnail.png",
        href: "/work/task_xp/task_xp.html",
        tech: ["react", "rust", "sqlite"],
        aiStatus: "noAi"
    },
    {
        title: "Minefia TaskXP iPhone Ver",
        img: "",
        thumbnailLabel: "Still Under Development",
        href: "/work/task_xp_iphone/task_xp_iphone.html",
        tech: ["swift", "sqlite"],
        aiStatus: "noAi"
    },
    {
        title: "Minefia Audio",
        img: "",
        thumbnailLabel: "Still Under Development",
        href: "/work/audio_transcript/audio_transcript.html",
        tech: ["react", "rust"],
        aiStatus: "aiUsed"
    },
    {
        title: "Minefia Lan File Transfer",
        img: "",
        thumbnailLabel: "Still Under Development",
        href: "/work/lan_file_transfer/lan_file_transfer.html",
        tech: ["go"],
        aiStatus: "noAi"
    },
    {
        title: "Chrome Extension: ClipAsk AI",
        img: "/images/clip_ask/thumbnail.png",
        href: "/work/clip_ask/clip_ask.html",
        tech: ["html", "css", "js"],
        aiStatus: "noAi"
    },
    {
        title: "Portfolio Website",
        img: "/images/portfolio_website/home.png",
        href: "/work/portfolio_website/portfolio_website.html",
        tech: ["html", "css", "js"],
        aiStatus: "noAi"
    },
    {
        title: "Reverse Engineering & API Analysis",
        img: "/images/Unofficial_API/thumbnail.png",
        href: "/work/unofficial_api/unofficial_api.html",
        tech: ["python"],
        aiStatus: "noAi"
    },
    {
        title: "Downloader",
        img: "/images/Downloader/thumbnail.png",
        href: "/work/downloader/downloader.html",
        tech: ["python"],
        aiStatus: "noAi"
    },
    {
        title: "Some other stuff",
        img: "/images/other_stuff/thumbnail.png",
        href: "/work/some_other_stuff/some_other_stuff.html",
        tech: ["python"],
        aiStatus: "noAi"
    },
];

function createWorkTemplate() {
    const container = document.getElementById("work-container");

    works.forEach((work, index) => {
        const a = document.createElement("a");
        a.className = "work-link";
        a.href = work.href;
        // a.target = "_blank";

        if (index % 2 === 0) {
            a.classList.add("left");
        } else {
            a.classList.add("right");
        }
        

        const imageHtml = work.img
            ? `<img src="${work.img}" alt="${work.title}-img">`
            : `<p>${work.thumbnailLabel || "No Image"}</p>`;

        a.innerHTML = `
            <section class="work-section">
                <h3>${work.title}</h3>
                ${imageHtml}
                <hr class="border-line">
                <div class="tech">
                    ${work.tech.map(t => window.sharedIcons[t]).join("")}
                    <span title="${work.aiStatus === "aiUsed" ? "Full AI Assistant" : "No AI"}" aria-label="${work.aiStatus === "aiUsed" ? "Full AI Assistant" : "No AI"}" style="display:flex;align-items:center;margin-left:auto">
                        ${window.sharedIcons[work.aiStatus]}
                    </span>
                </div>
            </section>
        `;

        container.appendChild(a);
    });
}

function adjustZigZag() {
    const items = document.querySelectorAll(".work-link");

    for (let i = 0; i < items.length - 1; i++) {
        const current = items[i];
        const next = items[i + 1];

        const height = current.offsetHeight;

        // 次の要素を上にずらす
        next.style.marginTop = `-${height / 4}px`;
    }
}

const sharedIconsScript = document.createElement("script");
sharedIconsScript.src = "/assets/icons.js";
sharedIconsScript.onload = createWorkTemplate;
document.body.appendChild(sharedIconsScript);
