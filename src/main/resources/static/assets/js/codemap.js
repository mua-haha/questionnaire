var CODE_MAP = {
    GENERAL: {
        YES: [],
        CAN: [],
        NEED: [],
        ALLOW: [],
        EXIST: [],
        ENABLE: [],
        STATUS: [],
        TYPE: [],
        SEX: []
    },
    AREA: {
        LEVEL:[],
        ENABLE:[]
    },
    DICT: {
        LOCKED:[]
    },
    ORG: {
        TYPE:[],
        ENABLE:[]
    },
    PROJECT: {
        ISEND:[],
        STATUS:[]
    },
    IMPORT: {
        DATA_TYPE: [],
        FUND_CYCLE: []
    },
    FILE_UPLOAD: {
        MAX_FILE_SIZE: 30 * 1024,           //单位KB
        DATA_IMPORT_FILE_TYPE: 31,          //数据导入附件类型
        YCSJBLFJ: 40    // 异常数据办理附件类型
    },
    FILE_DOWNLOAD: {
        RELATIVE_PATH: "/admin/file/download?id={0}"    //附件下载路径
    },
    DEFAULT_AREA: {
        ID: 399380,
        NAME: '建安区'
    },
    VERIFY: {
        ID_CARD_REG: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9xX]$/,
        FLOAT_VERIFY_REG:  /^\d+(\.\d+)?$/,
        MOBILE_REG: /^[1][3,4,5,7,8][0-9]{9}$/
    },
    INFOS: {
        STATUS: []
    },
    POLICY: {
        STATUS: [],
        LEVEL: []
    },
    EQM: {
        STATUS: [],
        ONLINE_STATUS: [],
        OPERATION_STATUS:[],
        REPAIR_TYPE:[],
        REPAIR_STATUS:[]
    },
    COMPLAIN_TYPE: {
        ID:[],
        TYPE:[]
    },
    PERM:{
        TYPE:[]
    },
    ALARM_MODEL: {
        TYPE: []
    },
    FUND_CHECK:{
        STATUS:[]
    },
    ALARM_ASSIGN: {
        STATUS: []
    }
};

// GENERAL
CODE_MAP.GENERAL.YES[0] = "否";
CODE_MAP.GENERAL.YES[1] = "是";

CODE_MAP.GENERAL.CAN[0] = "不可以";
CODE_MAP.GENERAL.CAN[1] = "可以";

CODE_MAP.GENERAL.NEED[0] = "不需要";
CODE_MAP.GENERAL.NEED[1] = "需要";

CODE_MAP.GENERAL.ALLOW[0] = "不允许";
CODE_MAP.GENERAL.ALLOW[1] = "允许";

CODE_MAP.GENERAL.EXIST[0] = "不存在";
CODE_MAP.GENERAL.EXIST[1] = "存在";

CODE_MAP.GENERAL.ENABLE[0] = "禁用";
CODE_MAP.GENERAL.ENABLE[1] = "启用";

CODE_MAP.GENERAL.STATUS[0] = "禁用";
CODE_MAP.GENERAL.STATUS[1] = "正常";

// USER
CODE_MAP.GENERAL.SEX[0] = "女";
CODE_MAP.GENERAL.SEX[1] = "男";

//area
CODE_MAP.AREA.LEVEL[0] = "<span class='layui-badge'>省级</span>";
CODE_MAP.AREA.LEVEL[1] = "<span class='layui-badge layui-bg-orange'>地市</span>";
CODE_MAP.AREA.LEVEL[2] = "<span class='layui-badge layui-bg-green'>区县</span>";
CODE_MAP.AREA.LEVEL[3] = "<span class='layui-badge layui-bg-cyan'>乡镇</span>";
CODE_MAP.AREA.LEVEL[4] = "<span class='layui-badge layui-bg-blue'>村/街道</span>";

CODE_MAP.AREA.ENABLE[0] = "<span class='layui-badge'>禁用</span>";
CODE_MAP.AREA.ENABLE[1] = "<span class='layui-badge layui-bg-green'>可用</span>";

//dictionary
CODE_MAP.DICT.LOCKED[0] = "<span class='layui-badge layui-bg-blue'>不锁定</span>";
CODE_MAP.DICT.LOCKED[1] = "<span class='layui-badge layui-bg-green'>锁定</span>";

