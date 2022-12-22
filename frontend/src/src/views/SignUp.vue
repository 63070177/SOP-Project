<template>
    <div>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div class="loginbox px-3">
                <div style="text-align: center; margin-bottom: 15px;">
                    <img class="logo" src="../assets/register-icon.svg" width="90px" height="90px" />
                    <h1 style="font-size: 4em;">Hansa School</h1>
                </div>

                <div class="column" style="margin-bottom: -20px;">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Name </label>
                        <input class="formstyle1" type="email" v-model="name" />
                    </div>
                </div>

                <div class="column" style="margin-bottom: -20px;">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Email </label>
                        <input class="formstyle1" type="email" v-model="email" />
                        <span v-show="wrongEmail" style="color:red">Incorrect email address</span>
                    </div>
                </div>

                <div class="column" style="margin-bottom: -20px;">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Password </label>
                        <input class="formstyle1" type="password" v-model="password" />
                    </div>
                </div>

                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon1" style="">Confirm Password</label>
                        <input class="formstyle2" type="password" v-model="confirmpass" />
                    </div>
                </div>
                <div class="column" style="text-align: center;">
                    <div class="columns">
                        <div class="column" style=" margin-top: 25px;">
                            <button @click="createTeacher" class="button is-info is-outlined">Sign Up</button>
                        </div>
                        <div class="column">
                            <div style="text-align: right; margin-top: 30px; margin-right: -50px;in">or Sign Up with 3rd Party</div>
                        </div>
                        <div class="column">
                            <button id="google" @click="signUpWithProvider" class="btn">
                                <img src="../assets/google-logo.png" alt width="50px" height="50px">
                            </button>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
import axios from 'axios';
import firebase from "firebase";
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmpass: "",
            wrongEmail: false,
        }
    },
    methods: {
        createTeacher() {
            const data = {
                name: this.name,
                email: this.email
            }
            if (this.password != this.confirmpass) {
                alert("Password do not match")
            }

            else {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then((user) => {
                        console.log(user.data);

                        axios.post('http://localhost:8084/teachers', data)
                            .then((response) => {
                                console.log(response.data);
                                alert("Create success!")
                                this.$router.replace({ path: '/' });

                            })
                            .catch((error) => {
                                console.log(error);
                                alert("Something wrong...")
                            })

                    })
                    .catch((error) => {
                        console.log(error);
                        alert("Wrong data")
                    });
            }
        },
        signUpWithProvider() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then((user) => {
                    console.log(user.data);

                    const data = {
                        name: user.user.displayName,
                        email: user.user.email
                    }
                    console.log(data);

                    if(!data){
                        alert("no data")
                    }
                    else {
                        axios.post('http://localhost:8084/teachers', data)
                        .then((response) => {
                            console.log(response.data);
                            alert("Create success!")
                            this.$router.replace({ path: '/' });

                        })
                        .catch((error) => {
                            console.log(error);
                            alert("Something wrong...")
                        })
                    }
                
                })
                .catch((error) => {
                    console.log(error);
                    alert("Wrong data")
                });
        }
    }
}
</script>