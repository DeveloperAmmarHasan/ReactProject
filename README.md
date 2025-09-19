# ReactProject

A collection of **React components, hooks, and mini-projects**, each implemented in its own folder. The project covers UI patterns, utilities, games, API integrations, and state management demos (Context API and Redux Toolkit).

---

## Table of Contents

- [ReactProject](#reactproject)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
    - [UI Components](#ui-components)
    - [Feature Projects](#feature-projects)
    - [Custom Hooks](#custom-hooks)
  - [Development](#development)
  - [Configuration](#configuration)
  - [Troubleshooting](#troubleshooting)
  - [Contributors](#contributors)
  - [License](#license)

---

## Introduction

This project is designed as a **learning playground and component library** for React developers. Each folder under `src/` represents a self-contained component, hook, or demo project that can be studied, reused, or extended.

It is built with **Rsbuild**, uses **pnpm** for package management, and comes preconfigured with **PostCSS** and **Biome**.

---

## Installation

```bash
git clone https://github.com/DeveloperAmmarHasan/ReactProject.git
cd ReactProject
pnpm install
```

---

## Usage

Run the development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

---

## Project Structure

### UI Components

* **accordian** → Expandable/collapsible sections.
* **BgChanger** → Background color changer utility.
* **counter** → Simple counter component with increment/decrement.
* **custom-modal-popup** → Modal popup dialog.
* **custom-tabs** → Tab navigation for switching content.
* **feature-flags** → Feature flag system (with `context` support).
* **github-profile-finder** → Search and display GitHub user profiles via API.
* **image-slider** → Image carousel/slider.
* **light-dark-mode** → Toggle between light and dark themes.
* **load-more-data** → Load more items dynamically from a list.
* **Password-generator** → Random password generator tool.
* **qr-code-generator** → Generate QR codes from input text or URLs.
* **random-color** → Generate random colors dynamically.
* **scroll-indicator** → Progress indicator based on scroll position.
* **scroll-to-section** → Scroll smoothly to a specific section of the page.
* **scroll-to-top-and-bottom** → Buttons to jump to top or bottom.
* **search-autocomplete-with-api** → Input field with API-powered autocomplete.
* **star\_rating** → Interactive star-based rating system.
* **tic-tac-toe** → Classic tic-tac-toe game implemented in React.
* **tree-view** → Expandable/collapsible tree structure for nested data.

---

### Feature Projects

* **CurrencyConvertor**

  * `components` → UI for conversion.
  * `hooks` → Logic for fetching exchange rates.

* **Router**

  * `components` → Example routes like Home, About, Contact, Github, User, Header, and Footer.

* **TodoContextApi**

  * `components` → Todo UI with Context API.
  * `TodoContext` → Context logic for managing todos.

* **TodoReduxToolkit**

  * `app` → Store setup.
  * `components` → Todo UI.
  * `features/todo` → Redux slice for todos.

---

### Custom Hooks

* **use-click-outside** → Detect clicks outside a referenced element.
* **use-fetch** → Hook for fetching API data with loading/error states.
* **use-window-size** → Track and respond to window size changes.

---

## Development

* Add new features as independent folders.
* Organize reusable pieces into `components/` and `hooks/`.
* Follow linting/formatting rules (`biome.json`).

---

## Configuration

* **`rsbuild.config.mjs`** → Build tool configuration.
* **`postcss.config.mjs`** → CSS setup.
* **`biome.json`** → Linting/formatting rules.

---

## Troubleshooting

* Install pnpm globally if missing:

  ```bash
  npm install -g pnpm
  ```
* Fix cache issues:

  ```bash
  pnpm store prune
  ```

---

## Contributors

* [Ammar Hasan](https://github.com/DeveloperAmmarHasan)

---

## License

⚠️ No license specified.
(Recommendation: Add **MIT** license for open-source use.)

