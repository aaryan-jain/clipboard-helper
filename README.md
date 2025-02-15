# Clipboard Helper

A lightweight utility for handling clipboard operations in modern browsers with fallback support.

## Features

- Copy text to clipboard
- Paste text from clipboard
- Promise-based API
- Fallback support for browsers without Clipboard API

## Usage

```javascript
import { copyToClipboard, pasteFromClipboard } from 'clipboard-helper';

// Copy text to clipboard
await copyToClipboard('Hello, world!');

// Paste text from clipboard
const text = await pasteFromClipboard();
console.log(text);
```

## API

### copyToClipboard(text: string): Promise<void>

Copies the provided text to the system clipboard.

### pasteFromClipboard(): Promise<string>

Retrieves text from the system clipboard.

## Browser Support

Uses the modern Clipboard API with a fallback mechanism for older browsers. The paste functionality requires browser support for the Clipboard API.

## License

MIT