export default {
    common: {

    },
    signin: {
        title: '系统登录',
        login: '登录',
        username: '用户名',
        password: '密码',
        inputUsername: "请输入用户名",
        inputPassword: "请输入密码"
    },
    navbar: {
        dashboard: '首页',
        logout: '登出'
    },
    route: {
        dashboard: '首页',
        reading: '阅读理解',
        listen: '听力训练',
        roleManager: '人员管理',
        student: '学生',
        staff: '老师',
        master: '校长',
        article: '文章',
        keyin: '录入',
        marking: '评分',
        data: '数据中心',
        school: '校区管理',
        group: '班级管理',
        readArticle: "阅读内容"
    },
    school: {
        searchName: "学校编码",
        search: "搜索",
        add: "添加",
        code: "校区编码",
        name: "学校名称",
        status: "状态",
        master: "校长",
        phone: "联系方式",
        createdTime: "创建时间",
        updatedTime: "最后更新时间",
        operate: "操作",
        edit: "修改",
        delete: "删除",
        freeze: "封停",
        unfreeze: "解封",
        create: "创建",
        edit: "编辑",
        staff: "老师",
        requiredCode: "校区编码必须填写",
        fuzzyMasterList: "支持模糊搜索校长名字",
        noResult: "无结果",
        exist: "学校${0}已存在",
        createError: "创建学校失败"
    },
    staff: {
        searchName: "老师名字",
        search: "搜索",
        add: "添加",
        username: "用户名",
        status: "用户状态",
        phone: "电话",
        mail: "邮箱",
        createdAt: "创建时间",
        updatedAt: "最后更新时间",
        lastLoginAt: "最后登录时间",
        school: "所属学校",
        operate: "操作",
        group: "班级",
        password: "密码",
        createTitle: "新增老师",
        placeholderName: "请输入用户名",
        placeholderPassword: "请输入密码",
        placeholderSchoolCode: "请输入学校编码，如：‘BJTZ001’",
        placeholderPhone: "请输入电话",
        placeholderMail: "请输入邮箱",
        placeholderGroupName: "请输入班级名称",
        groupName: "班级名称",
        groupStudentCount: "班级人数",
        deleteStaffSuccess: "删除老师成功",
        deleteStaffFailed: "删除老师失败",
        unit: "个",
        edit: "编辑"
    },
    group: {
        searchName: "班级名字",
        search: "搜索",
        add: "添加",
        createdAt: "创建时间",
        lastLoginAt: "上次登录时间",
        school: "所属学校",
        operate: "操作",
        createdAt: "创建时间",
        updatedAt: "最后更新时间",
        staff: "老师",
        students: "学生",
        studentCount: "数量",
        name: "班级名称",
        staff: "老师",
        requiredCode1: "字母、数字、横线组成",
        edit: "编辑",
        delete: "删除",
        deleteSuccess: "删除成功",
        deleteCancel: "取消删除",
        deleteMsg: "删除后，该班级学生将打散",
        confirm: "确认",
        cancel: "取消",
        update: "更新",
        noResult: "查无此人",
        updateSuccess: "信息更新成功",
        updateFailed: "信息更新失败",
        fuzzyStaffList: "支持模糊搜索老师名字",
        fuzzyStudentList: "支持模糊搜索学生名字",
        authorLabel: "授权课程",
        author: "授权",
        remove: "移除",
        source: "源列表",
        target: "目标列表",
        alreadyHasGroup: "所选学生已经有所属班级，需取消之前班级再添加",
        alertConfirmButtonText: "确定",
        alertTitle: "提示"
    },
    student: {
        inputGroupName: "请输入班级名称",
        inputTips: "输入后匹配输入建议",
        username: "名字",
        secondName: "名",
        firstName: "姓",
        school: "学校",
        group: "班级",
        searchName: "学生名字",
        search: "搜索",
        add: "添加",
        username: "账号",
        password: "密码",
        schoolCode: "学校编码",
        validate: "有效期",
        mail: "邮箱",
        phone: "电话",
        status: "账号状态",
        createdAt: "创建日期",
        addTitle: "添加学生",
        view: "查看",
        article: "文章级别",
        groupCount: "拥有班级",
        createSuccess: "添加学生成功",
        createFailed: "添加学生失败",
        updatedAt: "更新时间",
        operate: "操作",
        groupNotNull: "请先在班级中移除该学生，方可进行删除",
        deleteTitle: "删除",
        deleteConfirm: "确认",
        freeze: "封停",
        normal: "解封",
        updateSuccess: "数据学生信息更新成功",
        updateFailed: "数据学生信息更新失败",
        changePassword: "修改密码"

    },
    reading: {
        title: "阅读理解",
        back: "返回",
        alphabet: "生词表",
        reading: "阅读",
        record: "录音",
        quiz: "答题",
        desc1: "这是一个描述，用来描述答题的",
        desc2: "Preview & Read on My Own",
        desc3: "Read & Record",
        desc4: "Take The Quiz",
        glossary: "解释",
        readtome: "Read to Me",
        pause: "Pause",
        record2: "Record",
        playmyreading: "Play My Reading",
        takequiz: "Take Quiz",
        takequizagain: "Take Quiz Again",
        commit: "提交",
        eglossary: "翻译",
        ediduknow: "你知道吗？"
    },
    article: {
        id: "编号",
        level: "文章等级",
        lexile: "蓝思等级",
        status: "状态",
        layout: "布局类型",
        title: "标题",
        operate: "操作",
        edit: "编辑",
        comfirm: "确认",
        cancel: "取消",
        getLevelFailed: "获取文章等级列表失败",
        getListFailed: "获取文章列表失败",
        cancelEditMessage: "取消编辑编号"
    },
    dashboard: {
        schoolCount: "校区数量",
        staffCount: "老师数量",
        studentCount: "学生总数",
        newStudentCount: "周新增学生",
        groupCount: "班级数量",
        dieStudentCount: "到期学生",
        haveGroupCount: "名下班级数量",
        needMarkCount: "需要批改数量",
        totalCount: "总授权课文数量",
        ingCount: "进行中课文数量",
        unstartCount: "未开始课文数量",
        overCount: "已完成课文数量"
    }
}