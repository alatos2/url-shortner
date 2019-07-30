import express from 'express';
import Url from '../models/Url';

const router = express.Router();

// @route     GET /:code
// @desc      Redirect to long/original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    }
    return res.status(404).json('No url found');
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

export default router;