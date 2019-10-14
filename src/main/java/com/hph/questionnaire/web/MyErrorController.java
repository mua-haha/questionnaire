package com.hph.questionnaire.web;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.WebRequest;

@Controller
public class MyErrorController implements ErrorController {
	private final Logger logger = LoggerFactory.getLogger(MyErrorController.class);
	private static final String ERROR_PATH = "/error";
	
	@Autowired
    private ErrorAttributes errorAttributes;

	@RequestMapping(value = ERROR_PATH)
	public String handleError(Model model, HttpServletResponse response,HttpServletRequest request,final WebRequest req) {
		model.addAttribute("code", response.getStatus());
		
        Map<String, Object> body = this.errorAttributes.getErrorAttributes(req, true);
        model.addAttribute("path", body.get("path"));
        model.addAttribute("trace", body.get("trace"));
        model.addAttribute("error", body.get("error"));
        model.addAttribute("message", body.get("message"));
		
		return "error";
	}

	@Override
	public String getErrorPath() {
		return ERROR_PATH;
	}
}