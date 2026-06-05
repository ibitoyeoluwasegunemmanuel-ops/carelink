# CareLink Africa - API Documentation

## API Overview

CareLink Africa uses a REST API architecture with JSON request/response format. All endpoints are protected with JWT authentication (except public endpoints).

## Base URL

```
Production: https://api.carelinkafrica.com/api
Development: http://localhost:3000/api
```

## Authentication

### JWT Token
All authenticated requests require a Bearer token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### Refresh Token
```
POST /auth/refresh
Body: { refreshToken: "token" }
Response: { accessToken: "new_token" }
```

## API Endpoints

### Authentication Endpoints

#### Sign Up
```
POST /auth/signup
Content-Type: application/json

Body:
{
  "email": "user@example.com",
  "password": "password123",
  "userType": "parent|expert|donor",
  "firstName": "John",
  "lastName": "Doe"
}

Response (201):
{
  "success": true,
  "message": "Account created successfully",
  "user": { id, email, userType },
  "token": "jwt_token",
  "refreshToken": "refresh_token"
}

Errors:
- 400: Invalid input
- 409: Email already exists
```

#### Log In
```
POST /auth/login
Content-Type: application/json

Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response (200):
{
  "success": true,
  "user": { id, email, userType },
  "token": "jwt_token",
  "refreshToken": "refresh_token"
}

Errors:
- 400: Invalid credentials
- 401: Unauthorized
```

#### Log Out
```
POST /auth/logout
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### Forgot Password
```
POST /auth/forgot-password
Body: { email: "user@example.com" }

Response (200):
{
  "success": true,
  "message": "Password reset email sent"
}
```

#### Reset Password
```
POST /auth/reset-password
Body:
{
  "token": "reset_token",
  "newPassword": "newpassword123"
}

Response (200):
{
  "success": true,
  "message": "Password reset successful"
}
```

### User Endpoints

#### Get Current User
```
GET /users/me
Authorization: Bearer <token>

Response (200):
{
  "id": "uuid",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "userType": "parent",
  "phone": "+234...",
  "country": "Nigeria",
  "profilePicture": "url",
  "bio": "...",
  "createdAt": "2024-01-01T00:00:00Z"
}

Errors:
- 401: Unauthorized
- 404: User not found
```

#### Update User Profile
```
PATCH /users/me
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "firstName": "Jane",
  "lastName": "Doe",
  "phone": "+234...",
  "bio": "Updated bio"
}

Response (200):
{
  "success": true,
  "user": { ...updated user data }
}

Errors:
- 400: Invalid input
- 401: Unauthorized
```

#### Upload Profile Picture
```
POST /users/me/profile-picture
Authorization: Bearer <token>
Content-Type: multipart/form-data

Body: FormData with image file

Response (200):
{
  "success": true,
  "imageUrl": "url"
}

Errors:
- 400: Invalid image
- 413: File too large
```

### Expert Directory Endpoints

#### Get All Experts
```
GET /experts
Query Parameters:
- specialization (string)
- location (string)
- minRating (number)
- limit (number, default: 20)
- offset (number, default: 0)
- sortBy (string: rating, reviews, newest)

Response (200):
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Dr. Okafor",
      "specialization": "Pediatric Neurologist",
      "rating": 4.9,
      "reviews": 127,
      "hourlyRate": 50,
      "location": "Lagos",
      "verified": true,
      "consultationTypes": ["online", "physical"]
    }
  ],
  "total": 234,
  "limit": 20,
  "offset": 0
}
```

#### Get Expert Details
```
GET /experts/:expertId
Authorization: Bearer <token> (optional)

Response (200):
{
  "id": "uuid",
  "name": "Dr. Okafor",
  "specialization": "Pediatric Neurologist",
  "bio": "...",
  "rating": 4.9,
  "reviews": 127,
  "hourlyRate": 50,
  "location": "Lagos",
  "education": [...],
  "certifications": [...],
  "languages": ["English", "Yoruba"],
  "availability": {...},
  "reviews": [...]
}

