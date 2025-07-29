# MYJ-Cucumber-Selenium-TS-Full-StackAutomation-E2E-

# Clone the repo

git clone https://github.com/your-user/MYJ-Cucumber-Selenium-TS-Full-StackAutomation-E2E-.git
cd MYJ_FULL_STACK_AUTOMATION_LIVE

# Install dependencies

npm install

# or if you're using yarn

yarn install

My_MYJ-Cucumber-Selenium-TS-Automation

✅ MakeYourJodi - Full Stack Project Structure

MYJ_FULL_STACK_AUTOMATION_LIVE/
│
├── config/
│ └── testConfig.js
│
├── dist/ # Compiled JS files (auto-generated)
│
├── features/
│ ├── login.feature
│ └── test1_userhomepage_check.feature
│
├── logs/ # Optional: logs from tests
│
├── node_modules/ # Node dependencies
│
├── reports/
│ ├── screenshots/
│ │ └── <screenshot.png>
│ └── cucumber-report.html
│
├── src/
│ ├── pages/ # Page Object Models
│ │ ├── homePage.ts
│ │ ├── loginPage.ts
│ │ ├── profilePage.ts
│ │ ├── registerPage.ts
│ │ ├── searchPage.ts
│ │ └── connectionsPage.ts
│ │
│ ├── stepDefinitions/ # Step implementations
│ │ ├── loginSteps.ts
│ │ └── test1_userhomepage_check.ts
│ │
│ ├── support/ # Setup and hooks
│ │ ├── browserManager.ts
│ │ ├── hooks.ts
│ │ ├── utils.ts # Common utilities
│ │ └── world.ts # Cucumber World setup
│ │
│ ├── types/
│ │ └── selenium-webdriver.d.ts
│ │
│ └── utils/ # Helper modules
│ ├── h1_popupHandler.ts
│ └── h2_highlightUtils.ts
│
├── .env # Environment variables
├── .gitignore
├── cucumber.js # Cucumber CLI config
├── note/ # Any notes/documents
│ └── (Optional files)
├── package.json
├── package-lock.json
├── tsconfig.json
└── yarn.lock

# 🚀 MYJ Full Stack Automation Framework

A full-stack end-to-end automation testing framework using **Cucumber**, **Selenium WebDriver**, and **TypeScript** for **MakeYourJodi** or similar web applications.

## 🚀 Features

- ✅ BDD with **Cucumber + Gherkin**
- ✅ E2E testing using **Selenium WebDriver**
- ✅ Written in **TypeScript**
- ✅ Modular design using **Page Object Model**
- ✅ Reusable utility functions (highlight, popup handler, etc.)
- ✅ Auto-generated **HTML reports**
- ✅ **Screenshots** on failure
- ✅ Supports `.env` config for URLs and credentials
- ✅ Scalable and CI/CD ready

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-user/MYJ-Cucumber-Selenium-TS-Full-StackAutomation-E2E-.git
cd MYJ_FULL_STACK_AUTOMATION_LIVE

# Install dependencies
npm install

# or if you're using yarn
yarn install
```

---

## ⚙️ Configuration

Create a `.env` file at the root:

```env
BASE_URL=https://makeyourjodi.com
LOGIN_PHONE=your_number
LOGIN_PASSWORD=your_password
```

Make sure your `.env` values are used in the step definitions using `process.env`.

---

## 💪 Run Tests

### 🔹 Run All Tests

```bash
npx cucumber-js
```

Or with your custom CLI config:

```bash
npx cucumber-js -c cucumber.js
```

### 🔹 Run Specific Feature

```bash
npx cucumber-js features/test1_userhomepage_check.feature
```

### 🔹 Run Specific Scenario with Tag

```gherkin
@regression
Scenario: Valid login
```

```bash
npx cucumber-js --tags "@regression"
```

---

## 📄 Reports

After running the test, you’ll find:

- **HTML Report**: `reports/cucumber-report.html`
- **Screenshots**: `reports/screenshots/*.png`

---

## 🧱 Project Modules Overview

| Folder                 | Description                                |
| ---------------------- | ------------------------------------------ |
| `features/`            | Gherkin feature files                      |
| `src/pages/`           | Page Object classes for web UI interaction |
| `src/stepDefinitions/` | Bind Gherkin steps to code actions         |
| `src/support/hooks.ts` | Cucumber `Before` & `After` hooks          |
| `src/support/world.ts` | Custom Cucumber World for context          |
| `src/utils/`           | Custom utilities (highlight, popup, etc.)  |
| `config/`              | Cucumber config                            |
| `reports/`             | Test reports & screenshots                 |

---

## 📸 Screenshots on Failure

Screenshots are automatically captured on step failure and saved to:

```
reports/screenshots/
```

Check `hooks.ts` for the implementation.

---

## 🧼 Cleaning Up

To delete compiled files and reports:

```bash
rm -rf dist/ reports/
```

---

## 🤎 Troubleshooting

| Issue                                     | Solution                                                    |
| ----------------------------------------- | ----------------------------------------------------------- |
| `function timed out`                      | Increase Cucumber timeout in `hooks.ts`                     |
| `Cannot find type definition file 'node'` | Ensure `@types/node` is installed and in `tsconfig.json`    |
| Merge conflicts in `package-lock.json`    | Resolve manually or regenerate via `npm install`            |
| Feature file not running                  | Check file extension is `.feature` and proper scenario tags |

---

## 📊 Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Cucumber.js](https://github.com/cucumber/cucumber-js)
- [Selenium WebDriver](https://www.selenium.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mocha/Chai](optional)
- \[HTML Reporter]\(via Cucumber Formatter)

---

## 🤖 Coming Soon

- GitHub Actions / Jenkins CI integration
- Docker-based execution
- Cross-browser support
- Database/API layer validations

---

## 👨‍💼 Author

**Madhu**
📧 Reach out via GitHub Issues or email
🔗 GitHub: [@erukulamadhubugtester](https://github.com/erukulamadhubugtester)
