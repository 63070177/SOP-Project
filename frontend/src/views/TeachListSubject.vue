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
                        <router-link to="/">
                            <button class="button is-black btn">
                                <img class="logo" src="../assets/right-from-bracket-solid.svg" width="25px"
                                    height="25px" />
                                <span class="sidebar-text">ออกจากระบบ</span>
                            </button></router-link>
                    </div>
                </div>
            </div>
            <div class="column is-9">
                <h2 class="block is-size-3" style="margin-top: 20px;">รายวิชาที่สอน</h2>
                <table style="width:100%; color: #fff;">
                    <tr>
                        <th class="is-size-5" style="color:#fff;">ชื่อวิชา</th>
                        <th class="is-size-5" style="color:#fff;">ชั่วโมงเรียน</th>
                        <th class="is-size-5" style="color:#fff;">ครูผู้สอน</th>
                    </tr>
                    
                        <tr v-for="subjects in Subject" :key="subjects.id">
                            <td><router-link style="color: #fff;" :to="{name: `GradePage`, params: {subjectname : subjects.subjectName}}">{{ subjects.subjectName }}</router-link></td>
                            <td>{{subjects.periodTime}}</td>
                            <td>
                                {{subjects.teacherName}}
                            </td>
                        </tr>
                </table>
            </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
    name: "TeachListSubject",
    data() {
        return {
            Subject: [],
        };
    },
    mounted(){
        let teacher = localStorage.getItem("Teacher")
        let obj = JSON.parse(teacher)

        axios.post('http://localhost:8081/subjects/getSubjects', {teacherId: obj._id})
        .then((response) => {
            console.log(response.data);
            this.Subject = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {},
}
</script>