# URL Shortener API

**Live URL:** [https://staging-aasoft-fct2.encr.app/greeting](https://staging-aasoft-fct2.encr.app/greeting)

## API Endpoints

1. **Shorten a URL**

   - **Endpoint:** `/url`
   - **Method:** `POST`
   - **Request Body:**

     ```json
     {
       "url": "https://aasoft.ir"
     }
     ```

   - **Description:** Submit a URL to get a shortened version.

2. **Retrieve a Shortened URL**

   - **Endpoint:** `/url/{id}`
   - **Method:** `GET`

   - **Description:** Use the unique ID to retrieve the original URL. Response includes an emoji status for quick recognition.

## Features

- **Simple and Fast:** Quickly shorten your URLs and access them through unique IDs.
- **Emoji Status:** Get a visual representation of your URL's status with emojis.

## Usage

- Use the **POST** method to submit a URL and receive a shortened link.
- Use the **GET** method with the shortened URL ID to retrieve the original URL.

## Example

To shorten a URL:

```bash
curl -X POST https://staging-aasoft-fct2.encr.app/url -H "Content-Type: application/json" -d '{"url": "https://aasoft.ir"}'
```

To retrieve the original URL:
```bash
curl -X GET https://staging-aasoft-fct2.encr.app/url/{id}
```

Replace {id} with your unique URL identifier.
