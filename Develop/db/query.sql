Select coke.coke_name AS name, coke.coke_description AS description, coke.coke_price AS price, coke.coke_image_url AS image_url, coke.coke_category_id AS category_id
From coke
Where coke.coke_name = 'Coca Cola';

LEFT JOIN coke on coke.coke_category_id = category.category_id
ORDER BY coke.coke_name ASC;
LIMIT 10;