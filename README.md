# URL Shortener Microservice

This is a lightweight Node.js microservice built to shorten long URLs, track usage analytics, and manage expiration—all while sending logs to an external logging service.

## Features

- Generate short links from long URLs
- Custom shortcode support
- Control URL validity with expiration time
- Redirection to original URL via shortcode
- Track click stats: timestamp, location, and referrer
- Logging middleware integrated (logs sent to evaluation server)

## Tech Stack

- Node.js + Express
- In-memory DB (for testing; can be replaced with Mongo/Postgres)
- Axios (for external logging)
- Postman (for testing APIs)

## How to Test

Use [Postman](https://www.postman.com/) or Insomnia for the following API tests:

### 1. Create Short URL
**POST** `http://localhost:3000/shorturls`

2. Redirect to Original URL
Open in browser:
http://localhost:3000/custom123

3. View URL Stats
GET http://localhost:3000/shorturls/custom123

Returns click history, creation time, and expiry info.

Logging Middleware
All key events (create, redirect, error) are silently logged to:
http://20.244.56.144/eva1uation-service/logs

Author
Aditya Solase
Roll No: 12201676

