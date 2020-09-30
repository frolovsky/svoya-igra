module.exports = {
    port: 3000,
    dbURL: `mongodb://127.0.0.1/sigame`,
    dbOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
}