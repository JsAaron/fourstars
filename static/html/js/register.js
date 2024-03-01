let timer,mbNum;
let isLoading = false;
let rootPath = "http://im.p9cloud.cn";
let loading = "./images/login/loading.gif";
/* 页面初始化处理 */
$(function() {
	$.ajax({
		url: `${rootPath}/bsys/system/public/register/stmsg/check`,
		data: {},
		type: "post",
		dataType: "json",
		success: function(res) {
			if( res['data'] && res['data']['time']){
				let dtime = res['data']['time']
				clearInterval(timer)
				timer = null
				let aa = 60000 - parseInt(dtime,10) 
				  aa = aa / 1000 
				  if(aa && aa>0){
					  sendVerfCodeCb(aa.toFixed(0))
				  }
			}
		},
		error: function(xhr, errorMessage, e) {
			//alert(errorMessage);
		},
	});
	/*获取焦点显示*/
	$("#user-org").blur(checkOrg);
	$("#user-name").blur(checkName);
	$("#user-phone").blur(checkPhNum);
	$("#user-org").focus(function(){
		$("#tooltip-input1").css("display", "none");
		$("#errorMsg").html('')
	});
	$("#user-name").focus(function(){
		$("#tooltip-input2").css("display", "none");
		$("#errorMsg").html('')
	});
	$("#user-phone").focus(function(){
		$("#tooltip-input3").css("display", "none");
		if($("#ver-button").val() === '发送验证码') {
			$("#ver-button").removeClass("dis-but");
		}
		$("#errorMsg").html('')
	});
	$("#verif-code").focus(function(){
		$("#tooltip-input4").css("display", "none");
		$("#errorMsg").html('')
	});

    /* 初始化按钮拖动事件 */
    $("#sliderInner-capture-bd").Tdrag({
        scope: ".outer-capture-bd",
        axis: "x",
        cbStart: function (obj, self, ev) {//移动前的回调函数
        },

        cbMove: function (obj, self, ev) {//移动中的回调函数
            left_binarydance = obj.offsetLeft;
            $("#sliderInner-capture-bd").css("left", (left_binarydance) + "px");
            $("#slideImage-capture-bd").css("left", (left_binarydance) + "px");
        },

        cbEnd: function (obj, self, ev) {//移动结束时候的回调函数
            //停止移动时候的滑块距离
            left_binarydance = obj.offsetLeft;
            //停止移动时候、去校验
            checkImageValidate();
        }
    });
});
function checkOrg () {
	let org = $("#user-org").val();
	if (!org) {
		$("#tooltip-input1").css("display", "block");
		return false
	}else{
		$("#tooltip-input1").css("display", "none");
	}
	return true
}
function checkName () {
	let name = $("#user-name").val();
	if (!name) {
		$("#tooltip-input2").css("display", "block");
		return false
	}
	$("#tooltip-input2").css("display", "none");
	return true
}
function checkPhNum () {
	mbNum = $("#user-phone").val();
	if (!mbNum) {
		$("#tooltip-input3").html("请填写手机号码！").css("display", "block");
		return false
	}
	if (!checkPhone()) {
		$("#tooltip-input3").html("手机号码格式不正确！").css("display", "block");
		return false
	}
	$("#tooltip-input3").css("display", "none");
	return true
}
function checkCode () {
	let verif = $("#verif-code").val();
	if (!verif) {
		$("#tooltip-input4").css("display", "block");
		return false
	}
	$("#tooltip-input4").css("display", "none");
	return true
}
/**
 * 电话号码检测
 * @param {String} phone 需要检查的手机号码
 * @return {Boolean} 返回是否正确
 * */
