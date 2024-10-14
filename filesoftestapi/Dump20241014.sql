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
-- Table structure for table `bypassqueues`
--

DROP TABLE IF EXISTS `bypassqueues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bypassqueues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameQueue` varchar(255) DEFAULT NULL,
  `isActived` tinyint(1) DEFAULT NULL,
  `dateBegin` datetime DEFAULT NULL,
  `dateEnd` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bypassqueues`
--

LOCK TABLES `bypassqueues` WRITE;
/*!40000 ALTER TABLE `bypassqueues` DISABLE KEYS */;
INSERT INTO `bypassqueues` VALUES (1,'Tets List one',1,'2024-10-15 16:54:49','2024-10-15 16:54:49','2024-10-14 02:52:49','2024-10-14 03:14:36'),(2,'Tets List Agents Calls Morning',1,'2024-10-15 16:54:49','2024-10-15 16:54:49','2024-10-14 02:55:12','2024-10-14 03:15:37'),(3,'Tets List Agents Calls Afternoon',1,'2024-10-15 16:54:49','2024-10-15 16:54:49','2024-10-14 02:55:28','2024-10-14 03:16:13'),(4,'Tets List Agents Calls Night',1,'2024-10-15 16:54:49','2024-10-15 16:54:49','2024-10-14 02:55:42','2024-10-14 03:16:41'),(5,'Tets List Agents Calls Weekends',1,'2024-10-15 16:54:49','2024-10-15 16:54:49','2024-10-14 02:55:56','2024-10-14 03:17:07'),(6,'Tets List Agents Calls Holydays',0,'2024-10-15 16:54:49','2024-10-15 16:54:49','2024-10-14 02:56:15','2024-10-14 03:11:47');
/*!40000 ALTER TABLE `bypassqueues` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-14  4:24:29
