package com.hph.questionnaire.configurer;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.hph.questionnaire.dto.UserDTO;
import com.hph.questionnaire.model.TPermission;
import com.hph.questionnaire.service.TUserService;

import cn.hutool.crypto.SecureUtil;

public class MyShiroRealm extends AuthorizingRealm {
	@Resource
	private TUserService tUserService;

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
		String username = (String) principalCollection.getPrimaryPrincipal();
		List<UserDTO> list = tUserService.getUserInfoByName(username);
		UserDTO user ;
		if(list.size() != 1){
			throw new UnknownAccountException("账户异常!");
		}else{
			user = list.get(0);
		}
		// 当前用户所有角色
		Set<String> roles = new HashSet<>();
		// 一个用户只有一个角色
		roles.add(user.getRoleName());

		// 当前用户所有权限
		List<TPermission> tPermissions = user.getPermissions();
		Set<String> permissions = new HashSet<>();
		for (TPermission upmsPermission : tPermissions) {
			if (StringUtils.isNotBlank(upmsPermission.getValue())) {
				permissions.add(upmsPermission.getValue());
			}
		}

		SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
		simpleAuthorizationInfo.setStringPermissions(permissions);
		simpleAuthorizationInfo.setRoles(roles);
		return simpleAuthorizationInfo;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		String username = (String) token.getPrincipal();
		String password = new String((char[]) token.getCredentials());
		List<UserDTO> list = tUserService.getUserInfoByName(username);
		if (list.size() == 0) {
			throw new UnknownAccountException("账户不存在!");
		} else if (!list.get(0).getPassword().equals(SecureUtil.md5(password))) {
			throw new IncorrectCredentialsException("账户密码错误！");
		}
		return new SimpleAuthenticationInfo(username, password, getName());
	}
}
