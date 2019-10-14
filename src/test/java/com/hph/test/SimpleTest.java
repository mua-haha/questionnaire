package com.hph.test;

import cn.hutool.crypto.SecureUtil;

public class SimpleTest {
	public static void main(String[] args) {
		String password = "123";
		System.out.println(SecureUtil.md5(password));
		
	}

}
