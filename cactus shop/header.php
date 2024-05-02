<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catalog - Cactos</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Стили */
    </style>
</head>

<body>
    <?php include 'header.php'; ?>

    <hr>

    <div id="body-content">
        <div id="left-content">
            <h1>Каталог</h1>
            <!-- PHP для вывода товаров -->
            <?php
            // Пример массива товаров
            $products = array(
                array(
                    "name" => "Кактус Ферокаактус",
                    "description" => "Ферокактусы - это группа кактусов, известных своими большими, плотными шарами или цилиндрическими стеблями и яркими цветами.",
                    "image" => "download.jpg",
                    "price" => "$15"
                ),
                // Другие товары
            );

            // Вывод товаров
            foreach ($products as $product) {
                echo '<div class="product" onclick="toggleProductDetails(this)">
                        <h2>' . $product["name"] . '</h2>
                        <p>' . $product["description"] . '</p>
                        <img src="' . $product["image"] . '" alt="' . $product["name"] . '">
                        <div class="details">
                            <p>Цена: ' . $product["price"] . '</p>
                            <p>Дополнительные подробности о товаре</p>
                        </div>
                    </div>';
            }
            ?>
        </div>
        <div id="right-content">
            <img id="cactus-image" src="1674544019_dubabah-club-p-gvozdichnotsvetnie-kaktusi-vkontakte-70.png" alt="Cactus Part 1">
        </div>
    </div>

    <script>
        function toggleProductDetails(product) {
            product.classList.toggle("open");
        }
    </script>
</body>

</html>
