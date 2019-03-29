module.exports = {
    getAll: (req, res) => {
        req.app.get('db')
        .getAllProducts()
        .then(products => {
            res.status(200).send(products);
        }).catch(err => console.log(`we have an err getting all: ${err}`));
    },
    addNew: (req, res) => {
        const { product_name, price, image_url } = req.body;
        req.app.get('db')
        .addNewProduct([product_name, price, image_url])
        .then(products => {
            res.status(200).send(products);
        }).catch(err => console.log(`we have an err adding a new product: ${err}`));
    },
    getOneByID: (req, res) => {
        const { id } = req.params;
        req.app.get('db')
        .getOneByID(id)
        .then(products => {
            res.status(200).send(products);
        }).catch(err => console.log(`we have an err getting one product by id: ${err}`));
    },
    deleteByID: (req, res) => {
        const { id } = req.params;
        req.app.get('db')
        .deleteProductByID(id)
        .then(products => {
            res.status(200).send(products);
        }).catch(err => console.log(`we have an err deleted product by id: ${err}`));
    },
    updatePrice: (req, res) => {
        const { id } = req.params;
        const { price } = req.body;
        req.app.get('db')
        .updatePriceByID(id, price)
        .then(products => {
            res.status(200).send(products);
        }).catch(err => console.log(`we have an err updating the price by id: ${err}`));
    }
};