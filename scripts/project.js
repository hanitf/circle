window.addEventListener("load", async ()) => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
        );
        const data = await response.json();

    }
}