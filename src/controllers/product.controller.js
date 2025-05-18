import ProductServices from "../services/product.service.js"

class ProductController {
    async getProducts(req,res) {
        try {
        const limit = parseInt(req.query.limit) || 10;
        const page = parseInt(req.query.page) || 1;
        const sort = req.query.sort || 'price';
        const order = req.query.order === 'desc' ? -1 : 1;
        const category = req.query.category || '';

        const filter = {};
        if (category) {
            filter.category = category;
        }

        const options = {
            limit,
            page,
            sort: { [sort]: order }, 
            lean: true
        };

        const products = await ProductServices.paginateProducts(filter,options);

        if (products.docs.length === 0) {
            return res.status(404).send({
                status: 'error',
                message: 'No se encontraron productos en esta página'
            });
        }

       // respuesta con los datos con paginate.
        res.status(200).send({
            status: 'success',
            products: products.docs,
            pagination: {
                totalDocs: products.totalDocs,
                limit: products.limit,
                totalPages: products.totalPages,
                page: products.page,
                hasPrevPage: products.hasPrevPage,
                hasNextPage: products.hasNextPage,
                prevPage: products.prevPage,
                nextPage: products.nextPage
            }
        });
        
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Error del servidor al obtener los productos'
            });
            
        }
    }

    async getProduct(req,res){
        const {pid} = req.params;

        try {
            const productFound = await ProductServices.getProduct(pid);

            if(!productFound){
                res.status(404).send(`No hay propductos con el id ${pid}`);
            } else {
                res.status(200).send(productFound);
            }
        } catch (error) {
            res.status(500).send("Error al buscar productos con ese id");
        }

    }

    async newProduct(req,res) {
        const productNew = req.body;
        try {
            if(!productNew){
                res.status(400).send("El producto que intenta crear no tiene contenido")
                return;
            } else {
                await ProductServices.addProduct(productNew);
                res.status(200).send("Se envio la solicitud exitosamente");
            }
        } catch (error) {
            res.status(500).send("No puede crearse el producto");
        }
    }

    async productUpdate(req,res){
        const {pid} = req.params;
        const updateData = req.body;
        try {
            if(!updateData){
                res.status(400).send("Se encuentra vacia la informacion a actualizar");
                return;
            }
            const productFound = await ProductServices.getProduct(pid);
            if (!productFound) {
                res.status(404).send(`No se encontró producto con el id ${pid}`);
                return;
            }
            await ProductServices.updateProduct(pid,updateData);
            res.status(201).send("Producto actualizado con exito!");
        } catch (error) {
            res.status(500).send("Error al actualizar el producto");
        }
    }

    async productDelete(req,res) {
        const {pid} = req.params;
        const productFound = await ProductServices.getProduct(pid);
        try {
            if(!pid){
                res.status(404).send("es necesario el id para poder eliminar el producto");
                return;
            }

            if(!productFound){
                res.status(404).send(`No se encontró producto con el id ${pid}`);
                return;
            } else {
                await ProductServices.deleteProduct(pid);
                res.status(200).send("Producto eliminado de forma exitosa");
            }


        } catch (error) {
            res.status(500).send("No es posible eliminar el producto");
        }
    }


}

export default ProductController;