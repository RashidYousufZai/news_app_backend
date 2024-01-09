
import { validationResult } from 'express-validator';
import { PhotogalerySchemas } from '../Models/PhotoGalerySchema.js';

const createPhotoGalery = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, images } = req.body;
        const newStory = new PhotogalerySchemas({ title, images });
        const savedStory = await newStory.save();
        res.json(savedStory);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};


const getPhotoGaleryById = async (req, res) => {
    try {
        const article = await PhotogalerySchemas.findById(req.params.id);
        if (!article) {
            return res.status(404).send('Article not found');
        }
        res.json(article);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const getAllPhotos = async (req, res) => {
    try {
        const allStories = await PhotogalerySchemas.find();
        res.json(allStories);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

export { createPhotoGalery, getPhotoGaleryById, getAllPhotos }