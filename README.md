## npm i firebase angularfire2 --save

## insert your account infomation
### 1. ../environments/environment.ts

```
export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  }
};
```

### 2. ng serve