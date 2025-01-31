Here’s a comprehensive `README.md` for your NestJS project. It includes a clear description, setup instructions, API documentation, and a backlink to the provided URL.

---

# NestJS Backend Project

This is a simple NestJS backend project that provides a `GET /info` endpoint to return a JSON response containing `email`, `current_datetime`, and `link`. The `current_datetime` is returned in **ISO 8601 format**.

---

## **Table of Contents**
- [NestJS Backend Project](#nestjs-backend-project)
  - [**Table of Contents**](#table-of-contents)
  - [**Description**](#description)
  - [**Setup Instructions**](#setup-instructions)
    - [**Prerequisites**](#prerequisites)
    - [**Steps to Run the Project Locally**](#steps-to-run-the-project-locally)
  - [**API Documentation**](#api-documentation)
    - [**Endpoint**](#endpoint)
    - [**Request/Response Format**](#requestresponse-format)
      - [**Request**](#request)
      - [**Response**](#response)
    - [**Example Usage**](#example-usage)
  - [**Backlink**](#backlink)
  - [**License**](#license)

---

## **Description**
This project is a basic NestJS application designed to demonstrate how to create a RESTful API endpoint. The `GET /info` endpoint returns a JSON object with the following fields:
- `email`: A placeholder email address.
- `current_datetime`: The current date and time in ISO 8601 format.
- `link`: A placeholder URL.

This project is ideal for learning NestJS basics, testing API endpoints, and integrating with frontend applications.

---

## **Setup Instructions**

### **Prerequisites**
- Node.js (v16 or higher)
- npm (Node Package Manager)
- NestJS CLI (optional but recommended)

### **Steps to Run the Project Locally**
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run start:dev
   ```

4. **Access the Application**
   - The server will start on `http://localhost:3000`.
   - You can test the `GET /info` endpoint using a browser, Postman, or ThunderClient.

---

## **API Documentation**

### **Endpoint**
- **URL**: `GET /info`
- **Description**: Returns a JSON object with `email`, `current_datetime`, and `link`.

### **Request/Response Format**
#### **Request**
- **Method**: `GET`
- **URL**: `http://localhost:3000/info`
- **Headers**: None required.

#### **Response**
- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "email": "example@example.com",
    "current_datetime": "2025-01-31T12:34:56.789Z",
    "link": "https://example.com"
  }
  ```

### **Example Usage**
1. Using **cURL**:
   ```bash
   curl -X GET http://localhost:3000/info
   ```

2. Using **ThunderClient**:
   - Set the method to `GET`.
   - Set the URL to `http://localhost:3000/info`.
   - Send the request.

3. Using a **Browser**:
   - Open `http://localhost:3000/info` in your browser.

---

## **Backlink**
This project was created as part of the [HNG Node.js Developers Program](https://hng.tech/hire/nodejs-developers). Check out the program to learn more about building scalable backend systems with Node.js and NestJS.

---

## **License**
This project is open-source and available under the [MIT License](LICENSE).

---