import express from 'express';

const app = express();

app.get('/', (_req, res, _next) => {
    res.send({ "hello": "world" });
});

app.listen(3000, () => {
    console.log('Listening on port :3000...');
});

type Readonly<T> = {
    readonly [P in keyof T]: T[P]
};

type Nullable<T> = {
    [P in keyof T]: T[P] | null
};

type NonNullable<T> = T extends null | undefined ? never : T;

export default app;