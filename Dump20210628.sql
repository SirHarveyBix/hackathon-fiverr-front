-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: hackafievrr
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(1024) NOT NULL,
  `date` datetime NOT NULL,
  `user_id` varchar(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'test','ceci est une description','2020-10-14 00:00:00','0'),(4,'tagazok','je n\'ai pas d\'amis, viens, on est bien','2020-10-14 18:00:00','0'),(5,'test','ceci est une description','2020-10-14 00:00:00','0'),(6,'test','ceci est une description','2020-10-14 00:00:00','0'),(7,'test','ceci est une description','2020-10-14 00:00:00','0'),(8,'test','ceci est une description','2020-10-14 18:00:00','0'),(9,'1','pour contextualiser le contenu des composants','2021-06-17 00:00:00','0'),(10,'1','pour contextualiser le contenu des composants','2021-06-17 00:00:00','0'),(11,'1','pour contextualiser le contenu des composants','2021-06-10 00:00:00','0'),(12,'1','pour contextualiser le contenu des composants','2021-06-10 00:00:00','0'),(13,'1','pour contextualiser le contenu des composants','2021-06-10 00:00:00','0'),(14,'1','pour contextualiser le contenu des composants','2021-06-10 00:00:00','0'),(15,'1','pour contextualiser le contenu des composants','2021-06-03 00:00:00',''),(16,'1','pour contextualiser le contenu des composants','2021-06-03 00:00:00',''),(17,'1','pour contextualiser le contenu des composants','2021-06-03 00:00:00',''),(18,'1','pour contextualiser le contenu des composants','2021-06-03 00:00:00',''),(19,'1','pour contextualiser le contenu des composants','2021-06-03 00:00:00','');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pseudo` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `Work` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bikster','pierre','tagazok@dot.me','harvey','1234','Designer'),(2,'tartenfion','michel','tm@x.fr','markus','1234','Data Analyst'),(3,'sgayg','kevin','mik@z.dot','kéké','1234','develp^êur web');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-28 18:59:17
