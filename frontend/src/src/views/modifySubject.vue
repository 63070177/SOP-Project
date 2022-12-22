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
                            <button class="button is-black btn">
                                <img class="logo" src="../assets/right-from-bracket-solid.svg" width="25px"
                                    height="25px" />
                                <span  @click="signout" class="sidebar-text">ออกจากระบบ</span>
                            </button>
                    </div>
                </div>
            </div>
            <div class="column is-9">
                <div class="block is-size-3">
                    <h2>เพิ่ม / แก้ไขรายวิชา</h2>
                </div>
                <form>
                    <div class="block">
                        <div>
                            <label>ชื่อวิชา</label>
                            <div class="column">
                                <input type="text" class="input" style="width: 80%;" v-model="subjectName">
                            </div>
                        </div>
                        <div>
                            <label>ชั่วโมงเรียน</label>
                            <div class="column">
                                <input type="text" class="input" style="width: 80%;" v-model="periodTime">
                            </div>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <button @click="CreateSubject()" class="button is-primary is-outlined">ตกลง</button>

                        </div>

                        <div class="column is-12">
                            <router-link :to="{ path: `subjectTeacher` }">
                                <button class="button is-danger is-outlined">ยกเลิก</button>
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import axios from 'axios';
export default {
    name: "modifySubject",
    data() {
        return {
            subjectName: "",
            periodTime: null,
            teacherName: ""
        }
    },
    methods: {
        signout() {
            firebase
            .auth()
            .signOut()
            .then( ()=> {
                this.$router.replace("/");
                localStorage.removeItem("email")
                localStorage.removeItem("Teacher")
            })
        },
        CreateSubject(){
            let teacher = localStorage.getItem("Teacher")
            let obj = JSON.parse(teacher)
            const data = {
                subjectName: this.subjectName,
                periodTime: Number(this.periodTime),
                teacherName: obj.name, 
                teacherId: obj._id
            }
            console.log(data);
            axios.post('http://localhost:8081/subjects', data)
            .then((response) => {
                console.log('created', response)

            }).catch((err) => {
                console.log(err)
            })
            this.$router.go(this.$router.replace("/subjectTeacher"));
        }
    }
}
</script>