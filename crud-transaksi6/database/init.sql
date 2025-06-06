CREATE DATABASE  barang_db;

USE barang_db;

CREATE TABLE barang (
    KodeBarang VARCHAR(20) PRIMARY KEY,
    NamaBarang VARCHAR(100),
    Harga int,
    Quantity int
)