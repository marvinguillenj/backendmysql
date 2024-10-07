CREATE DATABASE  IF NOT EXISTS `database_development` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `database_development`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: database_development
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'San Pedro Sula',4,'2024-10-06 10:54:49','2024-10-06 10:54:49');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Nathionals News','2024-10-06 04:40:05','2024-10-06 04:40:05'),(2,'Internationals News','2024-10-06 04:40:05','2024-10-06 04:40:05'),(3,'Food','2024-10-06 04:40:05','2024-10-06 04:40:05'),(4,'Economics','2024-10-06 04:40:05','2024-10-06 04:40:05'),(5,'Socials','2024-10-06 04:40:05','2024-10-06 04:40:05'),(6,'Medicine','2024-10-06 04:40:05','2024-10-06 04:40:05');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text,
  `postId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'The new band test 02',8,NULL,'2024-10-05 15:09:01','2024-10-05 15:09:01');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postcategories`
--

DROP TABLE IF EXISTS `postcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postcategories`
--

LOCK TABLES `postcategories` WRITE;
/*!40000 ALTER TABLE `postcategories` DISABLE KEYS */;
INSERT INTO `postcategories` VALUES (1,20,2,'2024-10-06 16:03:14','2024-10-06 16:03:14'),(2,20,3,'2024-10-06 16:03:27','2024-10-06 16:03:27');
/*!40000 ALTER TABLE `postcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Jurasick Park','new','The new band',2,4,'2024-10-04 14:59:51','2024-10-05 21:51:27'),(2,'Issue with findByPk(1) #13792','Hi, I am testing Sequelize using Postgres dialect. For some reason, findByPk(1) (with id = 1) does not work at all. And it is not just findByPk(1) that does not work, but also findOne({where: {id:1}}), findAll({ where: {id:1} }) and findAll({ where: { id: { [Op.eq] : 1} }}) don\'t work.v However, for ids > 1 it is working fine. I tested using in-memory SQLite also and the problem exists there as well. My sequelize and node versions are as below.',NULL,3,4,'2024-10-04 19:43:26','2024-10-04 19:43:26'),(3,'Issue with findByPk(1) #13792','Hi, I am testing Sequelize using Postgres dialect. For some reason, findByPk(1) (with id = 1) does not work at all. And it is not just findByPk(1) that does not work, but also findOne({where: {id:1}}), findAll({ where: {id:1} }) and findAll({ where: { id: { [Op.eq] : 1} }}) don\'t work.v However, for ids > 1 it is working fine. I tested using in-memory SQLite also and the problem exists there as well. My sequelize and node versions are as below.',NULL,3,4,'2024-10-04 22:08:38','2024-10-04 22:08:38'),(4,'Issue with findByPk(1) #13792','Hi, I am testing Sequelize using Postgres dialect. For some reason, findByPk(1) (with id = 1) does not work at all. And it is not just findByPk(1) that does not work, but also findOne({where: {id:1}}), findAll({ where: {id:1} }) and findAll({ where: { id: { [Op.eq] : 1} }}) don\'t work.v However, for ids > 1 it is working fine. I tested using in-memory SQLite also and the problem exists there as well. My sequelize and node versions are as below.',NULL,3,4,'2024-10-04 22:19:59','2024-10-04 22:19:59'),(5,'Issue with findByPk(1) #13792','Hi, I am testing Sequelize using Postgres dialect. For some reason, findByPk(1) (with id = 1) does not work at all. And it is not just findByPk(1) that does not work, but also findOne({where: {id:1}}), findAll({ where: {id:1} }) and findAll({ where: { id: { [Op.eq] : 1} }}) don\'t work.v However, for ids > 1 it is working fine. I tested using in-memory SQLite also and the problem exists there as well. My sequelize and node versions are as below.','Hello word',3,4,'2024-10-04 22:22:46','2024-10-04 22:22:46'),(6,'Issue with findByPk(1) #13792','Hi, I am testing Sequelize ','Hello marvin Guillen',3,4,'2024-10-04 22:26:43','2024-10-04 22:26:43'),(8,'Issue with findByPk(1) #13792','Hi, I am testing Sequelize ','Hello marvin Guillen',2,4,'2024-10-04 22:31:33','2024-10-04 22:31:33'),(9,'All is your fault','The new band','Image null',2,4,'2024-10-05 04:00:08','2024-10-05 04:00:08'),(10,'All is your fault test 02','The new band test 02','Image null test 02',3,NULL,'2024-10-05 04:05:48','2024-10-05 04:05:48'),(11,'Issue with findByPk(1) #13792 5/10/2024','Hi, I am testing Sequelize 5/10/2024','Hello Test 5/10/2024',2,4,'2024-10-05 11:59:17','2024-10-05 11:59:17'),(13,'Issue with findByPk(1) #13792 5/10/2024','Last Option test new command','Hello Test 5/10/2024',2,4,'2024-10-06 05:03:32','2024-10-06 05:03:32'),(14,'All is your fault userId = 4','The new band userId = 4','Image null userId = 4',2,4,'2024-10-06 17:46:47','2024-10-06 17:46:47'),(15,'All is your fault Test 15','The new band Test 15','Image null Test 15',2,4,'2024-10-06 17:56:23','2024-10-06 17:56:23'),(16,'All is your fault Test 16','The new band Test 15','Image null Test 16',2,4,'2024-10-06 17:59:46','2024-10-06 17:59:46'),(17,'All is your fault Test 17','The new band Test 17','Image null Test 17',2,4,'2024-10-06 18:05:08','2024-10-06 18:05:08'),(18,'All is your fault Test 17','The new band Test 17','Image null Test 17',2,4,'2024-10-06 18:11:00','2024-10-06 18:11:00'),(19,'All is your fault Test 17','The new band Test 17','Image null Test 17',2,4,'2024-10-06 18:56:38','2024-10-06 18:56:38'),(20,'All is your fault Test 18','The new band Test 18','Image null Test 18',2,4,'2024-10-06 20:32:50','2024-10-06 20:32:50');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20241003210533-create-post.js'),('20241003222326-create-user.js'),('20241003222424-create-category.js'),('20241003222553-create-comment.js'),('20241006160847-create-address.js'),('20241006205650-create-postcategory.js'),('20241006205748-create-postcategory.js'),('20241006205826-create-postcategory.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (4,'user.test','user.test01@grupoklevanter.com','$2a$10$CABMJEBDViomHmpMe3dhuuFaFDJJJCe1nCJJIY/ZZZDkIVYQL4ql.','2024-10-05 17:55:57','2024-10-05 17:55:57');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-06 22:07:39