function checkPhone() {
	if (
		!/^0?(13[0-9]|15[012356789]|18[012346789]|14[57]|17[678]|170[059]|14[57]|166|19[89])[0-9]{8}$/.test(
			mbNum
		)
	) {
		return false;
	}
	return true;
}
$("#ver-button").click(() => {
	if(checkPhNum ()){
		$("#ver-modal").css('display','block')
		// 设置图片的src属性
		$("#validateImage-capture-bd").attr("src","");
		$("#slideImage-capture-bd").attr("src", "");
		_noLineImg = "";
		_lineImg ="";
		//acptureUuid
		acptureUuid_binarydance = "";
		$("#result-msg").css("display","none");
		$("#opt-title").css("display","inline");
		// 初始化图片验证码
		if(isLoading === false){
			initImageValidate();
		}
	}
});
function closeDlg(){
	$("#ver-modal").css('display','none')
}
/* 发送验证码成功后回调 */
function sendVerfCodeCb(tt) {
	$("#ver-button").attr("disabled",true);
	$("#ver-button").addClass("dis-but");
	if (!timer) {
		// 倒计时间
		let codeTimer = tt;
		$("#ver-button").attr("value", codeTimer + "s后重新获取");
		// 判断时间是不是要显示
		// 设置倒计时定时器
		timer = setInterval(() => {
			if (codeTimer > 0 && codeTimer <= 60) {
				codeTimer--;
				$("#ver-button").attr("value", codeTimer + "s后重新获取");
				$("#tmierCount").html(codeTimer);
			} else {
				clearInterval(timer); // 清除定时器
				timer = null;
				isLoading = false
				$("#ver-button").removeClass("dis-but");
				$("#ver-button").attr("value","发送验证码").attr("disabled",false);
			}
		}, 1000);
	}
}
/* 提交前做一次检查 */
function submitCheck() {
	let flag1 = checkOrg();
	let flag2 = checkName();
	let flag3 = checkPhNum();
	return  flag1 && flag2 && flag3
}
/* 提交事件 */
$("#submit-button").click(() => {
	/* $("#submit-button").removeClass("active");
	$("#submit-button").addClass("active"); */
	if (!submitCheck()) return false
	if (!checkCode()) return false
	let code = $("#verif-code").val();
	let org = $("#user-org").val();
	let name = $("#user-name").val();
	$("#submit-button").css("background", "#dadada").attr("disabled", true);
	$.ajax({
		url: `${rootPath}/bsys/system/public/mobile/register`,
		data: {mbNum,code,name,org},
		type: "post",
		dataType: "json",
		success: function(res) {
			if(res['status'] == 'SUCCESS'){
				$("#success-con").css("display", "block");
				$("#register-con").css("display","none");
				// setTimeout(()=>{
				// 	window.location.href = './index.html#showtime'
				// },2000)
			}else{
				$("#errorMsg").html("注册失败："+res['msg'])
				$("#submit-button").css("background", "#2453D5").attr("value", "立即注册").attr("disabled", false);
			}
		},
		error: function(xhr, errorMessage, e) {
			$("#errorMsg").html("注册失败："+errorMessage)
		},
	});
	/*获取焦点显示*/
	$("#user-phone").focus(function() {
		$("#tooltip-input").css("display", "none");
	});
});
/* 图片验证码*/
// x轴=轴线滑动的距离
var left_binarydance = 0;

// 服务器返回的acptureUuid参数，注意保存，校验时候同left_binarydance参数一起传入
var acptureUuid_binarydance = '';

// 存储不带描边的抠图
var _noLineImg = null;

// 存储带描边的抠图
var _lineImg = null;
//服务器生成图片
function initImageValidate() {
	$("#status-img").attr("src", loading);
	$("#status-img").css("display", 'flex');
	$("#loading-container").css("display", "flex");
	// 将按钮和拼图恢复至原位置
	$("#sliderInner-capture-bd").animate({"left": "0px"}, 200);
	$("#slideImage-capture-bd").animate({"left": "0px"}, 200);
    $.ajax({
        type: "POST",
        url: `${rootPath}/bsys/system/public/capture/img`,
        dataType: "json",
        data: {},
        success: function (data) {
            if (data.status === 'SUCCESS') {
                // 设置图片的src属性
                $("#validateImage-capture-bd").attr("src", data.data.oriCopyImage);
                $("#slideImage-capture-bd").attr("src", data.data.newImage);
                _noLineImg = data.data.noLineImg;
                _lineImg = data.data.newImage;
                //acptureUuid
                acptureUuid_binarydance = data.data.acptureUuid;
				$("#result-msg").css("display","none");
				$("#result-msg").html("");
                $("#opt-title").css("display","inline");
            }else {
				$("#opt-title").css("display","none");
				$("#result-msg").html('图片加载失败,请刷新重试');
				$("#result-msg").css("display","inline");
            }
            $("#loading-container").css("display", "none");
			isLoading = false
        },
        error: function () {
			$("#opt-title").css("display","none");
			$("#result-msg").html('图片加载失败,请刷新重试');
			$("#result-msg").css("display","inline");
        }
    });
}

