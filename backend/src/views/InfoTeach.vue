<template>
    <div style="color: #fff;">
        <div class="columns">
            <div class="column">
                <div class="sidebar" style="padding: 20px;">
                    <div class="block">
                        <router-link :to="{ path: `/InfoTeach` }">
                            <button class="button is-black btn">
                                <img class="logo" src="../assets/user-solid.svg" width="25px" height="25px" />
                                <span class="sidebar-text">ข้อมูลส่วนตัว</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="block">
                        <router-link :to="{ path: `subjectTeacher` }">
                            <button class="button is-black btn">
                                <img class="logo" src="../assets/file-pen-solid.svg" width="25px" height="25px" />
                                <span class="sidebar-text">รายวิชาที่สอน</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="block">
                        <router-link :to="{ path: `TeachListSubject` }">
                            <button class="button is-black btn">
                                <img class="logo" src="../assets/note-sticky-solid.svg" width="25px" height="25px" />
                                <span class="sidebar-text">ผลการเรียนแต่ละวิชา</span>
                            </button>
                        </router-link>
                    </div>
                    <div class="block">
                        <!-- <router-link to="/"> -->
                            <button class="button is-black btn">
                                <img class="logo" src="../assets/right-from-bracket-solid.svg" width="25px"
                                    height="25px" />
                                <span  @click="signout" class="sidebar-text">ออกจากระบบ</span>
                            </button><!-- </router-link> -->
                    </div>
                </div>
            </div>
            <div class="column is-9">
                <p class="block is-size-3">ข้อมูลส่วนตัว</p>
                <div class="columns">
                    <div class="column">
                        <p class="text">ชื่อ</p>
                        <p class="text">วัน เดือน ปีเกิด</p>
                        <p class="text">อายุ</p>
                        <p class="text">ที่อยู่</p>
                        <p class="text">เบอร์โทรศัพท์</p>
                    </div>

                    <!-- ข้อมูลส่วนตัว -->
                    <div class="column is-9" v-if="!isEditing">
                        <p class="text">{{ this.Teacher.name }}</p>
                        <p class="text">{{ this.Teacher.birth }}</p>
                        <p class="text">{{ this.Teacher.age }} ปี</p>
                        <p class="text">{{ this.Teacher.address }}</p>
                        <p class="text">{{ this.Teacher.phone }}</p>
                    </div>

                    <!-- แก้ไขข้อมูลส่วนตัว -->
                    <div class="column is-9" v-if="isEditing">
                        <input class="input is-small editInput" type="text" v-model="editName" style="width: 80%;">
                        <input class="input is-small editInput" type="date" v-model="editBirth" style="width: 80%;">
                        <input class="input is-small editInput" type="text" v-model="editAge" style="width: 80%;">
                        <input class="input is-small editInput" type="text" v-model="editAddress" style="width: 80%;">
                        <input class="input is-small editInput" type="text" v-model="editTel" style="width: 80%;">

                    </div>

                </div>
                <button class="button is-link is-outlined" v-if="!isEditing"
                    @click="editInfo">แก้ไขข้อมูล</button>
                <div class="columns">
                    <div class="column">
                        <button @click="editTeacher" class="button is-primary is-outlined" v-if="isEditing">ตกลง</button>

                    </div>

                    <div class="column is-12">
                        <button class="button is-danger is-outlined" v-if="isEditing"
                            @click="isEditing = false;">ยกเลิก</button>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import axios from 'axios';
export default {
    name: "InfoTeach",
    beforeCreate() {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                this.$router.push("/")
            }
        });
    },
    data() {
        return {
            name: "Paper",

            Teacher: [],

            editName: "",
            editBirth: "",
            editAge: "",
            editAddress: "",
            editTel: "",
            isEditing: false,

            email: ''
        }
    },

    mounted(){
        this.email = localStorage.getItem("email")
        
        axios.post('http://localhost:8084/teachers/getTeacher', {email:this.email})
        .then((response) => {
            console.log(response.data);
            this.Teacher = response.data[0];
            const myJSON = JSON.stringify(this.Teacher);
            localStorage.setItem("Teacher", myJSON);
        })
        .catch((response) => {
            console.log(response);
        })
        
    },
    methods: {
        signout() {
            firebase
            .auth()
            .signOut()
            .then( ()=> {
                this.$router.replace("LogInPage");
                localStorage.removeItem("email")
            })
        },
        editInfo(){
            this.isEditing = true;
            this.editName = this.Teacher.name;
            this.editBirth = this.Teacher.birth;
            this.editAge = this.Teacher.age;
            this.editAddress = this.Teacher.address;
            this.editTel = this.Teacher.phone; 
        },
        editTeacher() {
            const data = {
                _id: this.Teacher._id,
                name: this.editName,
                age: this.editAge,
                birth: this.editBirth,
                address: this.editAddress,
                phone: this.editTel,
                email: this.email
            }
            axios.put('http://localhost:8084/teachers', data)
            .then((response) => {
                console.log(response.data);
                this.Teacher.name = this.editName
                this.Teacher.birth = this.editBirth
                this.Teacher.age = this.editAge
                this.Teacher.address = this.editAddress
                this.Teacher.phone = this.editTel
            })
            .catch((response) => {
                console.log(response);
                alert("Wrong email or password")
            })
            this.isEditing = false;

        }
    }
}
</script>