package com.hph.questionnaire.web;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
* Created by CodeGenerator on 2019/09/23.
*/
@Controller
public class HomeController {
	private final Logger logger = LoggerFactory.getLogger(HomeController.class);
	@RequestMapping("/")
	public String home(Model model) {
		logger.info("------------------------home---------------");
		return "redirect:/index";
	}

    @RequestMapping("index")
    public String detail(Model model) {
    	logger.info("------------------------index--------------");
        return "index";
    }

}
