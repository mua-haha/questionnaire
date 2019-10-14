package com.hph.questionnaire.web;

import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hph.questionnaire.core.Result;
import com.hph.questionnaire.core.ResultGenerator;
import com.hph.questionnaire.model.TUser;
import com.hph.questionnaire.service.TUserService;

/**
 * Created by demo4student on 2019-10-12 17:49:25.
 */
@Controller
@RequestMapping("/user")
public class TUserController {
	private final Logger logger = LoggerFactory.getLogger(TUserController.class);
	@Resource
	private TUserService tUserService;

	@RequestMapping("/login")
	public String login(TUser tUser) {
		String result;
		if(StringUtils.isEmpty(tUser.getName())){
			result =  "login";
		}else{
			logger.info("----------login-----------");
			Subject subject = SecurityUtils.getSubject();
			try {
				subject.login(new UsernamePasswordToken(tUser.getName(), tUser.getPassword()));
				logger.info("---------login success -----");
				result = "index";
			} catch (AuthenticationException e) {
				logger.info("---------login failed -----");
				e.printStackTrace();
				result = "error";
			}
		}
		return result;
	}
	
	/**
	 * 可以在 shiro中配置默认的logout
	 * 这里自定义logout方法，便于重定向
	 * @param model
	 * @return
	 */
	@RequestMapping("/logout")
	public String logout( Model model) {
	    Subject subject = SecurityUtils.getSubject();
	    subject.logout();
	    logger.info("----------logout-----------");
	    return "redirect:/index";
	}

	
	@RequestMapping("/add")
	@RequiresPermissions("user:add")
	public String add(TUser tUser) {
		String result;
		if(StringUtils.isEmpty(tUser.getName())){
			result =  "addUser";
		}else{
			tUserService.save(tUser);
			result =  "addUser";
		}
		return result;
	}

	@PostMapping("/delete")
	@RequiresPermissions("user:delete")
	public Result delete(@RequestParam Integer id) {
		tUserService.deleteById(id);
		return ResultGenerator.genSuccessResult();
	}

	@PostMapping("/update")
	public Result update(TUser tUser) {
		tUserService.update(tUser);
		return ResultGenerator.genSuccessResult();
	}

	@PostMapping("/detail")
	public Result detail(@RequestParam Integer id) {
		TUser tUser = tUserService.findById(id);
		return ResultGenerator.genSuccessResult(tUser);
	}

	@PostMapping("/list")
	public Result list(@RequestParam(defaultValue = "0") Integer page, @RequestParam(defaultValue = "0") Integer size) {
		PageHelper.startPage(page, size);
		List<TUser> list = tUserService.findAll();
		PageInfo pageInfo = new PageInfo(list);
		return ResultGenerator.genSuccessResult(pageInfo);
	}
}
