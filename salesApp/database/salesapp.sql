-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 05, 2025 at 07:23 AM
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
-- Database: `salesapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Elektronik'),
(2, 'Pakaian'),
(3, 'Makanan & Minuman'),
(4, 'Peralatan Rumah'),
(5, 'Alat Tulis Kantor');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `contact` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `contact`) VALUES
(1, 'PT Sentosa Abadi', 'Yudi Pratama'),
(2, 'CV Maju Jaya', 'Lina Kartika'),
(3, 'Toko Sumber Rezeki', 'Hendra Saputra'),
(4, 'UD Makmur Bersama', 'Sari Dewi'),
(5, 'PT Global Niaga', 'Andi Gunawan');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_transactions`
--

CREATE TABLE `inventory_transactions` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `type` enum('purchase','sale','adjustment') NOT NULL,
  `reference_id` int DEFAULT NULL,
  `reference_table` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `inventory_transactions`
--

INSERT INTO `inventory_transactions` (`id`, `product_id`, `quantity`, `type`, `reference_id`, `reference_table`, `created_at`, `created_by`) VALUES
(1, 1, 5, 'purchase', 1, 'purchases', '2025-06-04 14:00:35', NULL),
(2, 2, 3, 'purchase', 1, 'purchases', '2025-06-04 14:00:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `sku` varchar(50) NOT NULL,
  `category_id` int DEFAULT NULL,
  `unit` varchar(20) NOT NULL,
  `price` decimal(15,2) NOT NULL,
  `cost_price` decimal(15,2) DEFAULT '0.00',
  `stock` int DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `sku`, `category_id`, `unit`, `price`, `cost_price`, `stock`, `created_at`) VALUES
(1, 'Smartphone Android X1', 'ELEK-001', 1, 'unit', 3500000.00, 3000000.00, 55, '2025-06-04 13:34:55'),
(2, 'Laptop ProBook 14\"', 'ELEK-002', 1, 'unit', 7500000.00, 6800000.00, 33, '2025-06-04 13:34:55'),
(3, 'Kaos Polos Lengan Pendek', 'PAKA-001', 2, 'pcs', 50000.00, 30000.00, 200, '2025-06-04 13:34:55'),
(4, 'Celana Jeans Slim Fit', 'PAKA-002', 2, 'pcs', 150000.00, 100000.00, 120, '2025-06-04 13:34:55'),
(5, 'Keripik Singkong Pedas', 'MAKM-001', 3, 'pack', 10000.00, 7000.00, 300, '2025-06-04 13:34:55'),
(6, 'Air Mineral 600ml', 'MAKM-002', 3, 'btl', 4000.00, 2500.00, 500, '2025-06-04 13:34:55'),
(7, 'Blender 3in1', 'RUMA-001', 4, 'unit', 450000.00, 380000.00, 40, '2025-06-04 13:34:55'),
(8, 'Kompor Gas 2 Tungku', 'RUMA-002', 4, 'unit', 650000.00, 550000.00, 25, '2025-06-04 13:34:55'),
(9, 'Pulpen Gel Hitam', 'ATK-001', 5, 'pcs', 5000.00, 3000.00, 1000, '2025-06-04 13:34:55'),
(10, 'Buku Tulis 40 Lembar', 'ATK-002', 5, 'pcs', 4000.00, 2500.00, 800, '2025-06-04 13:34:55');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int NOT NULL,
  `supplier_id` int DEFAULT NULL,
  `total` decimal(15,2) DEFAULT '0.00',
  `status` enum('draft','received','cancelled') DEFAULT 'draft',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `supplier_id`, `total`, `status`, `created_at`, `created_by`) VALUES
