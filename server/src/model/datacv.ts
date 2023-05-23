import mongoose from 'mongoose';

const mySchema = new mongoose.Schema({
  bufferData: Buffer
});

const cvs = mongoose.model('cvs', mySchema);


export default cvs