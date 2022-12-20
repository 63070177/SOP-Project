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
                        <router-link :to="{ path: `TeachTable` }">
                            <button class="button is-black btn">
                                <img class="logo" src="../assets/table-solid.svg" width="25px" height="25px" />
                                <span class="sidebar-text">ตารางสอนส่วนตัว</span>
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
                <p class="block is-size-3">ข้อมูลส่วนตัว</p>
                <div class="columns">
                    <div class="column">
                        <p class="text">ชื่อ</p>
                        <p class="text">นามสกุล</p>
                        <p class="text">วัน เดือน ปีเกิด</p>
                        <p class="text">อายุ</p>
                        <p class="text">คณะ</p>
                        <p class="text">สาขา</p>
                        <p class="text">ที่อยู่</p>
                        <p class="text">เบอร์โทรศัพท์</p>
                    </div>

                    <!-- ข้อมูลส่วนตัว -->
                    <div class="column is-9" v-if="!isEditing">
                        <p class="text">นายกระดาษ</p>
                        <p class="text">ดินสอ</p>
                        <p class="text">00 00 00</p>
                        <p class="text">21 ปี</p>
                        <p class="text">เทคโนโลยีสารสนเทศ</p>
                        <p class="text">เทคโนโลยีสารสนเทศ</p>
                        <p class="text">...</p>
                        <p class="text">0123456789</p>
                    </div>

                    <!-- แก้ไขข้อมูลส่วนตัว -->
                    <div class="column is-9" v-if="isEditing">
                        <input class="input is-small editInput" type="text" v-model="editName">
                        <input class="input is-small editInput" type="text" v-model="editSurname">
                        <input class="input is-small editInput" type="date" v-model="editBirth">
                        <input class="input is-small editInput" type="text" v-model="editAge">
                        <input class="input is-small editInput" type="text" v-model="editFaculty">
                        <input class="input is-small editInput" type="text" v-model="editBranch">
                        <input class="input is-small editInput" type="text" v-model="editAddress">
                        <input class="input is-small editInput" type="text" v-model="editTel">

                    </div>

                </div>
                <button class="button is-link is-outlined" v-if="!isEditing"
                    @click="isEditing = true;">แก้ไขข้อมูล</button>
                <div class="columns">
                    <div class="column">
                        <button class="button is-primary is-outlined" v-if="isEditing">ตกลง</button>

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
export default {
    name: "InfoTeach",
    data() {
        return {
            name: "Paper",
            editName: "",
            editSurname: "",
            editCode: "",
            editBirth: "",
            editAge: "",
            editFaculty: "",
            editBranch: "",
            editAddress: "",
            editYear: "",
            editTel: "",
            isEditing: false,
        }
    },
    methods: {
    }
}
</script>