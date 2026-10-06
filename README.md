# GrowFusion

GrowFusion is a responsive agricultural information web application built with React and Redux. It brings together practical farming information, crop guidance, seasonal planning, soil preparation guidance, crop-care information, and real-time weather information in one accessible interface.

The project was created as a full front-end development project with a focus on responsive design, reusable React components, API integration, error handling, testing, accessibility, and performance.

## Project Links

* **Live application:** *Add the deployed Netlify URL here*
* **GitHub repository:** *Add the GitHub repository URL here*

## Wireframes

The project was planned using wireframes before development began.

> **Action required:** Add the final wireframe image(s) to the repository and link them in this section before submission.
>
> Suggested location: `docs/wireframes/`

Example:

```text
GrowFusion/
└── docs/
    └── wireframes/
        └── growfusion-wireframe.png
```

After adding the image, it can be displayed here with:

```md
![GrowFusion wireframe](./docs/wireframes/growfusion-wireframe.png)
```

## Technologies Used

### Front end

* React
* JavaScript
* HTML5
* CSS3
* Redux Toolkit
* React Redux
* React Router
* React Icons

### APIs and external services

* Open-Meteo Weather API
* Open-Meteo Geocoding API

### Testing

* Jest through Create React App / `react-scripts`
* React Testing Library
* Playwright
* Chromium for automated end-to-end testing

### Development tools

* Yarn
* Git
* GitHub
* VS Code

## Features

### Home

* Responsive hero section
* GrowFusion branding and introductory message
* Responsive image delivery for desktop and mobile screens

### About

* Overview of the GrowFusion platform
* GrowFusion logo and project description

### Farming Information

* Farm conditions section with weather information
* Searchable weather information by city
* Current weather conditions
* Temperature and feels-like temperature
* Humidity
* Rain and precipitation
* Wind speed
* Atmospheric pressure
* Seven-day weather forecast

### Crop Information

* Information about:

  * Barley
  * Canola
  * Corn
  * Cotton
  * Oats
  * Wheat
* Crop illustrations and factual agricultural information

### Crop Calendar

* Two-year crop planting and harvesting calendar
* Planting and harvesting legend
* Crop-specific seasonal information

### Soil Preparation

* Nine-step soil preparation guide
* Supporting images for each step
* External video resource
* Additional agricultural resource link

### Crop Care

* Fertilizer information
* Herbicide information
* Seven fertilizer application steps
* Seven herbicide application steps
* Supporting images for each section

### Contact

* Contact email address
* Social media section
* Responsive footer layout

### Sign Up

* Username, email, and password fields
* Native form validation for required fields
* Responsive sign-up page

## Error Handling

GrowFusion includes user-facing recovery options for API-related failures.

The weather feature provides an error message and a **Retry** button when weather data cannot be retrieved.

City searches are validated before requests are made, and geocoding errors are handled without crashing the application.

## Responsive Design

GrowFusion was designed to work across desktop, tablet, and mobile screen sizes.

Responsive improvements include:

* Mobile navigation menu
* Responsive layouts for farming-information sections
* Responsive hero image delivery using `srcSet` and `sizes`
* Responsive typography and spacing
* Mobile-friendly weather and crop layouts
* Optimised WebP and SVG assets

## Testing

### Unit Testing

GrowFusion includes automated unit tests covering components, pages, API functions, Redux logic, and application routing.

Current unit-test results:

* **19 test suites passing**
* **100 tests passing**
* **0 failed tests**

Coverage results from the final coverage run:

| Metric     | Coverage |
| ---------- | -------: |
| Statements |   87.50% |
| Branches   |   82.81% |
| Functions  |   83.72% |
| Lines      |   87.24% |

Run the complete unit-test suite with:

```bash
yarn test --watchAll=false
```

Run the coverage report with:

```bash
yarn test --coverage --watchAll=false
```

### End-to-End Testing

Playwright is used to test the application in a real Chromium browser.

The current E2E tests cover:

* Homepage loading
* Main navigation
* Sign-up navigation
* Sign-up form interaction
* Required-field validation
* Returning from the sign-up page to the homepage
* Weather section loading
* Weather city searching

Current E2E results:

* **8 tests passing**
* **0 failed tests**

Run the E2E suite with:

```bash
yarn test:e2e
```

## Production Build

Create a production build with:

```bash
yarn build
```

## Lighthouse and Performance

The application was tested using Lighthouse in a production build and achieved scores above the required 90+ performance target.

The final production results included:

* **Mobile Performance: 98**
* **Desktop Performance: 100**
* **Accessibility: 98**
* **Best Practices: 100**
* **SEO: 100**

Performance improvements included responsive image delivery, WebP image optimisation, lazy loading for below-the-fold images, SVG assets, and more focused icon imports.

## Project Structure

A simplified view of the main source structure is:

```text
src/
├── API/
├── Assets/
├── Components/
├── Features/
├── Images/
├── Pages/
├── Redux/
├── Subcomponents/
├── Styles/
├── Testing/
└── setupTests.js
```

## Getting Started

### Prerequisites

* Node.js
* Yarn
* Git

### Installation

Clone the repository and install the dependencies:

```bash
git clone <your-github-repository-url>
cd grow-fusion
yarn install
```

### Run locally

Start the development server:

```bash
yarn start
```

The application will normally be available at:

```text
http://localhost:3000
```

## Future Work

Potential future improvements include:

* Deploy the application publicly and provide a live URL
* Connect the sign-up form to a real backend/database
* Add live crop market-price information
* Add live soil information
* Replace placeholder social-media destinations with the project's real social profiles
* Expand browser compatibility testing
* Consider a CI/CD workflow for automated deployment
* Consider progressive web app support

## Project Management

The project was planned and tracked using a project-management board. The project task board reached **9/9 tasks completed** during development.

## Version Control

The project is version controlled with Git and maintained in a GitHub repository. Development was tracked through regular commits throughout the project.

## License

This project was created as a learning and portfolio project. Add a specific open-source license here if one is selected for the repository.
