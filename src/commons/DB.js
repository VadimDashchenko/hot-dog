const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'product_db',
    password: 'Bullet735',
    port: 5432,
});

const getProducts = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows)
        })
    })
}

const createProduct = (product) => {
    return new Promise(function(resolve, reject) {
        const {name, title, description, price, imageName, image} = product;
        pool.query('INSERT INTO products (name, title, description, price, imageName, image) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
            [name, title, description, price, imageName, image], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows[0]);
        })
    })
}

const deleteProduct = (id) => {
    return new Promise(function (resolve, reject) {
        pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Product deleted with ID: ${id}`)
        })
    })
}

const editProduct = (product) => {
    return new Promise(function (resolve, reject) {
        const id = product.id;
        const {name, title, description, price, imagename, image} = product;
        pool.query(`UPDATE products SET (name, title, description, price, imagename, image) = ($1,$2,$3,$4,$5,$6) WHERE id = ${id} RETURNING *`,
            [name, title, description, price, imagename, image], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows[0])
        })
    })
}

module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    editProduct,
}