# NPM Public Package Template

## About The Project

### Purpose

This project provides a streamlined process for developers to rapidly and efficiently deploy public NPM packages. It minimizes the setup effort, facilitating the creation, management, and distribution of NPM packages with ease.

### Key Features

1. **Easy Public NPM Package Deployment**: Simplifies the process of deploying packages to the public NPM registry.
2. **Automated Testing**: Incorporates automated testing, including the downloading of `.tgz` files to simulate real deployment environments. It also supports a Jest-based testing environment for TypeScript projects.
3. **TypeScript Support**: Fully accommodates TypeScript-based projects, enhancing the development and management process.

### Getting Started

To begin using this template, simply click on "Use this template" at the top of this repository and select "Create a new repository".

### Prerequisites

- Node.js (Version 16, 18, 20 or later recommended)
- NPM (an account capable of publishing packages)

### Installation

To install the dependencies:

```bash
npm install
```

### Usage

To utilize this template for your NPM package:

1. Edit the `package.json` file with your package details.
2. **Continuously Update the Version**: It's crucial to keep updating the `package.json` version field with each release to track changes and manage releases effectively.

Modifications are needed in the package name, version, browser settings, `test:pack` script, and example import statements in the scripts.

### Scripts

Run Jest-based test scripts located in the `__test__` folder. It's recommended to only include Jest test code in this folder:

```bash
npm run test:unit
```

Transform the current package into a `.tgz` file, download it, and then execute test scripts located in `scripts`. This simulates an environment very similar to after performing `npm install`:

```bash
npm run test:pack
```

Execute both of the above scripts simultaneously:

```bash
npm run test
```

Build the project using Webpack in production mode:

```bash
npm run build
```

### Build

The project currently uses Webpack for building. Configuration files can be found in the `configs` directory.

#### webpack.config.js

Each configuration file is set up for deployment. Note that it is assumed `export default` is being used:

```javascript
// Configuration for webpack (detailed code here)
```

#### tsconfig.base.json

Base configuration for ESM and CJS. The entry is set to `index.ts`:

```javascript
// Base tsconfig settings (detailed settings here)
```

#### tsconfig.cjs.json

Configuration for CJS. Includes settings for providing its own types:

```javascript
// CJS specific tsconfig settings (detailed settings here)
```

#### tsconfig.esm.json

Configuration for ESM. Includes settings for providing its own types:

```javascript
// ESM specific tsconfig settings (detailed settings here)
```

#### tsconfig.bundle.json

Configuration for the browser deployment file:

```javascript
// Browser-specific tsconfig settings (detailed settings here)
```

Building the project creates `lib` and `dist` folders. `lib` corresponds to the `main` and `module` fields in `package.json`, while `dist` corresponds to the `browser` setting.

### Deploying Your Package

To deploy your package to NPM:

1. Set up your NPM credentials locally.
2. Run the following command, and provide your 2FA code if prompted:

 ```bash
 npm publish
 ```

#### Note on 2FA and GitHub Actions
If 2FA is enabled on your NPM account, automated publishing via GitHub Actions is not possible as it requires manual entry of the 2FA code. Thus, local publishing is recommended.

### GitHub Actions and Secrets
Please register the public token of the npm account in the secret variable [NPM_TOKEN](https://www.npmjs.com/settings/heesukim/tokens)!  
You must choose Publish!

#### tests.yml 
Runs npm run tests on node 16, 18 versions before merging the puliquets to the main.

#### main.yml 
Designed to automatically publish the package when the main branch changes, automatically doing npm publish.

### License
Distributed under the MIT License. See LICENSE file for more information.
