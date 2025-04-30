-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 30, 2025 at 06:50 AM
-- Server version: 8.0.30
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perkuliahan`
--

-- --------------------------------------------------------

--
-- Table structure for table `jurusan`
--

CREATE TABLE `jurusan` (
  `KodeJurusan` varchar(10) NOT NULL,
  `Jurusan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `jurusan`
--

INSERT INTO `jurusan` (`KodeJurusan`, `Jurusan`) VALUES
('ABI', 'Adminstrasi Bisnis Internasional'),
('MI', 'Manajemen Informatika');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `NIM` varchar(10) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `TanggalLahir` date NOT NULL,
  `StatusPernikahan` varchar(30) DEFAULT NULL,
  `Agama` varchar(30) NOT NULL,
  `Alamat` varchar(50) NOT NULL,
  `KodeJurusan` varchar(10) NOT NULL,
  `BiayaKuliah` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`NIM`, `Nama`, `TanggalLahir`, `StatusPernikahan`, `Agama`, `Alamat`, `KodeJurusan`, `BiayaKuliah`) VALUES
('00001', 'Gilang', '2015-11-11', 'Belum Menikah', 'Islam', 'Bogor', 'ABI', 10),
('00002', 'Han', '2022-12-12', 'Menikah', 'Kristen', 'Cilodong', 'MI', 5),
('333', 'Jamal', '2024-10-10', 'Sudah Menikah', 'Katolik', 'Cibinong', 'MI', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jurusan`
--
ALTER TABLE `jurusan`
  ADD PRIMARY KEY (`KodeJurusan`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`NIM`),
  ADD KEY `KodeJurusan` (`KodeJurusan`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD CONSTRAINT `mahasiswa_ibfk_1` FOREIGN KEY (`KodeJurusan`) REFERENCES `jurusan` (`KodeJurusan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
