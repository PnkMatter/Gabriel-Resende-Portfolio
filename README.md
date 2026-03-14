# Gabriel Resende - Professional Portfolio

This repository contains the source code for a professional portfolio website designed to showcase expertise in Data Engineering, Data Science, and Computer Engineering. The application is built with a focus on performance, scalability, and type safety, utilizing a modern frontend development stack.

## Overview

The primary objective of this project is to consolidate and present technical projects, professional experience, and academic achievements. It features detailed documentation of data-driven solutions, including ETL processes, KPI dashboards, and software engineering projects developed for the automotive industry and global sustainability initiatives.

## Technical Stack

### Core Technologies
* **Framework**: React 18
* **Build Tool**: Vite
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Routing**: React Router Dom (Version 6+)

### Infrastructure and DevOps
* **Hosting**: GitHub Pages
* **CI/CD**: GitHub Actions
* **Version Control**: Git

## Project Architecture

The project follows a standard React directory structure optimized for Vite:

* **.github/workflows**: Contains the YAML configuration for automated deployment.
* **src/app**: Global application logic and routing definitions (routes.tsx).
* **src/pages**: Individual view components for Home, Projects, Experience, and Skills.
* **src/components**: Reusable UI modules and interface elements.
* **src/styles**: Tailwind CSS directives and global style configurations.
* **public**: Static assets, including images and downloadable documents.

## Implementation Details

### Routing Strategy
Due to the constraints of static hosting on GitHub Pages regarding client-side routing, this project implements **createHashRouter**. This ensures that navigation remains stable during page refreshes and that the application correctly resolves paths without server-side redirection.

### Automated Deployment Pipeline
A GitHub Actions workflow is utilized to automate the deployment process. Upon a push to the main branch, the pipeline performs the following steps:
1. Environment setup and Node.js installation.
2. Dependency installation via npm.
3. Production build generation.
4. Deployment of the build artifacts to the gh-pages branch.

### Responsive UI
The interface is developed using a mobile-first approach with Tailwind CSS, ensuring full compatibility across various devices and screen resolutions.

## Development and Setup

### Prerequisites
* Node.js (LTS version)
* npm

### Local Installation
1. Clone the repository:
   git clone https://github.com/pnkmatter/Gabriel-Resende-Portfolio.git

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

### Build for Production
To generate a production-ready build:
npm run build

## Professional Focus

The portfolio highlights key projects that demonstrate proficiency in the data lifecycle:
* **SuMa (Sustainability Manager)**: Implementation of ETL processes using Microsoft Fabric and PySpark.
* **GreenDrive Analytics**: Data intelligence solution for the automotive market.
* **Macroeconomics Dashboard**: Transition of static reporting to interactive Power BI and Python-based visualizations.
* **DataGeo 3D**: Visualization of structured data in interactive 3D environments.

## Contact Information

* **LinkedIn**: linkedin.com/in/gabriel-ramalho-resende
* **GitHub**: github.com/pnkmatter
* **Live Site**: https://pnkmatter.github.io/Gabriel-Resende-Portfolio/