/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2019/10/12 17:44:05                          */
/*==============================================================*/


drop table if exists t_permission;

drop table if exists t_permission_role;

drop table if exists t_role;

drop table if exists t_user;

/*==============================================================*/
/* Table: t_permission                                          */
/*==============================================================*/
create table t_permission
(
   id                   int not null auto_increment comment '主键id',
   value                varchar(128) comment '权限的值',
   uri                  varchar(128) comment '权限路径',
   create_time          timestamp comment '创建时间',
   update_time          timestamp comment '更新时间',
   description          varchar(128) comment '权限描述',
   primary key (id)
)
auto_increment = 1;

alter table t_permission comment '权限表 t_permission';

/*==============================================================*/
/* Table: t_permission_role                                     */
/*==============================================================*/
create table t_permission_role
(
   id                   int not null auto_increment comment '主键id',
   role_id              int comment '角色id',
   permission_id        int comment '权限id',
   primary key (id)
)
auto_increment = 1;

alter table t_permission_role comment '权限角色中间表 t_permission_role';

/*==============================================================*/
/* Table: t_role                                                */
/*==============================================================*/
create table t_role
(
   id                   int not null auto_increment comment '角色id',
   name                 varchar(128) comment '角色name',
   create_time          timestamp comment '创建时间',
   update_time          timestamp comment '更新时间',
   description          varchar(128) comment '角色描述',
   primary key (id)
)
auto_increment = 1;

alter table t_role comment '角色表 t_role';

/*==============================================================*/
/* Table: t_user                                                */
/*==============================================================*/
create table t_user
(
   id                   int not null auto_increment comment '用户id',
   name                 varchar(128) comment '用户name',
   sex                  varbinary(2) comment '用户性别',
   phone                varchar(128) comment '用户电话',
   email                varchar(128) comment '邮件地址',
   password             varchar(128) comment '密码',
   avatar               varchar(128) comment '头像',
   role_id              int comment '对应角色id',
   create_time          timestamp comment '创建时间',
   update_time          timestamp comment '更新时间',
   primary key (id)
)
auto_increment = 1;

alter table t_user comment '用户表 t_user';

