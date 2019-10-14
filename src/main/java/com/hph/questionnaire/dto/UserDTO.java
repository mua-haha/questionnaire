package com.hph.questionnaire.dto;

import java.util.List;

import com.hph.questionnaire.model.TPermission;
import com.hph.questionnaire.model.TUser;

public class UserDTO extends TUser{
	
	private String roleName;
	private List<TPermission> permissions;
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public List<TPermission> getPermissions() {
		return permissions;
	}
	public void setPermissions(List<TPermission> permissions) {
		this.permissions = permissions;
	}
	
	
	

}
