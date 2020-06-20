import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

// export async function s3Delete(key, userToken){
//   await getAwsCredentials(userToken);
  
//   const s3 = new AWS.S3({
//     params: {
//       Bucket: config.s3.BUCKET,
//     }
//   });

//   return s3.deleteObject({
//     Key: key,
//   }).promise();
// }