<template>
    <edu-dialog :isShow="dialogVisible" @close="close" :title="dialogTitle">
        <el-form :model="staffModel">
            <el-form-item :label="$t('staff.username')" label-width="100px">
                <el-input v-model="staffModel.name" auto-complete="off" :placeholder="$t('staff.placeholderName')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('staff.password')" label-width="100px" v-if="status === 'create'">
                <el-input auto-complete="off" v-model="staffModel.password" type="password" :placeholder="$t('staff.placeholderPassword')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('staff.school')" label-width="100px">
                <el-autocomplete v-model="staffModel.school" :placeholder="$t('staff.placeholderSchoolCode')" :fetch-suggestions="querySearchSchoolAsync" @select="schoolSelectHandler" style="width: 100%;" :disabled="userinfo.role === '800'"></el-autocomplete>
            </el-form-item>
            <el-form-item :label="$t('staff.phone')" label-width="100px">
                <el-input v-model="staffModel.phone" auto-complete="off" :placeholder="$t('staff.placeholderPhone')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('staff.mail')" label-width="100px">
                <el-input v-model="staffModel.mail" auto-complete="off" :placeholder="$t('staff.placeholderMail')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('staff.groupName')" label-width="100px">
                <el-autocomplete :placeholder="$t('staff.placeholderGroupName')" :fetch-suggestions="querySearchGroupAsync" @select="groupSelectHandler" style="width: 100%;"></el-autocomplete>
            </el-form-item>
        </el-form>
        <edu-table :tableColumns="tableColumns" :tableData="groupList" ref="grouptable">
            <template slot="opBtns" slot-scope="scope">
                <el-button size="mini" @click="operateHandler(scope.row,'deleteGroup')">删除</el-button>
            </template>
        </edu-table>
        <div style="float:right">
            <el-button @click="close()">取 消</el-button>
            <el-button type="primary" @click="addStaff" v-if="status === 'create'">确 定</el-button>
            <el-button type="primary" @click="updateStaff" v-else-if="status === 'edit'">确 定</el-button>
        </div>
    </edu-dialog>
</template>

<script>
import eduDialog from "@/components/Dialog/dialog";
import table from "@/components/table";
import { mapActions, mapGetters } from 'vuex';
import schoolService from "@/api/school";
import groupService from "@/api/group";
import staffService from "@/api/staff";
export default {
    components: {
        eduDialog,
        "edu-table": table
    },
    data() {
        return {
            dialogVisible: false,
            groupList: [],
            tableColumns: [
                { prop: "name", label: this.$t('staff.groupName'), width: '250' },
                { prop: "student", label: this.$t('staff.groupStudentCount'), width: '90' },
                { label: this.$t('staff.operate'), slotName: 'opBtns', width: '170' }
            ],
            staffModel: {}
        };
    },
    props: {
        isShow: { type: Boolean, default: false },
        dialogTitle: { type: String, default: "" },
        staffInfo: { type: Object, default: null },
        status: { type: String, default: "" }
    },
    watch: {
        isShow() {
            this.dialogVisible = this.isShow;
        },
        staffInfo(val) {
            this.staffModel = val;
        }
    },
    methods: {
        close() {
            this.dialogVisible = false;
            this.staffModel = {};
            this.$emit("close");
        },
        schoolSelectHandler(value) {
        },
        groupSelectHandler(value) {
            // 如果已经有了， 不在重复添加
            if (this.groupList.indexOf(value) > -1)
                return;
            this.groupList.push(value);
        },
        async querySearchSchoolAsync(queryStr, callback) {
            if (queryStr === "")
                return;

            try {
                let query = { "code": queryStr }
                const schoolInfo = await schoolService.getFuzzySchoolList(query);
                let schoolCodeList = schoolInfo.school;
                if (schoolCodeList instanceof Array) {
                    schoolCodeList.map(school => {
                        school.value = school.code;
                        return school;
                    })

                    callback(schoolCodeList);
                }
            } catch (e) {
                console.log(e, "获取学校列表失败");
            }
        },
        async querySearchGroupAsync(queryStr, callback) {
            if (queryStr === "")
                return;
            try {
                let query = { "name": queryStr };
                const groupInfo = await groupService.getFuzzyGroup(query);
                let groupList = groupInfo.group;
                if (groupList instanceof Array) {
                    groupList.map(group => {
                        group.value = group.name;
                        return group;
                    })
                    callback(groupList);
                }
            } catch (e) {
                console.log(e, "获取班级列表失败");
            }
        },
        operateHandler(row, opt) {
            switch (opt) {
                case "deleteGroup":
                    let idx = this.groupList.indexOf(row);
                    this.groupList.splice(idx, 1);
                    break;
            }
        },
        addStaff() {
            let ids = [];
            this.groupList.forEach(group => {
                ids.push(group._id);
            })
            this.staffModel.group = ids;
            this.staffModel.status = 0;
            if (this.userinfo.school !== "") {
                this.staffModel.school = this.userinfo.school;
            }
            console.log(this.staffModel);
            staffService.addStaff(this.staffModel).then(res => {
                this.$message({
                    type: 'success',
                    message: res.message
                });
                this.close();
                this.getStaffList(this.userParam);
            });
        },
        updateStaff() {
            staffService.updateStaff(this.staffModel).then(res => {
                if (res.status === 200) {
                    this.close();
                    this.$emit("fetchStaffList");
                }
            });
        },
        ...mapActions(["getStaffList"])
    },
    computed: {
        userParam() {
            return {
                school: this.userinfo.school
            };
        }, ...mapGetters({
            userinfo: "userinfo"
        })
    }
}
</script>

<style>

</style>
