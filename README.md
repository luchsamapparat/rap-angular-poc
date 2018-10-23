# Eclipse RAP / Angular Proof of Concept

## RAP with Angular
```
./si-angular> npm install
./si-angular> npm run build
./si-angular> npm run build deploy-to-rap

./si-rap> mvn clean jetty:run
```

## Angular without RAP

Start application
```
./si-angular> npm start
```

Run tests
```
./si-angular> npm test
```

##  Notes

CLI commands to generate Angular app, components and service.

```
create-nx-workspace si-angular
ng generateenerate application si-angular
ng generate component component-one --entry-component --project si-angular
ng generate component component-two --entry-component --project si-angular
ng generate service counter --project si-angular
```