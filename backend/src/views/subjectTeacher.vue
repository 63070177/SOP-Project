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
                    <h2>รายวิชาที่สอน</h2>
                </div>
                <div class="column">
                    <router-link :to="{ path: `modifySubject` }">
                        <button type="modify" class="button is-primary is-outlined">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                            </svg>
                            เพิ่มรายวิชา
                        </button></router-link>
                </div>
                <div class="block">
                    <table style="width:80%; color: #fff;">
                        
                        <tr>
                            <th class="is-size-5" style="color: #fff;"></th>
                            <th class="is-size-5" style="color: #fff;">ชื่อวิชา</th>
                            <th class="is-size-5" style="color: #fff;">ชั่วโมงเรียน</th>
                            <th class="is-size-5" style="color: #fff;">ครูผู้สอน</th>
                        </tr>
                        <tbody v-for="subjects in Subject" :key="subjects._id">
                        <tr v-if="!showForm" style="margin-bottom: 20px;">

                            <td>
                                <div >
                                    <button type="modify" class="button is-primary is-outlined is-small" 
                                        style="margin-right: 15px;" @click="EditForm(subjects)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                        แก้ไข
                                    </button>
                                    <button type="modify" class="button is-danger is-outlined is-small">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg>
                                        ลบ
                                    </button>
                                </div>
                            </td>
                            <td class="is-size-5">
                                {{ subjects.subjectName }}
                            </td>
                            <td class="is-size-5">
                            {{ subjects.periodTime }}
                            </td>
                            <td class="is-size-5">
                                {{ subjects.teacherName }}
                            </td>

                        </tr>
                        </tbody>

                        <tr v-if="showForm">
                            <td>
                                <div class="columns">
                                    <div class="column">
                                        <button class="button is-primary is-outlined"
                                            @click="EditSubject()">ตกลง</button>

                                    </div>

                                    <div class="column is-12">
                                        <button class="button is-danger is-outlined" v-if="showForm"
                                            @click="showForm = false;">ยกเลิก</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input class="input is-small" type="text" style="width:80%;" v-model="EditSubjectName">
                            </td>
                            <td>
                                <input class="input is-small" type="text" style="width:80%;" v-model="EditTime">
                            </td>
                            <td>
                                <input class="input is-small" type="text" style="width:80%;" v-model="EditTeacher">
                            </td>
                        </tr>
                    </table>

                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "subjectTeacher",
    data() {
        return {
            showForm: false,
            Subject: [],
            Teacher: [],
            EditSubjectName: "",
            EditTime: null,
            EditTeacher: "",
            subjectId: ""
        }
    },
    mounted() {
        this.email = localStorage.getItem("email")
        
        axios.post('http://localhost:8084/teachers/getTeacher', {email:this.email})
        .then((response) => {
            console.log(response.data);
            this.Teacher = response.data[0];
        })
        .catch((response) => {
            console.log(response);
        })


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
    methods: {
        EditForm(subject) {
            this.showForm = true;
            this.subjectId = subject._id
            this.EditSubjectName = subject.subjectName;
            this.EditTime = subject.periodTime;
            this.EditTeacher = subject.teacherName;
        },
        EditSubject() {
            let teacher = localStorage.getItem("Teacher")
            let obj = JSON.parse(teacher)

            const data = {
                _id: this.subjectId,
                subjectName: this.EditSubjectName,
                periodTime: this.EditTime,
                teacherName: this.EditTeacher,
                teacherId: obj._id
            }
            axios.put('http://localhost:8081/subjects', data)
            .then((response) => {
                console.log(response.data);
                //this.Subject.
            }).catch((err) => {
                console.log(err);
            });
            this.showForm = false;
        }
    }
    /*
    
    */
}
</script>

<style>
    th,td{
        padding: 15px;
        border-bottom: 1px solid #ddd;
    }
</style>