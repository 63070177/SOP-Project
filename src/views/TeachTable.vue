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
                <div class="block is-size-3">
                    <h2>ตารางสอน</h2>
                </div>
                <div class="column">
                    <label class="block" style="margin-right: 10px;">ภาคเรียนที่</label>
                    <div class="select">
                        <select>
                            <option selected>----- เลือกภาคเรียน -----</option>
                            <option value="1">1/2561</option>
                            <option value="2">2/2561</option>
                            <option value="3">1/2562</option>
                            <option value="4">2/2562</option>
                            <option value="5">1/2563</option>
                            <option value="6">2/2563</option>
                            <option value="7">1/2564</option>
                            <option value="8">2/2564</option>
                            <option value="9">1/2565</option>
                            <option value="10">2/2565</option>
                        </select>
                    </div>
                </div>
                <div class="block">
                    <table style="width:100%; color: #fff;">
                            <tr>
                                <th class="is-size-5" style="color: #fff;">ชื่อวิชา</th>
                                <th class="is-size-5" style="color: #fff;">วัน-เวลา</th>
                                <th class="is-size-5" style="color: #fff;">ครูผู้สอน</th>
                            </tr>
                            <tr>
                                <td>SOP</td>
                                <td>วันพุธ 14.00-16.00 น.</td>
                                <td>.....</td>
                            </tr>
                    </table>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "TeachTable",
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
