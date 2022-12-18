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
                    <h2>เพิ่ม / แก้ไขรายวิชา</h2>
                </div>
                <form>
                    <div class="block">
                    <div>
                        <label>รหัสวิชา</label>
                        <div class="column">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div>
                        <label>ชื่อวิชา</label>
                        <div class="column">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div>
                        <label>วันเวลาที่สอน</label>
                        <div class="column">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div>
                        <label>รับ</label>
                        <div class="column">
                            <input type="text" class="input">
                        </div>
                    </div>
                    <div>
                        <label>รายละเอียดวิชา</label>
                        <div class="column">
                            <textarea class="textarea" rows="3"></textarea>
                        </div>
                    </div></div>
                    <div class="columns">
                        <div class="column">
                            <button class="button is-primary is-outlined">ตกลง</button>

                        </div>

                        <div class="column is-12">
                            <router-link :to="{path: `subjectTeacher`}">
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
name: "modifySubject",
data() {
return {

}
},
methods: {

}
}
</script>