# Installation

```
npx @reactivers/nextjs-graphql-tailwind-ts your-app-name
```

# Getting started

- run `yarn generate:dev`
- Check `package.json` out.
- You can edit `./environments/.env.*` and use `NEXT_PUBLIC_APP_ENV`
- Don't forget to edit `next-sitemap.config.js`

# Run

- Before run, make sure you run `yarn generate:dev`

```
yarn dev
```

# Test

```
yarn e2e:headless
```

# Docker

## Build

```
docker-compose up -d --build
```

## Clean

```
docker-compose down --remove-orphans --rmi "local" --volumes
```
