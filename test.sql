/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50635
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50635
File Encoding         : 65001

Date: 2017-03-01 21:19:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for basicinformation
-- ----------------------------
DROP TABLE IF EXISTS `basicinformation`;
CREATE TABLE `basicinformation` (
  `姓名` varchar(10) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `性别` char(20) DEFAULT NULL,
  `出生年月` varchar(15) DEFAULT NULL,
  `高考省份` varchar(10) DEFAULT NULL,
  `高考类别` varchar(10) DEFAULT NULL,
  `高考数学成绩` varchar(10) DEFAULT NULL,
  `高考英语成绩` varchar(10) DEFAULT NULL,
  `入学时间` varchar(15) DEFAULT NULL,
  `入学专业` varchar(30) DEFAULT NULL,
  `转专业` varchar(10) DEFAULT NULL,
  `现专业` varchar(30) DEFAULT NULL,
  `双专业` varchar(20) DEFAULT NULL,
  `第二专业` varchar(30) DEFAULT NULL,
  `辅修` varchar(20) DEFAULT NULL,
  `辅修专业` varchar(30) DEFAULT NULL,
  `手机号` varchar(20) DEFAULT NULL,
  `微信号` varchar(30) DEFAULT NULL,
  `邮箱` varchar(30) DEFAULT NULL,
  `毕业时间` varchar(15) DEFAULT NULL,
  `未按时毕业原因` varchar(50) DEFAULT NULL,
  `毕业论文分数` varchar(10) DEFAULT NULL,
  `毕业去向` varchar(20) DEFAULT NULL,
  `研究生就读院校` varchar(30) DEFAULT NULL,
  `研究生专业` varchar(20) DEFAULT NULL,
  `研究生专业其他` varchar(20) DEFAULT NULL,
  `博士就读院校` varchar(30) DEFAULT NULL,
  `博士专业` varchar(20) DEFAULT NULL,
  `博士专业其他` varchar(20) DEFAULT NULL,
  `博士后就读院校` varchar(30) DEFAULT NULL,
  `博士后专业` varchar(20) DEFAULT NULL,
  `博士后专业其他` varchar(20) DEFAULT NULL,
  `工作单位` varchar(50) DEFAULT NULL,
  `工作单位类型` varchar(20) DEFAULT NULL,
  `所在部门` varchar(20) DEFAULT NULL,
  `所在部门偏向` varchar(20) DEFAULT NULL,
  `技术职务` varchar(20) DEFAULT NULL,
  `行政职务` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of basicinformation
-- ----------------------------
INSERT INTO `basicinformation` VALUES ('aa', 'aa', 'female', '1995-01', '安徽', '理科', 'aa', 'aa', '2013', '国际商务', '未转专业', 'noData', 'single_major', 'noData', '未辅修', 'noData', '135341', 'noData', 'aa@qq.com', '2017', 'noData', 'noData', '国内读研', 'aa', '其他', 'aa', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData');
INSERT INTO `basicinformation` VALUES ('bb', 'bb', 'female', '1996-02', '安徽', '理科', 'bb', 'bb', '2014', '国际商务', '未转专业', 'noData', 'single_major', 'noData', '未辅修', 'noData', 'bb', 'noData', 'bb', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData');
INSERT INTO `basicinformation` VALUES ('ii', 'ii', 'male', '1996-01', '安徽', '文科', 'noData', 'noData', '2014-09', '工商管理', '未转专业', 'noData', 'single_major', 'noData', '未辅修', 'noData', 'ii', 'noData', 'ii@qq.com', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', null, 'noData', 'noData', null, 'noData', 'noData', null, 'noData', 'noData', 'noData', 'noData', 'noData', 'noData');
INSERT INTO `basicinformation` VALUES ('kk', 'kk', 'female', '1996-03', '安徽', '文科', 'noData', 'noData', '2015-09', '工商管理', '未转专业', 'noData', 'single_major', 'noData', '未辅修', 'noData', 'kk', 'noData', 'kk@qq.com', 'noData', 'noData', 'noData', 'noData', 'noData', 'noData', null, 'noData', 'noData', null, 'noData', 'noData', null, 'noData', 'noData', 'noData', 'noData', 'noData', 'noData');

-- ----------------------------
-- Table structure for competition
-- ----------------------------
DROP TABLE IF EXISTS `competition`;
CREATE TABLE `competition` (
  `姓名` varchar(20) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `竞赛级别` varchar(20) DEFAULT NULL,
  `竞赛名称` varchar(50) NOT NULL,
  `获奖时间` varchar(20) NOT NULL,
  `获奖等级` varchar(20) DEFAULT NULL,
  `竞赛形式` varchar(20) DEFAULT NULL,
  `是否为组长` varchar(10) DEFAULT NULL,
  `组长姓名` varchar(20) DEFAULT NULL,
  `组员` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`,`竞赛名称`,`获奖时间`),
  CONSTRAINT `cpt` FOREIGN KEY (`ID`) REFERENCES `basicinformation` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of competition
-- ----------------------------
INSERT INTO `competition` VALUES ('aa', 'aa', 'national', '其他', '2013-09', 'aa', 'cpt_multiple', 'leader', 'aa', 'bb;bb;');
INSERT INTO `competition` VALUES ('aa', 'aa', 'national', '其他', '2014-07', 'aa', 'cpt_multiple', 'leader', 'undefined', 'bb;bb;');
INSERT INTO `competition` VALUES ('aa', 'aa', 'national', '其他', '2015-09', 'aa', 'cpt_multiple', 'leader', 'aa', 'bb;bb;');
INSERT INTO `competition` VALUES ('aa', 'aa', 'national', '北京大学生数学建模与计算机应用竞赛', '2016-07', '一等奖', 'cpt_single', 'noData', '', '');
INSERT INTO `competition` VALUES ('bb', 'bb', 'national', '其他', '2013-09', 'bb', 'cpt_multiple', 'leader', 'bb', 'aa;aa;');
INSERT INTO `competition` VALUES ('bb', 'bb', 'national', '北京大学生数学建模与计算机应用竞赛', '2016-09', 'cc', 'cpt_multiple', 'leader', 'cc', 'cc;cc;');
INSERT INTO `competition` VALUES ('ii', 'ii', 'national', '北京大学生数学建模与计算机应用竞赛', '2015-06', 'gg', 'cpt_multiple', 'leader', 'gg', 'gg;gg;');
INSERT INTO `competition` VALUES ('kk', 'kk', 'national', '北京大学生数学建模与计算机应用竞赛', '2016-09', 'uu', 'cpt_multiple', 'leader', 'uu', 'uu;uu;');

-- ----------------------------
-- Table structure for cxcy
-- ----------------------------
DROP TABLE IF EXISTS `cxcy`;
CREATE TABLE `cxcy` (
  `项目名称` varchar(60) NOT NULL,
  `立项年份` varchar(20) DEFAULT NULL,
  `项目级别` varchar(20) DEFAULT NULL,
  `项目类别` varchar(20) DEFAULT NULL,
  `姓名` varchar(20) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `指导教师` varchar(20) DEFAULT NULL,
  `职务` varchar(20) DEFAULT NULL,
  `组长姓名` varchar(20) DEFAULT NULL,
  `组员` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ID`,`项目名称`),
  CONSTRAINT `cxcy` FOREIGN KEY (`ID`) REFERENCES `basicinformation` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cxcy
-- ----------------------------
INSERT INTO `cxcy` VALUES ('anna', '2016-09', '国家级', '创新项目', 'aa', 'aa', 'hsf', 'teamLeader', '', 'undefined');
INSERT INTO `cxcy` VALUES ('ee', '2015-09', '国家级', '创新项目', 'bb', 'bb', 'ee', 'teamLeader', 'ee', 'ee;ee;ee;ee');
INSERT INTO `cxcy` VALUES ('rr', '2015-04', '国家级', '创新项目', 'ii', 'ii', 'rr', 'teamLeader', 'rr', 'rr;rr;rr');
INSERT INTO `cxcy` VALUES ('数据库', 'undefined', 'undefined', 'undefined', 'kk', 'kk', 'undefined', 'undefined', 'undefined', 'undefined');

-- ----------------------------
-- Table structure for kyxm
-- ----------------------------
DROP TABLE IF EXISTS `kyxm`;
CREATE TABLE `kyxm` (
  `项目名称` varchar(60) NOT NULL,
  `立项年份` varchar(20) DEFAULT NULL,
  `项目级别` varchar(20) DEFAULT NULL,
  `姓名` varchar(20) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `指导教师` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`,`项目名称`),
  CONSTRAINT `kyxm` FOREIGN KEY (`ID`) REFERENCES `basicinformation` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kyxm
-- ----------------------------
INSERT INTO `kyxm` VALUES ('fdsa', '2016-09', '国家级', 'aa', 'aa', '法分期');
INSERT INTO `kyxm` VALUES ('dd', '2016-07', '国家级', 'bb', 'bb', 'dd');

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `name` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('2014812060', '2014812060');
INSERT INTO `login` VALUES ('abc', 'abc');
INSERT INTO `login` VALUES ('def', 'def');
INSERT INTO `login` VALUES ('poi', 'poi');
INSERT INTO `login` VALUES ('qwe', 'qwe');

-- ----------------------------
-- Table structure for paper
-- ----------------------------
DROP TABLE IF EXISTS `paper`;
CREATE TABLE `paper` (
  `论文名称` varchar(60) NOT NULL,
  `姓名` varchar(20) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `著作信息` varchar(20) DEFAULT NULL,
  `作者名称` varchar(20) DEFAULT NULL,
  `第一作者` varchar(20) DEFAULT NULL,
  `第一作者姓名` varchar(20) DEFAULT NULL,
  `合作者` varchar(60) DEFAULT NULL,
  `指导老师` varchar(20) DEFAULT NULL,
  `期刊名称` varchar(30) DEFAULT NULL,
  `发表时间` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`,`论文名称`),
  CONSTRAINT `paper` FOREIGN KEY (`ID`) REFERENCES `basicinformation` (`ID`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paper
-- ----------------------------
INSERT INTO `paper` VALUES ('富士达', 'aa', 'aa', 'single', 'anna', 'noData', 'noData', 'undefined', '张', '发顺丰', '2014-09');
INSERT INTO `paper` VALUES ('fdksa', 'bb', 'bb', 'multiple', 'noData', 'true', 'bb', 'rq3;gda;fda', 'zhang', 'fewq', '2015-08');
INSERT INTO `paper` VALUES ('cc', 'ii', 'ii', 'multiple', 'noData', 'true', 'ii', 'cc;cc;cc;cc', 'cc', 'cc', '2016-09');