//ORG
CODE_MAP.ORG.TYPE[1] = "行政组织";
CODE_MAP.ORG.TYPE[2] = "区域组织";
CODE_MAP.ORG.TYPE[3] = "纪检组织";
CODE_MAP.ORG.TYPE[4] = "规划区";
CODE_MAP.ORG.TYPE[5] = "其他";

CODE_MAP.ORG.ENABLE[0] = "<span class='layui-badge layui-bg-red'>停用</span>";
CODE_MAP.ORG.ENABLE[1] = "<span class='layui-badge layui-bg-green'>正常</span>";

//PROJECT 2=单位审核通过；3=单位审核未通过；4=纪委审核通过；5=纪委审核未通过
CODE_MAP.PROJECT.STATUS[1] = "未审核";
CODE_MAP.PROJECT.STATUS[2] = "单位审核通过";
CODE_MAP.PROJECT.STATUS[3] = "单位审核未通过";
CODE_MAP.PROJECT.STATUS[4] = "纪委审核通过";
CODE_MAP.PROJECT.STATUS[5] = "纪委审核未通过";

CODE_MAP.PROJECT.ISEND[0] = "<span class='layui-badge layui-bg-orange'>未竣工</span>";
CODE_MAP.PROJECT.ISEND[1] = "<span class='layui-badge layui-bg-green'>已竣工</span>";


//导入数据类型
CODE_MAP.IMPORT.DATA_TYPE[1] = "民生资金";
CODE_MAP.IMPORT.DATA_TYPE[2] = "死亡人口信息";
CODE_MAP.IMPORT.DATA_TYPE[3] = "残疾人员信息";
CODE_MAP.IMPORT.DATA_TYPE[4] = "车辆登记信息";
CODE_MAP.IMPORT.DATA_TYPE[5] = "房产购置信息";
CODE_MAP.IMPORT.DATA_TYPE[6] = "工商注册信息";
CODE_MAP.IMPORT.DATA_TYPE[7] = "共产党员信息";
CODE_MAP.IMPORT.DATA_TYPE[8] = "国家公职人员及家属信息";
CODE_MAP.IMPORT.DATA_TYPE[9] = "村干部及家属信息";
CODE_MAP.IMPORT.DATA_TYPE[10] = "建档立卡户信息";
CODE_MAP.IMPORT.DATA_TYPE[11] = "结对帮扶信息";
CODE_MAP.IMPORT.DATA_TYPE[12] = "贫困户清退信息";
CODE_MAP.IMPORT.DATA_TYPE[13] = "脱贫户信息";
CODE_MAP.IMPORT.DATA_TYPE[14] = "驻村情况";

//资金发放非周期
CODE_MAP.IMPORT.FUND_CYCLE[1] = "按月发放";
CODE_MAP.IMPORT.FUND_CYCLE[2] = "按季度发放";
CODE_MAP.IMPORT.FUND_CYCLE[3] = "半年度发放";
CODE_MAP.IMPORT.FUND_CYCLE[4] = "按年发放";

//综合信息状态
CODE_MAP.INFOS.STATUS[0] = "<span class='layui-badge layui-bg-orange'>未审核</span>";
CODE_MAP.INFOS.STATUS[1] = "<span class='layui-badge layui-bg-blue'>审核通过</span>";

//政策公示
CODE_MAP.POLICY.STATUS[1] = "<span class='layui-badge layui-bg-blue'>正常</span>";
CODE_MAP.POLICY.STATUS[2] = "<span class='layui-badge layui-bg-orange'>禁用</span>";

CODE_MAP.POLICY.LEVEL[1] = "中央";
CODE_MAP.POLICY.LEVEL[2] = "省";
CODE_MAP.POLICY.LEVEL[3] = "市";
CODE_MAP.POLICY.LEVEL[4] = "区县";

CODE_MAP.EQM.STATUS[1] = "未使用";
CODE_MAP.EQM.STATUS[2] = "使用中";
CODE_MAP.EQM.STATUS[3] = "停用";
CODE_MAP.EQM.STATUS[4] = "报废";
CODE_MAP.EQM.STATUS[5] = "待重新激活";