(1, 1, 0.00, 'received', '2025-06-04 13:59:17', 2),
(2, 2, 0.00, 'received', '2025-06-04 13:59:17', 3),
(3, 3, 0.00, 'received', '2025-06-04 13:59:17', 4),
(4, 4, 0.00, 'received', '2025-06-04 13:59:17', 5),
(5, 5, 0.00, 'received', '2025-06-04 13:59:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `purchase_items`
--

CREATE TABLE `purchase_items` (
  `id` int NOT NULL,
  `purchase_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit_price` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `purchase_items`
--

INSERT INTO `purchase_items` (`id`, `purchase_id`, `product_id`, `quantity`, `unit_price`) VALUES
(1, 1, 1, 5, 3000000.00),
(2, 1, 2, 3, 6800000.00);

--
-- Triggers `purchase_items`
--
DELIMITER $$
CREATE TRIGGER `trg_after_delete_purchase_item` AFTER DELETE ON `purchase_items` FOR EACH ROW BEGIN
  -- Kurangi stok karena pembelian dibatalkan
  UPDATE products
  SET stock = stock - OLD.quantity
  WHERE id = OLD.product_id;

  -- Hapus dari inventory_transactions
  DELETE FROM inventory_transactions
  WHERE product_id = OLD.product_id
    AND reference_id = OLD.purchase_id
    AND reference_table = 'purchases'
    AND type = 'purchase';
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trg_after_insert_purchase_item` AFTER INSERT ON `purchase_items` FOR EACH ROW BEGIN
  -- Tambah stok produk
  UPDATE products
  SET stock = stock + NEW.quantity
  WHERE id = NEW.product_id;

  -- Catat transaksi inventory
  INSERT INTO inventory_transactions (product_id, quantity, type, reference_id, reference_table, created_by)
  VALUES (NEW.product_id, NEW.quantity, 'purchase', NEW.purchase_id, 'purchases', NULL);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `trg_after_update_purchase_item` AFTER UPDATE ON `purchase_items` FOR EACH ROW BEGIN
  -- Hitung selisih perubahan
  DECLARE qty_diff INT;
  SET qty_diff = NEW.quantity - OLD.quantity;

  -- Update stok
  UPDATE products
  SET stock = stock + qty_diff
  WHERE id = NEW.product_id;

  -- Update inventory_transactions (hanya jika 1 transaksi per item)
  UPDATE inventory_transactions
  SET quantity = quantity + qty_diff
  WHERE product_id = NEW.product_id
    AND reference_id = NEW.purchase_id
    AND reference_table = 'purchases'
    AND type = 'purchase';
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'Sales'),
(3, 'Purchasing'),
(4, 'Inventory Manager'),
(5, 'Cashier');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `total` decimal(15,2) DEFAULT '0.00',
  `status` enum('paid','unpaid','cancelled') DEFAULT 'unpaid',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `created_by` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sale_items`
--

CREATE TABLE `sale_items` (
  `id` int NOT NULL,
  `sale_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  `unit_price` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `contact` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `contact`) VALUES
(1, 'PT Sumber Elektronik', 'sumber.elektronik@email.com'),
(2, 'Toko Pakaian Makmur', '0812-3456-7890'),
(3, 'CV Makanan Sehat', 'makanan.sehat@gmail.com'),
(4, 'UD Alat Rumah Tangga', '0856-9876-5432'),
(5, 'ATK Stationery Center', 'atkcenter@outlook.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password_hash`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 'admin_user', '$2y$10$u1yMq0IoB2NGoyW2c1UCOOIkHgBqO0bOCH4FtYBdq5wgd0EoAAEy2', 1, '2025-06-04 13:32:34', '2025-06-04 13:32:34'),
(2, 'sales_john', '$2y$10$u1yMq0IoB2NGoyW2c1UCOOIkHgBqO0bOCH4FtYBdq5wgd0EoAAEy2', 2, '2025-06-04 13:32:34', '2025-06-04 13:32:34'),
(3, 'purch_anna', '$2y$10$u1yMq0IoB2NGoyW2c1UCOOIkHgBqO0bOCH4FtYBdq5wgd0EoAAEy2', 3, '2025-06-04 13:32:34', '2025-06-04 13:32:34'),
(4, 'inv_mike', '$2y$10$u1yMq0IoB2NGoyW2c1UCOOIkHgBqO0bOCH4FtYBdq5wgd0EoAAEy2', 4, '2025-06-04 13:32:34', '2025-06-04 13:32:34'),
(5, 'cashier_sue', '$2y$10$u1yMq0IoB2NGoyW2c1UCOOIkHgBqO0bOCH4FtYBdq5wgd0EoAAEy2', 5, '2025-06-04 13:32:34', '2025-06-04 13:32:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inventory_transactions`
--
ALTER TABLE `inventory_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sku` (`sku`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `supplier_id` (`supplier_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `purchase_items`
--
ALTER TABLE `purchase_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_id` (`purchase_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `sale_items`
--
ALTER TABLE `sale_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sale_id` (`sale_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `inventory_transactions`
--
ALTER TABLE `inventory_transactions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `purchase_items`
--
ALTER TABLE `purchase_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sale_items`
--
ALTER TABLE `sale_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inventory_transactions`
--
ALTER TABLE `inventory_transactions`
  ADD CONSTRAINT `inventory_transactions_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `inventory_transactions_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Constraints for table `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`),
  ADD CONSTRAINT `purchases_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `purchase_items`
--
ALTER TABLE `purchase_items`
  ADD CONSTRAINT `purchase_items_ibfk_1` FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`),
  ADD CONSTRAINT `purchase_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  ADD CONSTRAINT `sales_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `sale_items`
--
ALTER TABLE `sale_items`
  ADD CONSTRAINT `sale_items_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`),
  ADD CONSTRAINT `sale_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
