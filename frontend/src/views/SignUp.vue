<template>
    <div>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div class="loginbox px-3">
                <div style="text-align: center; margin-bottom: 15px;">
                    <img class="logo" src="../assets/register-icon.svg" width="90px" height="90px" />
                    <h1 style="font-size: 4em;">Hansa School</h1>
                </div>

                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Email </label>
                        <input class="formstyle1" type="email" v-model="email" />
                        <span v-show="wrongEmail" style="color:red">Incorrect email address</span>
                    </div>
                </div>
                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Password </label>
                        <input class="formstyle2" type="password" v-model="password" />
                    </div>
                </div>
                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon"> Confirm Password </label>
                        <input class="formstylecon" type="password" v-model="confirmpass" />
                    </div>
                </div>
                <div class="column" style="text-align: center;">
                    <button class="button is-info is-outlined">Sign Up</button>
                </div>

            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    data() {
        return {
            name: "Paper",
            email: "",
            password: "",
            confirmpass: "",
            wrongEmail: false,
        }
    },
    methods: {
    }
}
</script>