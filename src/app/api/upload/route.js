/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5

import { IncomingForm } from "formidable";


var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const data = await new Promise((_resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      console.log(fields, files);
      console.log(files.file.filepath);
      var oldPath = files.file.filepath;
      var newPath = `./public/uploads/${files.file.originalFilename}`;
      mv(oldPath, newPath, function (err) {});
      res.status(200).json({ fields, files });
    });
  });
};

// import { NextApiResponse } from "next";
/*
// import { writeFile } from 'fs/promises'
// import { NextRequest, NextResponse } from 'next/server'

import nextConnect from "next-connect";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

let filename = uuidv4() + "-" + new Date().getTime();
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads", // destination folder
    filename: (req, file, cb) => cb(null, getFileName(file)),
  }),
});

const getFileName = (file) => {
  filename +=
    "." +
    file.originalname.substring(
      file.originalname.lastIndexOf(".") + 1,
      file.originalname.length
    );
  return filename;
};
const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("file")); // attribute name you are sending the file by

apiRoute.post((req, res) => {
  res.status(200).json({ data: `/uploads/profiles/${filename}` }); // response
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
*/
/*
export async function POST(request) {
  //console.log("ddddddd")
  const data = await request.formData();
  const file = await data.get("file");

  if (!file) {
    return NextApiResponse.json({ success: true });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = joint("/", "tmp", file.name);
  await writeFile(path, buffer);
  //console.log(`File: ${file.name}`);
  return NextApiResponse.json({ success: true });
}
export async function GET() {
  //console.log("ddddddd")
  return NextApiResponse.json({ success: true });
}*/
