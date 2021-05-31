import { S3 } from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3();

export async function getUploadUrl(event) {
  const { extension, contentType } = event;

  const extensionNormalized = extension.startsWith(".")
    ? extension.slice(1)
    : extension;

  return s3.getSignedUrl("putObject", {
    Bucket: process.env.BUCKET_NAME,
    Key: `${uuidv4()}.${extensionNormalized}`,
    ContentType: contentType,
  });
}
