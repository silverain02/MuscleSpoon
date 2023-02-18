--
-- Table structure for table `user`
--
 
CREATE TABLE `user` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `userId` varchar(20) NOT NULL UNIQUE,
  `password` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `age` int(11) UNSIGNED NOT NULL,
  `height` FLOAT(11) UNSIGNED NOT NULL,
  `weight` FLOAT(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
);
 
--
-- Dumping data for table `user`
--
 
INSERT INTO `user` VALUES (1,'ekdldkaa','ekdldkaa@','이은비','female',22,160.5,50.5);
 