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
                <form>
                    <div class="block is-size-3">
                        <h2>วิชา XXXXXX</h2>
                    </div>
                    <div class="block">
                        <table style="width:100%; color: #fff;">
                            <tr>
                                <th class="is-size-5" style="color: #fff;">รหัสนักศึกษา</th>
                                <th class="is-size-5" style="color: #fff;">ชื่อ-นามสกุล</th>
                                <th class="is-size-5" style="color: #fff;">เกรด</th>
                            </tr>
                            <tr>
                                <td>63070148</td>
                                <td>รวิพร สมอฤทธิ์</td>
                                <td>
                                    <div class="select is-small">
                                        <select>
                                            <option>Select Grade</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>c</option>
                                            <option>D</option>
                                            <option>F</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>63070177</td>
                                <td>สุพิชญา ทำสุนา</td>
                                <td>
                                    <div class="select is-small">
                                        <select>
                                            <option>Select Grade</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>c</option>
                                            <option>D</option>
                                            <option>F</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>63070559</td>
                                <td>อ่นกก กรนนไบ</td>
                                <td>
                                    <div class="select is-small">
                                        <select>
                                            <option>Select Grade</option>
                                            <option>A</option>
                                            <option>B</option>
                                            <option>c</option>
                                            <option>D</option>
                                            <option>F</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="columns">
                        <div class="column">
                            <button class="button is-primary is-outlined">ตกลง</button>

                        </div>

                        <div class="column is-12">
                            <router-link :to="{path:`TeachListSubject`}">
                            <button class="button is-danger is-outlined">ยกเลิก</button>
                        </router-link></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GradePage",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>