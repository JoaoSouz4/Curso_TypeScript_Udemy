export default  {
    port: 8080,
    url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gc4ly0f.mongodb.net/?retryWrites=true&w=majority`,
    env: "development",
}