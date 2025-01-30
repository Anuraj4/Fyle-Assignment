# Fyle-Assignment

## Description
This is a single-page application (SPA) built with Angular 14+ that allows users to track their workouts by entering their name, workout type, and workout duration. The application supports searching, filtering, pagination, and chart visualization for workout progress.

## Features
- Add user workouts (name, type, duration)
- Display workout list in a table grid
- Search by username
- Filter by workout type
- Pagination for managing large lists
- Local storage persistence
- Optional charts for workout progress visualization

## Installation
### Prerequisites
- Node.js (v16 or later)
- Angular CLI
- Git

### Clone the Repository
```sh
git clone https://github.com/yourusername/fyle-assignment.git
cd fyle-assignment
```

### Install Dependencies
```sh
npm install
```

## Running the Application Locally
```sh
ng serve --open
```
This will start the development server and open the app in your browser at `http://localhost:4200/`.

## Deployment on Vercel
### Install Vercel CLI
```sh
npm install -g vercel
```

### Build the Angular App
```sh
ng build --configuration=production
```

### Deploy to Vercel
```sh
vercel
```
Follow the prompts to configure the deployment.

## Testing
Run unit tests for components and services:
```sh
ng test
```

## Folder Structure
```
fyle-assignment/
│── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── search-filter/
│   │   │   ├── workout-list/
│   │   ├── services/
│   │   ├── models/
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│── angular.json
│── package.json
│── README.md
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.
