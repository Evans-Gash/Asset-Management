# Property Management System (PMS)

Welcome to the Property Management System (PMS)! This application streamlines property management by providing efficient tools for handling properties, tenants, leases, maintenance requests, and payments. It is designed for property managers, landlords, and real estate professionals to simplify workflows and improve tenant satisfaction.

---

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

The Property Management System offers the following features:

- **Property Listings**: Add, update, or remove property information, including details such as location, size, and rental status.
- **Tenant Management**: Manage tenant profiles, track occupancy, and keep records of tenant information.
- **Lease Management**: Create and track lease agreements, including start/end dates, rent amounts, and terms.
- **Payment Tracking**: Record and monitor rent payments, automate reminders, and generate payment history reports.
- **Maintenance Requests**: Log and track maintenance requests from tenants, assign tasks to vendors, and manage resolution timelines.
- **Reports & Analytics**: Generate reports on occupancy rates, income, expenses, and maintenance statistics.
- **User Roles & Permissions**: Define user roles with specific permissions to control access to features and data.

---

## Installation

To install and run the Property Management System locally, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14+)
- [Python](https://www.python.org/) (version 3.8+)
- [PostgreSQL](https://www.postgresql.org/) or your preferred database

### Steps
1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/property-management-system.git
    cd property-management-system
    ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Set up a virtual environment and install dependencies:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     pip install -r requirements.txt
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install frontend dependencies:
     ```bash
     npm install
     ```

4. **Environment Variables**:
   - Set up environment variables in both the backend and frontend. Create a `.env` file in the backend root with the following details:
     ```bash
     DATABASE_URL=postgresql://user:password@localhost/property_management
     SECRET_KEY=your_secret_key
     JWT_SECRET=your_jwt_secret
     ```

5. **Run the Application**:
   - Start the backend server:
     ```bash
     python app.py
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

   The application should now be running, with the frontend on `http://localhost:3000` and backend on `http://localhost:5000`.

---

## Configuration

- **Database**: Configure your PostgreSQL connection in the backend `.env` file as `DATABASE_URL`.
- **Authentication**: Adjust the JWT secret or other security parameters in the backend `.env` file.

---

## Usage

After installation, navigate to the URL where the application is running. The system provides the following modules:

- **Dashboard**: Overview of properties, tenants, leases, and payments.
- **Properties**: View, add, edit, or delete property details.
- **Tenants**: Manage tenant information, including contact details and lease status.
- **Leases**: Track lease agreements with tenants, including rent payments and due dates.
- **Payments**: Record and manage rent payments.
- **Maintenance**: Log, track, and resolve maintenance requests.
- **Reports**: Generate custom reports and analytics.

### API Documentation
For detailed API documentation, refer to the [API.md](API.md) file in the repository.

---

## Technologies Used

- **Backend**: Python, Flask, SQLAlchemy
- **Database**: PostgreSQL
- **Frontend**: React, Tailwind CSS
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: Tailwind CSS
- **Testing**: Pytest (backend), Jest (frontend)


Happy property managing!