CODE_MAP.EQM.ONLINE_STATUS[1] = "<span class='layui-badge layui-bg-blue'>在线</span>";
CODE_MAP.EQM.ONLINE_STATUS[2] = "<span class='layui-badge layui-bg-danger'>离线</span>";

CODE_MAP.EQM.OPERATION_STATUS[1] = "<span class='layui-badge layui-bg-red'>未执行</span>";
CODE_MAP.EQM.OPERATION_STATUS[2] = "<span class='layui-badge layui-bg-orange'>执行中</span>";
CODE_MAP.EQM.OPERATION_STATUS[3] = "<span class='layui-badge layui-bg-green'>已执行</span>";

//1=操作问题 2=机械硬盘故障 3=SSD故障 4=主板故障 5=网卡故障 6=屏幕故障
CODE_MAP.EQM.REPAIR_TYPE[1] = "操作问题";
CODE_MAP.EQM.REPAIR_TYPE[2] = "机械硬盘故障";
CODE_MAP.EQM.REPAIR_TYPE[3] = "SSD故障";
CODE_MAP.EQM.REPAIR_TYPE[4] = "主板故障";
CODE_MAP.EQM.REPAIR_TYPE[5] = "网卡故障";
CODE_MAP.EQM.REPAIR_TYPE[6] = "屏幕故障";

//1=已报修 2=正处理 3=已处理
CODE_MAP.EQM.REPAIR_STATUS[1] = "<span class='layui-badge layui-bg-blue'>已报修</span>";
CODE_MAP.EQM.REPAIR_STATUS[2] = "<span class='layui-badge layui-bg-orange'>正处理</span>";
CODE_MAP.EQM.REPAIR_STATUS[3] = "<span class='layui-badge layui-bg-green'>已处理</span>";

//快速举报类型
CODE_MAP.COMPLAIN_TYPE.TYPE[0] = "<input type='radio' style='width: auto' name='title' lay-filter='complain-Id' value='金额不对' title='金额不对'>";
CODE_MAP.COMPLAIN_TYPE.TYPE[1] = "<input type='radio' style='width: auto' name='title' lay-filter='complain-Id' value='无领取资格' title='无领取资格'>";
CODE_MAP.COMPLAIN_TYPE.TYPE[2] = "<input type='radio' style='width: auto' name='title' lay-filter='complain-Id' value='重复发放' title='重复发放'>";
CODE_MAP.COMPLAIN_TYPE.TYPE[3] = "<input type='radio' style='width: auto' name='title' lay-filter='complain-Id' value='数据有误' title='数据有误'>";
CODE_MAP.COMPLAIN_TYPE.TYPE[4] = "<input type='radio' style='width: auto' name='title' lay-filter='complain-Id' value='对象已死亡' title='对象已死亡'>";
CODE_MAP.COMPLAIN_TYPE.TYPE[5] = "<input type='radio' style='width: auto' name='title' lay-filter='complain-Id' value='其他情况' title='其他情况'>";

CODE_MAP.PERM.TYPE[1] = "目录";
CODE_MAP.PERM.TYPE[2] = "菜单";
CODE_MAP.PERM.TYPE[3] = "按钮";
CODE_MAP.PERM.TYPE[4] = "其他";

CODE_MAP.FUND_CHECK.STATUS[1] = "<span class='layui-badge layui-bg-red'>有异常数据</span>";
CODE_MAP.FUND_CHECK.STATUS[2] = "<span class='layui-badge layui-bg-green'>无异常数据</span>";

// 报警模型
CODE_MAP.ALARM_MODEL.TYPE[1] = "通用报警模型";
CODE_MAP.ALARM_MODEL.TYPE[2] = "基础数据对比模型";
CODE_MAP.ALARM_MODEL.TYPE[3] = "互斥资金对比模型";

// 异常处理交办
// 1=办理中（已交办）；2=已提交（待审核）；3=审核通过；4=审核不通过；5=已撤销
CODE_MAP.ALARM_ASSIGN.STATUS[1] = "办理中";
CODE_MAP.ALARM_ASSIGN.STATUS[2] = "已提交";
CODE_MAP.ALARM_ASSIGN.STATUS[3] = "审核通过";
CODE_MAP.ALARM_ASSIGN.STATUS[4] = "审核不通过";
CODE_MAP.ALARM_ASSIGN.STATUS[5] = "已撤销";