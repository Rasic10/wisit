// must install ts node globally
npm install -g ts-node 

// generate migration 
npm run typeorm migration:generate -- -n {migration-name}

// update database
npm run typeorm migration:run

// revert last migration
npm run typeorm migration:revert