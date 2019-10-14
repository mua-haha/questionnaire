package com.hph.questionnaire.dao;

import java.util.List;

import com.hph.questionnaire.core.Mapper;
import com.hph.questionnaire.dto.UserDTO;
import com.hph.questionnaire.model.TUser;

public interface TUserMapper extends Mapper<TUser> {

	List<UserDTO> getUserInfo(TUser user);
}