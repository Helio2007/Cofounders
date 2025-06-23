import { NextResponse } from 'next/server';
import { join } from 'path';
import { createReadStream } from 'fs';
import { stat } from 'fs/promises';
import archiver from 'archiver';
import { Readable } from 'stream';

export async function GET() {
  try {
    // Create a new archive
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    // Path to your legal documents folder
    const docsPath = 'C:/Users/User/OneDrive/Desktop/dokumentat_ligjore';

    // Add the entire folder to the archive
    archive.directory(docsPath, false);

    // Finalize the archive
    archive.finalize();

    // Convert archive to buffer
    const chunks: Buffer[] = [];
    archive.on('data', (chunk: Buffer) => chunks.push(chunk));
    
    const buffer = await new Promise<Buffer>((resolve, reject) => {
      archive.on('end', () => resolve(Buffer.concat(chunks)));
      archive.on('error', reject);
    });

    // Return the zip file
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename=Legal_Documents.zip'
      }
    });
  } catch (error) {
    console.error('Error creating zip file:', error);
    return new NextResponse('Error creating zip file', { status: 500 });
  }
} 