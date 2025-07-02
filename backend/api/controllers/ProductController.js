module.exports = {

    list: function (req, res) {
        Product.find().exec(function (err, products) {
            if (err) {
                return res.serverError(err);
            }
            console.log('GET all products:', products);
            return res.json(products);
        });
    },


    create: function (req, res) {
        var name = req.body.name;
        var price = req.body.price;

        if (!name || !price) {
            return res.badRequest('Tên và giá là bắt buộc');
        }

        Product.create({
            name: name,
            price: price
        }).exec(function (err, product) {
            if (err) {
                return res.serverError(err);
            }
            console.log('Created product:', product);
            return res.json({
                message: 'Tạo sản phẩm thành công',
                product: product
            });
        });
    },


    update: function (req, res) {
        var id = req.params.id;
        var name = req.body.name;
        var price = req.body.price;

        console.log('Update request - ID:', id, 'Name:', name, 'Price:', price);

        if (!id) {
            return res.badRequest('Thiếu ID sản phẩm');
        }

        if (!name || !price) {
            return res.badRequest('Tên và giá là bắt buộc');
        }

        Product.update({ id: id }, {
            name: name,
            price: price
        }).exec(function (err, products) {
            if (err) {
                return res.serverError(err);
            }

            console.log('Update result:', products);

            if (!products || products.length === 0) {
                return res.notFound('Không tìm thấy sản phẩm với ID: ' + id);
            }

            console.log('Successfully updated product:', products[0]);
            return res.json({
                message: 'Cập nhật sản phẩm thành công',
                product: products[0]
            });
        });
    },


    destroy: function (req, res) {
        var id = req.params.id;

        Product.destroy({ id: id }).exec(function (err) {
            if (err) {
                return res.serverError(err);
            }
            return res.json({ message: 'Xóa thành công' });
        });
    }

}; 