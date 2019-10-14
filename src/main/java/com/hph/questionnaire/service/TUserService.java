package com.hph.questionnaire.service;
import java.util.List;

import com.hph.questionnaire.core.Service;
import com.hph.questionnaire.dto.UserDTO;
import com.hph.questionnaire.model.TUser;


/**
 * Created by demo4student on 2019-10-12 17:49:25.
 */
public interface TUserService extends Service<TUser> {
	
	public List<UserDTO> getUserInfoByName(String userName);
	
	

}
