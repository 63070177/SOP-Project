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
                            <img class="logo" src="../assets/right-from-bracket-solid.svg" width="25px" height="25px" />
                            <span @click="signout" class="sidebar-text">ออกจากระบบ</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="column is-9">
                <form>
                    <div class="block is-size-3">
                        <h2>{{ subjectName }}</h2>
                    </div>
                    <div class="block">
                        <table style="width:100%; color: #fff;">
                            <tr>
                                <th class="is-size-5" style="color: #fff;">ชื่อ-นามสกุล</th>
                                <th class="is-size-5" style="color: #fff;">ห้อง</th>
                                <th class="is-size-5" style="color: #fff;">เกรด</th>
                            </tr>
                            <tr v-for="(student, index) in Student" :key="student._id">
                                <td v-show="!isEditing || row == index">{{ student.student_name }}</td>
                                <td v-show="!isEditing || row == index">{{ student.student_class }}</td>
                                <td v-show="!isEditing || row == index" v-if="!isEditing">{{ Grade[index].grade }}</td>
                                
                                <td v-if="isEditing" v-show="!isEditing || row == index">
                                    <div class="select is-small">
                                        <select v-model="selected">
                                            <option disabled>{{ Grade[index].grade }} </option>
                                            <option value="A">A</option>
                                            <option value="B+">B+</option>
                                            <option value="B">B</option>
                                            <option value="C+">C+</option>
                                            <option value="C">C</option>
                                            <option value="D+">D+</option>
                                            <option value="D">D</option>
                                            <option value="F">F</option>
                                        </select>
                                    </div>
                                </td>
                                <td v-if="!isEditing && Grade[index].grade != ''">
                                    <button @click="editForm(student._id, index, Grade[index]._id.$oid)"
                                        class="button is-link is-outlined">แก้ไขเกรด
                                    </button>
                                </td>

                                <td v-if="!isEditing && Grade[index].grade == ''">
                                    <button @click="editAddForm(student._id, index)"
                                        class="button is-success is-outlined">เพิ่มเกรด
                                    </button>
                                </td>

                            </tr>
                        </table>


                    </div>
                    <div class="columns">
                        <div class="columns" v-if="isEditing && !isAdd">
                            <div class="column">
                                <button class="button is-primary is-outlined" @click="editGrade()">ตกลง</button>
                            </div>
                            <div class="column" v-if="isEditing && isAdd">
                                <button class="button is-primary is-outlined" @click="addGrade()">ตกลง</button>
                            </div>
                            <div class="column">
                                <button class="button is-danger is-outlined" @click="isEditing = false; this.selected = '';">ยกเลิก</button>
                            </div>


                        </div>
                        <div class="column is-12" v-if="!isEditing">
                            <router-link :to="{ path: `TeachListSubject` }">
                                <button class="button is-link is-outlined">กลับ</button>
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
    name: "GradePage",
    data() {
        return {
            subjectName: this.$route.params.subjectname,
            Student: [],
            Grade: [],
            selected: '',
            studentId: [],
            data: null,
            isEditing: false,
            row: '',
            selectGrade: '',
            selectStuId: '',
            isAdd:''
        }
    },
    beforeMount() {
        //student
        axios.get('http://localhost:8083/students')
            .then((response) => {

                this.Student = response.data;

                for (let i = 0; i < this.Student.length; i++) {
                    this.studentId.push(this.Student[i]._id)
                }

                console.log('studentId1', this.studentId)//array

                this.data = {
                    student: this.studentId
                }

                localStorage.setItem("stuId", JSON.stringify(this.studentId))
            })
            .catch((error) => {
                console.log(error);
            })

        //grade
        const id = JSON.parse(localStorage.getItem("stuId"))
        console.log(id)
        axios.post('http://localhost:8082/grades/getGradesForStudent', { student: id, subjectName: this.subjectName })
            .then((response) => {
 
                const get = response.data;
                for (let i = 0; i < get.length; i++) {
                    const object = eval(`(${get[i]})`);
                    this.Grade.push(object)
                }
            })
            .catch((error) => {
                console.log(error);
                const id = JSON.parse(localStorage.getItem("stuId"))
                for (let i = 0; i < id.length; i++) {
                    const data = {
                        _id: {$oid: null},
                        grade: ''

                    }
                    this.Grade.push(data)
                }
            })
    },
    mounted() {

    },
    methods: {
        signout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace("/");
                    localStorage.removeItem("email")
                    localStorage.removeItem("Teacher")
                })
        },
        editForm(student, row, grade) {
            this.isEditing = true;
            this.selectStuId = student
            this.row = row;
            this.selectGrade = grade;
            console.log(grade)
        },
        editGrade(){
            const data = {
                _id: this.selectGrade,
                grade: this.selected,
                studentId: this.selectStuId,
                subjectName: this.subjectName
            }
            
            axios.put("http://localhost:8082/grades", data)
            .then((response) => {
                console.log(response.data);
                
                

                this.isEditing = true;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        editAddForm(student, row){
            this.isEditing = true;
            this.selectStuId = student
            this.row = row;
        },
        addGrade(){
            const addData = {
                grade: this.selected,
                studentId: this.selectStuId,
                subjectName: this.subjectName
            }
            console.log(addData)
            axios.post("http://localhost:8082/grades", addData)
            .then((response) => {
                console.log(response.data);
                this.isEditing = true;
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>