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

 Date: 15/05/2018 14:08:00
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
  `kontak` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `idUser` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `editDate` date NULL DEFAULT NULL,
  PRIMARY KEY (`noKTP`) USING BTREE,
  INDEX `FKPetani`(`idUser`) USING BTREE,
  CONSTRAINT `FKPetani` FOREIGN KEY (`idUser`) REFERENCES `tbluser` (`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tblpetani
-- ----------------------------
INSERT INTO `tblpetani` VALUES ('123', 'test', 'test', 'test', '123123', 'U005', '2018-05-15');
INSERT INTO `tblpetani` VALUES ('3173021507910001', 'Rully', 'Jl. Reog Indah Permai No.20', 'Bandung', '08392839287', NULL, NULL);
INSERT INTO `tblpetani` VALUES ('3173021507910002', 'Jeni', 'Jl. Martanegara No.30', 'Bandung', '08392839283', NULL, NULL);
INSERT INTO `tblpetani` VALUES ('3173021507910003', 'Rendi', 'Jl. Turangga', 'Bandung', '08392839284', NULL, NULL);
INSERT INTO `tblpetani` VALUES ('3173021507910004', 'Deni', 'Jl.Kopo Indah Permai ', 'Bandung', '08392839285', NULL, NULL);
INSERT INTO `tblpetani` VALUES ('3173021507910005', 'Dilan', 'Jl.Margahayu Raya No.3', 'Bandung', '08392839286', NULL, NULL);
INSERT INTO `tblpetani` VALUES ('3173021507910007', 'Deden', 'Jl. Lingkar Selatan Kidul No.20 ', 'Bandung', '08392839289', NULL, NULL);

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
  `status` enum('Ada','Tidak Ada') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Ada',
  `keterangan` enum('Terjual','Mati','Sehat') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Sehat',
  `idUser` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `editDate` date NULL DEFAULT NULL,
  PRIMARY KEY (`idSapi`) USING BTREE,
  INDEX `FKNoKTP`(`noKTP`) USING BTREE,
  INDEX `FKSapiIDUser`(`idUser`) USING BTREE,
  CONSTRAINT `FKSapiIDUser` FOREIGN KEY (`idUser`) REFERENCES `tbluser` (`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKSapiNoKTP` FOREIGN KEY (`noKTP`) REFERENCES `tblpetani` (`noKTP`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tblsapi
-- ----------------------------
INSERT INTO `tblsapi` VALUES ('S0001', 'Sapi Jawa', 12, '2018-01-01', 90, '3173021507910004', 'Ada', 'Sehat', 'U005', '2018-05-14');
INSERT INTO `tblsapi` VALUES ('S0002', 'Sapi Sumatera', 5, '2018-05-03', 70, '3173021507910005', 'Ada', 'Sehat', 'U005', '2018-05-28');

-- ----------------------------
-- Table structure for tbluser
-- ----------------------------
DROP TABLE IF EXISTS `tbluser`;
CREATE TABLE `tbluser`  (
  `idUser` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `privileges` enum('Petani','Investor','Admin') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`idUser`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tbluser
-- ----------------------------
INSERT INTO `tbluser` VALUES ('U001', 'petani1', 'petani1', 'Petani');
INSERT INTO `tbluser` VALUES ('U002', 'petani2', 'petani2', 'Petani');
INSERT INTO `tbluser` VALUES ('U003', 'petani3', 'petani3', 'Petani');
INSERT INTO `tbluser` VALUES ('U004', 'petani4', 'petani4', 'Petani');
INSERT INTO `tbluser` VALUES ('U005', 'admin', 'admin', 'Admin');
INSERT INTO `tbluser` VALUES ('U006', 'investor', 'investor', 'Investor');

SET FOREIGN_KEY_CHECKS = 1;
