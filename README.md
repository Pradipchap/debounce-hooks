# Debounce Hooks 

A React package that provides a custom hook and utility function to manage debouncing effectively in your applications. Ideal for optimizing performance in situations like search inputs, resize events, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [useDebounce Hook](#1-usedebounce-hook)
  - [debounceFunction Utility](#2-debouncefunction-utility)
- [API Reference](#api-reference)
  - [useDebounce](#usedebouncevalue-delay)
  - [debounceFunction](#debouncefunctioncallback-delay)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Custom Hook (`useDebounce`)**: Debounce values in React components to reduce unnecessary re-renders or API calls.
- **Utility Function (`debounceFunction`)**: Debounce callback functions for non-React use cases.
- **Lightweight** and simple to integrate into any project.
- Fully typed for **TypeScript** support.

---

## Installation

You can install the package via npm or yarn:

Using npm:

```bash
npm install debounce-hooks

```
## Usage

### 1. `useDebounce` Hook

The `useDebounce` hook delays updates to a value until after the specified delay period. It is useful for scenarios like search inputs, where you want to avoid making frequent updates or API calls.

#### Example: Debouncing a Search Input

```tsx
import React, { useState } from "react";
import { useDebounce } from "debounce-hook";

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedValue = useDebounce(searchInput, 1000); // Debounce with 1-second delay

  React.useEffect(() => {
    if (debouncedValue) {
      console.log(`Performing API search for: ${debouncedValue}`);
      // Add your API call logic here
    }
  }, [debouncedValue]);

  return (
    <input
      type="text"
      placeholder="Search here..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};

```

### 2. `debounceFunction` Utility

The `debounceFunction` utility delays the execution of a callback function until after a specified time has elapsed since the last invocation. It's ideal for non-React contexts like DOM events.

#### Parameters:

- **`callback`** (`Function`): The function to debounce.
- **`delay`** (`number`): The debounce delay in milliseconds.

#### Returns:

- A debounced version of the provided callback function.

---

#### Example 1: Debouncing a Window Resize Event

```tsx
import { debounceFunction } from "debounce-hook";

const handleResize = () => {
  console.log("Resized window at", new Date());
};

const debouncedResize = debounceFunction(handleResize, 500); // Debounce with 500ms delay

window.addEventListener("resize", debouncedResize);
```
## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Create a new branch with your feature or bug fix.
3. Submit a pull request with a detailed explanation.

---

## License

This package is licensed under the [MIT License](LICENSE).

---

## Support

If you encounter issues, feel free to:

- Open an issue on GitHub.
- Reach out with suggestions or feature requests.

This package is designed to be a simple, robust solution for debouncing in modern web applications. 🚀