Errors:
- 404: Expert not found
```

#### Create Expert Profile
```
POST /experts/profile
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "specialization": "Speech Therapist",
  "licenseNumber": "LN123456",
  "yearsExperience": 10,
  "education": [...],
  "certifications": [...],
  "languages": ["English", "French"],
  "hourlyRate": 35,
  "acceptsOnline": true,
  "acceptsPhysical": true
}

Response (201):
{
  "success": true,
  "expert": { ...expert data }
}

Errors:
- 400: Invalid input
- 401: Unauthorized
```

### Appointments Endpoints

#### Get Appointments
```
GET /appointments
Authorization: Bearer <token>
Query Parameters:
- status (scheduled, completed, cancelled)
- limit (default: 20)
- offset (default: 0)

Response (200):
{
  "success": true,
  "data": [...appointments],
  "total": 10
}
```

#### Book Appointment
```
POST /appointments
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "expertId": "uuid",
  "childProfileId": "uuid",
  "appointmentDate": "2024-01-15T10:00:00Z",
  "duration": 60,
  "type": "online|physical|phone",
  "notes": "Optional notes"
}

Response (201):
{
  "success": true,
  "appointment": {
    "id": "uuid",
    "status": "scheduled",
    "amount": 50,
    "paymentStatus": "pending"
  }
}

Errors:
- 400: Invalid input
- 404: Expert or child not found
- 409: Time slot not available
```

#### Get Appointment Details
```
GET /appointments/:appointmentId
Authorization: Bearer <token>

Response (200):
{
  "id": "uuid",
  "expert": {...},
  "child": {...},
  "dateTime": "...",
  "status": "scheduled",
  "type": "online",
  "notes": "..."
}
```

#### Cancel Appointment
```
DELETE /appointments/:appointmentId
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Appointment cancelled"
}

Errors:
- 404: Appointment not found
- 409: Cannot cancel completed appointment
```

### Child Profile Endpoints

#### Get Child Profiles
```
GET /children
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "data": [...]
}
```

#### Create Child Profile
```
POST /children
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "firstName": "Amara",
  "lastName": "Okafor",
  "dateOfBirth": "2018-05-15",
  "gender": "female",
  "conditions": ["autism", "speech-disorder"],
  "medications": [...],
  "allergies": [...],
  "schoolType": "special-school"
}

Response (201):
{
  "success": true,
  "child": { ...child data }
}
```

#### Update Child Profile
```
PATCH /children/:childId
Authorization: Bearer <token>

Body: { ...fields to update }

Response (200):
{
  "success": true,
  "child": { ...updated child }
}
```

#### Get Progress Records
```
GET /children/:childId/progress
Authorization: Bearer <token>
Query Parameters:
- limit (default: 20)
- offset (default: 0)

Response (200):
{
  "success": true,
  "data": [...progress records]
}
```

#### Add Progress Record
```
POST /children/:childId/progress
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "date": "2024-01-10",
  "milestone": "Started using AAC device",
  "therapyType": "speech",
  "notes": "Great progress",
  "progressRating": 8,
  "attachments": [...]
}

Response (201):
{
  "success": true,
  "progress": { ...progress data }
}
```

### Campaign Endpoints

#### Get All Campaigns
```
GET /campaigns
Query Parameters:
- type (therapy, medical, education, equipment, family-support)
- status (active, completed, cancelled)
- sortBy (newest, trending, ending-soon)
- limit, offset

Response (200):
{
  "success": true,
  "data": [...campaigns],
  "total": 45
}
```

#### Get Campaign Details
```
GET /campaigns/:campaignId

Response (200):
{
  "id": "uuid",
  "title": "...",
  "description": "...",
  "type": "therapy",
  "goalAmount": 100000,
  "currentAmount": 45000,
  "status": "active",
  "creator": {...},
  "child": {...},
  "donations": [...],
  "progressUpdates": [...]
}
```

#### Create Campaign
```
POST /campaigns
Authorization: Bearer <token>
Content-Type: multipart/form-data

Body:
{
  "title": "Help Amara with Speech Therapy",
  "description": "...",
  "type": "therapy",
  "childId": "uuid",
  "goalAmount": 100000,
  "urgencyLevel": "high",
  "image": <file>,
  "status": "draft"
}

