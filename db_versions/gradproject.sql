-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2022 at 11:35 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gradproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicationform`
--

CREATE TABLE `applicationform` (
  `ID` int(20) NOT NULL,
  `FName` varchar(50) NOT NULL,
  `LName` varchar(50) NOT NULL,
  `PhoneNo` int(20) NOT NULL,
  `Addres` varchar(50) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `university` varchar(30) NOT NULL,
  `Field` varchar(20) NOT NULL,
  `ExpectedDOGrad` date DEFAULT NULL,
  `TotalAvg` int(20) NOT NULL,
  `TypeOfTraining` varchar(20) NOT NULL,
  `DaysAvailable` varchar(30) NOT NULL,
  `HoursAvailable` time(6) NOT NULL,
  `ReqTrainingHours` int(20) NOT NULL,
  `SupervisorPhoneNo` int(20) NOT NULL,
  `UniversityDoc` varbinary(50) NOT NULL,
  `CVC` varbinary(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `applicationform`
--

INSERT INTO `applicationform` (`ID`, `FName`, `LName`, `PhoneNo`, `Addres`, `Email`, `university`, `Field`, `ExpectedDOGrad`, `TotalAvg`, `TypeOfTraining`, `DaysAvailable`, `HoursAvailable`, `ReqTrainingHours`, `SupervisorPhoneNo`, `UniversityDoc`, `CVC`) VALUES
(0, 'Nagham', 'Hejja', 597000009, 'hebron', 'nagham.752000@gmail.com', 'Palestine polytechnic universi', 'Information technolo', '2022-06-01', 80, 'mandatory', 'sunday-tuesday', '09:00:00.000000', 120, 567898746, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `ID` int(20) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `Password` int(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Description` varchar(500) NOT NULL,
  `PhoneNo` int(20) NOT NULL,
  `TrainerID` int(20) NOT NULL,
  `SupervisorID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`ID`, `userName`, `Password`, `Name`, `Description`, `PhoneNo`, `TrainerID`, `SupervisorID`) VALUES
(0, 'Jawwal', 123456, 'Jawwal', 'Palestine Cellular Communications Company, trading as Jawwal (Arabic: جوال), is the first Palestinian communications company specialized in cellular and wireless communications; assumes its business in the West Bank and Gaza Strip and is one of Paltel Group.', 22968000, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tasklist`
--

CREATE TABLE `tasklist` (
  `ID` int(50) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Date` date NOT NULL,
  `Notes` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasklist`
--

INSERT INTO `tasklist` (`ID`, `Name`, `Date`, `Notes`) VALUES
(0, 'learning angular', '2022-04-06', 'making a simple restaurant interfaces using angular');

-- --------------------------------------------------------

--
-- Table structure for table `trainee`
--

CREATE TABLE `trainee` (
  `ID` int(20) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `FName` varchar(50) NOT NULL,
  `LName` varchar(50) NOT NULL,
  `SupervisorID` int(20) NOT NULL,
  `DOB` date NOT NULL,
  `TrainingHours` int(20) NOT NULL,
  `TaskListID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trainee`
--

INSERT INTO `trainee` (`ID`, `UserName`, `Password`, `FName`, `LName`, `SupervisorID`, `DOB`, `TrainingHours`, `TaskListID`) VALUES
(0, 'RaghadAbuSharar', '098765', 'Raghad', 'Abu Sharar', 2, '2000-10-06', 120, 1);

-- --------------------------------------------------------

--
-- Table structure for table `trainer`
--

CREATE TABLE `trainer` (
  `ID` int(20) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` int(50) NOT NULL,
  `FName` varchar(50) NOT NULL,
  `LName` varchar(50) NOT NULL,
  `PhoneNo` int(20) NOT NULL,
  `TaskListID` int(20) NOT NULL,
  `TraineeID` int(20) NOT NULL,
  `Department` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trainer`
--

INSERT INTO `trainer` (`ID`, `UserName`, `Password`, `FName`, `LName`, `PhoneNo`, `TaskListID`, `TraineeID`, `Department`) VALUES
(1, 'AhmadArafeh', 654321, 'Ahmad', 'Arafeh', 987876565, 0, 3, 'Information technolo');

-- --------------------------------------------------------

--
-- Table structure for table `unitrainingsupervisor`
--

CREATE TABLE `unitrainingsupervisor` (
  `ID` int(20) NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `Password` int(50) NOT NULL,
  `SupervisorName` varchar(50) NOT NULL,
  `UniName` varchar(50) NOT NULL,
  `PhoneNo` int(20) NOT NULL,
  `TraineeID` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `unitrainingsupervisor`
--

INSERT INTO `unitrainingsupervisor` (`ID`, `UserName`, `Password`, `SupervisorName`, `UniName`, `PhoneNo`, `TraineeID`) VALUES
(1, 'DeemaDaraweesh', 876543210, 'Deema', 'Palestine polytechnic University', 599087657, 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(20) NOT NULL,
  `UserName` int(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `Role` varchar(50) NOT NULL,
  `Status` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `UserName`, `Email`, `Password`, `Role`, `Status`) VALUES
(0, 0, 'NaghamHejja', '752000', '0', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicationform`
--
ALTER TABLE `applicationform`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tasklist`
--
ALTER TABLE `tasklist`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `trainee`
--
ALTER TABLE `trainee`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `trainer`
--
ALTER TABLE `trainer`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `TaskListID` (`TaskListID`,`TraineeID`);

--
-- Indexes for table `unitrainingsupervisor`
--
ALTER TABLE `unitrainingsupervisor`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicationform`
--
ALTER TABLE `applicationform`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tasklist`
--
ALTER TABLE `tasklist`
  MODIFY `ID` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `trainee`
--
ALTER TABLE `trainee`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `trainer`
--
ALTER TABLE `trainer`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `unitrainingsupervisor`
--
ALTER TABLE `unitrainingsupervisor`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
