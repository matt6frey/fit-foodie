import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth();

export const EmailAuth = {
  data: () => ({
    auth: null
  }),
  created() {
    this.auth = getAuth()
  },
  methods: {
    login(auth, email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },
    logout() {
      signOut(auth).then(() => {
          // Sign-out successful. TODO: Add pina user state
        }).catch((error) => {
          // An error happened. TODO: add error message with UI
        });
    }
  }
}