Response (201):
{
  "success": true,
  "campaign": { ...campaign }
}
```

#### Donate to Campaign
```
POST /campaigns/:campaignId/donate
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "amount": 10000,
  "donationType": "financial",
  "message": "Rooting for Amara!",
  "isAnonymous": false
}

Response (201):
{
  "success": true,
  "donation": {
    "id": "uuid",
    "status": "pending",
    "paymentUrl": "https://stripe-checkout-url"
  }
}
```

### Forum Endpoints

#### Get Forum Threads
```
GET /forums/threads
Query Parameters:
- category (autism, adhd, etc.)
- sortBy (newest, popular)
- limit, offset

Response (200):
{
  "success": true,
  "data": [...threads]
}
```

#### Create Thread
```
POST /forums/threads
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "title": "Tips for managing ADHD at home",
  "content": "...",
  "category": "adhd",
  "tags": ["behavior", "parenting"]
}

Response (201):
{
  "success": true,
  "thread": { ...thread }
}
```

#### Get Thread Details
```
GET /forums/threads/:threadId

Response (200):
{
  "id": "uuid",
  "title": "...",
  "content": "...",
  "author": {...},
  "posts": [...],
  "views": 234,
  "createdAt": "..."
}
```

#### Create Post
```
POST /forums/threads/:threadId/posts
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "content": "Great tip! I've been doing this for months..."
}

Response (201):
{
  "success": true,
  "post": { ...post }
}
```

### Review Endpoints

#### Get Expert Reviews
```
GET /experts/:expertId/reviews
Query Parameters:
- sortBy (newest, helpful, rating)
- limit, offset

Response (200):
{
  "success": true,
  "data": [...reviews],
  "averageRating": 4.8
}
```

#### Create Review
```
POST /experts/:expertId/reviews
Authorization: Bearer <token>
Content-Type: application/json

Body:
{
  "rating": 5,
  "title": "Excellent therapist",
  "content": "...",
  "appointmentId": "uuid"
}

Response (201):
{
  "success": true,
  "review": { ...review }
}
```

## Error Handling

### Standard Error Response
```
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": {...}
  }
}
```

### Common Error Codes
```
INVALID_INPUT
UNAUTHORIZED
FORBIDDEN
NOT_FOUND
CONFLICT
RATE_LIMITED
SERVER_ERROR
PAYMENT_FAILED
VALIDATION_ERROR
```

## Rate Limiting

```
- Unauthenticated: 100 requests per hour
- Authenticated: 1000 requests per hour
- Headers:
  X-RateLimit-Limit: 1000
  X-RateLimit-Remaining: 999
  X-RateLimit-Reset: 1234567890
```

## Pagination

All list endpoints support:
```
- limit: Number of results (default: 20, max: 100)
- offset: Number of items to skip (default: 0)

Response includes:
- data: Array of items
- total: Total count
- limit: Requested limit
- offset: Requested offset
```

## Webhooks

### Webhook Events

#### payment.succeeded
```
Event: Donation payment completed
Payload:
{
  "event": "payment.succeeded",
  "donation": {...},
  "campaign": {...},
  "timestamp": "..."
}
```

#### appointment.scheduled
```
Event: New appointment booked
Payload:
{
  "event": "appointment.scheduled",
  "appointment": {...},
  "expert": {...},
  "parent": {...}
}
```

#### campaign.completed
```
Event: Campaign goal reached
Payload:
{
  "event": "campaign.completed",
  "campaign": {...}
}
```

## SDKs

### JavaScript/Node.js
```
npm install carelink-sdk
```

### Python
```
pip install carelink
```

### Future: Mobile SDKs
- React Native
- Flutter

## API Versioning

Current version: v1

Future versions will be available at:
- `/api/v2/...`
- `/api/v3/...`

Old versions will be maintained for at least 1 year with deprecation notice.

## Rate Limits & Quotas

```
- Free tier: 100 requests/hour
- Pro tier: 10,000 requests/hour
- Enterprise: Custom limits
```

## Documentation Links

- [API Reference](https://docs.carelinkafrica.com/api)
- [SDKs & Libraries](https://docs.carelinkafrica.com/sdks)
- [Webhooks Guide](https://docs.carelinkafrica.com/webhooks)
- [Error Codes](https://docs.carelinkafrica.com/errors)
