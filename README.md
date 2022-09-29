# Installation
```
npx @reactivers/nextjs-graphql-tailwind-ts your-app-name
```

# Getting started
- Check `package.json` out.
- It has lots of scripts that you may need.
- You can edit `./environments/.env.*` and use `NEXT_PUBLIC_APP_ENV`
- Don't forget to edit `next-sitemap.config.js`

# Test
```
npm run e2e:headless
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