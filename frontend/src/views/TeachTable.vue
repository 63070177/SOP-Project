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
                <div class="block is-size-3">
                    <h2>ตารางสอน</h2>
                </div>
                <div class="column">
                    <label class="block" style="margin-right: 10px;">ภาคเรียนที่</label>
                </div>
                <div class="block">
                    <table style="width:100%; color: #fff;">
                        <thead>
                            <tr>
                                <th class="is-size-5" style="color: #fff;">ชื่อวิชา</th>
                                <th class="is-size-5" style="color: #fff;">วัน-เวลา</th>
                                <th class="is-size-5" style="color: #fff;">ครูผู้สอน</th>
                            </tr>
                            
                            <tr v-for="subjects in Subject" :key="subjects._id">
                                <td>{{subjects.subjectName}}</td>
                                <td>{{subjects.periodTime}}</td>
                                <td>{{subjects.teacherName}}</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "TeachTable",
    data() {
        return {
            Subject: [],
        }
    },
    mounted(){
        axios.get('http://localhost:8081/subjects/getSubjects')
        .then((response) => {
            console.log(response.data);
            this.Subject = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
    },
    methods: {

    }
}
</script>