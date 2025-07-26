# Full Stack Application – Angular + NestJS

# 🌐 Frontend – Angular 17 + PrimeNG (Sakai-NG)

This is the frontend of the full-stack application built using Angular 17 and PrimeNG's Sakai-NG template.

---

## 📦 Tech Stack

- Angular 17 (Standalone Components)
- PrimeNG (Sakai-NG)
- PrimeFlex for styling
- JWT-based authentication
- Angular Router, Interceptors & Route Guards

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js v18+
- Angular CLI
```bash
npm install -g @angular/cli
cd frontend
npm install
ng serve
```
## 📦 Auth Flow

User logs in with credentials.

Token received from the backend is stored in localStorage.

An HTTP interceptor attaches the token to API requests.

Angular route guards protect restricted routes based on login state.

Toast Notifications
Toast messages are triggered via PrimeNG's MessageService.

Used for:

Success/Error feedback

Form validations

Login/logout events

## 🚀 Bonus Features 

Responsive layout with PrimeFlex

Reusable components (inputs, buttons, forms)

Angular Route Guards for protected views

Centralized toast notifications

JWT storage and auto-logout on token expiry

Form validation with visual cues

## Folder Structure

/src
 ┣ /app
 ┃ ┣ /core
 ┃ ┣ /layout
 ┃ ┣ /pages
 ┃ ┗ app.routes.ts

## 📦 Environment Setup

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};

