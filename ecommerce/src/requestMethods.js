import axios from  "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTlkYjYwYzQ1OTg5YWUxMDYwZTNjNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjMwMDQ3MSwiZXhwIjoxNjg2NTU5NjcxfQ.KK7aempA3L00WYKUjFRZvdzHRwHtamD_OEJos8oktMg";
const KEY = process.env.STRIPE_KEY;

export const publicRequest =axios.create({
    baseURL:BASE_URL,
});

export const userRequest =axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`,
    Authorization: `Bearer ${KEY}`  },
});
