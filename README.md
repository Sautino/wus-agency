# Getting Started

## Run project

Clone Repository
```bash
git clone https://github.com/Sautino/wus-agency.git
```

#### Checkout project directory
```bash
cd ./wus-agency
```

#### Install npm-packages
```bash
npm install
```

#### Start postgres docker container
```bash
npm run db:dev:up
```

#### Initialize prisma
```bash
npm run prisma:init
```

#### Start next.js application
```bash
npm run dev
```

Checkout [Next.js Demo](http://localhost:3000)


## Testing
 - You can start `prisma studio` to visualize the database.
   ```bash
    npm run prisma:studio
   ```
   Checkout [Prisma Studio](http://localhost:5555)

 - Press ``F12`` in the Browser and go to the ``Application`` tab, then click on ``Cookies`` and select ``http://localhost:3000``. If you already visited the Website then there is a cookie named `alreadyRegistered` with the value `true`. If you want to simulate a new user then set the value to `false` or delete the cookie and reload the page.
