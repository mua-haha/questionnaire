package com.hph.questionnaire.service.impl;

import com.hph.questionnaire.dao.TUserMapper;
import com.hph.questionnaire.dto.UserDTO;
import com.hph.questionnaire.model.TPermission;
import com.hph.questionnaire.model.TUser;
import com.hph.questionnaire.service.TUserService;
import com.hph.questionnaire.core.AbstractService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import javax.annotation.Resource;


/**
 * Created by demo4student on 2019-10-12 17:49:25.
 */
@Service
@Transactional
public class TUserServiceImpl extends AbstractService<TUser> implements TUserService {
    @Resource
    private TUserMapper tUserMapper;

	@Override
	public List<UserDTO> getUserInfoByName(String userName) {
		TUser user = new TUser();
		user.setName(userName);
		return tUserMapper.getUserInfo(user);
	}

}
