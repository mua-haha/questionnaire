// 扩展字符串格式化方法
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
};

// 序列化form表单对象
$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

// 异步请求错误处理
function ajaxErrorHandler(xhr, textStatus, errorThrown) {
    // session失效
    if (xhr.status === 401) {
        window.location.reload();
    } else if (xhr.status === 500) {
        toastr.error("HTTP Status: 500 服务器内部错误", "提示信息");
    } else {
        toastr.error("HTTP Status: " + xhr.status, "提示信息");
    }
}

// 判断字符是否为空的方法
function isEmpty(obj) {
    return typeof obj === "undefined" || obj == null || obj === "";
}


dialogAlert = function (content, type) {
    var msgType = {
        success:1,
        error:2,
        warn:3,
        info:7
    };
    if(isEmpty(type)){
        type='info';
    }
    top.layer.alert(content, {
        icon: msgType[type],
        title: "系统提示",
        anim: -1,
        btnAlign: 'c',
        isOutAnim: false
    });
};

dialogConfirm = function (content, callBack) {
    top.layer.confirm(content, {
        area: '338px',
        icon: 7,
        anim: -1,
        isOutAnim: false,
        title: "系统提示",
        btn: ['确认', '取消'],
        btnAlign: 'c',
        yes: callBack
    });
};

dialogMsg = function(msg, type) {
    var msgType = {
        success:1,
        error:2,
        warn:3,
        info:7
    };
    if(isEmpty(type)){
        type='info';
    }
    top.layer.msg(msg, {
        icon: msgType[type],
        time: 2000
    });
};

dialogClose = function() {
    var index = top.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
    top.layer.close(index); //再执行关闭
};

dialogLoading = function(flag) {
    if(flag){
        top.layer.load(0, {
            shade: [0.1,'#fff'],
            time: 2000
        });
    }else{
        top.layer.closeAll('loading');
    }
};
$.SaveForm = function(options) {
    var defaults = {
        url : "",
        param : {},
        type : "post",
        dataType : "json",
        contentType : 'application/json',
        success : null,
        close : true
    };
    var options = $.extend(defaults, options);
    dialogLoading(true);
    window.setTimeout(function() {
        $.ajax({
            url : options.url,
            data : JSON.stringify(options.param),
            type : options.type,
            dataType : options.dataType,
            contentType : options.contentType,
            success : function(data) {
                if (data.code == '1') {
                    dialogAlert(data.message, 'error');
                } else if (data.code == '0') {
                    options.success(data);
                    dialogMsg(data.message, 'success');
                    if (options.close == true) {
                        dialogClose();
                    }
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                dialogLoading(false);
                if(XMLHttpRequest.responseJSON.code == 401){
                    window.location.href = "/login";
                } else if(textStatus=="error"){
                    dialogMsg("请求超时，请稍候重试...", "error");
                } else {
                    dialogMsg(errorThrown, 'error');
                }
            },
            beforeSend : function() {
                dialogLoading(true);
            },
            complete : function() {
                dialogLoading(false);
            }
        });
    }, 500);
};

$.RemoveForm = function(options) {
    var defaults = {
        msg : "注：您确定要删除吗？该操作将无法恢复",
        url : "",
        param : [],
        type : "post",
        dataType : "json",
        contentType : 'application/json',
        success : null
    };
    var options = $.extend(defaults, options);
    dialogConfirm(options.msg, function() {
        dialogLoading(true);
        window.setTimeout(function() {
            var postdata = options.param;
            $.ajax({
                url : options.url,
                data : JSON.stringify(postdata),
                type : options.type,
                dataType : options.dataType,
                contentType : options.contentType,
                success : function(data) {
                    if (data.code == '1') {
                        dialogAlert(data.message, 'error');
                    } else if (data.code == '0') {
                        dialogMsg(data.message, 'success');
                        options.success(data);
                    }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    dialogLoading(false);
                    if(XMLHttpRequest.responseJSON.code == 401){
                        window.location.href = "/login";
                    } else if(textStatus=="error"){
                        dialogMsg("请求超时，请稍候重试...", "error");
                    } else {
                        dialogMsg(errorThrown, 'error');
                    }
                },
                beforeSend : function() {
                    dialogLoading(true);
                },
                complete : function() {
                    dialogLoading(false);
                }
            });
        }, 500);
    });
};

/**
 * 获取文件大小（带单位）
 * @param size
 * @returns {string}
 */
function getFileSize(size) {
    if(size < 1024*10) {
        return size + 'B';
    } else if(size >= 1024*10 && size < 1024 * 1024 * 10) {
        var num = size/1024;
        return num.toFixed(2) + 'KB';
    } else {
        var num = size/1024/1024;
        return num.toFixed(2) + 'MB';
    }
}
//代码如下所示：
function convertCurrency(money) {
    //汉字的数字
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    //基本单位
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    //对应整数部分扩展单位
    var cnIntUnits = new Array('', '万', '亿', '兆');
    //对应小数部分单位
    var cnDecUnits = new Array('角', '分', '毫', '厘');
    //整数金额时后面跟的字符
    var cnInteger = '整';
    //整型完以后的单位
    var cnIntLast = '元';
    //最大处理的数字
    var maxNum = 999999999999999.9999;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (money == '') { return ''; }
    money = parseFloat(money);
    if (money >= maxNum) {
        //超出最大处理数字
        return '';
    }
    if (money == 0) {
        chineseStr = cnNums[0] + cnIntLast + cnInteger;
        return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') == -1) {
        integerNum = money;
        decimalNum = '';
    } else {
        parts = money.split('.');
        integerNum = parts[0];
        decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
        var zeroCount = 0;
        var IntLen = integerNum.length;
        for (var i = 0; i < IntLen; i++) {
            var n = integerNum.substr(i, 1);
            var p = IntLen - i - 1;
            var q = p / 4;
            var m = p % 4;
            if (n == '0') {
                zeroCount++;
            } else {
                if (zeroCount > 0) {
                    chineseStr += cnNums[0];
                }
                //归零
                zeroCount = 0;
                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                chineseStr += cnIntUnits[q];
            }
        }
        chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum != '') {
        var decLen = decimalNum.length;
        for (var i = 0; i < decLen; i++) {
            var n = decimalNum.substr(i, 1);
            if (n != '0') {
                chineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (chineseStr == '') {
        chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
        chineseStr += cnInteger;
    }
    return chineseStr;
}


/**
 * 表单验证错误提示，模仿Layui默认表单校验提示
 * @param text
 */
function verifyLayerMsg(text) {
    layer.msg(text, {icon: 5, anim: 6});
}