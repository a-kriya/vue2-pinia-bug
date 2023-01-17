# Vue 2 + Pinia + Router bug

### Versions

```
pinia: 2.0.29
vue: 2.7.14
vue-router: 3.6.5

Vue.js Devtools: 6.4.5
Chromium: 96
Firefox: 108
```

### Repro

```
npm i
npm run dev
```

Navigate to http://localhost:5173/about, reload page, click on "home".

10 users get loaded, but the `users` getter does not update so only 1 user is listed.
