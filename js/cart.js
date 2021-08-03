document.getElementById("cartIcon").addEventListener("click", () => {
    document.getElementById("cartPreview").style.width = "100%";
})

document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("cartPreview").style.width = "0%";
})