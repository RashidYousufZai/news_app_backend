import { flashnews } from "../Models/FlashSchema.js";
import { SocialMedia } from "../Models/SocialMediaSchem.js";
import { errHandler, responseHandler } from "../helper/response.js";

const uploadData = async(req,res) => {
    try {
        const { link, status,platform } = req.body;
        const socialMedia = new SocialMedia({ link, status,platform });
        await socialMedia.save();
        res.status(201).json(socialMedia);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}

const updateStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      const socialMedia = await SocialMedia.findByIdAndUpdate(
        id,
        { status },
        { new: true, useFindAndModify: false }
      );
  
      if (!socialMedia) {
        return res.status(404).json({ msg: 'SocialMedia not found' });
      }
  
      res.json(socialMedia);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  };
  

const getData = async(req,res)=>{
    try {
        const allSocialMedia = await SocialMedia.find();
        res.json(allSocialMedia);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
      }
}


export { uploadData, updateStatus, getData };
