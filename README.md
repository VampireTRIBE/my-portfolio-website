# Shaikh Amir Hussain Portfolio

A responsive personal portfolio built with plain HTML, modular CSS, and JavaScript modules. It presents Amir as a MERN full-stack developer and includes dedicated sections for profile, skills, featured projects, education, and contact.

## Highlights

- Sticky responsive navigation with mobile menu behavior.
- Light and dark theme toggle with saved preference.
- Modular CSS split into design tokens, base styles, components, and layout.
- Data-driven project cards rendered from `projects.module.js`.
- Featured projects for FolioScope, H2O, and an Emaar-style property interface.
- No framework or build step required.

## Tech Stack

| Area | Technology |
| --- | --- |
| Structure | HTML5 |
| Styling | CSS3, responsive media queries, CSS custom properties |
| Behavior | JavaScript ES modules |
| Assets | Local images in `assets/images` |

## Folder Structure

```text
Portfolio_Website/
├── assets/
│   └── images/
├── css/
│   ├── base.css
│   ├── components.css
│   ├── design-tokens.css
│   └── layout.css
├── app.js
├── projects.module.js
├── index.html
└── README.md
```

## Run Locally

Run a static server from the project root. This is recommended because the portfolio uses JavaScript modules.

```bash
python -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

## Sections

- Home: short positioning statement, profile image, contact actions, and social links.
- About: concise developer profile and project focus.
- Skills: frontend, backend, data workflow, and delivery tooling.
- Projects: filterable cards for FolioScope, H2O, and Emaar.
- Education: learning timeline and academic background.
- Contact: GitHub, LinkedIn, and email links.

## Author

Shaikh Amir Hussain

- Email: [amirsheikhvia@gmail.com](mailto:amirsheikhvia@gmail.com)
- LinkedIn: [shaikh-amir-hussain](https://www.linkedin.com/in/shaikh-amir-hussain/)
- GitHub: [VampireTRIBE](https://github.com/VampireTRIBE)
