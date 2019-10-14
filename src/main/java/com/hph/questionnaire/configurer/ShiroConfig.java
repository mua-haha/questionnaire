package com.hph.questionnaire.configurer;

import org.apache.shiro.spring.web.config.DefaultShiroFilterChainDefinition;
import org.apache.shiro.spring.web.config.ShiroFilterChainDefinition;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShiroConfig {
	@Bean
	MyShiroRealm myRealm() {
		return new MyShiroRealm();
	}

	@Bean
	DefaultWebSecurityManager securityManager() {
		DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
		manager.setRealm(myRealm());
		return manager;
	}

	@Bean
	ShiroFilterChainDefinition shiroFilterChainDefinition() {
		DefaultShiroFilterChainDefinition definition = new DefaultShiroFilterChainDefinition();
		definition.addPathDefinition("/", "anon");
		definition.addPathDefinition("/index", "anon");
		definition.addPathDefinition("/user/login", "anon");
		definition.addPathDefinition("/plugins/**", "anon");
		definition.addPathDefinition("/assets/**", "anon");
		definition.addPathDefinition("/error", "anon");
		definition.addPathDefinition("/**", "authc");
		return definition;
	}

//	// 加入注解的使用，不加入这个注解不生效
//	@Bean
//	public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor(SecurityManager securityManager) {
//		AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor = new AuthorizationAttributeSourceAdvisor();
//		authorizationAttributeSourceAdvisor.setSecurityManager(securityManager);
//		return authorizationAttributeSourceAdvisor;
//	}
}
