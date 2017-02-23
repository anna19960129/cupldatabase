/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50635
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50635
File Encoding         : 65001

Date: 2017-02-24 00:08:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for basicinformation
-- ----------------------------
DROP TABLE IF EXISTS `basicinformation`;
CREATE TABLE `basicinformation` (
  `姓名` varchar(10) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `性别` char(2) DEFAULT NULL,
  `出生年月` varchar(15) DEFAULT NULL,
  `高考省份` varchar(10) DEFAULT NULL,
  `高考类别` varchar(10) DEFAULT NULL,
  `高考数学成绩` varchar(10) DEFAULT NULL,
  `高考英语成绩` varchar(10) DEFAULT NULL,
  `入学时间` varchar(15) DEFAULT NULL,
  `入学专业` varchar(30) DEFAULT NULL,
  `转专业` varchar(10) DEFAULT NULL,
  `现专业` varchar(30) DEFAULT NULL,
  `双专业` varchar(10) DEFAULT NULL,
  `第二专业` varchar(30) DEFAULT NULL,
  `辅修` varchar(10) DEFAULT NULL,
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
  `博士就读院校` varchar(30) DEFAULT NULL,
  `博士专业` varchar(20) DEFAULT NULL,
  `博士后就读院校` varchar(30) DEFAULT NULL,
  `博士后专业` varchar(20) DEFAULT NULL,
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

-- ----------------------------
-- Table structure for competition
-- ----------------------------
DROP TABLE IF EXISTS `competition`;
CREATE TABLE `competition` (
  `姓名` varchar(20) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `竞赛级别` varchar(20) DEFAULT NULL,
  `竞赛名称` varchar(50) DEFAULT NULL,
  `获奖时间` varchar(20) DEFAULT NULL,
  `获奖等级` varchar(20) DEFAULT NULL,
  `竞赛形式` varchar(20) DEFAULT NULL,
  `是否为组长` varchar(10) DEFAULT NULL,
  `组长姓名` varchar(20) DEFAULT NULL,
  `组员` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of competition
-- ----------------------------

-- ----------------------------
-- Table structure for cxcy
-- ----------------------------
DROP TABLE IF EXISTS `cxcy`;
CREATE TABLE `cxcy` (
  `项目名称` varchar(60) DEFAULT NULL,
  `立项年份` varchar(20) DEFAULT NULL,
  `项目级别` varchar(20) DEFAULT NULL,
  `项目类别` varchar(20) DEFAULT NULL,
  `姓名` varchar(20) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `指导教师` varchar(20) DEFAULT NULL,
  `职务` varchar(20) DEFAULT NULL,
  `组长姓名` varchar(20) DEFAULT NULL,
  `组员` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cxcy
-- ----------------------------
INSERT INTO `cxcy` VALUES ('anna', '2016-09', '国家级', '创新项目', 'anna', 'abc', 'hsf', 'teamLeader', '', 'undefined');
INSERT INTO `cxcy` VALUES ('数据库', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined');

-- ----------------------------
-- Table structure for kyxm
-- ----------------------------
DROP TABLE IF EXISTS `kyxm`;
CREATE TABLE `kyxm` (
  `项目名称` varchar(60) DEFAULT NULL,
  `立项年份` varchar(20) DEFAULT NULL,
  `项目级别` varchar(20) DEFAULT NULL,
  `姓名` varchar(20) DEFAULT NULL,
  `ID` varchar(20) NOT NULL,
  `指导教师` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of kyxm
-- ----------------------------
INSERT INTO `kyxm` VALUES ('fdsa', '2016-09', '国家级', 'fdsa', 'abc', '法分期');

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

-- ----------------------------
-- Table structure for paper
-- ----------------------------
DROP TABLE IF EXISTS `paper`;
CREATE TABLE `paper` (
  `论文名称` varchar(60) DEFAULT NULL,
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
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of paper
-- ----------------------------
