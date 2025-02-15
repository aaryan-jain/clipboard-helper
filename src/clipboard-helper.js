export function copyToClipboard(text) {
    if (!navigator.clipboard) {
        try {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = 'fixed';  // Prevent scrolling to bottom
            document.body.appendChild(textarea);
            textarea.select();
            // Using the modern Clipboard API as fallback
            return navigator.clipboard.writeText(text)
                .finally(() => document.body.removeChild(textarea));
        } catch (err) {
            return Promise.reject(new Error("Failed to copy text: " + err));
        }
    }
    return navigator.clipboard.writeText(text);
}

export function pasteFromClipboard() {
    if (!navigator.clipboard) {
        return Promise.reject(new Error("Clipboard API not supported"));
    }
    return navigator.clipboard.readText();
}