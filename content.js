let checkedElementCount = 0;
document.addEventListener("DOMNodeInserted", () => {
    const el = document.querySelector("body div div div:nth-child(6)");
    if (!el) {
        return;
    }
    Array.from(el.children)
        .slice(checkedElementCount)
        .forEach((child) => {
            console.log("checking all elements");
            checkedElementCount++;
            child.innerText.toLowerCase().includes("promote") && child.remove();
        });
});
