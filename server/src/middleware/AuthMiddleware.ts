import multer, { memoryStorage } from 'multer';

/**
 * Middleware encargado de las obre cada ruta del sistema
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    // Generar un nombre de archivo único
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileName = `${uniqueSuffix}_${file.originalname}`;
    cb(null, fileName);
  },
});
export const upload = multer({ storage });

