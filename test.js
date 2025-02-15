import { copyToClipboard, pasteFromClipboard } from "./src/clipboard-helper.js";

// Mock clipboard for Node.js
if (typeof navigator === "undefined") {
    global.navigator = {};
}

if (!navigator.clipboard) {
    let clipboardStorage = "";
    navigator.clipboard = {
        writeText: (text) => {
            clipboardStorage = text;
            return Promise.resolve();
        },
        readText: () => Promise.resolve(clipboardStorage),
    };
}

// Test the functions
(async () => {
    await copyToClipboard("Hello, World!");
    console.log("Text copied!");

    const pastedText = await pasteFromClipboard();
    console.log("Pasted text:", pastedText);
})();
