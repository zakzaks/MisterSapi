/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100129
 Source Host           : localhost:3306
 Source Schema         : dbsapi

 Target Server Type    : MySQL
 Target Server Version : 100129
 File Encoding         : 65001

 Date: 03/05/2018 21:19:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tblpetani
-- ----------------------------
DROP TABLE IF EXISTS `tblpetani`;
CREATE TABLE `tblpetani`  (
  `noKTP` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nama` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `alamat` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `daerah` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`noKTP`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tblpetani
-- ----------------------------
INSERT INTO `tblpetani` VALUES ('3173021507910004', 'Deni', 'Jl.Kopo Indah Permai ', 'Bandung');
INSERT INTO `tblpetani` VALUES ('3173021507910005', 'Dilan', 'Jl.Margahayu Raya No.3', 'Bandung');

-- ----------------------------
-- Table structure for tblsapi
-- ----------------------------
DROP TABLE IF EXISTS `tblsapi`;
CREATE TABLE `tblsapi`  (
  `idSapi` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `jenis` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `umur` int(11) NOT NULL,
  `tgl_awal` date NOT NULL,
  `berat_awal` int(11) NOT NULL,
  `noKTP` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `berat_sekarang` int(11) NULL DEFAULT NULL,
  `berat_satu_bulan` int(11) NULL DEFAULT NULL,
  `berat_tiga_bulan` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idSapi`) USING BTREE,
  INDEX `FKNoKTP`(`noKTP`) USING BTREE,
  CONSTRAINT `FKNoKTP` FOREIGN KEY (`noKTP`) REFERENCES `tblpetani` (`noKTP`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tblsapi
-- ----------------------------
INSERT INTO `tblsapi` VALUES ('S0001', 'Sapi Jawa', 12, '2018-01-01', 90, '3173021507910004', NULL, NULL, NULL);
INSERT INTO `tblsapi` VALUES ('S0002', 'Sapi Sumatera', 5, '2018-05-03', 70, '3173021507910005', NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
