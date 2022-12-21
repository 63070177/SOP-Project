<template>
    <div>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div class="loginbox">
                <div style="text-align: center; margin-bottom: 15px;">
                    <img class="logo" src="../assets/register-icon.svg" width="90px" height="90px" />
                    <h1 style="font-size: 4em;">Hansa School</h1>
                </div>
                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Email </label>
                        <input v-model="email" class="formstyle1" type="text" />
                    </div>
                </div>
                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Password </label>
                        <input v-model="password" class="formstyle2" type="text" />
                    </div>
                </div>
                <div class="columns" style="text-align: center; margin-top: 30px;">
                    <div class="column">
                        <!-- <router-link :to="{path: `TeachTable`}"> -->
                            <button @click="loginWithEmail" class="button is-primary is-outlined">Log In</button>
                        <!-- </router-link> -->
                    </div>

                    <div class="column">
                        <router-link :to="{ path: `/SignUp` }">
                            <button class="button is-info is-outlined">Sign Up</button>
                        </router-link>
                    </div>
                </div>

                <div style="text-align: center; justify-content: center">or Sign in with 3rd Party</div>
                <button id="google" @click="loginWithProvider" class="btn-pic">
                    <img src="../assets/google-logo.png" alt width="50px" height="50px">
                </button>

            </div>


        </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    name: "LogInPage",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    /* eslint-disable */
    methods: {
        loginWithEmail(e) {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                 user => {
                    this.$router.replace("InfoTeach");
                    localStorage.setItem("email", user.user.email)
                 },
                 err => {
                    alert("Wrong email or password")
                 });
                 
            e.preventDefault();
       },
       loginWithProvider(e) {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(
                 user => {
                    this.$router.push("/InfoTeach")
                 },
                 err => {
                    alert(err.message)
                 });
        }
    }
}
</script>
