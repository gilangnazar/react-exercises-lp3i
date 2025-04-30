CREATE DATABASE MGilangAcchadipaNazar;
USE MGilangAcchadipaNazar;


CREATE TABLE `jurusan` (
  `KodeJurusan` varchar(10) NOT NULL,
  `Jurusan` varchar(50) NOT NULL
);

INSERT INTO `jurusan` (`KodeJurusan`, `Jurusan`) VALUES
('ABI', 'Adminstrasi Bisnis Internasional'),
('MI', 'Manajemen Informatika');


CREATE TABLE `mahasiswa` (
  `NIM` varchar(10) NOT NULL,
  `Nama` varchar(50) NOT NULL,
  `TanggalLahir` date NOT NULL,
  `StatusPernikahan` varchar(30) DEFAULT NULL,
  `Agama` varchar(30) NOT NULL,
  `Alamat` varchar(50) NOT NULL,
  `KodeJurusan` varchar(10) NOT NULL,
  `BiayaKuliah` int DEFAULT NULL
) 


INSERT INTO `mahasiswa` (`NIM`, `Nama`, `TanggalLahir`, `StatusPernikahan`, `Agama`, `Alamat`, `KodeJurusan`, `BiayaKuliah`) VALUES
('00001', 'Gilang', '2015-11-11', 'Belum Menikah', 'Islam', 'Bogor', 'ABI', 10),
('00002', 'Han', '2022-12-12', 'Menikah', 'Kristen', 'Cilodong', 'MI', 5),
('00004', 'Pin', '2008-08-08', '', 'Budha', 'Tayem', 'MI', 4),
('0003', 'Fajar', '2004-12-12', 'menikah', 'Islam', 'Cilodong', 'MI', 3);

ALTER TABLE `jurusan`
  ADD PRIMARY KEY (`KodeJurusan`);

ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`NIM`),
  ADD KEY `KodeJurusan` (`KodeJurusan`);

ALTER TABLE `mahasiswa`
  ADD CONSTRAINT `mahasiswa_ibfk_1` FOREIGN KEY (`KodeJurusan`) REFERENCES `jurusan` (`KodeJurusan`);
COMMIT;
