export const mockEmployeesData = [
  {
    "firstName":"Roy",
    "lastName":"Testerton",
    "dateOfBirth":"19/02/1990",
    "jobTitle":"Software developer",
    "company":"Test co",
    "country":"US"
  },
  {
    "firstName":"Simon",
    "lastName":"McTester",
    "dateOfBirth":"01/11/1987",
    "jobTitle":"Product manager",
    "company":"Mock industries",
    "country":"IND"
  },
]

export const mockEnrichedEmployees = () => JSON.parse(`
[
  {
    "firstName": "Roy",
    "lastName": "Testerton",
    "dateOfBirth": "19/02/1990",
    "jobTitle": "Software developer",
    "company": "Test co",
    "country": "US",
    "countryName": "United States of America",
    "currencies": [
        {
            "code": "USD",
            "name": "United States dollar",
            "symbol": "$"
        }
    ],
    "languages": [
        "English"
    ],
    "timezones": [
        "UTC-12:00",
        "UTC-11:00",
        "UTC-10:00",
        "UTC-09:00",
        "UTC-08:00",
        "UTC-07:00",
        "UTC-06:00",
        "UTC-05:00",
        "UTC-04:00",
        "UTC+10:00",
        "UTC+12:00"
    ],
    "region": "Americas"
  },
  {
    "firstName": "Simon",
    "lastName": "McTester",
    "dateOfBirth": "01/11/1987",
    "jobTitle": "Product manager",
    "company": "Mock industries",
    "country": "IND",
    "countryName": "India",
    "currencies": [
        {
            "code": "INR",
            "name": "Indian rupee",
            "symbol": "₹"
        }
    ],
    "languages": [
        "Hindi",
        "English"
    ],
    "timezones": [
        "UTC+05:30"
    ],
    "region": "Asia",
    "identifier": "SimonMcTester01111987"
  }
]
`);
