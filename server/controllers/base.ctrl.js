
class BaseCtrl {
    model;

    getAll = async (req, res) => {
        try {
            let docs = await this.model.find({});
            res.status(200).json(docs);
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    }

    get = async (req, res) => {
        try {
            let doc = await this.model.findOne({ _id: req.params.id });
            res.status(200).json(doc);
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    }

    count = async (req, res) => {
        try {
            let count = await this.model.count({});
            res.status(200).json({ count });
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    } 

    insert = async (req, res) => {
        try {
            let insertedDoc = await new this.model(req.body).save();
            res.status(200).json(insertedDoc);
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    }

    update = async (req, res) => {
        try {
            await this.model.findOneAndUpdate({ _id: req.params.id }, req.body);
            res.status(200).json({ success: true });
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    }

    delete = async (req, res) => {
        try {
            await this.model.findOneAndRemove({ _id: req.params.id });
            res.status(200).json({ success: true });
        } catch(err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = BaseCtrl;