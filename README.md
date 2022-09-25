# Overview & Purpose

this is api server on nestjs and express, prisma, mysql, and for those studies.

# Usage

## set up

make env file, and set database url.
```bash
touch app/.env
vi app/.env
```
.env
```
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

## start api server
```
docker compose up --build
```