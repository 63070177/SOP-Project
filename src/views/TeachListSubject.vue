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
                <h2 class="block is-size-3" style="margin-top: 20px;">รายวิชาที่สอน</h2>
                <table style="width:100%; color: #fff;">
                    <tr>
                        <th class="is-size-5" style="color:#fff;">รหัสวิชา</th>
                        <th class="is-size-5" style="color:#fff;">ชื่อวิชา</th>
                    </tr>
                    
                        <tr>
                            <router-link style="color: #fff;" :to="{path: `GradePage`}"><td>06016309</td></router-link>
                            <td>INFORMATION SYSTEM SECURITY AND IT LAWS</td>
                        </tr>
                </table>
            </div>
    </div>
    </div>
</template>

<script>
    export default {
    name: "TeachListSubject",
    data() {
        return {};
    },
    methods: {},
}
</script>