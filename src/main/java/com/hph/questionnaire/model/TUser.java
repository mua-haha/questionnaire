package com.hph.questionnaire.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "t_user")
public class TUser {
    /**
     * 用户id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * 用户name
     */
    private String name;

    /**
     * 用户电话
     */
    private String phone;

    /**
     * 邮件地址
     */
    private String email;

    /**
     * 密码
     */
    private String password;

    /**
     * 头像
     */
    private String avatar;

    /**
     * 对应角色id
     */
    @Column(name = "role_id")
    private Integer roleId;

    /**
     * 创建时间
     */
    @Column(name = "create_time")
    private Date createTime;

    /**
     * 更新时间
     */
    @Column(name = "update_time")
    private Date updateTime;

    /**
     * 用户性别
     */
    private byte[] sex;

    /**
     * 获取用户id
     *
     * @return id - 用户id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置用户id
     *
     * @param id 用户id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取用户name
     *
     * @return name - 用户name
     */
    public String getName() {
        return name;
    }

    /**
     * 设置用户name
     *
     * @param name 用户name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取用户电话
     *
     * @return phone - 用户电话
     */
    public String getPhone() {
        return phone;
    }

    /**
     * 设置用户电话
     *
     * @param phone 用户电话
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    /**
     * 获取邮件地址
     *
     * @return email - 邮件地址
     */
    public String getEmail() {
        return email;
    }

    /**
     * 设置邮件地址
     *
     * @param email 邮件地址
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 获取密码
     *
     * @return password - 密码
     */
    public String getPassword() {
        return password;
    }

    /**
     * 设置密码
     *
     * @param password 密码
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 获取头像
     *
     * @return avatar - 头像
     */
    public String getAvatar() {
        return avatar;
    }

    /**
     * 设置头像
     *
     * @param avatar 头像
     */
    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    /**
     * 获取对应角色id
     *
     * @return role_id - 对应角色id
     */
    public Integer getRoleId() {
        return roleId;
    }

    /**
     * 设置对应角色id
     *
     * @param roleId 对应角色id
     */
    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    /**
     * 获取创建时间
     *
     * @return create_time - 创建时间
     */
    public Date getCreateTime() {
        return createTime;
    }

    /**
     * 设置创建时间
     *
     * @param createTime 创建时间
     */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取更新时间
     *
     * @return update_time - 更新时间
     */
    public Date getUpdateTime() {
        return updateTime;
    }

    /**
     * 设置更新时间
     *
     * @param updateTime 更新时间
     */
    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * 获取用户性别
     *
     * @return sex - 用户性别
     */
    public byte[] getSex() {
        return sex;
    }

    /**
     * 设置用户性别
     *
     * @param sex 用户性别
     */
    public void setSex(byte[] sex) {
        this.sex = sex;
    }
}