package com.hph.questionnaire.model;

import java.util.Date;
import javax.persistence.*;

@Table(name = "t_permission")
public class TPermission {
    /**
     * 主键id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer pid;

    /**
     * 权限的值
     */
    private String value;

    /**
     * 权限路径
     */
    private String uri;

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
     * 权限描述
     */
    private String description;

    /**
     * 获取主键id
     *
     * @return id - 主键id
     */
    public Integer getId() {
        return id;
    }

    /**
     * 设置主键id
     *
     * @param id 主键id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return pid
     */
    public Integer getPid() {
        return pid;
    }

    /**
     * @param pid
     */
    public void setPid(Integer pid) {
        this.pid = pid;
    }

    /**
     * 获取权限的值
     *
     * @return value - 权限的值
     */
    public String getValue() {
        return value;
    }

    /**
     * 设置权限的值
     *
     * @param value 权限的值
     */
    public void setValue(String value) {
        this.value = value;
    }

    /**
     * 获取权限路径
     *
     * @return uri - 权限路径
     */
    public String getUri() {
        return uri;
    }

    /**
     * 设置权限路径
     *
     * @param uri 权限路径
     */
    public void setUri(String uri) {
        this.uri = uri;
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
     * 获取权限描述
     *
     * @return description - 权限描述
     */
    public String getDescription() {
        return description;
    }

    /**
     * 设置权限描述
     *
     * @param description 权限描述
     */
    public void setDescription(String description) {
        this.description = description;
    }
}