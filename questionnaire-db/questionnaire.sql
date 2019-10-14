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
   id                   int not null auto_increment comment '����id',
   value                varchar(128) comment 'Ȩ�޵�ֵ',
   uri                  varchar(128) comment 'Ȩ��·��',
   create_time          timestamp comment '����ʱ��',
   update_time          timestamp comment '����ʱ��',
   description          varchar(128) comment 'Ȩ������',
   primary key (id)
)
auto_increment = 1;

alter table t_permission comment 'Ȩ�ޱ� t_permission';

/*==============================================================*/
/* Table: t_permission_role                                     */
/*==============================================================*/
create table t_permission_role
(
   id                   int not null auto_increment comment '����id',
   role_id              int comment '��ɫid',
   permission_id        int comment 'Ȩ��id',
   primary key (id)
)
auto_increment = 1;

alter table t_permission_role comment 'Ȩ�޽�ɫ�м�� t_permission_role';

/*==============================================================*/
/* Table: t_role                                                */
/*==============================================================*/
create table t_role
(
   id                   int not null auto_increment comment '��ɫid',
   name                 varchar(128) comment '��ɫname',
   create_time          timestamp comment '����ʱ��',
   update_time          timestamp comment '����ʱ��',
   description          varchar(128) comment '��ɫ����',
   primary key (id)
)
auto_increment = 1;

alter table t_role comment '��ɫ�� t_role';

/*==============================================================*/
/* Table: t_user                                                */
/*==============================================================*/
create table t_user
(
   id                   int not null auto_increment comment '�û�id',
   name                 varchar(128) comment '�û�name',
   sex                  varbinary(2) comment '�û��Ա�',
   phone                varchar(128) comment '�û��绰',
   email                varchar(128) comment '�ʼ���ַ',
   password             varchar(128) comment '����',
   avatar               varchar(128) comment 'ͷ��',
   role_id              int comment '��Ӧ��ɫid',
   create_time          timestamp comment '����ʱ��',
   update_time          timestamp comment '����ʱ��',
   primary key (id)
)
auto_increment = 1;

alter table t_user comment '�û��� t_user';

