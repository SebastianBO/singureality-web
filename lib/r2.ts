import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3'

// R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID!
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID!
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY!
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'lician'
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL || 'https://pub-fb67b38c631d4a0481ebc88165997320.r2.dev'

// Folder prefix for singularity uploads
const R2_FOLDER = 'singularity/'

// Create S3 client configured for Cloudflare R2
export const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
})

/**
 * Upload a file to R2
 */
export async function r2Put(
  key: string,
  body: Buffer | Uint8Array | Blob | string,
  options?: {
    contentType?: string
    metadata?: Record<string, string>
  }
): Promise<{ url: string; pathname: string }> {
  const fullKey = `${R2_FOLDER}${key}`

  await r2Client.send(new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: fullKey,
    Body: body,
    ContentType: options?.contentType,
    Metadata: options?.metadata,
  }))

  return {
    url: `${R2_PUBLIC_URL}/${fullKey}`,
    pathname: fullKey,
  }
}

/**
 * Delete a file from R2
 */
export async function r2Del(key: string): Promise<void> {
  const fullKey = key.startsWith(R2_FOLDER) ? key : `${R2_FOLDER}${key}`

  await r2Client.send(new DeleteObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: fullKey,
  }))
}

/**
 * List files in R2
 */
export async function r2List(options?: {
  prefix?: string
}): Promise<{
  blobs: Array<{
    url: string
    key: string
  }>
}> {
  const prefix = options?.prefix ? `${R2_FOLDER}${options.prefix}` : R2_FOLDER

  const response = await r2Client.send(new ListObjectsV2Command({
    Bucket: R2_BUCKET_NAME,
    Prefix: prefix,
  }))

  const blobs = (response.Contents || []).map(item => ({
    url: `${R2_PUBLIC_URL}/${item.Key}`,
    key: item.Key!,
  }))

  return { blobs }
}

/**
 * Get object content from R2
 */
export async function r2Get(key: string): Promise<string | null> {
  const fullKey = key.startsWith(R2_FOLDER) ? key : `${R2_FOLDER}${key}`

  try {
    const response = await r2Client.send(new GetObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: fullKey,
    }))

    if (response.Body) {
      return await response.Body.transformToString()
    }
    return null
  } catch (error: any) {
    if (error.name === 'NoSuchKey') {
      return null
    }
    throw error
  }
}

/**
 * Check if R2 is configured
 */
export function isR2Configured(): boolean {
  return !!(R2_ACCOUNT_ID && R2_ACCESS_KEY_ID && R2_SECRET_ACCESS_KEY)
}
