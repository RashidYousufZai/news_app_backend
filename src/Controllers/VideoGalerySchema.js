
import { Videogalery } from '../Models/VideogalerySchema.js';


const createVideoStory = async (req, res) => {
    try {

        const { title, images } = req.body;
        const newStory = new Videogalery({ title, images });
        const savedStory = await newStory.save();
        res.json(savedStory);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


const getVideoGaleryById = async (req, res) => {
    try {
        const article = await Videogalery.findById(req.params.id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        res.json(article);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllVideoGalery = async (req, res) => {
    try {
        const allStories = await Videogalery.find();
        res.json(allStories);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

export { createVideoStory, getAllVideoGalery, getVideoGaleryById }