//点击按钮请求切换图片
function exchange() {
	if(isLoading === true) return;
	isLoading = true;
    initImageValidate();
}

//服务器校验
function checkImageValidate() {
	$("#status-img").css("display", 'flex');
	$("#status-img").attr("src", loading);
	$("#loading-container").css("display", "flex");
	isLoading = true;
    $.ajax({
        type: "POST",
        url: `${rootPath}/bsys/system/public/capture/verify`,
        dataType: "json",
        data: {
            picId: acptureUuid_binarydance,
            coordX: left_binarydance,
            mbNum: mbNum
        },
        success: function (data) {
            if (data.status === 'SUCCESS') {
            	if (_noLineImg != null) {
                    $("#slideImage-capture-bd").attr("src", _noLineImg);
                }
            	let result = data.data
            	if(result){
            		if(result['fail']){
						$("#status-img").css("display", 'none');
						$("#opt-title").css("display","none");
						$("#result-msg").html(result['fail']);
						$("#result-msg").css("display","inline");
						isLoading = false
            		}else if (result['sended']){
						$("#status-img").css("display", 'none');
						$("#opt-title").css("display","none");
						$("#result-msg").html("请"+"<span id = 'tmierCount'>"+result['sended']+"</span>"+"秒后重试")
						$("#result-msg").css("display","inline");
            			sendVerfCodeCb(parseInt(result['sended']))
            		}else {
						closeDlg()
            			sendVerfCodeCb(60)
            		}
            	}
            } else {
            	if(data.msg === 'reload'){
					$("#opt-title").css("display","none");
					$("#result-msg").html('验证图片已失效，正在生成新图片！')
					$("#result-msg").css("display","inline");
					isLoading = false
            		exchange();//重新获取
            	}else{
					$("#opt-title").css("display","none");
					$("#result-msg").html(data.msg)
					$("#result-msg").css("display","inline");
					setTimeout(() => {
						$("#result-msg").css("display","none");
						$("#result-msg").html("");
						$("#opt-title").css("display","inline");
					}, 1000);
	                // 验证未通过，将按钮和拼图恢复至原位置
	                if (_lineImg != null) {
	                    $("#slideImage-capture-bd").attr("src", _lineImg);
	                }
	                $("#sliderInner-capture-bd").animate({"left": "0px"}, 200);
	                $("#slideImage-capture-bd").animate({"left": "0px"}, 200);
	                //震动
	                $("#container-capture-bd").shake(1, 10, 200);
	                $("#loading-container").css("display", "none");
            	}
				isLoading = false
            }
        },
        error: function () {
			$("#opt-title").css("display","none");
        	$("#result-msg").html('校验失败,请刷新重试');
			$("#result-msg").css("display","inline");
        }
    });
}
//$("抖动元素").shake(次数, 距离, 持续时间);
jQuery.fn.shake = function (intShakes /*Amount of shakes*/, intDistance /*Shake distance*/, intDuration /*Time duration*/) {
    this.each(function () {
        var jqNode = $(this);
        jqNode.css({position: 'relative'});
        for (var x = 1; x <= intShakes; x++) {
            jqNode.animate({left: (intDistance * -1)}, (((intDuration / intShakes) / 4)))
                .animate({left: intDistance}, ((intDuration / intShakes) / 2))
                .animate({left: 0}, (((intDuration / intShakes) / 4)));
        }
    });
    return this;
}