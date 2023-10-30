## Movie Data Fetch

```
GET /movie
```

This API endpoint retrieves movie data based on the provided query parameters. It filters the movie data based on genre, country, and average vote.

### Query Parameters

**genre** (string) *optional* - The genre of the movie. The API will return movies that include this genre.

**country** (string) *optional* - The country where the movie was produced. The API will return movies that include this country.

**avg_vote** (number) *optional* - The average vote of the movie. The API will return movies with an average vote greater than or equal to this value.

### Example Request

```javascript
fetch('http://localhost:3000/movie?genre=action&country=USA&avg_vote=7')
```

### Example Response

```json
[
  {
    "title": "The Dark Knight",
    "year": 2008,
    "genre": "Action, Crime, Drama",
    "country": "USA, UK",
    "avg_vote": 9.0
  },
  {
    "title": "Inception",
    "year": 2010,
    "genre": "Action, Adventure, Sci-Fi",
    "country": "USA, UK",
    "avg_vote": 8.8
  }
]
```

### Response Codes

**200**: The request was successful and the response body contains the filtered movie data.

**400**: Bad Request. The provided query parameters are not valid.

**500**: Internal Server Error. An error occurred while processing the request.

<br />

