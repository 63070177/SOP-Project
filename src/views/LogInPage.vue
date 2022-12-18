<template>
    <div>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <div class="loginbox">
                <div style="text-align: center; margin-bottom: 15px;">
                    <img class="logo" src="../assets/register-icon.svg" width="90px" height="90px" />
                    <h1 style="font-size: 4em;">PAPERWORK</h1>
                </div>
                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Email </label>
                        <input class="formstyle1" type="text" />
                    </div>
                </div>
                <div class="column">
                    <div class="input-group form-group">
                        <label class="input-group-addon">Password </label>
                        <input class="formstyle2" type="text" />
                    </div>
                </div>
                <div class="columns" style="text-align: center; margin-top: 30px;">
                    <div class="column">
                        <router-link :to="{path: `InfoTeach`}">
                            <button class="button is-primary is-outlined">Log In</button>
                        </router-link>
                    </div>
                    <div class="column">
                        <router-link :to="{ path: `/SignUp` }">
                            <button class="button is-info is-outlined">Sign Up</button>
                        </router-link>
                    </div>

                </div>

            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "LogInPage",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
